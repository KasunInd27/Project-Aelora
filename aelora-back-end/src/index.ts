import 'dotenv/config';   // Load environment variables from .env file
import express from "express";
import solarUnitRoutes from './api/solar-unit';
import energyGenerationRecordRouter from './api/energy-generation-record';
import { connectDB } from './infrastructure/db';
import { loggerMiddleware } from './api/middlewares/logger-middleware';
import { globalErrorHandler } from './api/middlewares/global-error-handling-middleware';
import cors from 'cors';  // Import CORS middleware

// Initialize Express server
const server = express();

// Middleware to parse JSON requests
server.use(express.json());

// Enable CORS for specific origin
server.use(cors({origin: "http://localhost:5173"}));

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
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


/* Identify the resources
  -Solar Unit
  -Energy Generation Records
  -Users (Admin, Technicians, Viewers)
  -House
*/ 
