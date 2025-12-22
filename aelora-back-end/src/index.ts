import 'dotenv/config';
import express from "express";
import solarUnitRoutes from './api/solar-unit';
import energyGenerationRecordRouter from './api/energy-generation-record';
import { connectDB } from './infrastructure/db';
import { loggerMiddleware } from './api/middlewares/logger-middleware';
import { globalErrorHandler } from './api/middlewares/global-error-handling-middleware'; 

// Initialize Express server
const server = express();
server.use(express.json());

// Simple request logger pre-middleware
server.use(loggerMiddleware);

// API Routes
server.use("/api/solar-units", solarUnitRoutes);
server.use("/api/energy-generation-records", energyGenerationRecordRouter);

// Global error handling middleware
server.use(globalErrorHandler);

// Connect to the database
connectDB();

// Start the server
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
