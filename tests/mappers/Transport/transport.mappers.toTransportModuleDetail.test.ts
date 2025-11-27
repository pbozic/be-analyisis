/**
 * Integration test for Transport mapper: toTransportModuleDetail
 *
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 *
 * Source: schemas/dto/Transport/transport.mappers.ts:5
 * Generated: 2025-11-21T13:06:35.822Z
 */

import { describe, it, expect } from '@jest/globals';
import { toTransportModuleDetail } from '../../../schemas/dto/Transport/transport.mappers.js';
import { TransportModuleDetailSchema } from '../../../schemas/dto/Transport/index.js';
import { mockPrismaData } from '../../integration/mock-prisma.js';
import { TransportModuleWithIncludesPrisma } from '../../../prisma/includes/transport.js';

describe('Transport Mapper - toTransportModuleDetail', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.transportmodule;

		if (!mockData) {
			console.warn('⚠️  Mock data for "transportmodulewithincludes" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = toTransportModuleDetail(mockData as TransportModuleWithIncludesPrisma);

		// Validate the result is defined
		expect(result).toBeDefined();

		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = TransportModuleDetailSchema.safeParse(result);

		if (!validated.success) {
			console.error('Schema validation failed for toTransportModuleDetail:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}

		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);

		console.log('✅ toTransportModuleDetail passed schema validation');
	});
});
