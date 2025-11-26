import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { Timestamp, UUID } from '../../primitives.js';
import { VehicleBaseSchema } from '../Vehicles/vehicle.dto.js';
import { DriverBaseSchema } from '../Driver/index.js';
import { UserBaseSchema } from '../User/index.js';
import { PaymentIntentSchema } from '../Payments/payment.dto.js';
import { CoordinatesSchema, LocationSchema } from '../_common/location.js';

extendZodWithOpenApi(z);

// -----------------------
// Small helper schemas (used in both request and response)
// -----------------------

export type TaxiLocation = z.infer<typeof LocationSchema>;

export const FileUploadSchema = z
	.object({
		base64: z.string().openapi({ example: 'iVBORw0KGgoAAAANSUhEUgAA...' }),
		mime_type: z.string().openapi({ example: 'image/png' }),
	})
	.openapi('TaxiFileUpload');

// =======================
// Response DTOs
// =======================

export const DriverRefSchema = z.object({ driver_id: UUID }).openapi('DriverRef');
export type DriverRef = z.infer<typeof DriverRefSchema>;

export const TaxiOrderBaseSchema = z
	.object({
		order_id: UUID,
		user_id: UUID.nullable().optional(),
		driver_id: UUID.nullable().optional(),
		vehicle_id: UUID.nullable().optional(),
		type: z.string().nullable().optional(),
		subtype: z.string().nullable().optional(),
		status: z.string(),
		is_scheduled: z.boolean().optional(),
		order_number: z.number().int().optional(),
		route: z.unknown().nullable().optional(),
		pickup_location: z.unknown().nullable().optional(),
		delivery_location: z.unknown().nullable().optional(),
		estimates: z.unknown().nullable().optional(),
		payment: z.unknown().nullable().optional(),
		timeline: z.array(z.unknown()).optional().default([]),
		cancellation_reason: z.string().nullable().optional(),
		last_sent_at: Timestamp.nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('TaxiOrderBase');
export type TaxiOrderBase = z.infer<typeof TaxiOrderBaseSchema>;

export const TaxiOrderRefSchema = z
	.object({
		order_id: UUID,
	})
	.openapi('TaxiOrderRef');
export type TaxiOrderRef = z.infer<typeof TaxiOrderRefSchema>;

export const TaxiOrderDetailSchema = TaxiOrderBaseSchema.extend({
	user: z
		.lazy(() => UserBaseSchema)
		.nullable()
		.optional(),
	driver: z
		.lazy(() => DriverBaseSchema)
		.nullable()
		.optional(),
	vehicle: z
		.lazy(() => VehicleBaseSchema)
		.nullable()
		.optional(),
	grouped_orders: z.array(TaxiOrderRefSchema).optional(),
}).openapi('TaxiOrderDetail');
export type TaxiOrderDetail = z.infer<typeof TaxiOrderDetailSchema>;

// -----------------------
// Responses
// -----------------------
export const TaxiOrderResponseSchema = z
	.object({
		order: TaxiOrderDetailSchema,
		payment_intent: z.lazy(() => PaymentIntentSchema).optional(),
		vehicle_transfer_order: TaxiOrderBaseSchema.optional(),
	})
	.openapi('CreateTaxiOrderResponse');
export type CreateTaxiOrderResponse = z.infer<typeof TaxiOrderResponseSchema>;

export const TaxiOrdersTodayResponseSchema = z
	.object({
		orders: z.number().openapi({ example: 15 }),
		amount: z.number().openapi({ example: 123.45 }),
	})
	.openapi('TaxiOrdersTodayResponse');
export type TaxiOrdersTodayResponse = z.infer<typeof TaxiOrdersTodayResponseSchema>;

export const IdsArraySchema = z
	.object({
		order_ids: z.array(UUID),
	})
	.openapi('TaxiOrderIdsArray');
export type TaxiOrderIdsArray = z.infer<typeof IdsArraySchema>;

// -----------------------
// OpenAPI Registration
// -----------------------

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('TaxiCoordinates', CoordinatesSchema);
	registry.register('TaxiLocation', LocationSchema);
	registry.register('TaxiFileUpload', FileUploadSchema);
	registry.register('DriverRef', DriverRefSchema);
	registry.register('TaxiOrderBase', TaxiOrderBaseSchema);
	registry.register('TaxiOrderRef', TaxiOrderRefSchema);
	registry.register('TaxiOrderDetail', TaxiOrderDetailSchema);
	// Responses
	registry.register('CreateTaxiOrderResponse', TaxiOrderResponseSchema);
	registry.register('TaxiOrdersTodayResponse', TaxiOrdersTodayResponseSchema);
	registry.register('TaxiOrderIdsArray', IdsArraySchema);
}
