/**
 * Integration test for booking-history-log mapper: toBookingHistoryLogResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/reservations/booking-history-log/booking-history-log.mappers.ts:13
 * Generated: 2025-11-21T13:06:35.796Z
 */

import { describe, it, expect } from '@jest/globals';
import { toBookingHistoryLogResponse } from '../../../../schemas/dto/reservations/booking-history-log/booking-history-log.mappers.js';
import { BookingHistoryLogResponseSchema } from '../../../../schemas/dto/reservations/booking-history-log/booking-history-log.dto.js';
import { mockPrismaData } from '../../../../tests/integration/mock-prisma.js';
import { BookingHistoryLogBasePrisma } from '../../../../prisma/includes/reservation/booking-history-log.js';

describe('booking-history-log Mapper - toBookingHistoryLogResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.bookinghistorylogbase;

		if (!mockData) {
			console.warn('⚠️  Mock data for "bookinghistorylogbase" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toBookingHistoryLogResponse(mockData as BookingHistoryLogBasePrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = BookingHistoryLogResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toBookingHistoryLogResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toBookingHistoryLogResponse passed schema validation');
	});
});
