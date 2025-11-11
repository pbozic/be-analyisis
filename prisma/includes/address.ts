import { Prisma } from '@prisma/client';

export const addressDefaultSelect = {
    address_id: true,
    address: true,
    latitude: true,
    longitude: true,
    street: true,
    house_number: true,
    city: true,
    country: true,
    postal: true,
} as const;

export type AddressDefaultPrisma = Prisma.addressesGetPayload<{
    select: typeof addressDefaultSelect;
}>;

export default addressDefaultSelect;
