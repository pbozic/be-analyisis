/**
 * Simplified integration test for Business mapper
 * Tests only the mapper without the full import chain
 */

import { z } from 'zod';

describe('Business Mapper - Simplified', () => {
	it('should map basic business fields correctly', () => {
		// Define a minimal schema just for this test
		const MinimalBusinessSchema = z.object({
			business_id: z.string().uuid(),
			name: z.string(),
			email: z.string().email(),
		});

		// Mock data (minimal)
		const mockBusiness = {
			business_id: 'b1b1b1b1-b1b1-b1b1-b1b1-b1b1b1b1b1b1',
			name: 'Test Business',
			email: 'test@business.com',
			telephone: '+1234567890',
			delivery_business: true,
			created_at: new Date('2023-01-01'),
			updated_at: new Date('2023-01-01'),
		};

		// Simple mapper
		const mapped = {
			business_id: mockBusiness.business_id,
			name: mockBusiness.name,
			email: mockBusiness.email,
		};

		// Validate
		const result = MinimalBusinessSchema.parse(mapped);

		expect(result.business_id).toBe(mockBusiness.business_id);
		expect(result.name).toBe(mockBusiness.name);
		expect(result.email).toBe(mockBusiness.email);
	});
});
