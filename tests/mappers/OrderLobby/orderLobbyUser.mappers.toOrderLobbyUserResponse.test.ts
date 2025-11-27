/**
 * Integration test for OrderLobby mapper: toOrderLobbyUserResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/OrderLobby/orderLobbyUser.mappers.ts:16
 * Generated: 2025-11-21T13:06:35.787Z
 */

import { describe, it, expect } from '@jest/globals';
import { toOrderLobbyUserResponse } from '../../../schemas/dto/OrderLobby/orderLobbyUser.mappers.js';
import { OrderLobbyUserResponseSchema } from '../../../schemas/dto/OrderLobby/index.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';

describe('OrderLobby Mapper - toOrderLobbyUserResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.orderLobbyUser;

		if (!mockData) {
			console.warn('⚠️  Mock data for "orderLobbyUser" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toOrderLobbyUserResponse(mockData);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = OrderLobbyUserResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toOrderLobbyUserResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toOrderLobbyUserResponse passed schema validation');
	});
});
