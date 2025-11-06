import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { RESERVATION_STATUS } from '@prisma/client';

import { UUID, Timestamp, PositiveInt } from '../../primitives.js';
extendZodWithOpenApi(z);

// === Reservation Status Enum ===
export const ReservationStatusSchema = z.nativeEnum(RESERVATION_STATUS).openapi({
	title: 'ReservationStatus',
	description: 'Status of a table reservation',
	example: 'PENDING',
});

// === Reservation Management ===

// Used by: createReservation (POST /reservations/create)
export const CreateReservationSchema = z
	.object({
		reservation: z.object({
			business_id: UUID,
			table_reservation_id: UUID,
			seats: PositiveInt,
			datetime: Timestamp.optional(),
		}),
		user_id: UUID,
	})
	.openapi({
		title: 'CreateReservationRequest',
		description: 'Schema for creating a new table reservation',
	});

// Used by: addTableNumber (POST /reservations/table)
export const AddTableNumberSchema = z
	.object({
		reservation_id: UUID,
		table: PositiveInt,
	})
	.openapi({
		title: 'AddTableNumberRequest',
		description: 'Schema for adding table number to a reservation',
	});

// Used by: updateReservationStatus (PATCH /reservations/status)
export const UpdateReservationStatusSchema = z
	.object({
		reservation_id: UUID,
		status: ReservationStatusSchema,
	})
	.openapi({
		title: 'UpdateReservationStatusRequest',
		description: 'Schema for updating reservation status',
	});

// === Type exports ===
export type ReservationStatus = z.infer<typeof ReservationStatusSchema>;
export type CreateReservationRequest = z.infer<typeof CreateReservationSchema>;
export type AddTableNumberRequest = z.infer<typeof AddTableNumberSchema>;
export type UpdateReservationStatusRequest = z.infer<typeof UpdateReservationStatusSchema>;

// === OpenAPI Registry ===
export function registerSchemas(registry: OpenAPIRegistry) {
	// Register enum schema
	registry.register('ReservationStatus', ReservationStatusSchema);

	// Register request schemas
	registry.register('CreateReservation', CreateReservationSchema);
	registry.register('AddTableNumber', AddTableNumberSchema);
	registry.register('UpdateReservationStatus', UpdateReservationStatusSchema);
}
