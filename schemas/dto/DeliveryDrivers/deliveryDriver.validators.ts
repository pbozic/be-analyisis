import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// ===== DeliveryDriver Validators =====
// Note: Add request schemas here if routes use validate() with DeliveryDriver schemas

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register validators here when needed
}
