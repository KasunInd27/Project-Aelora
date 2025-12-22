import { CreateSolarUnitDto } from "../domain/dtos/solar-unit";
import { UpdateSolarUnitDto } from "../domain/dtos/solar-unit";
import { SolarUnit } from "../infrastructure/entities/SolarUnit";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { NotFoundError, ValidationError } from "../domain/errors/errors";

export const getAllSolarUnits = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const solarUnits = await SolarUnit.find();
        res.status(200).json(solarUnits);
    }
    catch (error) {
        next(error);
    }
};

export const createSolarUnitValidator = (req: Request, res: Response, next: Function) => {
    const result = CreateSolarUnitDto.safeParse(req.body);
    if (!result.success) {
        throw new ValidationError(result.error.message);
    }
    next();
};

export const createSolarUnit = async (req: Request, res: Response, next: NextFunction) => {
    try {
        /*const result= CreateSolarUnitDto.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({ message: "Invalid data", errors: result.error.message });
        }*/

        //TODO: Implement protection with actual auth handlers
        //const userId = "test_user_123";

        const data: z.infer<typeof CreateSolarUnitDto> = req.body;

        const newSolarUnit = {
            serialNumber: data.serialNumber,
            installationDate: new Date(data.installationDate),
            capacity: data.capacity,
            status: data.status,
            userId: data.userId,
        };

    const createdSolarUnit = await SolarUnit.create(newSolarUnit);
    res.status(201).json(createdSolarUnit);

    } catch (error) {
        next(error);
    }
};

export const getSolarUnitById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const solarUnit = await SolarUnit.findById(id);

        if (!solarUnit) {
            throw new NotFoundError("Solar Unit not found");
        }
        res.status(200).json(solarUnit);
    } catch (error) {
        next(error);
    }   
};

export const updateSolarUnit = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const result = UpdateSolarUnitDto.safeParse(req.body);
        if (!result.success) {
            throw new ValidationError(result.error.message);
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
            throw new NotFoundError("Solar Unit not found");
        }

        res.status(200).json(updatedSolarUnit);
    } catch (error) {
        next(error);
    }
};


export const deleteSolarUnit = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const solarUnit = await SolarUnit.findById(id);

        if (!solarUnit) {
            throw new NotFoundError("Solar Unit not found");
        }

        await SolarUnit.findByIdAndDelete(id);
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
};
