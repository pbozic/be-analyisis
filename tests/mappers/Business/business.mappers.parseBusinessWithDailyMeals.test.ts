/**
 * Integration test for Business mapper: parseBusinessWithDailyMeals
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Business/business.mappers.ts:282
 * Generated: 2025-11-21T13:06:35.767Z
 */

import { describe, it, expect } from '@jest/globals';
import type { BusinessByIdPrisma } from '../../../prisma/includes/business.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';
import { parseBusinessWithDailyMeals } from '../../../schemas/dto/Business/business.mappers.js';
import { BusinessWithDailyMealsResponseDto } from '../../../schemas/dto/Business/business.dto.js';

describe('Business Mapper - parseBusinessWithDailyMeals', () => {
	it('should map Prisma data to DTO and validate against schema', async () => {
		// Get mock data
		const mockData = mockPrismaData.businessbyid;

		if (!mockData) {
			console.warn('⚠️  Mock data for "businessbyid" or "business" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		const result = parseBusinessWithDailyMeals(mockData as BusinessByIdPrisma);

		expect(result).toBeDefined();

		const validated = BusinessWithDailyMealsResponseDto.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for parseBusinessWithDailyMeals:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		expect(validated.data).toEqual(result);
		console.log('✅ parseBusinessWithDailyMeals passed schema validation');
	});
});
