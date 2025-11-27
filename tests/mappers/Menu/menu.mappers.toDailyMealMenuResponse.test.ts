/**
 * Integration test for Menu mapper: toDailyMealMenuResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Menu/menu.mappers.ts:98
 */

import { describe, it, expect } from '@jest/globals';
import { toDailyMealMenuResponse } from '../../../schemas/dto/Menu/menu.mappers.js';
import { DailyMealMenuBaseSchema } from '../../../schemas/dto/Menu/index.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('Menu Mapper - toDailyMealMenuResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data - use daily_meal_menu from businessbyid or create minimal mock
		const mockData = mockPrismaData.dailyMealMenu || {
			daily_meal_menu_id: '550e8400-e29b-41d4-a716-446655440350',
			daily_meals_module_id: '550e8400-e29b-41d4-a716-446655440203',
			date: null,
			created_at: new Date('2024-01-01'),
			updated_at: new Date('2024-01-01'),
			categories: [],
		};

		if (!mockData) {
			console.warn('⚠️  Mock data for "dailyMealMenu" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toDailyMealMenuResponse(mockData as any);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = DailyMealMenuBaseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toDailyMealMenuResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toDailyMealMenuResponse passed schema validation');
	});
});
