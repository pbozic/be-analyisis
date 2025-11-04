import { ADDRESS_TYPE } from '@prisma/client';

import type { User } from './User.js';
import type { Address } from '../addresses/Address.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type UserAddress = {
	user_id: string;
	address_id: string;
	primary: boolean;
	details?: unknown | null;
	type: ADDRESS_TYPE;
	users: User;
	address: Address;
};
