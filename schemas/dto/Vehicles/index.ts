import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerVehicleSchemas } from './vehicle.dto.js';
import { registerSchemas as registerVehicleValidatorSchemas } from './vehicle.validators.js';

// === Vehicles DTOs (Response) ===
export * from './vehicle.dto.js';

// === Vehicles Validators (Request Body, Query, Params) ===
export {
	VehicleEntityBaseSchema,
	VehicleCreateInputSchema,
	VehicleUpdateInputSchema,
	FileUploadCreateSchema,
	FileUploadUpdateSchema,
	DocumentDataSchema,
	VehicleDocumentCreateSchema,
	VehicleDocumentUpdateSchema,
	CreateVehicleRequestSchema,
	UpdateVehicleRequestSchema,
	VehicleDriverAssignmentSchema,
	type VehicleEntityBaseInput,
	type VehicleCreateInput,
	type VehicleUpdateInput,
	type FileUploadCreate,
	type FileUploadUpdate,
	type DocumentDataInput,
	type VehicleDocumentCreate,
	type VehicleDocumentUpdate,
	type CreateVehicleRequest,
	type UpdateVehicleRequest,
	type VehicleDriverAssignment,
} from './vehicle.validators.js';

// === Vehicles Mappers ===
export { toDriverRefOut, toDocumentRef, toVehicleRef, toVehicleDetail } from './vehicle.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerVehicleSchemas(registry);
	registerVehicleValidatorSchemas(registry);
}
