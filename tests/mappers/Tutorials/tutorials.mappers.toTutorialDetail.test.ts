/**
 * Integration test for Tutorials mapper: toTutorialDetail
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Tutorials/tutorials.mappers.ts:16
 * Generated: 2025-11-21T13:06:35.823Z
 */

import { describe, it, expect } from '@jest/globals';
import { toTutorialDetail } from '../../../schemas/dto/Tutorials/tutorials.mappers.js';
import { TutorialDetailSchema } from '../../../schemas/dto/Tutorials/index.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';

describe('Tutorials Mapper - toTutorialDetail', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.tutorial;

		if (!mockData) {
			console.warn('⚠️  Mock data for "tutorial" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toTutorialDetail(mockData);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = TutorialDetailSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toTutorialDetail:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toTutorialDetail passed schema validation');
	});
});
