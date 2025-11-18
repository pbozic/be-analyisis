import { PROMO_TYPE } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import {
	LogPromoAnalyticsParamsSchema,
	PromoAnalyticsLogResultSchema,
	PromoAnalyticsRowInputSchema,
	type LogPromoAnalyticsParams,
	type PromoAnalyticsLogResult,
	type PromoAnalyticsRowInput,
} from '../schemas/dto/PromoAnalytics/promo-analytics.dto.ts';

// Minutes to suppress duplicate analytics entries with the same fingerprint (set >0 to enable later)
const PROMO_ANALYTICS_RATE_LIMIT_MINUTES = 0; // disabled per spec (log every impression)

// Interfaces replaced by DTO types (LogPromoAnalyticsParams, PromoAnalyticsRowInput)
/**
 * Creates multiple promo analytics entries in bulk.
 *
 * @param {PromoAnalyticsRowInput[]} rows - The rows to create.
 * @returns {Promise<{ created: number }>} - The result of the creation.
 */
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
		daily_meal_subscription_id: r.daily_meal_subscription_id ?? undefined,
	}));
	const result = await prisma.promo_analytics.createMany({ data });
	return { created: result.count };
}

/**
 * Checks if a similar promo analytics entry has been created within the rate-limit window.
 *
 * @param {PromoAnalyticsRowInput} _row
 * @returns {Promise<boolean>}
 */
async function isDuplicate(_row: PromoAnalyticsRowInput): Promise<boolean> {
	if (PROMO_ANALYTICS_RATE_LIMIT_MINUTES <= 0) return false;
	const since = new Date(Date.now() - PROMO_ANALYTICS_RATE_LIMIT_MINUTES * 60 * 1000);
	return !!(await prisma.promo_analytics.findFirst({
		where: {
			business_id: _row.business_id,
			user_id: _row.user_id,
			promo_type: _row.promo_type,
			promo_ads_id: _row.promo_ads_id,
			promo_sections_id: _row.promo_sections_id,
			word_id: _row.word_id,
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
 * @param {string} params.daily_meal_subscription_id
 * @param {PROMO_TYPE} params.promo_type
 * @param {ANALYTICS_TYPE} params.analytics_type
 * @returns {Promise<{created:number, skipped:number, details:Array<{word_id?:string, reason:string}>}>}
 */
export async function logPromoAnalytics(rawParams: LogPromoAnalyticsParams): Promise<PromoAnalyticsLogResult> {
	// Validate input params via DTO schema
	const params = LogPromoAnalyticsParamsSchema.parse(rawParams);
	const {
		wordIds: explicitWordIds,
		promo_sections_id,
		promo_ads_id,
		business_id,
		user_id,
		promo_type,
		analytics_type,
		order_id,
		daily_meal_subscription_id,
	} = params;

	if (!business_id || !promo_type || !analytics_type) {
		return PromoAnalyticsLogResultSchema.parse({
			created: 0,
			skipped: 1,
			details: [{ reason: 'Missing core identifiers (business_id, promo_type, analytics_type).' }],
		});
	}

	if (promo_type === PROMO_TYPE.WORD) {
		const wordIds = Array.isArray(explicitWordIds) ? [...explicitWordIds] : [];
		if (!wordIds.length)
			return PromoAnalyticsLogResultSchema.parse({
				created: 0,
				skipped: 1,
				details: [{ reason: 'No word IDs found.' }],
			});
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
				daily_meal_subscription_id,
			};
			// Validate row shape (optional, ensures consistency)
			PromoAnalyticsRowInputSchema.parse(row);
			if (await isDuplicate(row)) {
				details.push({ word_id, reason: 'Duplicate within rate-limit window. Skipped.' });
				continue;
			}
			rows.push(row);
		}
		if (!rows.length)
			return PromoAnalyticsLogResultSchema.parse({
				created: 0,
				skipped: details.length || 1,
				details,
			});
		const { created } = await createPromoAnalyticsEntries(rows);
		return PromoAnalyticsLogResultSchema.parse({ created, skipped: details.length, details });
	}

	// Non-WORD promo analytics single row
	const singleRow: PromoAnalyticsRowInput = {
		promo_sections_id,
		promo_ads_id,
		business_id,
		user_id,
		order_id,
		promo_type,
		type: analytics_type,
		daily_meal_subscription_id,
	};
	PromoAnalyticsRowInputSchema.parse(singleRow);
	if (await isDuplicate(singleRow)) {
		return PromoAnalyticsLogResultSchema.parse({
			created: 0,
			skipped: 1,
			details: [{ reason: 'Duplicate within rate-limit window. Skipped.' }],
		});
	}
	const { created } = await createPromoAnalyticsEntries([singleRow]);
	return PromoAnalyticsLogResultSchema.parse({ created, skipped: 0, details: [] });
}
