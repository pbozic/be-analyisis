// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { Driver } from '../drivers/Driver.js';
import type { Municipality } from './Municipality.js';

export type DriverMunicipality = {
	driver_municipalities_id: string;
	driver_id: string;
	municipalities_id: string;
	created_at: string;
	updated_at: string;
	drivers: Driver;
	municipalities: Municipality;
};
