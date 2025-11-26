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

export function toUserAddressRef(row: unknown): UserAddressResponse {
	const r = row as Record<string, any>;
	const dto = {
		address_id: r.address_id,
		primary: r.primary,
		details: r.details,
		type: r.type,
		address: toAddressResponse(r.address),
	};

	return UserAddressResponseSchema.parse(dto);
}

export default { toUserAddressResponse, toUserAddressRef };
