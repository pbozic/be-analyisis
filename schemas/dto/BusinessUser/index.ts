import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerBusinessUserSchemas } from './businessUser.js';
import { registerSchemas as registerBusinessUserValidatorSchemas } from './businessUser.validators.js';

// === BusinessUser DTOs (Response) ===
export {
	BusinessUserBaseSchema,
	BusinessUserRefSchema,
	BusinessUserLightSchema,
	UserMinimalRefSchema,
	BusinessUserResponseSchema,
	BusinessUserWithBusinessResponseSchema,
	BusinessUserListResponseSchema,
	BusinessUserCreationResponseSchema,
	type BusinessUserBase,
	type BusinessUserRef,
	type BusinessUserLight,
	type UserMinimalRef,
	type BusinessUserResponse,
	type BusinessUserWithBusinessResponse,
	type BusinessUserListResponse,
	type BusinessUserCreationResponse,
} from './businessUser.js';

// === BusinessUser Validators (Request Body, Query, Params) ===
export {
	UpdateAllowanceSchema,
	UpdateCompanyRoleSchema,
	UpdateOnlineStatusSchema,
	InviteBusinessUserSchema,
	AcceptBusinessInvitationSchema,
	type UpdateAllowanceInput,
	type UpdateCompanyRoleInput,
	type UpdateOnlineStatusInput,
	type InviteBusinessUserInput,
	type AcceptBusinessInvitationInput,
} from './businessUser.validators.js';

// === BusinessUser Mappers ===
export * from './businessUser.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerBusinessUserSchemas(registry);
	registerBusinessUserValidatorSchemas(registry);
}
