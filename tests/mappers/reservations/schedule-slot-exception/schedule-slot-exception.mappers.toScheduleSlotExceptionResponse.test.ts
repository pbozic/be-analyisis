/**
 * Integration test for schedule-slot-exception mapper: toScheduleSlotExceptionResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/reservations/schedule-slot-exception/schedule-slot-exception.mappers.ts:13
 * Generated: 2025-11-21T13:06:35.810Z
 */

import { describe, it, expect } from '@jest/globals';
import { toScheduleSlotExceptionResponse } from '../../../../schemas/dto/reservations/schedule-slot-exception/schedule-slot-exception.mappers.js';
import { ScheduleSlotExceptionResponseSchema } from '../../../../schemas/dto/reservations/schedule-slot-exception/schedule-slot-exception.dto.js';
import { ScheduleSlotExceptionBasePrisma } from '../../../../prisma/includes/reservation/schedule-slot-exception.js';
import { mockPrismaData } from '../../../../tests/integration/mock-prisma.js';

describe('schedule-slot-exception Mapper - toScheduleSlotExceptionResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.scheduleslotexceptionbase;

		if (!mockData) {
			console.warn('⚠️  Mock data for "scheduleslotexceptionbase" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toScheduleSlotExceptionResponse(mockData as ScheduleSlotExceptionBasePrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = ScheduleSlotExceptionResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toScheduleSlotExceptionResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toScheduleSlotExceptionResponse passed schema validation');
	});
});
