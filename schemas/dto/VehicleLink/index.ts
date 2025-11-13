import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerVehicleLinkValidatorSchemas } from './vehicleLink.validators.js';

// === VehicleLink Validators (Request Body, Query, Params) ===
// Note: VehicleLink only has request schemas, no response DTOs
export { LinkPremiseToVehicleRequestSchema, type LinkPremiseToVehicleRequest } from './vehicleLink.validators.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerVehicleLinkValidatorSchemas(registry);
}
