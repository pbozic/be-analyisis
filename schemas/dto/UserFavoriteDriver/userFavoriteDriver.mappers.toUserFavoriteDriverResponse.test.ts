/**
 * Integration test for UserFavoriteDriver mapper: toUserFavoriteDriverResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/UserFavoriteDriver/userFavoriteDriver.mappers.ts:6
 * Generated: 2025-11-21T13:06:35.828Z
 *
 * Note: Uses dynamic imports to avoid circular dependency issues with DTOs
 */

import { describe, it, expect } from '@jest/globals';
import { toUserFavoriteDriverResponse } from './userFavoriteDriver.mappers.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('UserFavoriteDriver Mapper - toUserFavoriteDriverResponse', () => {
	it('should map Prisma data to DTO and validate against schema', async () => {
		// Get mock data
		const mockData = mockPrismaData.unknown || {};

		if (!mockData) {
			console.warn('⚠️  Mock data for "unknown" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toUserFavoriteDriverResponse(mockData as unknown);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Dynamically import schema AFTER mapper execution to avoid circular dependencies
		// This allows all modules to load before schema validation
		const { UserFavoriteDriverResponseSchema } = await import('./userFavoriteDriver.dto.js');

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = UserFavoriteDriverResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toUserFavoriteDriverResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toUserFavoriteDriverResponse passed schema validation');
	});
});
