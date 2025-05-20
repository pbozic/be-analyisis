import { z } from 'zod';

export const VEHICLE_CATEGORYSchema = z.enum(['STANDARD', 'PREMIUM']);

export type VEHICLE_CATEGORYType = `${z.infer<typeof VEHICLE_CATEGORYSchema>}`;

export default VEHICLE_CATEGORYSchema;
