/**
 * Integration test for notification-template-version mapper: toNotificationTemplateVersionResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/reservations/notification-template-version/notification-template-version.mappers.ts:17
 */

import { describe, it, expect } from '@jest/globals';
import { toNotificationTemplateVersionResponse } from '../../../../schemas/dto/reservations/notification-template-version/notification-template-version.mappers.js';
import { NotificationTemplateVersionResponseSchema } from '../../../../schemas/dto/reservations/notification-template-version/notification-template-version.dto.js';
import { NotificationTemplateVersionBasePrisma } from '../../../../prisma/includes/reservation/notification-template-version.js';
import { mockPrismaData } from '../../../../tests/integration/mock-prisma.js';

describe('notification-template-version Mapper - toNotificationTemplateVersionResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		const mockData = mockPrismaData.notificationtemplateversionbase;

		if (!mockData) {
			console.warn('⚠️  Mock data for "notificationtemplateversionbase" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		const result = toNotificationTemplateVersionResponse(mockData as NotificationTemplateVersionBasePrisma);

		expect(result).toBeDefined();

		const validated = NotificationTemplateVersionResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toNotificationTemplateVersionResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		expect(validated.data).toEqual(result);

		console.log('✅ toNotificationTemplateVersionResponse passed schema validation');
	});
});
