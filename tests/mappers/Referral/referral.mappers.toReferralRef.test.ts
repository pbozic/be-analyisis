/**
 * Integration test for Referral mapper: toReferralRef
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Referral/referral.mappers.ts:25
 * Generated: 2025-11-21T13:06:35.789Z
 */

import { describe, it, expect } from '@jest/globals';
import { toReferralRef } from '../../../schemas/dto/Referral/referral.mappers.js';
import { ReferralRefSchema } from '../../../schemas/dto/Referral/index.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';

describe('Referral Mapper - toReferralRef', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.referral;

		if (!mockData) {
			console.warn('⚠️  Mock data for "referral" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toReferralRef(mockData);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = ReferralRefSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toReferralRef:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toReferralRef passed schema validation');
	});
});
