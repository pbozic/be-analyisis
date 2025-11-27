/**
 * Integration test for Business mapper: toBusinessWithAddressAndUsersResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Business/business.mappers.ts:77
 */

import { describe, it, expect } from '@jest/globals';
import { toBusinessWithAddressAndUsersResponse } from '../../../schemas/dto/Business/business.mappers.js';
import { BusinessWithAddressAndUsersResponseDto } from '../../../schemas/dto/Business/business.dto.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';
import type { BusinessWithAddressAndUsersPrisma } from '../../../prisma/includes/business.js';

describe('Business Mapper - toBusinessWithAddressAndUsersResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data - use businessbyid which has address and business_users
		const mockData = mockPrismaData.businessbyid;

		if (!mockData) {
			console.warn('⚠️  Mock data for "businessbyid" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toBusinessWithAddressAndUsersResponse(mockData as BusinessWithAddressAndUsersPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = BusinessWithAddressAndUsersResponseDto.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toBusinessWithAddressAndUsersResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toBusinessWithAddressAndUsersResponse passed schema validation');
	});
});
