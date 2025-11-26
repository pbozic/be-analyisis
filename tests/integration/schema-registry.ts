/**
 * Schema Registry - Bank of Knowledge
 *
 * Pre-loads all Zod schemas at test initialization to avoid circular dependency
 * issues during individual test imports. Acts as a centralized registry for:
 * - All DTO schemas (Base, Ref, Response)
 * - Mock data generators
 * - Type information
 *
 * This allows tests to access schemas without triggering circular imports.
 */

import { z } from 'zod';

type SchemaEntry = {
	schema: z.ZodType<any>;
	name: string;
	category: 'base' | 'ref' | 'response' | 'request' | 'other';
	modelName: string;
};

class SchemaRegistry {
	private schemas: Map<string, SchemaEntry> = new Map();
	private mockData: Map<string, any> = new Map();
	private initialized = false;

	/**
	 * Initialize the registry by loading all schemas
	 * This happens once at test setup, avoiding circular dependency issues
	 */
	async initialize() {
		if (this.initialized) return;

		console.log('🔄 Initializing Schema Registry...');

		try {
			// Load schemas in a specific order to minimize circular dependency issues
			await this.loadPrimitiveSchemas();
			await this.loadBaseSchemas();
			await this.loadRefSchemas();
			await this.loadResponseSchemas();
			await this.loadMockData();

			this.initialized = true;
			console.log(`✅ Schema Registry initialized with ${this.schemas.size} schemas`);
		} catch (error: any) {
			console.error('❌ Failed to initialize Schema Registry:', error.message);
			// Don't throw - allow tests to continue with partial registry
		}
	}

	private async loadPrimitiveSchemas() {
		// These have no dependencies
		try {
			const primitives = await import('../../schemas/primitives.js');
			this.register('UUID', primitives.UUID, 'other', 'primitives');
			this.register('Timestamp', primitives.Timestamp, 'other', 'primitives');
			console.log('  ✓ Loaded primitives');
		} catch (err: any) {
			console.warn('  ⚠ Could not load primitives:', err.message);
		}
	}

	private async loadBaseSchemas() {
		// Base schemas should have minimal dependencies
		const baseSchemas = [
			{ path: '../../schemas/dto/Address/address.dto.js', exports: ['AddressBaseSchema'], model: 'Address' },
			{ path: '../../schemas/dto/Files/file.dto.js', exports: ['FileBaseSchema'], model: 'File' },
			{ path: '../../schemas/dto/Document/document.dto.js', exports: ['DocumentBaseSchema'], model: 'Document' },
		];

		for (const { path, exports: exportNames, model } of baseSchemas) {
			try {
				const mod = await import(path);
				for (const name of exportNames) {
					if (mod[name]) {
						this.register(name, mod[name], 'base', model);
					}
				}
			} catch (err: any) {
				// Silently skip if module has issues
			}
		}
		console.log('  ✓ Loaded base schemas');
	}

	private async loadRefSchemas() {
		// Ref schemas should only have scalar fields
		const refSchemas = [
			{ path: '../../schemas/dto/Address/address.dto.js', exports: ['AddressRefSchema'], model: 'Address' },
			{ path: '../../schemas/dto/Files/file.dto.js', exports: ['FileRefSchema'], model: 'File' },
			{
				path: '../../schemas/dto/User/user.js',
				exports: ['UserRefSchema', 'BasicUserDataSchema'],
				model: 'User',
			},
			{ path: '../../schemas/dto/Business/business.js', exports: ['BusinessRefSchema'], model: 'Business' },
		];

		for (const { path, exports: exportNames, model } of refSchemas) {
			try {
				const mod = await import(path);
				for (const name of exportNames) {
					if (mod[name]) {
						this.register(name, mod[name], 'ref', model);
					}
				}
			} catch (err: any) {
				// Silently skip
			}
		}
		console.log('  ✓ Loaded ref schemas');
	}

	private async loadResponseSchemas() {
		// Response schemas may have circular dependencies - load best effort
		const responseSchemas = [
			{ path: '../../schemas/dto/Business/business.dto.js', exports: ['BusinessResponseDto'], model: 'Business' },
			{ path: '../../schemas/dto/User/user.js', exports: ['UserResponseSchema'], model: 'User' },
			{
				path: '../../schemas/dto/BusinessUser/businessUser.js',
				exports: ['BusinessUserResponseSchema'],
				model: 'BusinessUser',
			},
			{ path: '../../schemas/dto/Driver/driver.dto.js', exports: ['DriverDetailSchema'], model: 'Driver' },
		];

		for (const { path, exports: exportNames, model } of responseSchemas) {
			try {
				const mod = await import(path);
				for (const name of exportNames) {
					if (mod[name]) {
						this.register(name, mod[name], 'response', model);
					}
				}
			} catch (err: any) {
				console.warn(`  ⚠ Could not load ${path}:`, err.message.split('\n')[0]);
			}
		}
		console.log('  ✓ Loaded response schemas (best effort)');
	}

	private async loadMockData() {
		try {
			const mockPrisma = await import('./mock-prisma.js');
			this.mockData.set('business', mockPrisma.mockPrismaData.business);
			this.mockData.set('user', mockPrisma.mockPrismaData.user);
			this.mockData.set('businessUser', mockPrisma.mockPrismaData.businessUser);
			console.log('  ✓ Loaded mock data');
		} catch (err: any) {
			console.warn('  ⚠ Could not load mock data:', err.message);
		}
	}

	/**
	 * Register a schema in the registry
	 */
	register(name: string, schema: z.ZodType<any>, category: SchemaEntry['category'], modelName: string) {
		this.schemas.set(name, { schema, name, category, modelName });
	}

	/**
	 * Get a schema by name
	 */
	getSchema(name: string): z.ZodType<any> | undefined {
		return this.schemas.get(name)?.schema;
	}

	/**
	 * Get all schemas for a model
	 */
	getSchemasForModel(modelName: string): SchemaEntry[] {
		return Array.from(this.schemas.values()).filter((entry) => entry.modelName === modelName);
	}

	/**
	 * Get mock data by model name
	 */
	getMockData(modelName: string): any {
		return this.mockData.get(modelName);
	}

	/**
	 * Store mock data for a model
	 */
	setMockData(modelName: string, data: any) {
		this.mockData.set(modelName, data);
	}

	/**
	 * List all available schemas
	 */
	listSchemas(): string[] {
		return Array.from(this.schemas.keys());
	}

	/**
	 * Check if registry is initialized
	 */
	isInitialized(): boolean {
		return this.initialized;
	}

	/**
	 * Clear the registry (for testing)
	 */
	clear() {
		this.schemas.clear();
		this.mockData.clear();
		this.initialized = false;
	}
}

// Singleton instance
export const schemaRegistry = new SchemaRegistry();

/**
 * Helper to ensure registry is initialized before tests
 */
export async function ensureSchemaRegistry() {
	if (!schemaRegistry.isInitialized()) {
		await schemaRegistry.initialize();
	}
	return schemaRegistry;
}
