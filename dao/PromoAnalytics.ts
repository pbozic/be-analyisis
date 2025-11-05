import { PromoAnalyticsDetail } from '../schemas/dto/PromoAnalytics/promo-analytics.dto.js';
import prisma from '../prisma/prisma.js';
/**
 * Get all promo analytics for a specific period.
 *
 * @param {string} businessId - The ID of the business.
 * @param {Date} start - The start date of the period.
 * @param {Date} end - The end date of the period.
 * @returns {Promise<PromoAnalyticsDetail[]>} - The promo analytics for the specified period.
 */
async function getAllPromoAnalyticsForPeriod(
	businessId: string,
	start: Date,
	end: Date
): Promise<PromoAnalyticsDetail[]> {
	return await prisma.promo_analytics.findMany({
		where: {
			business_id: businessId,
			created_at: {
				gte: start,
				lte: end,
			},
		},
		include: { order: { select: { order_id: true } } },
	});
}
/**
 * Get promo analytics for a specific period filtered by promo type and optional IDs.
 *
 * @param {string} businessId - The ID of the business.
 * @param {Date} start - The start date of the period.
 * @param {Date} end - The end date of the period.
 * @param {string} promoType - The type of the promo.
 * @param {string[]} wordIds - The IDs of the words to filter by.
 * @param {string[]} sectionIds - The IDs of the sections to filter by.
 * @param {string[]} adIds - The IDs of the ads to filter by.
 * @returns {Promise<PromoAnalyticsDetail[]>} - The filtered promo analytics.
 */
async function getPromoAnalyticsForPeriodByPromoType(
	businessId: string,
	start: Date,
	end: Date,
	promoType: string,
	wordIds?: string[],
	sectionIds?: string[],
	adIds?: string[]
): Promise<PromoAnalyticsDetail[]> {
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
		include: { order: { select: { order_id: true } } },
	});
}
export { getPromoAnalyticsForPeriodByPromoType, getAllPromoAnalyticsForPeriod };
export default {
	getPromoAnalyticsForPeriodByPromoType,
	getAllPromoAnalyticsForPeriod,
};
