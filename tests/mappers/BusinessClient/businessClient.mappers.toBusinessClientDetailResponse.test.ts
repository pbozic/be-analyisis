/**
 * Integration test for BusinessClient mapper: toBusinessClientDetailResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/BusinessClient/businessClient.mappers.ts:67
 */

import { describe, it, expect } from '@jest/globals';
import { toBusinessClientDetailResponse } from '../../../schemas/dto/BusinessClient/businessClient.mappers.js';
import { BusinessClientDetailResponseSchema } from '../../../schemas/dto/BusinessClient/index.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';
import { BusinessClientDetailPrisma } from '../../../prisma/includes/businessClient.js';

describe('BusinessClient Mapper - toBusinessClientDetailResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.businessclientdetail;

		if (!mockData) {
			console.warn('⚠️  Mock data for "businessClient" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toBusinessClientDetailResponse(mockData as BusinessClientDetailPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = BusinessClientDetailResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toBusinessClientDetailResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toBusinessClientDetailResponse passed schema validation');
	});
});
