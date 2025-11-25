/**
 * Integration test for User mapper: toUserWithAddressesResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/User/user.mappers.ts:111
 * Generated: 2025-11-21T13:06:35.825Z
 */

import { describe, it, expect } from '@jest/globals';
import { toUserWithAddressesResponse } from './user.mappers.js';
import { UserWithAddressesResponseSchema } from './user.js';
import type { UserAddressesPrisma } from '../../../prisma/includes/user.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('User Mapper - toUserWithAddressesResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = (mockPrismaData as any).useraddresses;

		if (!mockData) {
			console.warn('⚠️  Mock data for "useraddresses" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toUserWithAddressesResponse(mockData as UserAddressesPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = UserWithAddressesResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toUserWithAddressesResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toUserWithAddressesResponse passed schema validation');
	});
});
