import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// =======================
// Request Schemas (used in routes with validate())
// =======================
// Re-export from requests.ts
export {
	CreateGroupUserRequestSchema,
	UpdateGroupUserEnabledRequestSchema,
	UpdateGroupUserAllowanceRequestSchema,
	type CreateGroupUserRequest,
	type UpdateGroupUserEnabledRequest,
	type UpdateGroupUserAllowanceRequest,
} from './requests.js';

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	// Note: Request schemas are registered in groupUser.ts registerSchemas
	// This function can be used for additional validators if needed
}
