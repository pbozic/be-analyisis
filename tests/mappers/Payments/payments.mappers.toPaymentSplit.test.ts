/**
 * Integration test for Payments mapper: toPaymentSplit
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Payments/payments.mappers.ts:20
 */

import { describe, it, expect } from '@jest/globals';
import { toPaymentSplit } from '../../../schemas/dto/Payments/payments.mappers.js';
import { PaymentSplitSchema } from '../../../schemas/dto/Payments/payments.dto.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';
import type { payment_splits } from '@prisma/client';

describe('Payments Mapper - toPaymentSplit', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data - use payment_splits from payment if available, or create minimal mock
		const mockPayment = mockPrismaData.payment;
		const mockData = {
			payment_split_id: '550e8400-e29b-41d4-a716-446655440500',
			payment_id: '550e8400-e29b-41d4-a716-446655440501',
			status: 'PENDING' as const,
			type: 'TRANSFER' as const,
			destination_type: 'PLATFORM' as const,
			destination_id: null,
			payment_transfer_group_id: null,
			amount_regular: 1000,
			amount_credits: 0,
			metadata: null,
			external_id: null,
			created_at: new Date('2024-01-01'),
			updated_at: new Date('2024-01-01'),
		};

		if (!mockData) {
			console.warn('⚠️  Mock data for "payment_split" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toPaymentSplit(mockData as payment_splits);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = PaymentSplitSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toPaymentSplit:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toPaymentSplit passed schema validation');
	});
});
