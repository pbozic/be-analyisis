import { AddressResponseSchema, AddressResponse } from './address.ts';
import type { AddressDefaultPrisma } from '../../../prisma/includes/address.js';

export function toAddressResponse(row: AddressDefaultPrisma): AddressResponse {
	const dto = {
		address_id: row.address_id,
		address: row.address,
		latitude: row.latitude,
		longitude: row.longitude,
		street: row.street,
		house_number: row.house_number,
		city: row.city,
		country: row.country,
		postal: row.postal,
	};

	return AddressResponseSchema.parse(dto);
}

export default { toAddressResponse };
