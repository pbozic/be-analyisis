/**
 * Integration test for Vehicles mapper: toVehicleBase
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Vehicles/vehicle.mappers.ts:76
 */

import { describe, it, expect } from '@jest/globals';
import { toVehicleBase } from '../../../schemas/dto/Vehicles/vehicle.mappers.js';
import { VehicleBaseSchema } from '../../../schemas/dto/Vehicles/index.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('Vehicles Mapper - toVehicleBase', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data - use vehicle from driver's current_vehicle or standalone vehicle
		const mockData = mockPrismaData.user?.driver?.current_vehicle;

		if (!mockData) {
			console.warn('⚠️  Mock data for "vehicle" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toVehicleBase(mockData as any);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = VehicleBaseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toVehicleBase:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toVehicleBase passed schema validation');
	});
});
