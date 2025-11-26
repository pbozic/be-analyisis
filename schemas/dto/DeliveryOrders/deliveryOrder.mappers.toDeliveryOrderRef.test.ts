/**
 * Integration test for DeliveryOrders mapper: toDeliveryOrderRef
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/DeliveryOrders/deliveryOrder.mappers.ts:81
 * Generated: 2025-11-21T13:06:35.777Z
 */

import { describe, it, expect } from '@jest/globals';
import { toDeliveryOrderRef } from './deliveryOrder.mappers.js';
import { DeliveryOrderRefSchema } from './deliveryOrder.dto.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('DeliveryOrders Mapper - toDeliveryOrderRef', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.deliveryOrder;

		if (!mockData) {
			console.warn('⚠️  Mock data for "deliveryOrder" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toDeliveryOrderRef(mockData);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = DeliveryOrderRefSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toDeliveryOrderRef:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toDeliveryOrderRef passed schema validation');
	});
});
