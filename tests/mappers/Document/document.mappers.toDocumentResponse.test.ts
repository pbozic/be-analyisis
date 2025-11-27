/**
 * Integration test for Document mapper: toDocumentResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Document/document.mappers.ts:9
 * Generated: 2025-11-21T13:06:35.778Z
 */

import { describe, it, expect } from '@jest/globals';
import { toDocumentResponse } from '../../../schemas/dto/Document/document.mappers.js';
import { DocumentResponseSchema } from '../../../schemas/dto/Document/index.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';
import { DocumentWithIncludesPrisma } from '../../../prisma/includes/document.js';

describe('Document Mapper - toDocumentResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.document;

		if (!mockData) {
			console.warn('⚠️  Mock data for "document" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toDocumentResponse(mockData as DocumentWithIncludesPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = DocumentResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toDocumentResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toDocumentResponse passed schema validation');
	});
});
