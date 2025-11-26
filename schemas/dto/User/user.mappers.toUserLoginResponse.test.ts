/**
 * Integration test for User mapper: toUserLoginResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/User/user.mappers.ts:196
 * Generated: 2025-11-21T13:06:35.825Z
 */

import { describe, it, expect } from '@jest/globals';
import { toUserLoginResponse } from './user.mappers.js';
import { UserLoginResponseSchema } from '../Auth/AuthResponse.dto.js';
import type { UserLoginPrisma } from '../../../prisma/includes/user.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('User Mapper - toUserLoginResponse', () => {
	it('should map Prisma data to DTO and validate against schema', async () => {
		// Get mock data
		const mockData = mockPrismaData.userlogin;

		if (!mockData) {
			console.warn('⚠️  Mock data for "userlogin" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = await toUserLoginResponse(mockData as UserLoginPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = UserLoginResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toUserLoginResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toUserLoginResponse passed schema validation');
	});
});
