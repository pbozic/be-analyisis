// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { VEHICLE_CATEGORY, VEHICLE_CLASS } from '@prisma/client';

import type { Vehicle } from '../vehicles/Vehicle.js';

export type VehicleSpecification = {
	vehicle_specification_id: string;
	class: VEHICLE_CLASS;
	category: VEHICLE_CATEGORY;
	people: string;
	start_cost: string;
	per_kilometre: string;
	per_minute: string;
	vehicle_id?: string | null;
	vehicle?: Vehicle | null;
};
