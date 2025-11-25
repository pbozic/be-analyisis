/**
 * Integration test for reservation-module mapper: toReservationModuleResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/reservations/reservation-module/reservation-module.mappers.ts:13
 * Generated: 2025-11-21T13:06:35.806Z
 */

import { describe, it, expect } from '@jest/globals';
import { toReservationModuleResponse } from './reservation-module.mappers.js';
import { ReservationModuleResponseSchema } from './reservation-module.dto';
import { mockPrismaData } from '../../../../tests/integration/mock-prisma.js';

describe('reservation-module Mapper - toReservationModuleResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.reservationmodulebase;

		if (!mockData) {
			console.warn('⚠️  Mock data for "reservationmodulebase" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toReservationModuleResponse(mockData as ReservationModuleBasePrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = ReservationModuleResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toReservationModuleResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toReservationModuleResponse passed schema validation');
	});
});
