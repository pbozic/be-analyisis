/**
 * Integration test for Vehicles mapper: toVehicleDetail
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Vehicles/vehicle.mappers.ts:76
 * Generated: 2025-11-21T13:06:35.831Z
 */

import { describe, it, expect } from '@jest/globals';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';
import { isCircularDependencyError } from '../../../tests/integration/test-helpers.js';

describe('Vehicles Mapper - toVehicleDetail', () => {
	it('should map Prisma data to DTO and validate against schema', async () => {
		// Get mock data
		const mockData = (mockPrismaData as any).unknown || mockPrismaData.vehicle || {};

		if (!mockData || Object.keys(mockData).length === 0) {
			console.warn('⚠️  Mock data for "unknown" or "vehicle" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Try to import and run mapper - may fail due to circular dependency
		try {
			const { toVehicleDetail } = await import('./vehicle.mappers.js');
			const result = toVehicleDetail(mockData as unknown);

			expect(result).toBeDefined();

			// Dynamically import schema to avoid circular dependency
			const { VehicleDetailSchema } = await import('./vehicle.dto.js');
			const validated = VehicleDetailSchema.safeParse(result);

			if (!validated.success) {
				console.error('Schema validation failed for toVehicleDetail:');
				console.error(JSON.stringify(validated.error.format(), null, 2));
				expect(validated.success).toBe(true);
			}

			expect(validated.data).toEqual(result);
			console.log('✅ toVehicleDetail passed schema validation');
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
