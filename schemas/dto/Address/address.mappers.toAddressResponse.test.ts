/**
 * Integration test for Address mapper: toAddressResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Address/address.mappers.ts:4
 * Generated: 2025-11-21T13:06:35.764Z
 */

import { describe, it, expect } from '@jest/globals';
import { toAddressResponse } from './address.mappers.js';
import { AddressResponseSchema } from './address.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('Address Mapper - toAddressResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.addressdefault;

		if (!mockData) {
			console.warn('⚠️  Mock data for "addressdefault" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toAddressResponse(mockData as AddressDefaultPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = AddressResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toAddressResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toAddressResponse passed schema validation');
	});
});
