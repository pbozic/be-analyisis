import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives';
import { BasicUserDataSchema } from '../User/user.js';
import { BusinessRefSchema } from '../Business/business.ts';

extendZodWithOpenApi(z);

// User relation now reuses common BasicUserDataSchema; BusinessRefSchema is imported from common

// Base schema for reservations
export const TableReservationBaseSchema = z
	.object({
		reservation_id: UUID,
		seats: z.number().int(),
		date: Timestamp, // original schema has Date and Time separated; DAO exposes both
		time: z.string(),
		datetime: Timestamp,
		status: z.string(), // Enum in Prisma (RESERVATION_STATUS); keeping string here to avoid importing enums
		table: z.number().int().nullable().optional(),
		user_id: UUID,
		table_reservation_id: UUID,
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('TableReservationBase');
export type TableReservationBase = z.infer<typeof TableReservationBaseSchema>;

// Detail with optional embedded refs
export const TableReservationDetailSchema = TableReservationBaseSchema.extend({
	user: BasicUserDataSchema.nullable().optional(),
	business: BusinessRefSchema.nullable().optional(),
}).openapi('TableReservationDetail');
export type TableReservationDetail = z.infer<typeof TableReservationDetailSchema>;

// Mappers moved to tableReservation.mappers.ts

export function registerSchemas(registry: OpenAPIRegistry) {
	// BasicUserDataSchema and BusinessRefSchema are registered in common registry
	registry.register('TableReservationBase', TableReservationBaseSchema);
	registry.register('TableReservationDetail', TableReservationDetailSchema);
}
