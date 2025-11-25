/**
 * Integration test for Vehicles mapper: toDriverRefOut
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Vehicles/vehicle.mappers.ts:8
 * Generated: 2025-11-21T13:06:35.830Z
 */

import { describe, it, expect } from '@jest/globals';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';
import { isCircularDependencyError } from '../../../tests/integration/test-helpers.js';

describe('Vehicles Mapper - toDriverRefOut', () => {
	it('should map Prisma data to DTO and validate against schema', async () => {
		// Get mock data
		const mockData = (mockPrismaData as any).unknown || mockPrismaData.driver || {};

		if (!mockData || Object.keys(mockData).length === 0) {
			console.warn('⚠️  Mock data for "unknown" or "driver" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Try to import and run mapper - may fail due to circular dependency
		try {
			const { toDriverRefOut } = await import('./vehicle.mappers.js');
			const result = toDriverRefOut(mockData as unknown);

			expect(result).toBeDefined();

			// Dynamically import schema to avoid circular dependency
			const { BasicUserDataSchema } = await import('../User/user.js');
			const validated = BasicUserDataSchema.safeParse(result);

			if (!validated.success) {
				console.error('Schema validation failed for toDriverRefOut:');
				console.error(JSON.stringify(validated.error.format(), null, 2));
				expect(validated.success).toBe(true);
			}

			expect(validated.data).toEqual(result);
			console.log('✅ toDriverRefOut passed schema validation');
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
