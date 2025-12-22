import mongoose from "mongoose";
//import { energyGenerationRecordSchema } from "./EnergyGenerationRecord.js";

const solarUnitSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true,
    },
    serialNumber: { 
        type: String, 
        required: true, 
        unique: true 
    },
    //energyGenerationRecords: [energyGenerationRecordSchema],
    installationDate: { 
        type: Date, 
        required: true 
    },
    capacity: { 
        type: Number, 
        required: true,
    },
    // energyGenerationRecords: {
    //     type: [mongoose.Schema.Types.ObjectId], 
    //     ref: "EnergyGenerationRecord",
    // },
    status: { 
        type: String, 
        required: true,
        enum: ['Active', 'Inactive', 'Maintenance'],     
    },
    
});

export const SolarUnit = mongoose.model('SolarUnit', solarUnitSchema);



