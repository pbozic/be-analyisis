/**
 * Integration test for notification-mapping mapper: toNotificationMappingResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/reservations/notification-mapping/notification-mapping.mappers.ts:13
 * Generated: 2025-11-21T13:06:35.804Z
 */

import { describe, it, expect } from '@jest/globals';
import { toNotificationMappingResponse } from './notification-mapping.mappers.js';
import { NotificationMappingResponseSchema } from './notification-mapping.dto';
import { mockPrismaData } from '../../../../tests/integration/mock-prisma.js';

describe('notification-mapping Mapper - toNotificationMappingResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.notificationmappingbase;

		if (!mockData) {
			console.warn('⚠️  Mock data for "notificationmappingbase" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toNotificationMappingResponse(mockData as NotificationMappingBasePrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = NotificationMappingResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toNotificationMappingResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toNotificationMappingResponse passed schema validation');
	});
});
