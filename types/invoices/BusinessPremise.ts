import { PREMISE_TYPE } from '@prisma/client';

import type { TransportModule } from '../transport/TransportModule.js';
import type { Vehicle } from '../vehicles/Vehicle.js';
import type { ElectronicDevice } from './ElectronicDevice.js';
import type { Invoice } from './Invoice.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type BusinessPremise = {
	business_premise_id: string;
	transport_module_id: string;
	name?: string | null;
	premise_type: PREMISE_TYPE;
	validity_date?: string | null;
	special_notes?: string | null;
	is_registered: boolean;
	registered_at?: string | null;
	transport_module: TransportModule;
	vehicle?: Vehicle | null;
	devices: ElectronicDevice[];
	invoices: Invoice[];
	created_at: string;
	updated_at: string;
};
