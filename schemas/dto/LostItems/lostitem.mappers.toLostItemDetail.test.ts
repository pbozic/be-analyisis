/**
 * Integration test for LostItems mapper: toLostItemDetail
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/LostItems/lostitem.mappers.ts:4
 * Generated: 2025-11-21T13:06:35.782Z
 */

import { describe, it, expect } from '@jest/globals';
import { toLostItemDetail } from './lostitem.mappers.js';
import { LostItemDetailSchema } from './lostitem.dto.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('LostItems Mapper - toLostItemDetail', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.lostItem;

		if (!mockData) {
			console.warn('⚠️  Mock data for "lostItem" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toLostItemDetail(mockData);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = LostItemDetailSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toLostItemDetail:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toLostItemDetail passed schema validation');
	});
});
