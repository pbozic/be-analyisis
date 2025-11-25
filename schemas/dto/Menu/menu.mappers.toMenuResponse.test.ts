/**
 * Integration test for Menu mapper: toMenuResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Menu/menu.mappers.ts:85
 * Generated: 2025-11-21T13:06:35.783Z
 */

import { describe, it, expect } from '@jest/globals';
import { toMenuResponse } from './menu.mappers.js';
import { MenuBaseSchema } from './menu.dto.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('Menu Mapper - toMenuResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.menupayload;

		if (!mockData) {
			console.warn('⚠️  Mock data for "menupayload" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toMenuResponse(mockData as MenuPayload);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = MenuBaseSchema.safeParse(result);

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
