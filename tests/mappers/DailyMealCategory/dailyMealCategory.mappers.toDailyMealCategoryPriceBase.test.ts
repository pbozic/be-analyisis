/**
 * Integration test for DailyMealCategory mapper: toDailyMealCategoryPriceBase
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/DailyMealCategory/dailyMealCategory.mappers.ts:19
 * Generated: 2025-11-21T13:06:35.773Z
 */

import { describe, it, expect } from '@jest/globals';
import { toDailyMealCategoryPriceBase } from '../../../schemas/dto/DailyMealCategory/dailyMealCategory.mappers.js';
import { DailyMealCategoryPriceBaseSchema } from '../../../schemas/dto/DailyMealCategory/index.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';

describe('DailyMealCategory Mapper - toDailyMealCategoryPriceBase', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.dailyMealCategoryPrice;

		if (!mockData) {
			console.warn('⚠️  Mock data for "dailyMealCategoryPrice" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toDailyMealCategoryPriceBase(mockData);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = DailyMealCategoryPriceBaseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toDailyMealCategoryPriceBase:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toDailyMealCategoryPriceBase passed schema validation');
	});
});
