// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { Vehicle } from '../vehicles/Vehicle.js';
import type { Driver } from './Driver.js';

export type VehicleDriver = {
	vehicle_drivers_id: string;
	vehicle_id: string;
	driver_id: string;
	can_drive: boolean;
	created_at: Date;
	updated_at: Date;
	vehicle: Vehicle;
	driver: Driver;
};
