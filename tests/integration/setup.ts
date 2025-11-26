/**
 * Global test setup
 *
 * Initializes the schema registry before any tests run.
 * This ensures all schemas are loaded once, avoiding circular dependency
 * issues during individual test imports.
 */

export default async function globalSetup() {
	console.log('\n🔧 Running global test setup...\n');

	try {
		// Dynamically import to work with Jest's module system
		const { schemaRegistry } = await import('./schema-registry.js');
		await schemaRegistry.initialize();
		console.log('\n✅ Global setup complete\n');
	} catch (error: any) {
		console.error('\n❌ Global setup failed:', error.message);
		console.error('Tests will continue but schema validation may be limited\n');
	}
}
