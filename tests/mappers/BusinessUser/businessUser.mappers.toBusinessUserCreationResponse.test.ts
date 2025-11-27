/**
 * Integration test for BusinessUser mapper: toBusinessUserCreationResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/BusinessUser/businessUser.mappers.ts:84
 */

import { describe, it, expect } from '@jest/globals';
import { toBusinessUserCreationResponse } from '../../../schemas/dto/BusinessUser/businessUser.mappers.js';
import { BusinessUserCreationResponseSchema } from '../../../schemas/dto/BusinessUser/index.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';
import { BusinessUserDefaultPrisma } from '../../../prisma/includes/businessUsers.js';

describe('BusinessUser Mapper - toBusinessUserCreationResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockUser = mockPrismaData.user;
		const mockBusinessUser = mockPrismaData.businessUser;

		if (!mockUser || !mockBusinessUser) {
			console.warn('⚠️  Mock data for "user" or "businessUser" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockUser).toBeDefined();
			expect(mockBusinessUser).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toBusinessUserCreationResponse(mockUser as any, mockBusinessUser as BusinessUserDefaultPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = BusinessUserCreationResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toBusinessUserCreationResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toBusinessUserCreationResponse passed schema validation');
	});
});
