/**
 * Integration test for notification-template mapper: toNotificationTemplateResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/reservations/notification-template/notification-template.mappers.ts:13
 * Generated: 2025-11-21T13:06:35.806Z
 */

import { describe, it, expect } from '@jest/globals';
import { toNotificationTemplateResponse } from './notification-template.mappers.js';
import { NotificationTemplateResponseSchema } from './notification-template.dto';
import { mockPrismaData } from '../../../../tests/integration/mock-prisma.js';

describe('notification-template Mapper - toNotificationTemplateResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.notificationtemplatebase;

		if (!mockData) {
			console.warn('⚠️  Mock data for "notificationtemplatebase" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toNotificationTemplateResponse(mockData as NotificationTemplateBasePrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = NotificationTemplateResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toNotificationTemplateResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toNotificationTemplateResponse passed schema validation');
	});
});
