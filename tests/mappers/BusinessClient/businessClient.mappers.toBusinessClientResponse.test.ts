/**
 * Integration test for BusinessClient mapper: toBusinessClientResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/BusinessClient/businessClient.mappers.ts:22
 */

import { describe, it, expect } from '@jest/globals';
import { toBusinessClientResponse } from '../../../schemas/dto/BusinessClient/businessClient.mappers.js';
import { BusinessClientResponseSchema } from '../../../schemas/dto/BusinessClient/index.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';
import { BusinessClientDefaultPrisma } from '../../../prisma/includes/businessClient.js';

describe('BusinessClient Mapper - toBusinessClientResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data - use business_client from businessbyid or create minimal mock
		const mockData = mockPrismaData.businessbyid?.crm_module?.business_clients?.[0] || {
			business_clients_id: '550e8400-e29b-41d4-a716-446655440400',
			crm_module_id: '550e8400-e29b-41d4-a716-446655440401',
			first_name: 'Client',
			last_name: 'Name',
			email: 'client@example.com',
			telephone: '123456789',
			telephone_code: '+386',
			created_at: new Date('2024-01-01'),
			updated_at: new Date('2024-01-01'),
		};

		if (!mockData) {
			console.warn('⚠️  Mock data for "businessClient" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toBusinessClientResponse(mockData as BusinessClientDefaultPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = BusinessClientResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toBusinessClientResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toBusinessClientResponse passed schema validation');
	});
});
