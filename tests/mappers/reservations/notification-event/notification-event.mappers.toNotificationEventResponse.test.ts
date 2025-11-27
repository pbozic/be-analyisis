/**
 * Integration test for notification-event mapper: toNotificationEventResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/reservations/notification-event/notification-event.mappers.ts:8
 * Generated: 2025-11-21T13:06:35.803Z
 */

import { describe, it, expect } from '@jest/globals';
import { toNotificationEventResponse } from '../../../../schemas/dto/reservations/notification-event/notification-event.mappers.js';
import { NotificationEventResponseSchema } from '../../../../schemas/dto/reservations/notification-event/notification-event.dto.js';
import { NotificationEventBasePrisma } from '../../../../prisma/includes/reservation/notification-event.js';
import { mockPrismaData } from '../../../../tests/integration/mock-prisma.js';

describe('notification-event Mapper - toNotificationEventResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.notificationeventbase;

		if (!mockData) {
			console.warn('⚠️  Mock data for "notificationeventbase" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toNotificationEventResponse(mockData as NotificationEventBasePrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = NotificationEventResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toNotificationEventResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toNotificationEventResponse passed schema validation');
	});
});
