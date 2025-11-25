/**
 * Integration test for DeliveryOrders mapper: toDeliveryOrderDetail
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/DeliveryOrders/deliveryOrder.mappers.ts:43
 * Generated: 2025-11-21T13:06:35.776Z
 */

import { describe, it, expect } from '@jest/globals';
import { toDeliveryOrderDetail } from './deliveryOrder.mappers.js';
import { DeliveryOrderDetailSchema } from './deliveryOrder.dto.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('DeliveryOrders Mapper - toDeliveryOrderDetail', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.unknown || {};

		if (!mockData) {
			console.warn('⚠️  Mock data for "unknown" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toDeliveryOrderDetail(mockData as unknown);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = DeliveryOrderDetailSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toDeliveryOrderDetail:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toDeliveryOrderDetail passed schema validation');
	});
});
