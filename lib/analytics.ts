import { PROMO_TYPE, ANALYTICS_TYPE } from '@prisma/client';

import prisma from '../prisma/prisma.js';

// Minutes to suppress duplicate analytics entries with the same fingerprint (set >0 to enable later)
const PROMO_ANALYTICS_RATE_LIMIT_MINUTES = 0; // disabled per spec (log every impression)

interface LogPromoAnalyticsParams {
	searchQuery?: string;
	wordIds?: string[];
	promo_sections_id?: string;
	promo_ads_id?: string;
	business_id: string;
	user_id?: string;
	order_id?: string;
	promo_type: PROMO_TYPE;
	analytics_type: ANALYTICS_TYPE;
}

interface PromoAnalyticsRowInput {
	promo_ads_id?: string;
	promo_sections_id?: string;
	word_id?: string;
	order_id?: string;
	business_id: string;
	user_id?: string;
	promo_type: PROMO_TYPE;
	type: ANALYTICS_TYPE;
}

async function createPromoAnalyticsEntries(rows: PromoAnalyticsRowInput[]) {
	if (!rows.length) return { created: 0 };
	const data = rows.map((r) => ({
		promo_ads_id: r.promo_ads_id ?? undefined,
		promo_sections_id: r.promo_sections_id ?? undefined,
		word_id: r.word_id ?? undefined,
		order_id: r.order_id ?? undefined,
		business_id: r.business_id,
		user_id: r.user_id ?? undefined,
		promo_type: r.promo_type,
		type: r.type,
	}));
	const result = await prisma.promo_analytics.createMany({ data });
	return { created: result.count };
}

// (Optional) duplicate suppression fingerprint builder (currently inactive)
async function isDuplicate(_row: PromoAnalyticsRowInput): Promise<boolean> {
	if (PROMO_ANALYTICS_RATE_LIMIT_MINUTES <= 0) return false;
	const since = new Date(Date.now() - PROMO_ANALYTICS_RATE_LIMIT_MINUTES * 60 * 1000);
	return !!(await prisma.promo_analytics.findFirst({
		where: {
			business_id: _row.business_id,
			user_id: _row.user_id,
			promo_type: _row.promo_type,
			// type: _row.type,
			// promo_ads_id: _row.promo_ads_id,
			// promo_sections_id: _row.promo_sections_id,
			// word_id: _row.word_id,
			// order_id: _row.order_id,
			created_at: { gte: since },
		},
	}));
}

/**
 * General-purpose promo analytics logger.
 * Resolves purchasable word IDs from search query (or uses explicit wordIds) and logs one row per word.
 * All required schema fields must be provided (business_id, promo_type, type).
 * If any required field is missing the corresponding row is skipped.
 * Rate limiting scaffold present (disabled while constant = 0).
 *
 * @param {Object} params
 * @param {string} [params.searchQuery]
 * @param {string[]} [params.wordIds]
 * @param {string} params.promo_sections_id
 * @param {string} params.promo_ads_id
 * @param {string} params.business_id
 * @param {string} params.user_id
 * @param {string} params.order_id
 * @param {PROMO_TYPE} params.promo_type
 * @param {ANALYTICS_TYPE} params.analytics_type
 * @returns {Promise<{created:number, skipped:number, details:Array<{word_id?:string, reason:string}>}>}
 */
export async function logPromoAnalytics(params: LogPromoAnalyticsParams) {
	const {
		wordIds: explicitWordIds,
		promo_sections_id,
		promo_ads_id,
		business_id,
		user_id,
		order_id,
		promo_type,
		analytics_type,
	} = params || {};

	if (!business_id || !promo_type || !analytics_type) {
		return {
			created: 0,
			skipped: 1,
			details: [{ reason: 'Missing core identifiers (business_id, user_id, promo_type, analytics_type).' }],
		};
	}
	console.log('PROMO ANALYTICS LOG', business_id, promo_type, analytics_type);
	if (promo_type === PROMO_TYPE.WORD) {
		let wordIds = Array.isArray(explicitWordIds) ? [...explicitWordIds] : [];
		if (!wordIds.length) return { created: 0, skipped: 1, details: [{ reason: 'No word IDs found.' }] };

		const rows: PromoAnalyticsRowInput[] = [];
		const details: Array<{ word_id?: string; reason: string }> = [];
		for (const word_id of wordIds) {
			const wordBuy = await prisma.word_buy.findFirst({
				where: {
					word_id,
					business_id,
				},
			});
			if (!wordBuy) continue;

			const row: PromoAnalyticsRowInput = {
				promo_ads_id,
				promo_sections_id,
				word_id,
				order_id,
				business_id,
				user_id,
				promo_type,
				type: analytics_type,
			};
			if (await isDuplicate(row)) {
				details.push({ word_id, reason: 'Duplicate within rate-limit window. Skipped.' });
				continue;
			}
			rows.push(row);
		}
		if (!rows.length) return { created: 0, skipped: details.length || 1, details };
		const { created } = await createPromoAnalyticsEntries(rows);
		return { created, skipped: details.length, details };
	} else if (promo_type === PROMO_TYPE.SECTION) {
		const row: PromoAnalyticsRowInput = {
			promo_sections_id,
			promo_ads_id,
			business_id,
			user_id,
			order_id,
			promo_type,
			type: analytics_type,
		};
		if (await isDuplicate(row)) {
			return { created: 0, skipped: 1, details: [{ reason: 'Duplicate within rate-limit window. Skipped.' }] };
		}
		const { created } = await createPromoAnalyticsEntries([row]);
		return { created, skipped: 0, details: [] };
	} else if (promo_type === PROMO_TYPE.AD) {
		const row: PromoAnalyticsRowInput = {
			promo_ads_id,
			promo_sections_id,
			business_id,
			user_id,
			order_id,
			promo_type,
			type: analytics_type,
		};
		if (await isDuplicate(row)) {
			return { created: 0, skipped: 1, details: [{ reason: 'Duplicate within rate-limit window. Skipped.' }] };
		}
		const { created } = await createPromoAnalyticsEntries([row]);
		return { created, skipped: 0, details: [] };
	} else {
		return {
			created: 0,
			skipped: 1,
			details: [{ reason: 'Unsupported promo_type: ' + promo_type }],
		};
	}
}
