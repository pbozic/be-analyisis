/**
 * Integration test for User mapper: toUserResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/User/user.mappers.ts:59
 * Generated: 2025-11-21T13:06:35.824Z
 */

import { describe, it, expect } from '@jest/globals';
import { Prisma } from '@prisma/client';
import { toUserResponse } from './user.mappers.js';
import { UserWithParentUserResponseSchema } from './user.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('User Mapper - toUserResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data - toUserResponse accepts basic user object
		const mockData = mockPrismaData.user;

		if (!mockData) {
			console.warn('⚠️  Mock data for "user" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toUserResponse(mockData as Prisma.usersGetPayload<object>);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = UserWithParentUserResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toUserResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toUserResponse passed schema validation');
	});
});
