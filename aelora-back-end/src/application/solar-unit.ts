import { CreateSolarUnitDto } from "../domain/dtos/solar-unit";
import { UpdateSolarUnitDto } from "../domain/dtos/solar-unit";
import { SolarUnit } from "../infrastructure/entities/SolarUnit";
import { Request, Response } from "express";

export const getAllSolarUnits = async (req: Request, res: Response) => {
    try {
        const solarUnits = await SolarUnit.find();
        res.status(200).json(solarUnits);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving solar units", error });
    }
};

export const createSolarUnit = async (req: Request, res: Response) => {
    try {
        const result= CreateSolarUnitDto.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({ message: "Invalid data", errors: result.error.message });
        }

        //TODO: Implement protection with actual auth handlers
        const userId = "test_user_123";

        const newSolarUnit = {
            serialNumber: result.data.serialNumber,
            installationDate: new Date(result.data.installationDate),
            capacity: result.data.capacity,
            status: result.data.status,
            userId: result.data.userId,
        };

    const createdSolarUnit = await SolarUnit.create(newSolarUnit);
    res.status(201).json(createdSolarUnit);

    } catch (error) {
        res.status(500).json({ message: "Error creating solar unit", error });
    }
};

export const getSolarUnitById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const solarUnit = await SolarUnit.findById(id);

        if (!solarUnit) {
            return res.status(404).json({ message: "Solar Unit not found" });
        }
        res.status(200).json(solarUnit);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving solar unit", error });
    }   
};

export const updateSolarUnit = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const result = UpdateSolarUnitDto.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({
                message: "Invalid data",
                errors: result.error.flatten(),
            });
        }

        const updatedData = {
            ...result.data,
            ...(result.data.installationDate && {
                installationDate: new Date(result.data.installationDate),
            }),
        };

        const updatedSolarUnit = await SolarUnit.findByIdAndUpdate(
            id,
            updatedData,
            { new: true }
        );

        if (!updatedSolarUnit) {
            return res.status(404).json({ message: "Solar Unit not found" });
        }

        res.status(200).json(updatedSolarUnit);
    } catch (error) {
        res.status(500).json({ message: "Error updating solar unit", error });
    }
};


export const deleteSolarUnit = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const solarUnit = await SolarUnit.findById(id);

        if (!solarUnit) {
            return res.status(404).json({ message: "Solar Unit not found" });
        }

        await SolarUnit.findByIdAndDelete(id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting solar unit", error });
    }
};
