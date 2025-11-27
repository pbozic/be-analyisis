/**
 * Integration test for BusinessTeam mapper: toBusinessTeamResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/BusinessTeam/businessTeam.mappers.ts:13
 */

import { describe, it, expect } from '@jest/globals';
import { toBusinessTeamResponse } from '../../../schemas/dto/BusinessTeam/businessTeam.mappers.js';
import { BusinessTeamResponseSchema } from '../../../schemas/dto/BusinessTeam/index.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';
import { BusinessTeamDefaultPrisma } from '../../../prisma/includes/businessTeam.js';

describe('BusinessTeam Mapper - toBusinessTeamResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.businessteamwithusers;

		if (!mockData) {
			console.warn('⚠️  Mock data for "businessTeam" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toBusinessTeamResponse(mockData as BusinessTeamDefaultPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = BusinessTeamResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toBusinessTeamResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toBusinessTeamResponse passed schema validation');
	});
});
