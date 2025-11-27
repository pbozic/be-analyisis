/**
 * Integration test for Subscription mapper: toSubscriptionResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Subscription/subscription.mappers.ts:8
 * Generated: 2025-11-21T13:06:35.816Z
 */

import { describe, it, expect } from '@jest/globals';
import { toSubscriptionResponse } from '../../../schemas/dto/Subscription/subscription.mappers.js';
import { SubscriptionResponseSchema } from '../../../schemas/dto/Subscription/index.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';
import { SubscriptionWithIncludesPrisma } from '../../../prisma/includes/subscriptions.js';

describe('Subscription Mapper - toSubscriptionResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.subscription;

		if (!mockData) {
			console.warn('⚠️  Mock data for "subscription" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toSubscriptionResponse(mockData as SubscriptionWithIncludesPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = SubscriptionResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toSubscriptionResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toSubscriptionResponse passed schema validation');
	});
});
