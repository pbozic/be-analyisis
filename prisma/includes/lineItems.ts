import { Prisma } from '@prisma/client';

export const lineItemsDefaultInclude = Prisma.validator<Prisma.line_itemsInclude>()({
	sides: true,
	extras: true,
	replacement: true,
	replaces: true,
});

export type LineItemsWithIncludesPrisma = Prisma.line_itemsGetPayload<{ include: typeof lineItemsDefaultInclude }>;

export default lineItemsDefaultInclude;
