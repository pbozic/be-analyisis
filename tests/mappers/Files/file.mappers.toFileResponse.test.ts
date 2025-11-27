/**
 * Integration test for Files mapper: toFileResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Files/file.mappers.ts:12
 */

import { describe, it, expect } from '@jest/globals';
import { toFileResponse } from '../../../schemas/dto/Files/file.mappers.js';
import { FileResponseSchema } from '../../../schemas/dto/Files/index.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';
import { FileWithIncludesPrisma } from '../../../prisma/includes/files.js';

describe('Files Mapper - toFileResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.file;

		if (!mockData) {
			console.warn('⚠️  Mock data for "file" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toFileResponse(mockData as FileWithIncludesPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = FileResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toFileResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toFileResponse passed schema validation');
	});
});
