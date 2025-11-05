import { z } from 'zod';
import { BOOKING_STATUS } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../../primitives';
import { BookingRefSchema } from '../booking/booking.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const BookingHistoryLogBaseSchema = z
	.object({
		booking_history_id: UUID,
		booking_id: UUID,
		status: z.nativeEnum(BOOKING_STATUS),
		comment: z.string().nullable().optional(),
		type: z.string().nullable().optional(),
		title: z.string().nullable().optional(),
		description: z.string().nullable().optional(),
		created_at: Timestamp,
		updated_at: Timestamp,
		user_id: UUID.nullable().optional(),
	})
	.openapi({
		title: 'BookingHistoryLogBase',
		description: 'Base booking history log schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const BookingHistoryLogRefSchema = z
	.object({
		booking_history_id: UUID,
		status: z.nativeEnum(BOOKING_STATUS),
		created_at: Timestamp,
	})
	.openapi({
		title: 'BookingHistoryLogRef',
		description: 'Minimal booking history log reference for embedding in other entities',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateBookingHistoryLogRequestSchema = z
	.object({
		booking_id: UUID,
		status: z.nativeEnum(BOOKING_STATUS),
		comment: z.string().optional(),
		type: z.string().optional(),
		title: z.string().optional(),
		description: z.string().optional(),
		user_id: UUID.optional(),
	})
	.openapi({
		title: 'CreateBookingHistoryLogRequest',
		description: 'Request schema for creating a new booking history log',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====

export const BookingHistoryLogResponseSchema = BookingHistoryLogBaseSchema.extend({
	booking: BookingRefSchema.optional(),
}).openapi({
	title: 'BookingHistoryLogResponse',
	description: 'Complete booking history log response with related entities',
});

// ===== EXPORTED TYPES =====
export type BookingHistoryLogBase = z.infer<typeof BookingHistoryLogBaseSchema>;
export type BookingHistoryLogRef = z.infer<typeof BookingHistoryLogRefSchema>;
export type CreateBookingHistoryLogRequest = z.infer<typeof CreateBookingHistoryLogRequestSchema>;
export type BookingHistoryLogResponse = z.infer<typeof BookingHistoryLogResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('BookingHistoryLogBase', BookingHistoryLogBaseSchema);
	registry.register('BookingHistoryLogRef', BookingHistoryLogRefSchema);
	registry.register('CreateBookingHistoryLogRequest', CreateBookingHistoryLogRequestSchema);
	registry.register('BookingHistoryLogResponse', BookingHistoryLogResponseSchema);
}
