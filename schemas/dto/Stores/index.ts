import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerStoreSchemas } from './store.dto.js';
import { registerSchemas as registerStoreValidatorSchemas } from './store.validators.js';
import { registerSchemas as registerLocalLocationSchemas } from './localLocation.dto.js';

// === Stores DTOs (Response) ===
export { StoreBaseSchema, StoreDetailSchema, type StoreBase, type StoreDetail } from './store.dto.js';

// === Stores Validators (Request Body, Query, Params) ===
export {
	StoreOnlineBodySchema,
	StoreOverwhelmedBodySchema,
	type StoreOnlineBody,
	type StoreOverwhelmedBody,
} from './store.validators.js';

// === Stores Mappers ===
export { toStoreDetail } from './store.mappers.js';

// === LocalLocation DTOs (Response) ===
export {
	LocalLocationBaseSchema,
	LocalLocationDetailSchema,
	BusinessLocalLocationBaseSchema,
	BusinessLocalLocationDetailSchema,
	type LocalLocationBase,
	type LocalLocationDetail,
	type BusinessLocalLocationBase,
	type BusinessLocalLocationDetail,
} from './localLocation.dto.js';

// === LocalLocation Mappers ===
export { toLocalLocationDetail, toBusinessLocalLocationDetail } from './localLocation.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerStoreSchemas(registry);
	registerStoreValidatorSchemas(registry);
	registerLocalLocationSchemas(registry);
}
