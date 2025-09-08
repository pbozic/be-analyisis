import prisma from '../prisma/prisma.js';

const getAllPromoAnalyticsForPeriod = async (businessId: string, start: Date, end: Date) => {
	return await prisma.promoAnalytics.findMany({
		where: {
			business_id: businessId,
			created_at: {
				gte: start,
				lte: end,
			},
		},
		include: { order: true },
	});
};
const getPromoAnalyticsForPeriodByPromoType = async (businessId: string, start: Date, end: Date, promoType: string) => {
	return await prisma.promoAnalytics.findMany({
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
};
export { getPromoAnalyticsForPeriodByPromoType, getAllPromoAnalyticsForPeriod };
export default {
	getPromoAnalyticsForPeriodByPromoType,
	getAllPromoAnalyticsForPeriod,
};
