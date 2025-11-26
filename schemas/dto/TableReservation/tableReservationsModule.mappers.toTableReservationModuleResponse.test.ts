/**
 * Integration test for TableReservation mapper: toTableReservationModuleResponse
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/TableReservation/tableReservationsModule.mappers.ts:13
 * Generated: 2025-11-21T13:06:35.818Z
 */

import { describe, it, expect } from '@jest/globals';
import { toTableReservationModuleResponse } from './tableReservationsModule.mappers.js';
import { TableReservationModuleResponseSchema } from './tableReservationsModule.dto.js';
import { mockPrismaData } from '../../../tests/integration/mock-prisma.js';

describe('TableReservation Mapper - toTableReservationModuleResponse', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.tableReservationModule;

		if (!mockData) {
			console.warn('⚠️  Mock data for "tableReservationModule" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toTableReservationModuleResponse(mockData);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = TableReservationModuleResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toTableReservationModuleResponse:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toTableReservationModuleResponse passed schema validation');
	});
});
