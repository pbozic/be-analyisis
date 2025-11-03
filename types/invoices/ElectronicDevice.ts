// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { device_assignment, invoice } from '@prisma/client';

import type { BusinessPremise } from '../invoices/BusinessPremise.js';

export type ElectronicDevice = {
	business_premise_id: string;
	electronic_device_id: string;
	name?: string | null;
	active: boolean;
	business_premise: BusinessPremise;
	invoices: invoice[];
	assignments: device_assignment[];
	created_at: string;
	updated_at: string;
};
