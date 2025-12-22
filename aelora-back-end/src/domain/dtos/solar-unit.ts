//DTO for creating a solar unit 

import { z } from "zod";

export const CreateSolarUnitDto = z.object({
    serialNumber: z.string().min(1),
    installationDate: z.string().min(1),
    capacity: z.number(),
    status: z.enum(['Active', 'Inactive', 'Maintenance']),
    userId: z.string().min(1),
});

/*DTO (Data Transfer Object)

DTO is a design pattern used to transfer data between layers of an application (for example: frontend → backend, controller → service).
-Why DTOs are used
    ->To define exactly what data is allowed
    ->To validate input/output
    ->To prevent exposing internal database models
    ->To keep code clean and predictable */

/*Zod Schema

Zod is a TypeScript-first validation library used to validate runtime data and infer types automatically.
-Why Zod is used
    ->Validates data at runtime (important for APIs)
    ->Prevents invalid data from entering your system
    ->Eliminates duplicate types (schema = validation + type) */



