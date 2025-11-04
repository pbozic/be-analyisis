import type { BusinessPremise } from './BusinessPremise.js';
import type { Invoice } from './Invoice.js';
import type { DeviceAssignment } from './DeviceAssignment.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type ElectronicDevice = {
	business_premise_id: string;
	electronic_device_id: string;
	name?: string | null;
	active: boolean;
	business_premise: BusinessPremise;
	invoices: Invoice[];
	assignments: DeviceAssignment[];
	created_at: Date;
	updated_at: Date;
};
