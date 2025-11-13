import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerTutorialSchemas } from './tutorials.dto.js';
import { registerSchemas as registerTutorialValidatorSchemas } from './tutorials.validators.js';

// === Tutorials DTOs (Response) ===
export {
	TutorialBaseSchema,
	TutorialDetailSchema,
	UserTutorialBaseSchema,
	UserTutorialStateSchema,
	type TutorialBase,
	type TutorialDetail,
	type UserTutorialBase,
	type UserTutorialState,
} from './tutorials.dto.js';

// === Tutorials Validators (Request Body, Query, Params) ===
export { SetTutorialStatusBodySchema, type SetTutorialStatusBody } from './tutorials.validators.js';

// === Tutorials Mappers ===
export * from './tutorials.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerTutorialSchemas(registry);
	registerTutorialValidatorSchemas(registry);
}
