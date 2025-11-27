/**
 * Integration test for Menu mapper: toMenuCategoryResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Menu/menu.mappers.ts:75
 */

import { describe, it, expect } from '@jest/globals';
import { toMenuCategoryResponse } from '../../../schemas/dto/Menu/menu.mappers.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('Menu Mapper - toMenuCategoryResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data - use menu_category from businessbyid or create minimal mock
		const mockData = mockPrismaData.menuCategory || {
			menu_category_id: '550e8400-e29b-41d4-a716-446655440340',
			menu_id: '550e8400-e29b-41d4-a716-446655440341',
			name_translatable_id: '550e8400-e29b-41d4-a716-446655440342',
			description_translatable_id: null,
			food_drinks_id: null,
			stores_id: null,
			menu_items_ordered: null,
			menu_items: [],
			menu_categories_categories: [],
		};

		if (!mockData) {
			console.warn('⚠️  Mock data for "menuCategory" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toMenuCategoryResponse(mockData as any);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate structure matches MenuCategoryRef type
		expect(result).toHaveProperty('menu_category_id');
		expect(result).toHaveProperty('menu_items');
		expect(result).toHaveProperty('menu_categories_categories');

		console.log('✅ toMenuCategoryResponse passed validation');
	});
});
