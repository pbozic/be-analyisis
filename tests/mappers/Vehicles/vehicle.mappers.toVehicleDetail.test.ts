/**
 * Integration test for Vehicles mapper: toVehicleDetail
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Vehicles/vehicle.mappers.ts:94
 */

import { describe, it, expect } from '@jest/globals';
import { toVehicleDetail } from '../../../schemas/dto/Vehicles/vehicle.mappers.js';
import { VehicleDetailSchema } from '../../../schemas/dto/Vehicles/index.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';

describe('Vehicles Mapper - toVehicleDetail', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data - use vehicle with relations if available
		const mockData = mockPrismaData.user?.driver?.current_vehicle;

		if (!mockData) {
			console.warn('⚠️  Mock data for "vehicle" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toVehicleDetail(mockData as any);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = VehicleDetailSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toVehicleDetail:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toVehicleDetail passed schema validation');
	});
});
