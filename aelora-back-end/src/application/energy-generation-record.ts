import { EnergyGenerationRecord } from "../infrastructure/entities/EnergyGenerationRecord";
import { Request, Response,NextFunction } from "express";

// Get all energy generation records for a specific solar unit
export const getAllEnergyGenerationRecordsBySolarUnitId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;   // solarUnitId
    const { groupBy } = req.query;  // e.g., "date"

    // If no grouping, return all records
    if (!groupBy) {
      const energyGenerationRecords = await EnergyGenerationRecord.find({
        solarUnitId: id,
      }).sort({ timestamp: -1 });   // Sort by timestamp descending
      res.status(200).json(energyGenerationRecords);
    }

    // Group by date
    if (groupBy === "date") {
      const energyGenerationRecords = await EnergyGenerationRecord.aggregate([
        {
          $group: {
            _id: {
              date: {
                $dateToString: { format: "%Y-%m-%d", date: "$timestamp" },  // Group by date only
              },
            },
            totalEnergy: { $sum: "$energyGenerated" },   // Sum energy generated for the day
          },
        },
        {
          $sort: { "_id.date": -1 },   // Sort by date descending
        },
      ]);
      res.status(200).json(energyGenerationRecords);
    }
  } catch (error) {
    next(error);
  }
};