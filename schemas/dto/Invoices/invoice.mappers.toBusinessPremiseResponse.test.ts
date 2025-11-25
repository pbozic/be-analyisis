/**
 * Integration test for Invoices mapper: toBusinessPremiseResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Invoices/invoice.mappers.ts:11
 * Generated: 2025-11-21T13:06:35.780Z
 */

import { describe, it, expect } from '@jest/globals';
import { toBusinessPremiseResponse } from './invoice.mappers.js';
import { BusinessPremiseResponseSchema } from '../BusinessPremise/businessPremise.dto.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('Invoices Mapper - toBusinessPremiseResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.businesspremisewithincludes;

		if (!mockData) {
			console.warn('⚠️  Mock data for "businesspremisewithincludes" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toBusinessPremiseResponse(mockData as BusinessPremiseWithIncludesPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = BusinessPremiseResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toBusinessPremiseResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toBusinessPremiseResponse passed schema validation');
	});
});
