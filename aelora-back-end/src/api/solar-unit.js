import express from 'express';
import { 
    getAllSolarUnits, 
    createSolarUnit, 
    getSolarUnitById,
    updateSolarUnit,
    deleteSolarUnit
 } from '../application/solar-unit.js';

const solarUnitRoutes = express.Router();

solarUnitRoutes.route("/").get(getAllSolarUnits).post(createSolarUnit);
solarUnitRoutes.route("/:id").get(getSolarUnitById).put(updateSolarUnit).delete(deleteSolarUnit);

export default solarUnitRoutes;

