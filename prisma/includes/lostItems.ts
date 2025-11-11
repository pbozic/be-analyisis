import { Prisma } from '@prisma/client';

export const lostItemsDefaultInclude = Prisma.validator<Prisma.lost_itemsInclude>()({
    image: true,
    user: true,
});

export type LostItemsWithIncludesPrisma = Prisma.lost_itemsGetPayload<{ include: typeof lostItemsDefaultInclude }>;

export default lostItemsDefaultInclude;
