// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { PREMISE_TYPE, electronic_device, invoice, transport_module, vehicles } from '@prisma/client';

export type BusinessPremise = {
	business_premise_id: string;
	transport_module_id: string;
	name?: string | null;
	premise_type: PREMISE_TYPE;
	validity_date?: string | null;
	special_notes?: string | null;
	is_registered: boolean;
	registered_at?: string | null;
	transport_module: transport_module;
	vehicle?: vehicles | null;
	devices: electronic_device[];
	invoices: invoice[];
	created_at: string;
	updated_at: string;
};
