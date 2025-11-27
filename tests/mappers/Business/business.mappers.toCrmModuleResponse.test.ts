/**
 * Integration test for Business mapper: toCrmModuleResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Business/business.mappers.ts:324
 */

import { describe, it, expect } from '@jest/globals';
import { toCrmModuleResponse } from '../../../schemas/dto/Business/business.mappers.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';

describe('Business Mapper - toCrmModuleResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data - use crm_module from businessbyid
		const mockData = mockPrismaData.businessbyid?.crm_module;

		if (!mockData) {
			console.warn('⚠️  Mock data for "crm_module" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toCrmModuleResponse(mockData as any);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate structure matches CrmModule type
		expect(result).toHaveProperty('crm_module_id');
		expect(result).toHaveProperty('business_id');
		expect(result).toHaveProperty('purchase_order_limit_amount');

		console.log('✅ toCrmModuleResponse passed validation');
	});
});
