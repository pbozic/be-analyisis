import { Prisma } from '@prisma/client';

export const cashbackOrdersInclude = Prisma.validator<Prisma.cashbackInclude>()({
	taxi_order: true,
	delivery_order: true,
});

export type CashbackWithOrdersPrisma = Prisma.cashbackGetPayload<{
	include: typeof cashbackOrdersInclude;
}>;

export type CashbackDefaultPrisma = Prisma.cashbackGetPayload<Record<string, never>>;

export default cashbackOrdersInclude;
