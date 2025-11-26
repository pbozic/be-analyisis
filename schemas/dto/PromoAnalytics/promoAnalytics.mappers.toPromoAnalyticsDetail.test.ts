/**
 * Integration test for PromoAnalytics mapper: toPromoAnalyticsDetail
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/PromoAnalytics/promoAnalytics.mappers.ts:20
 * Generated: 2025-11-21T13:06:35.788Z
 */

import { describe, it, expect } from '@jest/globals';
import { toPromoAnalyticsDetail } from './promoAnalytics.mappers.js';
import { PromoAnalyticsDetailSchema } from './promo-analytics.dto.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('PromoAnalytics Mapper - toPromoAnalyticsDetail', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.promoanalytics;

		if (!mockData) {
			console.warn('⚠️  Mock data for "promoanalytics" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toPromoAnalyticsDetail(mockData as unknown);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = PromoAnalyticsDetailSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toPromoAnalyticsDetail:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toPromoAnalyticsDetail passed schema validation');
	});
});
