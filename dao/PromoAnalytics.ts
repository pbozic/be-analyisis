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
	promoType: string,
	wordIds?: string[],
	sectionIds?: string[],
	adIds?: string[]
): Promise<promo_analytics[]> {
	return await prisma.promo_analytics.findMany({
		where: {
			business_id: businessId,
			created_at: {
				gte: start,
				lte: end,
			},
			promo_type: promoType,
			promo_sections_id: Array.isArray(sectionIds) && sectionIds.length > 0 ? { in: sectionIds } : undefined,
			promo_ads_id: Array.isArray(adIds) && adIds.length > 0 ? { in: adIds } : undefined,
			word_id: Array.isArray(wordIds) && wordIds.length > 0 ? { in: wordIds } : undefined,
		},
		include: { order: true },
	});
}
export { getPromoAnalyticsForPeriodByPromoType, getAllPromoAnalyticsForPeriod };
export default {
	getPromoAnalyticsForPeriodByPromoType,
	getAllPromoAnalyticsForPeriod,
};
