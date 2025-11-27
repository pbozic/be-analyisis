/**
 * Integration test for TaxiOrders mapper: toTaxiOrderDetail
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/TaxiOrders/taxiOrder.mappers.ts:59
 * Generated: 2025-11-21T13:06:35.820Z
 */

import { describe, it, expect } from '@jest/globals';
import { toTaxiOrderDetail } from '../../../schemas/dto/TaxiOrders/taxiOrder.mappers.js';
import { TaxiOrderDetailSchema } from '../../../schemas/dto/TaxiOrders/index.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';

describe('TaxiOrders Mapper - toTaxiOrderDetail', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.taxiOrder;

		if (!mockData) {
			console.warn('⚠️  Mock data for "taxiOrder" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toTaxiOrderDetail(mockData);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = TaxiOrderDetailSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toTaxiOrderDetail:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toTaxiOrderDetail passed schema validation');
	});
});
