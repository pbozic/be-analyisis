/**
 * Integration test for Group mapper: toGroupUserWithAllowanceResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Group/group.mappers.ts:21
 */

import { describe, it, expect } from '@jest/globals';
import { toGroupUserWithAllowanceResponse } from '../../../schemas/dto/Group/group.mappers.js';
import { GroupUserWithAllowanceResponseSchema } from '../../../schemas/dto/Group/index.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';

describe('Group Mapper - toGroupUserWithAllowanceResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data - create mock with allowance
		const mockData = {
			group_user_id: '550e8400-e29b-41d4-a716-446655440600',
			parent_user_id: '550e8400-e29b-41d4-a716-446655440010',
			child_user_id: '550e8400-e29b-41d4-a716-446655440011',
			enabled: true,
			created_at: new Date('2024-01-01'),
			updated_at: new Date('2024-01-01'),
			allowance: mockPrismaData.businessUser?.allowance || null,
		};

		if (!mockData) {
			console.warn('⚠️  Mock data for "groupUser" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toGroupUserWithAllowanceResponse(mockData as any);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = GroupUserWithAllowanceResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toGroupUserWithAllowanceResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toGroupUserWithAllowanceResponse passed schema validation');
	});
});
