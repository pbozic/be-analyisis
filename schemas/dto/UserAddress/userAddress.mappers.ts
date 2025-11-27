import { UserAddressResponseSchema } from '../UserAddress';
import type { UserAddressResponse } from '../UserAddress';
import type { UserAddressDefaultPrisma } from '../../../prisma/includes/userAddress.js';
import { toAddressResponse } from '../Address/address.mappers.js';

export function toUserAddressResponse(row: UserAddressDefaultPrisma): UserAddressResponse {
	const dto = {
		user_id: row.user_id,
		address_id: row.address_id,
		primary: row.primary,
		details: row.details,
		type: row.type,
		address: toAddressResponse(row.address),
	};

	return UserAddressResponseSchema.parse(dto);
}

export default { toUserAddressResponse };
