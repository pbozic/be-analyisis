/**
 * Integration test for schedule-slot mapper: toScheduleSlotDAOResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/reservations/schedule-slot/schedule-slot.mappers.ts:18
 * Generated: 2025-11-21T13:06:35.809Z
 */

import { describe, it, expect } from '@jest/globals';
import { toScheduleSlotDAOResponse } from '../../../../schemas/dto/reservations/schedule-slot/schedule-slot.mappers.js';
import { ScheduleSlotDAOResponseSchema } from '../../../../schemas/dto/reservations/schedule-slot/schedule-slot.dto.js';
import { ScheduleSlotBasePrisma } from '../../../../prisma/includes/reservation/schedule-slot.js';
import { mockPrismaData } from '../../../../tests/integration/mock-prisma.js';

describe('schedule-slot Mapper - toScheduleSlotDAOResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.scheduleslotbase;

		if (!mockData) {
			console.warn('⚠️  Mock data for "scheduleslotbase" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toScheduleSlotDAOResponse(mockData as ScheduleSlotBasePrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = ScheduleSlotDAOResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toScheduleSlotDAOResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toScheduleSlotDAOResponse passed schema validation');
	});
});
