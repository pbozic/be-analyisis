/**
 * Integration test for Menu mapper: toMenuItemResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Menu/menu.mappers.ts:30
 * Generated: 2025-11-21T13:06:35.783Z
 */

import { describe, it, expect } from '@jest/globals';
import { toMenuItemResponse } from './menu.mappers.js';
import { MenuItemResponseSchema } from './menu.dto.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('Menu Mapper - toMenuItemResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.menuitempayload;

		if (!mockData) {
			console.warn('⚠️  Mock data for "menuitempayload" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toMenuItemResponse(mockData as MenuItemPayload);

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
