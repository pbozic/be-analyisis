import type { Addon } from './Addon.js';
import type { ReservationModule } from '../reservations/ReservationModule.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type BusinessAddon = {
	business_addon_id: string;
	addon_id: string;
	reservation_module_id?: string | null;
	sms_module_id?: string | null;
	ads_module_id?: string | null;
	quantity: number;
	addon: Addon;
	reservation_module?: ReservationModule | null;
};
