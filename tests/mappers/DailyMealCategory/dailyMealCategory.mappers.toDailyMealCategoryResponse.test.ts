/**
 * Integration test for DailyMealCategory mapper: toDailyMealCategoryResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/DailyMealCategory/dailyMealCategory.mappers.ts:72
 * Generated: 2025-11-21T13:06:35.774Z
 */

import { describe, it, expect } from '@jest/globals';
import { toDailyMealCategoryResponse } from '../../../schemas/dto/DailyMealCategory/dailyMealCategory.mappers.js';
import { DailyMealCategoryDetailSchema } from '../../../schemas/dto/DailyMealCategory/index.js';
import { DailyMealCategoryWithPricesPrisma } from '../../../prisma/includes/dailyMealCategory.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';

describe('DailyMealCategory Mapper - toDailyMealCategoryResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.dailymealcategory;

		if (!mockData) {
			console.warn('⚠️  Mock data for "dailymealcategory" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toDailyMealCategoryResponse(mockData as DailyMealCategoryWithPricesPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = DailyMealCategoryDetailSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toDailyMealCategoryResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toDailyMealCategoryResponse passed schema validation');
	});
});
