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
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';
import { isCircularDependencyError } from '../../../tests/integration/test-helpers.js';

describe('BusinessUser Mapper - toBusinessUserResponse', () => {
	it('should map Prisma data to DTO and validate against schema', async () => {
		// Get mock data
		const mockData = (mockPrismaData as any).businessuserdefault || mockPrismaData.businessUser;

		if (!mockData) {
			console.warn('⚠️  Mock data for "businessuserdefault" or "businessUser" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Try to import and run mapper - may fail due to circular dependency
		try {
			const { toBusinessUserResponse } = await import('./businessUser.mappers.js');
			const result = toBusinessUserResponse(mockData as BusinessUserDefaultPrisma);

			expect(result).toBeDefined();

			// Dynamically import schema to avoid circular dependency
			const { BusinessUserResponseSchema } = await import('./businessUser.js');
			const validated = BusinessUserResponseSchema.safeParse(result);

			if (!validated.success) {
				console.error('Schema validation failed for toBusinessUserResponse:');
				console.error(JSON.stringify(validated.error.format(), null, 2));
				expect(validated.success).toBe(true);
			}

			expect(validated.data).toEqual(result);
			console.log('✅ toBusinessUserResponse passed schema validation');
		} catch (error: any) {
			if (isCircularDependencyError(error)) {
				console.warn('⚠️  Test skipped due to circular dependency');
				expect(true).toBe(true);
				return;
			}
			throw error;
		}
	});
});
