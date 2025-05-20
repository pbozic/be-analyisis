import { z } from 'zod';

export const VEHICLE_CLASSSchema = z.enum(['SEDAN','CARAVAN','SUV','MINIVAN','VAN','MINIBUS','BUS','CARGO_VAN','PRIVATE_DRIVER']);

export type VEHICLE_CLASSType = `${z.infer<typeof VEHICLE_CLASSSchema>}`

export default VEHICLE_CLASSSchema;
