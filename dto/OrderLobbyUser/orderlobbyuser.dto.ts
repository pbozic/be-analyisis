import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

// =======================
// Params schema for path parameter
// =======================
export const SetOrderLobbyUserLimitParamsSchema = z
	.object({
		order_lobby_users_id: z.string().uuid().openapi({ example: 'aa0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('SetOrderLobbyUserLimitParams');

// =======================
// Body schema for limit update
// =======================
export const SetOrderLobbyUserLimitRequestSchema = z
	.object({
		limit: z
			.union([z.number(), z.string()])
			.refine((val) => !isNaN(Number(val)), { message: 'limit must be a number or numeric string' })
			.transform((val) => Number(val))
			.openapi({ example: 5 }),
	})
	.openapi('SetOrderLobbyUserLimitRequest');

export type SetOrderLobbyUserLimitRequest = z.infer<typeof SetOrderLobbyUserLimitRequestSchema>;
export type SetOrderLobbyUserLimitParams = z.infer<typeof SetOrderLobbyUserLimitParamsSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('SetOrderLobbyUserLimitParams', SetOrderLobbyUserLimitParamsSchema);
	registry.register('SetOrderLobbyUserLimitRequest', SetOrderLobbyUserLimitRequestSchema);
}
