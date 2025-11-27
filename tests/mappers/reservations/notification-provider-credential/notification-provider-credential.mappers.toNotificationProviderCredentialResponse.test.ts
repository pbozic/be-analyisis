/**
 * Integration test for notification-provider-credential mapper: toNotificationProviderCredentialResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/reservations/notification-provider-credential/notification-provider-credential.mappers.ts:13
 */

import { describe, it, expect } from '@jest/globals';
import { toNotificationProviderCredentialResponse } from '../../../../schemas/dto/reservations/notification-provider-credential/notification-provider-credential.mappers.js';
import { NotificationProviderCredentialResponseSchema } from '../../../../schemas/dto/reservations/notification-provider-credential/notification-provider-credential.dto.js';
import { NotificationProviderCredentialBasePrisma } from '../../../../prisma/includes/reservation/notification-provider-credential.js';
import { mockPrismaData } from '../../../../tests/integration/mock-prisma.js';

describe('notification-provider-credential Mapper - toNotificationProviderCredentialResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		const mockData = mockPrismaData.notificationprovidercredentialbase;

		if (!mockData) {
			console.warn('⚠️  Mock data for "notificationprovidercredentialbase" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		const result = toNotificationProviderCredentialResponse(mockData as NotificationProviderCredentialBasePrisma);

		expect(result).toBeDefined();

		const validated = NotificationProviderCredentialResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toNotificationProviderCredentialResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		expect(validated.data).toEqual(result);

		console.log('✅ toNotificationProviderCredentialResponse passed schema validation');
	});
});
