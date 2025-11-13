import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerScoringPointsSchemas } from './scoring-points.dto.js';
import { registerSchemas as registerScoringPointsValidatorSchemas } from './scoringPoints.validators.js';

// === ScoringPoints DTOs (Response) ===
export {
	LateEventRefSchema,
	ScoringPointsBaseSchema,
	ScoringPointsDetailSchema,
	type ScoringPointsOrderRef,
	type LateEventRef,
	type ScoringPointsBase,
	type ScoringPointsDetail,
} from './scoring-points.dto.js';

// === ScoringPoints Validators (Request Body, Query, Params) ===
export {
	CreateScoringPointsSchema,
	UpdateScoringPointsSchema,
	type CreateScoringPoints,
	type UpdateScoringPoints,
} from './scoringPoints.validators.js';

// === ScoringPoints Mappers ===
export { toScoringPointsDetail, toScoringPointsList } from './scoring-points.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerScoringPointsSchemas(registry);
	registerScoringPointsValidatorSchemas(registry);
}
