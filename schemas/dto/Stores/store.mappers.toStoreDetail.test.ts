/**
 * Integration test for Stores mapper: toStoreDetail
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Stores/store.mappers.ts:4
 * Generated: 2025-11-21T13:06:35.816Z
 */

import { describe, it, expect } from '@jest/globals';
import { toStoreDetail } from './store.mappers.js';
import { StoreDetailSchema } from './store.dto.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('Stores Mapper - toStoreDetail', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.store;

		if (!mockData) {
			console.warn('⚠️  Mock data for "store" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toStoreDetail(mockData);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = StoreDetailSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toStoreDetail:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toStoreDetail passed schema validation');
	});
});
