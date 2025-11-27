/**
 * Integration test for Category mapper: toCategoryResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Category/category.mappers.ts:9
 */

import { describe, it, expect } from '@jest/globals';
import { toCategoryResponse } from '../../../schemas/dto/Category/category.mappers.js';
import { CategoryResponseSchema } from '../../../schemas/dto/Category/index.js';
import type { CategoryWithIncludesPrisma } from '../../../prisma/includes/categories.js';

describe('Category Mapper - toCategoryResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data - create minimal mock since category might not exist
		const mockData = {
			categories_id: '550e8400-e29b-41d4-a716-446655440450',
			name: 'Italian Cuisine',
			description: 'Traditional Italian dishes',
			tag: 'italian',
			icon_file_id: null,
			category_type: 'MENU' as const,
			parent_categories_id: null,
			translatable_id: '550e8400-e29b-41d4-a716-446655440451',
			created_at: new Date('2024-01-01'),
			updated_at: new Date('2024-01-01'),
			deleted_at: null,
			parent_category: null,
			sub_categories: [],
			translatable: {
				translations: [],
			},
			icon: null,
		};

		if (!mockData) {
			console.warn('⚠️  Mock data for "category" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toCategoryResponse(mockData as CategoryWithIncludesPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = CategoryResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toCategoryResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toCategoryResponse passed schema validation');
	});
});
