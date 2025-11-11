import { Prisma } from '@prisma/client';

export const promoAnalyticsDefaultInclude = Prisma.validator<Prisma.promo_analyticsInclude>()({
	order: { select: { order_id: true } },
});

export type PromoAnalyticsWithIncludesPrisma = Prisma.promo_analyticsGetPayload<{
	include: typeof promoAnalyticsDefaultInclude;
}>;

export default promoAnalyticsDefaultInclude;
