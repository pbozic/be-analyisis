/**
 * Integration test for notification-message-event mapper: toNotificationMessageEventResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/reservations/notification-message-event/notification-message-event.mappers.ts:13
 */

import { describe, it, expect } from '@jest/globals';
import { toNotificationMessageEventResponse } from '../../../../schemas/dto/reservations/notification-message-event/notification-message-event.mappers.js';
import { NotificationMessageEventResponseSchema } from '../../../../schemas/dto/reservations/notification-message-event/notification-message-event.dto.js';
import { NotificationMessageEventBasePrisma } from '../../../../prisma/includes/reservation/notification-message-event.js';
import { mockPrismaData } from '../../../../tests/integration/mock-prisma.js';

describe('notification-message-event Mapper - toNotificationMessageEventResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		const mockData = mockPrismaData.notificationmessageeventbase;

		if (!mockData) {
			console.warn('⚠️  Mock data for "notificationmessageeventbase" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		const result = toNotificationMessageEventResponse(mockData as NotificationMessageEventBasePrisma);

		expect(result).toBeDefined();

		const validated = NotificationMessageEventResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toNotificationMessageEventResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		expect(validated.data).toEqual(result);

		console.log('✅ toNotificationMessageEventResponse passed schema validation');
	});
});
