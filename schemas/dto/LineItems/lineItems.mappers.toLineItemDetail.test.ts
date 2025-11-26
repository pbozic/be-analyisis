/**
 * Integration test for LineItems mapper: toLineItemDetail
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/LineItems/lineItems.mappers.ts:31
 * Generated: 2025-11-21T13:06:35.782Z
 */

import { describe, it, expect } from '@jest/globals';
import { toLineItemDetail } from './lineItems.mappers.js';
import { LineItemDetailSchema } from './lineItems.dto.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('LineItems Mapper - toLineItemDetail', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.lineItem;

		if (!mockData) {
			console.warn('⚠️  Mock data for "lineItem" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toLineItemDetail(mockData);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = LineItemDetailSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toLineItemDetail:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toLineItemDetail passed schema validation');
	});
});
