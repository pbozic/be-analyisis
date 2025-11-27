/**
 * Integration test for notification-preference mapper: toNotificationPreferenceResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/reservations/notification-preference/notification-preference.mappers.ts:13
 */

import { describe, it, expect } from '@jest/globals';
import { toNotificationPreferenceResponse } from '../../../../schemas/dto/reservations/notification-preference/notification-preference.mappers.js';
import { NotificationPreferenceResponseSchema } from '../../../../schemas/dto/reservations/notification-preference/notification-preference.dto.js';
import { NotificationPreferenceBasePrisma } from '../../../../prisma/includes/reservation/notification-preference.js';
import { mockPrismaData } from '../../../../tests/integration/mock-prisma.js';

describe('notification-preference Mapper - toNotificationPreferenceResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		const mockData = mockPrismaData.notificationpreferencebase;

		if (!mockData) {
			console.warn('⚠️  Mock data for "notificationpreferencebase" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		const result = toNotificationPreferenceResponse(mockData as NotificationPreferenceBasePrisma);

		expect(result).toBeDefined();

		const validated = NotificationPreferenceResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toNotificationPreferenceResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		expect(validated.data).toEqual(result);

		console.log('✅ toNotificationPreferenceResponse passed schema validation');
	});
});
