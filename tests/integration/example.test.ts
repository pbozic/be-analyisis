/**
 * Example integration test demonstrating DAO → Mapper → Zod validation
 *
 * This shows the correct pattern for testing your refactored DAOs and mappers.
 * Uses mock data instead of real database.
 */

import { mockPrismaData } from './mock-prisma';

// Mock the prisma client before importing DAOs
jest.mock('../../prisma/prisma.js', () => ({
	default: {
		business: {
			findFirst: jest.fn(),
			findUnique: jest.fn(),
		},
		$disconnect: jest.fn(),
	},
}));

describe('Integration Test Example: Business', () => {
	/**
	 * Test pattern:
	 * 1. Mock DAO to return predefined Prisma-shaped data
	 * 2. Pass result through mapper
	 * 3. Validate with Zod schema
	 * 4. Assert expected fields are present
	 */
	it('getBusinessById → mapper → schema validation', async () => {
		console.log('📝 Starting integration test...');

		// Import after mocking
		let toGetBusinessResponse: any;
		let BusinessResponseDto: any;

		try {
			console.log('Importing mapper...');
			// @ts-ignore - Runtime imports
			const mapperModule = await import('../../schemas/dto/Business/business.mappers.ts');
			toGetBusinessResponse = mapperModule.toGetBusinessResponse;
			console.log('✅ Mapper imported');
		} catch (error: any) {
			console.error('❌ Failed to import mapper:', error.message);
			console.error('Stack:', error.stack);
			throw error;
		}

		try {
			console.log('Importing schema...');
			// @ts-ignore
			const schemaModule = await import('../../schemas/dto/Business/business.dto.ts');
			BusinessResponseDto = schemaModule.BusinessResponseDto;
			console.log('✅ Schema imported');
		} catch (error: any) {
			console.error('❌ Failed to import schema:', error.message);
			console.error('Stack:', error.stack);
			throw error;
		}

		// Use mock data (simulates what DAO would return from Prisma)
		const mockDaoResult = mockPrismaData.business;
		console.log(`📊 Using mock business_id: ${mockDaoResult.business_id}`);

		// Step 1: Map Prisma result to DTO
		let mappedResult: any;
		console.log('🗺️  Calling mapper...');
		try {
			mappedResult = toGetBusinessResponse(mockDaoResult);
			console.log(`✅ Mapper succeeded`);
			console.log(`Mapped keys: ${Object.keys(mappedResult).join(', ')}`);
		} catch (error) {
			console.error(`❌ Mapper failed:`, error);
			throw error;
		}

		expect(mappedResult).toBeDefined();

		// Step 2: Validate with Zod schema
		console.log('✅ Validating with Zod...');
		try {
			const validated = BusinessResponseDto.parse(mappedResult);
			console.log(`✅ Zod validation passed`);

			// Verify critical fields
			expect(validated.business_id).toBe(mockDaoResult.business_id);
			console.log(`✅ business_id matches: ${validated.business_id}`);
			console.log('🎉 Test completed successfully!');
		} catch (error: any) {
			console.error(`❌ Zod validation failed:`);
			if (error.errors) {
				error.errors.forEach((err: any) => {
					console.error(`  - ${err.path.join('.')}: ${err.message}`);
				});
			} else {
				console.error(error.message);
			}
			console.error('Mapped result:', JSON.stringify(mappedResult, null, 2));
			throw error;
		}
	});
});
