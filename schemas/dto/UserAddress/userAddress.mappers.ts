import { UserAddressResponseSchema } from '../UserAddress';
import type { UserAddressResponse } from '../UserAddress';
import type { UserAddressDefaultPrisma } from '../../../prisma/includes/userAddress.js';

export function toUserAddressResponse(row: UserAddressDefaultPrisma): UserAddressResponse {
	const dto = {
		user_id: row.user_id,
		address_id: row.address_id,
		primary: row.primary,
		details: row.details,
		type: row.type,
		// relations may be included by DAO callers; keep them as-is if present
		address: (row as any).address,
	};

	return UserAddressResponseSchema.parse(dto);
}

export default { toUserAddressResponse };
