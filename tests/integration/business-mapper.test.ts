/**
 * Integration test for Business mapper using isolated imports
 *
 * This test works around circular dependency issues by:
 * 1. Not importing the full schema chain
 * 2. Testing mapper output structure directly
 * 3. Validating critical fields only
 */

import { mockPrismaData } from './mock-prisma';

describe('Business Mapper - Isolated Test', () => {
	it('toGetBusinessResponse should map critical fields correctly', async () => {
		// Dynamically import only what we need
		const { toGetBusinessResponse } = await import('../../schemas/dto/Business/business.mappers.js');

		const mockBusiness = mockPrismaData.business;

		// Call mapper
		const result = toGetBusinessResponse(mockBusiness as any);

		// Validate structure (without full Zod schema)
		expect(result).toBeDefined();
		expect(result.business_id).toBe(mockBusiness.business_id);
		expect(result.email).toBe(mockBusiness.email);
		expect(result.telephone).toBe(mockBusiness.telephone);

		// Check business_details mapping (name is nested here, not at root)
		expect(result.business_details).toBeDefined();
		if (typeof result.business_details === 'object' && result.business_details !== null) {
			expect('name' in result.business_details || 'description' in result.business_details).toBe(true);
		}

		// Check IDs (stripped-down DTO has IDs only, not full relations)
		expect(result.address_id).toBeDefined();

		// Check date conversions
		expect(typeof result.created_at).toBe('string');
		expect(typeof result.updated_at).toBe('string');

		// Verify ISO format
		expect(result.created_at).toMatch(/^\d{4}-\d{2}-\d{2}T/);
		expect(result.updated_at).toMatch(/^\d{4}-\d{2}-\d{2}T/);

		console.log('✅ Business mapper test passed');
		console.log(`Business ID: ${result.business_id}`);
		console.log(`Email: ${result.email}`);
	});
});
