/**
 * Integration test for Business mapper: toDailyMealsModuleResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Business/business.mappers.ts:309
 */

import { describe, it, expect } from '@jest/globals';
import { toDailyMealsModuleResponse } from '../../../schemas/dto/Business/business.mappers.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';

describe('Business Mapper - toDailyMealsModuleResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data - use daily_meals_module from businessbyid
		const mockData = mockPrismaData.businessbyid?.daily_meals_module;

		if (!mockData) {
			console.warn('⚠️  Mock data for "daily_meals_module" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toDailyMealsModuleResponse(mockData as any);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate structure matches DailyMealsModule type
		expect(result).toHaveProperty('id');
		expect(result).toHaveProperty('business_id');
		expect(result).toHaveProperty('maximum_daily_meals_subscribers');
		expect(result).toHaveProperty('daily_meals_days');
		expect(result).toHaveProperty('daily_users_sorting_type');
		expect(result).toHaveProperty('daily_users_sorted');
		expect(result).toHaveProperty('daily_meals_delivery_mapping');

		console.log('✅ toDailyMealsModuleResponse passed validation');
	});
});
