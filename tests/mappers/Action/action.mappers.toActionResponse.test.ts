/**
 * Integration test for Action mapper: toActionResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Action/action.mappers.ts:9
 */

import { describe, it, expect } from '@jest/globals';
import { toActionResponse } from '../../../schemas/dto/Action/action.mappers.js';
import { ActionResponseSchema } from '../../../schemas/dto/Action/action.dto.js';
import type { ActionDefaultPrisma } from '../../../prisma/includes/action.js';

describe('Action Mapper - toActionResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data - create minimal mock since action might not exist
		const mockData = {
			action_id: '550e8400-e29b-41d4-a716-446655440900',
			module: 'reservations' as const,
			name: 'Create Booking',
		};

		if (!mockData) {
			console.warn('⚠️  Mock data for "action" not found');
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
