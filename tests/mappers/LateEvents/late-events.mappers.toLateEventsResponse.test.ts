/**
 * Integration test for LateEvents mapper: toLateEventsResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/LateEvents/late-events.mappers.ts:5
 */

import { describe, it, expect } from '@jest/globals';
import { toLateEventsResponse } from '../../../schemas/dto/LateEvents/late-events.mappers.js';
import { LateEventsResponseSchema } from '../../../schemas/dto/LateEvents/index.js';

describe('LateEvents Mapper - toLateEventsResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data - create minimal mock since late_events might not exist
		const mockData = {
			late_events_id: '550e8400-e29b-41d4-a716-446655440700',
			stores_id: null,
			food_drinks_id: null,
			driver_id: '550e8400-e29b-41d4-a716-446655440231',
			business_id: null,
			delivery_order_id: null,
			taxi_order_id: null,
			scoring_points_id: null,
			seconds: 300,
			created_at: new Date('2024-01-01'),
			updated_at: new Date('2024-01-01'),
			user: null,
			stores_module: null,
			food_drinks_module: null,
			driver: null,
			delivery_order: null,
			taxi_order: null,
			scoring_points: null,
		};

		if (!mockData) {
			console.warn('⚠️  Mock data for "lateEvents" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toLateEventsResponse(mockData as LateEventsWithIncludesPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = LateEventsResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toLateEventsResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toLateEventsResponse passed schema validation');
	});
});
