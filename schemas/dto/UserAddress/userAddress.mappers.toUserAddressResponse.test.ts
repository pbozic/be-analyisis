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
import { toUserAddressResponse } from './userAddress.mappers.js';
import type { UserAddressDefaultPrisma } from '../../../prisma/includes/userAddress.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

// Type assertion helper to avoid circular dependency issues
type UserAddressMockData = {
	user_id: string;
	address_id: string;
	primary: boolean;
	details: object | null;
	type: 'HOME' | 'WORK' | 'OTHER';
	address?: {
		address_id: string;
		address: string;
		street?: string | null;
		house_number?: string | null;
		city?: string | null;
		postal?: string | null;
		country?: string | null;
		latitude: string;
		longitude: string;
	};
};

describe('UserAddress Mapper - toUserAddressResponse', () => {
	it('should map Prisma data to DTO and validate against schema', async () => {
		// Get mock data
		const mockData = (mockPrismaData as any).useraddressdefault;

		if (!mockData) {
			console.warn('⚠️  Mock data for "useraddressdefault" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toUserAddressResponse(mockData as UserAddressMockData as UserAddressDefaultPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Dynamically import schema AFTER mapper execution to avoid circular dependencies
		const { UserAddressResponseSchema } = await import('./userAddress.dto.js');

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
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
