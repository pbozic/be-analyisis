/**
 * Integration test for notification-message mapper: toNotificationMessageResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/reservations/notification-message/notification-message.mappers.ts:13
 * Generated: 2025-11-21T13:06:35.805Z
 */

import { describe, it, expect } from '@jest/globals';
import { toNotificationMessageResponse } from './notification-message.mappers.js';
import { NotificationMessageResponseSchema } from './notification-message.dto';
import { mockPrismaData } from '../../../../tests/integration/mock-prisma.js';

describe('notification-message Mapper - toNotificationMessageResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.notificationmessagebase;

		if (!mockData) {
			console.warn('⚠️  Mock data for "notificationmessagebase" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toNotificationMessageResponse(mockData as NotificationMessageBasePrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = NotificationMessageResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toNotificationMessageResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toNotificationMessageResponse passed schema validation');
	});
});
