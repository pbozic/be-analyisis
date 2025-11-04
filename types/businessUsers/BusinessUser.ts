import { COMPANY_ROLE } from '@prisma/client';

import type { User } from '../users/User.js';
import type { Business } from '../business/Business.js';
import type { Address } from '../addresses/Address.js';
import type { Allowance } from '../familyUsers/Allowance.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { Employee } from '../reservations/Employee.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type BusinessUser = {
	business_users_id: string;
	online?: boolean | null;
	company_role: COMPANY_ROLE;
	created_at: string;
	updated_at: string;
	user_id: string;
	users?: User | null;
	business_id: string;
	business?: Business | null;
	operating_address_id?: string | null;
	operating_address?: Address | null;
	allowance?: Allowance | null;
	taxi_orders: TaxiOrder[];
	employee?: Employee | null;
};
