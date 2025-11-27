import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerAddonSchemas } from './addon.dto.js';
import { registerSchemas as registerAddonValidatorSchemas } from './addon.validators.js';

// === Addon DTOs (Response) ===
export {
	AddonBaseSchema,
	AddonRefSchema,
	AddonResponseSchema,
	AddonsListResponseSchema,
	type AddonBase,
	type AddonRef,
	type AddonResponse,
	type AddonsListResponse,
} from './addon.dto.js';

// === Addon Validators (Request Body, Query, Params) ===
export {
	CreateAddonRequestSchema,
	UpdateAddonRequestSchema,
	DeleteAddonRequestSchema,
	GetAddonByIdQuerySchema,
	GetAddonsByModuleQuerySchema,
	GetAddonsByBusinessIdQuerySchema,
	GetAddonsByReservationModuleIdQuerySchema,
	type CreateAddonRequest,
	type UpdateAddonRequest,
	type DeleteAddonRequest,
	type GetAddonByIdQuery,
	type GetAddonsByModuleQuery,
	type GetAddonsByBusinessIdQuery,
	type GetAddonsByReservationModuleIdQuery,
} from './addon.validators.js';

// === Addon Mappers ===
export * from './addon.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerAddonSchemas(registry);
	registerAddonValidatorSchemas(registry);
}
