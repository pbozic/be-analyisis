import { Prisma } from '@prisma/client';

export const localLocationsDefaultInclude = Prisma.validator<Prisma.local_locationsInclude>()({
    address: true,
});

export type LocalLocationsWithIncludesPrisma = Prisma.local_locationsGetPayload<{ include: typeof localLocationsDefaultInclude }>;

export const businessLocalLocationsDefaultInclude = Prisma.validator<Prisma.business_local_locationsInclude>()({
    local_location: { include: { address: true } },
    // include orders with details so DAO can update their scheduled times
    orders: { select: { order_id: true, details: true, scheduled_at: true } },
});

export type BusinessLocalLocationsWithIncludesPrisma = Prisma.business_local_locationsGetPayload<{ include: typeof businessLocalLocationsDefaultInclude }>;

export default localLocationsDefaultInclude;
