import 'dotenv/config';
import express from "express";
import solarUnitRoutes from './api/solar-unit.js';
import energyGenerationRecordRouter from './api/energy-generation-record.js';
import { connectDB } from './infrastructure/db.js';

const server = express();
server.use(express.json());

server.use("/api/solar-units", solarUnitRoutes);
server.use("/api/energy-generation-records", energyGenerationRecordRouter);

connectDB();

const PORT = 8002;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


/* Identify the resources
  -Solar Unit
  -Energy Generation Records
  -Users (Admin, Technicians, Viewers)
  -House
*/ 
