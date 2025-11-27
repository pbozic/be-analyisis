/**
 * Integration test for UserAddress mapper: toUserAddressResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/UserAddress/userAddress.mappers.ts:5
 * Generated: 2025-11-21T13:06:35.828Z
 *
 * Note: Uses dynamic imports to avoid circular dependency issues with DTOs
 */

import { describe, it, expect } from '@jest/globals';
import { toUserAddressResponse } from '../../../schemas/dto/UserAddress/userAddress.mappers.js';
import type { UserAddressDefaultPrisma } from '../../../prisma/includes/userAddress.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';
import { UserAddressResponseSchema } from '../../../schemas/dto/UserAddress/userAddress.dto.js';

describe('UserAddress Mapper - toUserAddressResponse', () => {
	it('should map Prisma data to DTO and validate against schema', async () => {
		// Get mock data - use user.addresses[0] which has all relations
		const mockData = mockPrismaData.user?.addresses?.[0];

		if (!mockData) {
			console.warn('⚠️  Mock data for user.addresses[0] not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toUserAddressResponse(mockData as UserAddressDefaultPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		const validated = UserAddressResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toUserAddressResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toUserAddressResponse passed schema validation');
	});
});
