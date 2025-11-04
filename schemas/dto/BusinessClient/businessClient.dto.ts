import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { BusinessResponseDto } from '../Business/business.dto.ts';

extendZodWithOpenApi(z);

export const BusinessClientSchema = z
	.object({
		business: BusinessResponseDto,
		taxi_orders: z.array(z.string()).optional(),
	})
	.openapi('BusinessClient');

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register request schemas
	registry.register('BusinessClient', BusinessClientSchema);
}
