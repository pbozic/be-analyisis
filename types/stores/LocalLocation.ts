// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

import type { Address } from '../addresses/Address.js';
import type { BusinessLocalLocation } from './BusinessLocalLocation.js';

export type LocalLocation = {
	local_location_id: string;
	address_id: string;
	created_at: Date;
	updated_at: Date;
	address: Address;
	business_local_locations: BusinessLocalLocation[];
};
