/**
 * Integration test for Stores mapper: toLocalLocationDetail
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Stores/localLocation.mappers.ts:14
 * Generated: 2025-11-21T13:06:35.815Z
 */

import { describe, it, expect } from '@jest/globals';
import { toLocalLocationDetail } from '../../../schemas/dto/Stores/localLocation.mappers.js';
import { LocalLocationDetailSchema } from '../../../schemas/dto/Stores/index.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';

describe('Stores Mapper - toLocalLocationDetail', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.localLocation;

		if (!mockData) {
			console.warn('⚠️  Mock data for "localLocation" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toLocalLocationDetail(mockData);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = LocalLocationDetailSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toLocalLocationDetail:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toLocalLocationDetail passed schema validation');
	});
});
