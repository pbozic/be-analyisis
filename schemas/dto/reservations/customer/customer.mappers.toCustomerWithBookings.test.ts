/**
 * Integration test for customer mapper: toCustomerWithBookings
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/reservations/customer/customer.mappers.ts:35
 * Generated: 2025-11-21T13:06:35.798Z
 */

import { describe, it, expect } from '@jest/globals';
import { toCustomerWithBookings } from './customer.mappers.js';
import { CustomerDAOResponseSchema } from './customer.dto';
import { mockPrismaData } from '../../../../tests/integration/mock-prisma.js';

describe('customer Mapper - toCustomerWithBookings', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.customerwithbookings;

		if (!mockData) {
			console.warn('⚠️  Mock data for "customerwithbookings" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toCustomerWithBookings(mockData as CustomerWithBookingsPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = CustomerDAOResponseSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toCustomerWithBookings:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toCustomerWithBookings passed schema validation');
	});
});
