/**
 * Integration test for DailyMealCategory mapper: toDailyMealCategoryDetail
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/DailyMealCategory/dailyMealCategory.mappers.ts:44
 * Generated: 2025-11-21T13:06:35.773Z
 */

import { describe, it, expect } from '@jest/globals';
import { toDailyMealCategoryDetail } from './dailyMealCategory.mappers.js';
import { CategoryRefSchema } from '../Category/category.dto.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('DailyMealCategory Mapper - toDailyMealCategoryDetail', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.unknown || {};

		if (!mockData) {
			console.warn('⚠️  Mock data for "unknown" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toDailyMealCategoryDetail(mockData as unknown);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = CategoryRefSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toDailyMealCategoryDetail:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toDailyMealCategoryDetail passed schema validation');
	});
});
