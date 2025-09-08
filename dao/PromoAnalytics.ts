import { promo_analytics } from '@prisma/client';

import prisma from '../prisma/prisma.js';

async function getAllPromoAnalyticsForPeriod(businessId: string, start: Date, end: Date): Promise<promo_analytics[]> {
	return await prisma.promo_analytics.findMany({
		where: {
			business_id: businessId,
			created_at: {
				gte: start,
				lte: end,
			},
		},
		include: { order: true },
	});
}
async function getPromoAnalyticsForPeriodByPromoType(
	businessId: string,
	start: Date,
	end: Date,
	promoType: string
): Promise<promo_analytics[]> {
	return await prisma.promo_analytics.findMany({
		where: {
			business_id: businessId,
			created_at: {
				gte: start,
				lte: end,
			},
			promo_type: promoType,
		},
		include: { order: true },
	});
}
export { getPromoAnalyticsForPeriodByPromoType, getAllPromoAnalyticsForPeriod };
export default {
	getPromoAnalyticsForPeriodByPromoType,
	getAllPromoAnalyticsForPeriod,
};
