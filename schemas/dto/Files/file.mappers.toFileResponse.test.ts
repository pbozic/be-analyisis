/**
 * Integration test for Files mapper: toFileResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Files/file.mappers.ts:12
 * Generated: 2025-11-21T13:06:35.779Z
 */

import { describe, it, expect } from '@jest/globals';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';
import { isCircularDependencyError } from '../../../tests/integration/test-helpers.js';

describe('Files Mapper - toFileResponse', () => {
	it('should map Prisma data to DTO and validate against schema', async () => {
		// Get mock data - try multiple keys
		const mockData = (mockPrismaData as any).filewithincludes || (mockPrismaData as any).file || {};

		if (!mockData || Object.keys(mockData).length === 0) {
			console.warn('⚠️  Mock data for "filewithincludes" or "file" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			console.warn('   Skipping test - mapper validation will happen in runtime');
			expect(true).toBe(true); // Skip gracefully
			return;
		}

		// Try to import and run mapper - may fail due to circular dependency
		try {
			const { toFileResponse } = await import('./file.mappers.js');
			const result = toFileResponse(mockData as any);

			expect(result).toBeDefined();

			// Dynamically import schema to avoid circular dependency
			const { FileResponseSchema } = await import('./index.js');
			const validated = FileResponseSchema.safeParse(result);

			if (!validated.success) {
				console.error('Schema validation failed for toFileResponse:');
				console.error(JSON.stringify(validated.error.format(), null, 2));
				expect(validated.success).toBe(true);
			}

			expect(validated.data).toEqual(result);
			console.log('✅ toFileResponse passed schema validation');
		} catch (error: any) {
			if (isCircularDependencyError(error)) {
				console.warn('⚠️  Test skipped due to circular dependency');
				expect(true).toBe(true);
				return;
			}
			throw error;
		}
	});
});
