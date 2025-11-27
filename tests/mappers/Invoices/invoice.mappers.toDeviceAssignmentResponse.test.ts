/**
 * Integration test for Invoices mapper: toDeviceAssignmentResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Invoices/invoice.mappers.ts:27
 */

import { describe, it, expect } from '@jest/globals';
import { toDeviceAssignmentResponse } from '../../../schemas/dto/Invoices/invoice.mappers.js';
import { DeviceAssignmentResponseSchema } from '../../../schemas/dto/DeviceAssignment/index.js';
import { DeviceAssignmentWithIncludesPrisma } from '../../../prisma/includes/deviceAssignment.js';

describe('Invoices Mapper - toDeviceAssignmentResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data - create minimal mock since device_assignment might not exist
		const mockData = {
			device_assignment_id: '550e8400-e29b-41d4-a716-446655440002',
			driver_id: '550e8400-e29b-41d4-a716-446655440231',
			business_premise_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
			electronic_device_id: '550e8400-e29b-41d4-a716-446655440001',
			valid_from: new Date('2024-01-01T08:00:00.000Z'),
			valid_to: null,
			created_at: new Date('2024-01-01'),
			device: {
				business_premise_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
				electronic_device_id: '550e8400-e29b-41d4-a716-446655440001',
				name: 'Tablet Device 01',
				active: true,
			},
		};

		if (!mockData) {
			console.warn('⚠️  Mock data for "deviceAssignment" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toDeviceAssignmentResponse(mockData as DeviceAssignmentWithIncludesPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = DeviceAssignmentResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toDeviceAssignmentResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toDeviceAssignmentResponse passed schema validation');
	});
});
