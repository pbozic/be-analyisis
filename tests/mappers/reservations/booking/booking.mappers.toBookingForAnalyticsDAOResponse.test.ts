/**
 * Integration test for booking mapper: toBookingForAnalyticsDAOResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/reservations/booking/booking.mappers.ts:291
 * Generated: 2025-11-21T13:06:35.792Z
 */

import { describe, it, expect } from '@jest/globals';
import { toBookingForAnalyticsDAOResponse } from '../../../../schemas/dto/reservations/booking/booking.mappers.js';
import { BookingForAnalyticsDAOResponseSchema } from '../../../../schemas/dto/reservations/booking/booking.dto.js';
import { mockPrismaData } from '../../../../tests/integration/mock-prisma.js';
import { BookingBasePrisma } from '../../../../prisma/includes/reservation/booking.js';

describe('booking Mapper - toBookingForAnalyticsDAOResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.bookingbase;

		if (!mockData) {
			console.warn('⚠️  Mock data for "bookingbase" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toBookingForAnalyticsDAOResponse(mockData as BookingBasePrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = BookingForAnalyticsDAOResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toBookingForAnalyticsDAOResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toBookingForAnalyticsDAOResponse passed schema validation');
	});
});
