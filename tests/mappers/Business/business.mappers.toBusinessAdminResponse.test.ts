/**
 * Integration test for Business mapper: toBusinessAdminResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Business/business.mappers.ts:119
 */

import { describe, it, expect } from '@jest/globals';
import { toBusinessAdminResponse } from '../../../schemas/dto/Business/business.mappers.js';
import { BusinessAdminResponseSchema } from '../../../schemas/dto/Business/business.dto.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';
import type { BusinessAdminPrisma } from '../../../prisma/includes/business.js';

describe('Business Mapper - toBusinessAdminResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.businessbyid || mockPrismaData.business;

		if (!mockData) {
			console.warn('⚠️  Mock data for "business" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toBusinessAdminResponse(mockData as BusinessAdminPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = BusinessAdminResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toBusinessAdminResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toBusinessAdminResponse passed schema validation');
	});
});
