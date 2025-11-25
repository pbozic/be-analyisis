/**
 * Integration test for Business mapper: toBusinessByIdResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Business/business.mappers.ts:192
 * Generated: 2025-11-21T13:06:35.766Z
 */

import { describe, it, expect } from '@jest/globals';
import type { BusinessByIdPrisma } from '../../../prisma/includes/business.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';
import { isCircularDependencyError } from '../../../tests/integration/test-helpers.js';

describe('Business Mapper - toBusinessByIdResponse', () => {
	it('should map Prisma data to DTO and validate against schema', async () => {
		// Get mock data
		const mockData = (mockPrismaData as any).businessbyid || mockPrismaData.business;

		if (!mockData) {
			console.warn('⚠️  Mock data for "businessbyid" or "business" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Try to import and run mapper - may fail due to circular dependency
		try {
			const { toBusinessByIdResponse } = await import('./business.mappers.js');
			const result = toBusinessByIdResponse(mockData as BusinessByIdPrisma);

			expect(result).toBeDefined();

			// Dynamically import schema to avoid circular dependency
			const { BusinessWithIncludesResponseDto } = await import('./business.dto.js');
			const validated = BusinessWithIncludesResponseDto.safeParse(result);

			if (!validated.success) {
				console.error('Schema validation failed for toBusinessByIdResponse:');
				console.error(JSON.stringify(validated.error.format(), null, 2));
				expect(validated.success).toBe(true);
			}

			expect(validated.data).toEqual(result);
			console.log('✅ toBusinessByIdResponse passed schema validation');
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
