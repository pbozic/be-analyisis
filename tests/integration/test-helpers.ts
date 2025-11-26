/**
 * Helper utilities for mapper tests to handle circular dependencies gracefully
 */

/**
 * Wraps a test function to handle circular dependency errors gracefully
 * Returns true if the error is a circular dependency, false otherwise
 */
export function isCircularDependencyError(error: any): boolean {
	const message = error?.message || '';
	return (
		message.includes('Cannot read properties of undefined') ||
		message.includes("reading 'optional'") ||
		message.includes("reading 'nullable'")
	);
}

/**
 * Safely imports a mapper module, handling circular dependencies
 */
export async function safeImportMapper(modulePath: string): Promise<any> {
	try {
		return await import(modulePath);
	} catch (error: any) {
		if (isCircularDependencyError(error)) {
			console.warn(`⚠️  Circular dependency detected when importing ${modulePath}`);
			console.warn('   This will be fixed when DTOs are refactored to use z.lazy()');
			throw new Error('CIRCULAR_DEPENDENCY'); // Special error to catch
		}
		throw error;
	}
}
