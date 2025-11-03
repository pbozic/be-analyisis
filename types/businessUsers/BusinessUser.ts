// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { COMPANY_ROLE, addresses, allowances, taxi_orders } from '@prisma/client';

import type { User } from '../users/User.js';
import type { Busines } from '../business/Busines.js';
import type { Employee } from '../reservation/Employee.js';

export type BusinessUser = {
	business_users_id: string;
	online?: boolean | null;
	company_role: COMPANY_ROLE;
	created_at: string;
	updated_at: string;
	user_id: string;
	users?: User | null;
	business_id: string;
	business?: Busines | null;
	operating_address_id?: string | null;
	operating_address?: addresses | null;
	allowance?: allowances | null;
	taxi_orders: taxi_orders[];
	employee?: Employee | null;
};
