/**
 * Integration test for OrderLobby mapper: toOrderLobbyResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/OrderLobby/orderLobby.mappers.ts:18
 * Generated: 2025-11-21T13:06:35.785Z
 */

import { describe, it, expect } from '@jest/globals';
import { toOrderLobbyResponse } from '../../../schemas/dto/OrderLobby/orderLobby.mappers.js';
import { OrderLobbyResponseSchema } from '../../../schemas/dto/OrderLobby/index.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('OrderLobby Mapper - toOrderLobbyResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.orderLobby;

		if (!mockData) {
			console.warn('⚠️  Mock data for "orderLobby" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toOrderLobbyResponse(mockData);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = OrderLobbyResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toOrderLobbyResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toOrderLobbyResponse passed schema validation');
	});
});
