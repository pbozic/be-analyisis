import { AddressResponseSchema } from '../../../types/addresses/Address.js';
import type { AddressResponse } from '../../../types/addresses/Address.js';
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

export function toAddressesList(rows: AddressDefaultPrisma[]): AddressResponse[] {
    return rows.map((r) => toAddressResponse(r));
}

export default { toAddressResponse, toAddressesList };
