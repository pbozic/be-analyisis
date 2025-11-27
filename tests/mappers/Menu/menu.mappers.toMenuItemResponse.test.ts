/**
 * Integration test for Menu mapper: toMenuItemResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Menu/menu.mappers.ts:30
 */

import { describe, it, expect } from '@jest/globals';
import { toMenuItemResponse } from '../../../schemas/dto/Menu/menu.mappers.js';
import { MenuItemResponseSchema } from '../../../schemas/dto/Menu/index.js';

describe('Menu Mapper - toMenuItemResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		const mockData = {
			menu_item_id: '550e8400-e29b-41d4-a716-446655440331',
			name_translatable_id: '550e8400-e29b-41d4-a716-446655440332',
			description_translatable_id: '550e8400-e29b-41d4-a716-446655440333',
			spicy_level: null,
			unit_size: null,
			price: 850,
			discount: null,
			sides: [],
			extras: [],
			ingredients: null,
			availability: [],
			stores_id: null,
			food_drinks_id: null,
			menu_category_id: null,
			daily_date: null,
			image_file_id: null,
			requires_id_check: false,
			is_enabled: true,
			is_copy: false,
			menu_category_order_index: null,
			allergens_text: null,
			ingredients_text: null,
			usage_text: null,
			origin_text: null,
			is_weighted: false,
			weight_quantity: null,
			stock: 1,
			latest_version_id: null,
			tax_rates_id: null,
			created_at: new Date('2024-01-01'),
			updated_at: new Date('2024-01-01'),
			menu_category: null,
			documents: [],
			allergens: [],
		};

		if (!mockData) {
			console.warn('⚠️  Mock data for "menuItem" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toMenuItemResponse(mockData as any);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = MenuItemResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toMenuItemResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toMenuItemResponse passed schema validation');
	});
});
