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
        const { serialNumber, installationDate, capacity, status } = req.body;

    const newSolarUnit = {
        serialNumber,
        installationDate,
        capacity,
        status,
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
    const { id } = req.params;
    const {serialNumber, installationDate, capacity, status } = req.body;
    const solarUnit = await SolarUnit.findById(id);

    if (!solarUnit) {
        return res.status(404).json({ message: "Solar Unit not found" });
    }

    const updatedSolarUnit = await SolarUnit.findByIdAndUpdate(id, { 
        serialNumber, 
        installationDate, 
        capacity, 
        status 
    },);

    res.status(200).json(updatedSolarUnit);
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
