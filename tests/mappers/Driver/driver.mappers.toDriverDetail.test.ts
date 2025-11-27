/**
 * Integration test for Driver mapper: toDriverDetail
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Driver/driver.mappers.ts:71
 * Generated: 2025-11-21T13:06:35.779Z
 */

import { describe, it, expect } from '@jest/globals';
import { mockPrismaData } from '../../integration/mock-prisma.js';
import { DriverDetailSchema } from '../../../schemas/dto/Driver/index.js';
import { toDriverDetail } from '../../../schemas/dto/Driver/driver.mappers.js';

describe('Driver Mapper - toDriverDetail', () => {
	it('should map Prisma data to DTO and validate against schema', async () => {
		// Get mock data
		const mockData = mockPrismaData.driver;

		if (!mockData || Object.keys(mockData).length === 0) {
			console.warn('⚠️  Mock data for driver not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		const result = toDriverDetail(mockData as unknown, mockPrismaData.user);

		expect(result).toBeDefined();

		const validated = DriverDetailSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toDriverDetail:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		expect(validated.data).toEqual(result);
		console.log('✅ toDriverDetail passed schema validation');
	});
});
