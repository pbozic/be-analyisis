/**
 * Integration test for Tax mapper: toTaxRateRef
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Tax/tax.mappers.ts:17
 * Generated: 2025-11-21T13:06:35.818Z
 */

import { describe, it, expect } from '@jest/globals';
import { toTaxRateRef } from '../../../schemas/dto/Tax/tax.mappers.js';
import { TaxRateRefSchema } from '../../../schemas/dto/Tax/index.js';

describe('Tax Mapper - toTaxRateRef', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data - using category as tax mock doesn't exist yet
		const mockData = {
			tax_rates_id: '550e8400-e29b-41d4-a716-446655440500',
			name: 'VAT 22%',
		};

		if (!mockData) {
			console.warn('⚠️  Mock data for "tax" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toTaxRateRef(mockData);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = TaxRateRefSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toTaxRateRef:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toTaxRateRef passed schema validation');
	});
});
