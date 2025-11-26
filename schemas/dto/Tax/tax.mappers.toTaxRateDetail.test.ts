/**
 * Integration test for Tax mapper: toTaxRateDetail
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Tax/tax.mappers.ts:22
 * Generated: 2025-11-21T13:06:35.819Z
 */

import { describe, it, expect } from '@jest/globals';
import { toTaxRateDetail } from './tax.mappers.js';
import { TaxRateDetailSchema } from './tax.dto.js';

describe('Tax Mapper - toTaxRateDetail', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = {
			tax_rates_id: '550e8400-e29b-41d4-a716-446655440500',
			name: 'VAT 22%',
			description: 'Standard VAT rate',
			country: 'Slovenia',
			rate: 22,
			active: true,
			valid_from: new Date('2024-01-01'),
			created_at: new Date('2024-01-01'),
			updated_at: new Date('2024-01-01'),
			activated_at: new Date('2024-01-01'),
		};

		if (!mockData) {
			console.warn('⚠️  Mock data for "tax" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toTaxRateDetail(mockData);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = TaxRateDetailSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toTaxRateDetail:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toTaxRateDetail passed schema validation');
	});
});
