/**
 * Integration test for BusinessUser mapper: toBusinessUserWithBusinessResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/BusinessUser/businessUser.mappers.ts:42
 */

import { describe, it, expect } from '@jest/globals';
import { toBusinessUserWithBusinessResponse } from '../../../schemas/dto/BusinessUser/businessUser.mappers.js';
import { BusinessUserWithBusinessResponseSchema } from '../../../schemas/dto/BusinessUser/index.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';
import type { BusinessUserWithBusinessPrisma } from '../../../prisma/includes/businessUsers.js';

describe('BusinessUser Mapper - toBusinessUserWithBusinessResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data - use businessUser which should have business relation
		const mockData = mockPrismaData.businessUser;

		if (!mockData) {
			console.warn('⚠️  Mock data for "businessUser" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toBusinessUserWithBusinessResponse(mockData as BusinessUserWithBusinessPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = BusinessUserWithBusinessResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toBusinessUserWithBusinessResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toBusinessUserWithBusinessResponse passed schema validation');
	});
});
