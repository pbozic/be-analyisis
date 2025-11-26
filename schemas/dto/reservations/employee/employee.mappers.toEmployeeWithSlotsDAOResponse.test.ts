/**
 * Integration test for employee mapper: toEmployeeWithSlotsDAOResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/reservations/employee/employee.mappers.ts:91
 * Generated: 2025-11-21T13:06:35.800Z
 */

import { describe, it, expect } from '@jest/globals';
import { toEmployeeWithSlotsDAOResponse } from './employee.mappers.js';
import { EmployeeWithSlotsDAOResponseSchema } from './employee.dto';
import { mockPrismaData } from '../../../../tests/integration/mock-prisma.js';

describe('employee Mapper - toEmployeeWithSlotsDAOResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.employee;

		if (!mockData) {
			console.warn('⚠️  Mock data for "employee" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toEmployeeWithSlotsDAOResponse(mockData as EmployeeWithSlotsPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = EmployeeWithSlotsDAOResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toEmployeeWithSlotsDAOResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toEmployeeWithSlotsDAOResponse passed schema validation');
	});
});
