/**
 * Integration test for Action mapper: toActionResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Action/action.mappers.ts:9
 * Generated: 2025-11-21T13:06:35.759Z
 */

import { describe, it, expect } from '@jest/globals';
import { toActionResponse } from './action.mappers.js';
import { ActionResponseSchema } from './action.dto.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('Action Mapper - toActionResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.actiondefault;

		if (!mockData) {
			console.warn('⚠️  Mock data for "actiondefault" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toActionResponse(mockData as ActionDefaultPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = ActionResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toActionResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toActionResponse passed schema validation');
	});
});
