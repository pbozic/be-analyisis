/**
 * Integration test for BusinessClient mapper: toBusinessClientResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/BusinessClient/businessClient.mappers.ts:25
 * Generated: 2025-11-21T13:06:35.769Z
 */

import { describe, it, expect } from '@jest/globals';
import { toBusinessClientResponse } from './businessClient.mappers.js';
import { BusinessClientResponseSchema } from './businessClient.dto.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('BusinessClient Mapper - toBusinessClientResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.businessclientdefault;

		if (!mockData) {
			console.warn('⚠️  Mock data for "businessclientdefault" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toBusinessClientResponse(mockData as BusinessClientDefaultPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = BusinessClientResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toBusinessClientResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toBusinessClientResponse passed schema validation');
	});
});
