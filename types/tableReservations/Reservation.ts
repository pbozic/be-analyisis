import { RESERVATION_STATUS } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from '../users/User.js';
import type { TableReservationsModule } from './TableReservationsModule.js';
import { UserResponseSchema } from '../users/User';
import { TableReservationsModuleResponseSchema } from './TableReservationsModule';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateReservationSchema = z
	.object({
		reservation_id: z.string().uuid(),
		seats: z.number(),
		date: z.unknown(),
		time: z.string(),
		datetime: z.unknown(),
		user_id: z.string().uuid(),
		status: z.nativeEnum(RESERVATION_STATUS),
		table: z.number().nullable().optional(),
		table_reservation_id: z.string().uuid(),
	})
	.openapi('CreateReservation');

export type CreateReservationInput = z.infer<typeof CreateReservationSchema>;

export const UpdateReservationSchema = CreateReservationSchema.partial().openapi('UpdateReservation');
export type UpdateReservationInput = z.infer<typeof UpdateReservationSchema>;

export const ReservationResponseSchema = z
	.object({
		reservation_id: z.string(),
		seats: z.number(),
		date: z.string().datetime(),
		time: z.string(),
		datetime: z.string().datetime(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		user_id: z.string(),
		user: UserResponseSchema,
		status: z.nativeEnum(RESERVATION_STATUS),
		table: z.number().nullable().optional(),
		table_reservation_id: z.string(),
		table_reservations: TableReservationsModuleResponseSchema,
	})
	.openapi('ReservationResponse');

export type ReservationResponse = z.infer<typeof ReservationResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateReservation', CreateReservationSchema);
	registry.register('UpdateReservation', UpdateReservationSchema);
	registry.register('ReservationResponse', ReservationResponseSchema);
}

export type Reservation = {
	reservation_id: string;
	seats: number;
	date: Date;
	time: string;
	datetime: Date;
	created_at: Date;
	updated_at: Date;
	user_id: string;
	user?: User;
	status: RESERVATION_STATUS;
	table?: number | null;
	table_reservation_id: string;
	table_reservations?: TableReservationsModule;
};
