import { VEHICLE_CATEGORY, VEHICLE_CLASS } from '@prisma/client';

import type { Vehicle } from './Vehicle.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

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
