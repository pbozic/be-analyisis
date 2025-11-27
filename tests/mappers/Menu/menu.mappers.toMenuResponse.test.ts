/**
 * Integration test for Menu mapper: toMenuResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Menu/menu.mappers.ts:85
 */

import { describe, it, expect } from '@jest/globals';
import { toMenuResponse } from '../../../schemas/dto/Menu/menu.mappers.js';
import { MenuDetailSchema } from '../../../schemas/dto/Menu/menu.dto.js';

describe('Menu Mapper - toMenuResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		const mockData = {
			menu_id: '550e8400-e29b-41d4-a716-446655440341',
			stores_id: null,
			food_drinks_id: null,
			menu_categories_ordered: null,
			created_at: new Date('2024-01-01'),
			updated_at: new Date('2024-01-01'),
			categories: [],
		};

		if (!mockData) {
			console.warn('⚠️  Mock data for "menu" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toMenuResponse(mockData as any);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = MenuDetailSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toMenuResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toMenuResponse passed schema validation');
	});
});
