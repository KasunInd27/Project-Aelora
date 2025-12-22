import express from 'express';
import { 
    getAllSolarUnits, 
    createSolarUnit, 
    getSolarUnitById,
    updateSolarUnit,
    deleteSolarUnit,
    createSolarUnitValidator,
 } from "../application/solar-unit";

const solarUnitRoutes = express.Router();

solarUnitRoutes.route("/").get(getAllSolarUnits).post(createSolarUnitValidator, createSolarUnit);
solarUnitRoutes.route("/:id").get(getSolarUnitById).put(updateSolarUnit).delete(deleteSolarUnit);

export default solarUnitRoutes;

