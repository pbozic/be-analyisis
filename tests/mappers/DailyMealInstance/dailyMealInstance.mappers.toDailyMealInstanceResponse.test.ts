/**
 * Integration test for DailyMealInstance mapper: toDailyMealInstanceResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/DailyMealInstance/dailyMealInstance.mappers.ts:9
 * Generated: 2025-11-21T13:06:35.774Z
 */

import { describe, it, expect } from '@jest/globals';
import { toDailyMealInstanceResponse } from '../../../schemas/dto/DailyMealInstance/dailyMealInstance.mappers.js';
import { DailyMealInstanceResponseSchema } from '../../../schemas/dto/DailyMealInstance/index.js';
import { DailyMealInstanceWithIncludesPrisma } from '../../../prisma/includes/dailyMealInstance.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';

describe('DailyMealInstance Mapper - toDailyMealInstanceResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.dailymealinstance;

		if (!mockData) {
			console.warn('⚠️  Mock data for "dailymealinstancewithincludes" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toDailyMealInstanceResponse(mockData as DailyMealInstanceWithIncludesPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = DailyMealInstanceResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toDailyMealInstanceResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toDailyMealInstanceResponse passed schema validation');
	});
});
