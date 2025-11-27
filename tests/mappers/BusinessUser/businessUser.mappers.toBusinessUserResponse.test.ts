/**
 * Integration test for BusinessUser mapper: toBusinessUserResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/BusinessUser/businessUser.mappers.ts:23
 * Generated: 2025-11-21T13:06:35.772Z
 */

import { describe, it, expect } from '@jest/globals';
import type { BusinessUserDefaultPrisma } from '../../../prisma/includes/businessUsers.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';
import { toBusinessUserResponse } from '../../../schemas/dto/BusinessUser/businessUser.mappers.js';
import { BusinessUserResponseSchema } from '../../../schemas/dto/BusinessUser/index.js';

describe('BusinessUser Mapper - toBusinessUserResponse', () => {
	it('should map Prisma data to DTO and validate against schema', async () => {
		// Get mock data - use standalone businessUser mock which has users and operating_address relations
		const mockData = mockPrismaData.businessUser;

		if (!mockData) {
			console.warn('⚠️  Mock data for "businessUser" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		const result = toBusinessUserResponse(mockData as BusinessUserDefaultPrisma);

		expect(result).toBeDefined();

		const validated = BusinessUserResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toBusinessUserResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		expect(validated.data).toEqual(result);
		console.log('✅ toBusinessUserResponse passed schema validation');
	});
});
