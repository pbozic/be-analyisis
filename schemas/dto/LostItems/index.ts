import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerLostItemSchemas } from './lostitem.dto.js';
import { registerSchemas as registerLostItemValidatorSchemas } from './lostitem.validators.js';

// === LostItems DTOs (Response) ===
export { LostItemBaseSchema, LostItemDetailSchema, type LostItemBase, type LostItemDetail } from './lostitem.dto.js';

// === LostItems Validators (Request Body, Query, Params) ===
export {
	DocumentCreateSchema,
	ReportFoundItemImagesSchema,
	ReportFoundItemRequestSchema,
	type ReportFoundItemRequest,
} from './lostitem.validators.js';

// === LostItems Mappers ===
export { toLostItemDetail } from './lostitem.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerLostItemSchemas(registry);
	registerLostItemValidatorSchemas(registry);
}
