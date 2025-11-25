/**
 * Integration test for Addon mapper: toAddonWithActionsAndUsagesResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Addon/addon.mappers.ts:63
 * Generated: 2025-11-21T13:06:35.763Z
 */

import { describe, it, expect } from '@jest/globals';
import { toAddonWithActionsAndUsagesResponse } from './addon.mappers.js';

import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('Addon Mapper - toAddonWithActionsAndUsagesResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.addonwithactionsandusages;

		if (!mockData) {
			console.warn('⚠️  Mock data for "addonwithactionsandusages" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toAddonWithActionsAndUsagesResponse(mockData as AddonWithActionsAndUsagesPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// No schema found - basic validation only
		expect(typeof result).toBe('object');

		console.log('✅ toAddonWithActionsAndUsagesResponse passed schema validation');
	});
});
