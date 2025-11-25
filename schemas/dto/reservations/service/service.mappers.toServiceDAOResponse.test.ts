/**
 * Integration test for service mapper: toServiceDAOResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/reservations/service/service.mappers.ts:13
 * Generated: 2025-11-21T13:06:35.811Z
 */

import { describe, it, expect } from '@jest/globals';
import { toServiceDAOResponse } from './service.mappers.js';
import { ServiceDAOResponseSchema } from './service.dto';
import { mockPrismaData } from '../../../../tests/integration/mock-prisma.js';

describe('service Mapper - toServiceDAOResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.servicebase;

		if (!mockData) {
			console.warn('⚠️  Mock data for "servicebase" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toServiceDAOResponse(mockData as ServiceBasePrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = ServiceDAOResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toServiceDAOResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toServiceDAOResponse passed schema validation');
	});
});
