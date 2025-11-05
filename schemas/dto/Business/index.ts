// Business DTOs
export {
	BusinessBaseSchema,
	BusinessRefSchema,
	BusinessResponseSchema,
	BusinessListResponseSchema,
	BusinessSearchResponseSchema,
	BusinessAdminResponseSchema,
	type BusinessBase,
	type BusinessRef,
	type BusinessResponse,
	type BusinessListResponse,
	type BusinessSearchResponse,
	type BusinessAdminResponse,
	registerSchemas as registerBusinessSchemas,
} from './business.js';

// BusinessUser DTOs
export {
	BusinessUserBaseSchema,
	BusinessUserRefSchema,
	BusinessUserResponseSchema,
	type BusinessUserBase,
	type BusinessUserRef,
	type BusinessUserResponse,
	registerSchemas as registerBusinessUserSchemas,
} from '../BusinessUser/businessUser.js';

// BusinessType DTOs
export {
	BusinessTypeBaseSchema,
	BusinessTypeRefSchema,
	BusinessTypeResponseSchema,
	BusinessToTypesSchema,
	type BusinessTypeBase,
	type BusinessTypeRef,
	type BusinessTypeResponse,
	type BusinessToTypes,
	registerSchemas as registerBusinessTypeSchemas,
} from './businessType.js';

// Schema Registration
import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { registerSchemas as registerBusinessSchemas } from './business.js';
import { registerSchemas as registerBusinessUserSchemas } from '../BusinessUser/businessUser.js';
import { registerSchemas as registerBusinessTypeSchemas } from './businessType.js';

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register business schemas
	registerBusinessSchemas(registry);

	// Register business user schemas
	registerBusinessUserSchemas(registry);
	// Register business type schemas
	registerBusinessTypeSchemas(registry);
}
