// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { MenuItem } from '../menuItems/MenuItem.js';
import type { User } from '../users/User.js';

export type Allergen = {
	allergen_id: string;
	name: string;
	description?: string | null;
	code: number;
	allergens_to_menu_items: MenuItem[];
	users: User[];
};
