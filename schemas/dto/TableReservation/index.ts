import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerTableReservationSchemas } from './table-reservation.dto.js';
import { registerSchemas as registerTableReservationValidatorSchemas } from './tableReservation.validators.js';

// === TableReservation DTOs (Response) ===
export {
	TableReservationBaseSchema,
	TableReservationDetailSchema,
	type TableReservationBase,
	type TableReservationDetail,
} from './table-reservation.dto.js';

// === TableReservation Validators (Request Body, Query, Params) ===
export {
	ReservationStatusSchema,
	CreateReservationSchema,
	AddTableNumberSchema,
	UpdateReservationStatusSchema,
	type ReservationStatus,
	type CreateReservationRequest,
	type AddTableNumberRequest,
	type UpdateReservationStatusRequest,
} from './tableReservation.validators.js';

// === TableReservation Mappers ===
export { toBusinessRef, toTableReservationDetail } from './tableReservation.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerTableReservationSchemas(registry);
	registerTableReservationValidatorSchemas(registry);
}
