/**
 * Integration test for Invoices mapper: toElectronicDeviceResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Invoices/invoice.mappers.ts:21
 */

import { describe, it, expect } from '@jest/globals';
import { toElectronicDeviceResponse } from '../../../schemas/dto/Invoices/invoice.mappers.js';
import { ElectronicDeviceResponseSchema } from '../../../schemas/dto/ElectronicDevice/index.js';
import { ElectronicDeviceWithIncludesPrisma } from '../../../prisma/includes/electronicDevice.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('Invoices Mapper - toElectronicDeviceResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data - use electronic_device from business_premise
		const mockData = {
			business_premise_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
			electronic_device_id: '550e8400-e29b-41d4-a716-446655440001',
			name: 'Tablet Device 01',
			active: true,
			created_at: new Date('2024-01-01'),
			updated_at: new Date('2024-01-01'),
			business_premise: mockPrismaData.businesspremise,
			assignments: [],
		};

		if (!mockData) {
			console.warn('⚠️  Mock data for "electronicDevice" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toElectronicDeviceResponse(mockData as ElectronicDeviceWithIncludesPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = ElectronicDeviceResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toElectronicDeviceResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toElectronicDeviceResponse passed schema validation');
	});
});
