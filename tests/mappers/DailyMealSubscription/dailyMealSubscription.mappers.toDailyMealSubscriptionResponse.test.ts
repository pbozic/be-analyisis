/**
 * Integration test for DailyMealSubscription mapper: toDailyMealSubscriptionResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/DailyMealSubscription/dailyMealSubscription.mappers.ts:30
 */

import { describe, it, expect } from '@jest/globals';
import { toDailyMealSubscriptionResponse } from '../../../schemas/dto/DailyMealSubscription/dailyMealSubscription.mappers.js';

import { mockPrismaData } from '../../integration/mock-prisma.js';
import { DailyMealSubscriptionWithIncludesPrisma } from '../../../prisma/includes/dailyMealSubscriptions.js';
import { DailyMealSubscriptionDetailSchema } from '../../../schemas/dto/DailyMeal/dailymeal.dto.js';

describe('DailyMealSubscription Mapper - toDailyMealSubscriptionResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data - create mock with relations
		const mockData = {
			id: '550e8400-e29b-41d4-a716-446655440500',
			user_id: '550e8400-e29b-41d4-a716-446655440010',
			daily_meals_id: '550e8400-e29b-41d4-a716-446655440203',
			delivery_address_id: '550e8400-e29b-41d4-a716-446655440002',
			driver_id: null,
			start_date: new Date('2024-01-01'),
			end_date: null,
			type: 'DATED' as const,
			status: 'ACTIVE' as const,
			courier_comment: null,
			created_at: new Date('2024-01-01'),
			updated_at: new Date('2024-01-01'),
			user: mockPrismaData.user,
			driver: null,
			delivery_address: mockPrismaData.user?.addresses?.[0]?.address,
			daily_meals_module: null,
			customers: [],
			days: [],
			weekdays: [],
			daily_meal_instances: [],
			payment: null,
			promo_analytics: [],
		};

		if (!mockData) {
			console.warn('⚠️  Mock data for "dailyMealSubscription" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toDailyMealSubscriptionResponse(mockData as DailyMealSubscriptionWithIncludesPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = DailyMealSubscriptionDetailSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toDailyMealSubscriptionResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toDailyMealSubscriptionResponse passed schema validation');
	});
});
