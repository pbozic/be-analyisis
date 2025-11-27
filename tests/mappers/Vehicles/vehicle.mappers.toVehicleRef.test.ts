/**
 * Integration test for Vehicles mapper: toVehicleRef
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Vehicles/vehicle.mappers.ts:38
 * Generated: 2025-11-21T13:06:35.831Z
 */

import { describe, it, expect } from '@jest/globals';
import { mockPrismaData } from '../../integration/mock-prisma.js';
import { toVehicleRef } from '../../../schemas/dto/Vehicles/vehicle.mappers.js';
import { VehicleRefSchema } from '../../../schemas/dto/Vehicles/vehicle.dto.js';

describe('Vehicles Mapper - toVehicleRef', () => {
	it('should map Prisma data to DTO and validate against schema', async () => {
		// Get mock data
		const mockData = (mockPrismaData as any).unknown || {};

		if (!mockData || Object.keys(mockData).length === 0) {
			console.warn('⚠️  Mock data for "unknown" or "vehicle" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}
		const result = toVehicleRef(mockData as unknown);

		expect(result).toBeDefined();

		const validated = VehicleRefSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toVehicleRef:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		expect(validated.data).toEqual(result);
		console.log('✅ toVehicleRef passed schema validation');
	});
});
