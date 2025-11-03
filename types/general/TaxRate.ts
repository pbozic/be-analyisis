// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { MenuItem } from '../menuItems/MenuItem.js';
import type { Service } from '../reservation/Service.js';

export type TaxRate = {
	tax_rates_id: string;
	name: string;
	description?: string | null;
	country?: string | null;
	rate: number;
	active: boolean;
	valid_from: string;
	created_at: string;
	updated_at: string;
	activated_at?: string | null;
	menu_items: MenuItem[];
	service: Service[];
};
