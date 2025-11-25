/**
 * Integration test for service-location mapper: toServiceLocationResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/reservations/service-location/service-location.mappers.ts:8
 * Generated: 2025-11-21T13:06:35.814Z
 */

import { describe, it, expect } from '@jest/globals';
import { toServiceLocationResponse } from './service-location.mappers.js';
import { ServiceLocationResponseSchema } from './service-location.dto';
import { mockPrismaData } from '../../../../tests/integration/mock-prisma.js';

describe('service-location Mapper - toServiceLocationResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.servicelocationbase;

		if (!mockData) {
			console.warn('⚠️  Mock data for "servicelocationbase" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toServiceLocationResponse(mockData as ServiceLocationBasePrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = ServiceLocationResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toServiceLocationResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toServiceLocationResponse passed schema validation');
	});
});
