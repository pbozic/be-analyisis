/**
 * Integration test for LineItems mapper: toLineItemRef
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/LineItems/lineItems.mappers.ts:26
 * Generated: 2025-11-21T13:06:35.781Z
 */

import { describe, it, expect } from '@jest/globals';
import { toLineItemRef } from '../../../schemas/dto/LineItems/lineItems.mappers.js';
import { LineItemRefSchema } from '../../../schemas/dto/LineItems/index.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';

describe('LineItems Mapper - toLineItemRef', () => {
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
		const result = toLineItemRef(mockData);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = LineItemRefSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toLineItemRef:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toLineItemRef passed schema validation');
	});
});
