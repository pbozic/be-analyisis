import type { ElectronicDevice } from './ElectronicDevice.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type DeviceAssignment = {
	device_assignment_id: string;
	driver_id: string;
	business_premise_id: string;
	electronic_device_id: string;
	valid_from: string;
	valid_to?: string | null;
	device: ElectronicDevice;
	created_at: string;
};
