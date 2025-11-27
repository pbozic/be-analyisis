/**
 * Integration test for Address mapper: toAddressResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Address/address.mappers.ts:4
 */

import { describe, it, expect } from '@jest/globals';
import { toAddressResponse } from '../../../schemas/dto/Address/address.mappers.js';
import { AddressResponseSchema } from '../../../schemas/dto/Address/index.js';
import type { AddressDefaultPrisma } from '../../../prisma/includes/address.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';

describe('Address Mapper - toAddressResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.user?.addresses?.[0]?.address;

		if (!mockData) {
			console.warn('⚠️  Mock data for "address" not found');
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
