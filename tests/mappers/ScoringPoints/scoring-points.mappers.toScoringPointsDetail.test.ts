/**
 * Integration test for ScoringPoints mapper: toScoringPointsDetail
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/ScoringPoints/scoring-points.mappers.ts:17
 */

import { describe, it, expect } from '@jest/globals';
import { toScoringPointsDetail } from '../../../schemas/dto/ScoringPoints/scoring-points.mappers.js';
import { ScoringPointsDetailSchema } from '../../../schemas/dto/ScoringPoints/index.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';
import { ScoringPointsWithIncludesPrisma } from '../../../prisma/includes/scoringPoints.js';

describe('ScoringPoints Mapper - toScoringPointsDetail', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data - create minimal mock since scoring_points might not exist
		const mockData = {
			scoring_points_id: '550e8400-e29b-41d4-a716-446655440800',
			user_id: '550e8400-e29b-41d4-a716-446655440010',
			stores_id: '550e8400-e29b-41d4-a716-446655440011',
			food_drinks_id: null,
			driver_id: null,
			delivery_order_id: '550e8400-e29b-41d4-a716-446655440012',
			taxi_order_id: null,
			points: 10,
			isPenalty: false,
			reason: 'On-time delivery',
			created_at: new Date('2024-01-01'),
			updated_at: new Date('2024-01-01'),
			user: mockPrismaData.user,
			delivery_order: null,
			taxi_order: null,
			late_events: [],
		};

		if (!mockData) {
			console.warn('⚠️  Mock data for "scoringPoints" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toScoringPointsDetail(mockData as ScoringPointsWithIncludesPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = ScoringPointsDetailSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toScoringPointsDetail:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toScoringPointsDetail passed schema validation');
	});
});
