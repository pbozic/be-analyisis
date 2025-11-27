/**
 * Integration test for booking-course-participant mapper: toBookingCourseParticipantResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/reservations/booking-course-participant/booking-course-participant.mappers.ts:13
 */

import { describe, it, expect } from '@jest/globals';
import { toBookingCourseParticipantResponse } from '../../../../schemas/dto/reservations/booking-course-participant/booking-course-participant.mappers.js';
import { BookingCourseParticipantResponseSchema } from '../../../../schemas/dto/reservations/booking-course-participant/booking-course-participant.dto.js';
import { mockPrismaData } from '../../../../tests/integration/mock-prisma.js';
import type { BookingCourseParticipantBasePrisma } from '../../../../prisma/includes/reservation/booking-course-participant';

describe('booking-course-participant Mapper - toBookingCourseParticipantResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		const mockData = mockPrismaData.bookingcourseparticipantbase;

		if (!mockData) {
			console.warn('⚠️  Mock data for "bookingcourseparticipantbase" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		const result = toBookingCourseParticipantResponse(mockData as BookingCourseParticipantBasePrisma);

		expect(result).toBeDefined();

		const validated = BookingCourseParticipantResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toBookingCourseParticipantResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		expect(validated.data).toEqual(result);

		console.log('✅ toBookingCourseParticipantResponse passed schema validation');
	});
});
