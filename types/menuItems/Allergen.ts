import type { MenuItem } from './MenuItem.js';
import type { User } from '../users/User.js';
import type { AllergensToMenuItem } from './AllergensToMenuItem.js';
import type { UserAllergen } from '../users/UserAllergen.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Allergen = {
	allergen_id: string;
	name: string;
	description?: string | null;
	code: number;
	allergens_to_menu_items: AllergensToMenuItem[];
	users: UserAllergen[];
};
