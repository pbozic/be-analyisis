import { z } from 'zod';

export const Vehicle_driversScalarFieldEnumSchema = z.enum([
	'vehicle_drivers_id',
	'vehicle_id',
	'driver_id',
	'can_drive',
	'created_at',
	'updated_at',
]);

export default Vehicle_driversScalarFieldEnumSchema;
