/**
 * Integration test for employee mapper: toEmployeeDAOResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/reservations/employee/employee.mappers.ts:17
 * Generated: 2025-11-21T13:06:35.799Z
 */

import { describe, it, expect } from '@jest/globals';
import { toEmployeeDAOResponse } from '../../../../schemas/dto/reservations/employee/employee.mappers.js';
import { EmployeeDAOResponseSchema } from '../../../../schemas/dto/reservations/employee/employee.dto.js';
import { mockPrismaData } from '../../../../tests/integration/mock-prisma.js';
import { EmployeeBasePrisma } from '../../../../prisma/includes/reservation/employee.js';

describe('employee Mapper - toEmployeeDAOResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.employeebase;

		if (!mockData) {
			console.warn('⚠️  Mock data for "employeebase" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toEmployeeDAOResponse(mockData as EmployeeBasePrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = EmployeeDAOResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toEmployeeDAOResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toEmployeeDAOResponse passed schema validation');
	});
});
