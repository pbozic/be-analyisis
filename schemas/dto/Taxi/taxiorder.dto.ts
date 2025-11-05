import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

// -----------------------
// Small helper schemas
// -----------------------
export const CoordinatesSchema = z
	.object({
		latitude: z.number().openapi({ example: 46.056946 }),
		longitude: z.number().openapi({ example: 14.505751 }),
	})
	.openapi('TaxiCoordinates');

export const LocationSchema = z
	.object({
		address: z.string().optional().openapi({ example: 'Prešernova cesta 1, 1000 Ljubljana' }),
		coordinates: CoordinatesSchema.optional(),
	})
	.openapi('TaxiLocation');

export const FileUploadSchema = z
	.object({
		base64: z.string().openapi({ example: 'iVBORw0KGgoAAAANSUhEUgAA...' }),
		mime_type: z.string().openapi({ example: 'image/png' }),
	})
	.openapi('TaxiFileUpload');

// -----------------------
// Generic small request schemas
// -----------------------
export const IdOnlySchema = z
	.object({ order_id: z.string().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }) })
	.openapi('TaxiOrderId');

export const IdAndStatusSchema = z
	.object({
		order_id: z.string().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		status: z.string().openapi({ example: 'TAXI_CANCELED' }),
		cancellation_reason: z
			.union([z.string(), z.array(z.object({ value: z.string() }))])
			.optional()
			.openapi({ example: 'User canceled due to schedule change' }),
	})
	.openapi('TaxiIdAndStatus');

export const IdAndDriverSchema = z
	.object({
		order_id: z.string().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		driver_id: z.string().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('TaxiIdAndDriver');

// -----------------------
// Create / Dispatch order schemas
// -----------------------
// The taxi create order payload is complex; we capture the common fields used by the controller
export const TaxiPreferencesSchema = z
	.object({
		vehicle_class: z.string().optional().openapi({ example: 'VAN' }),
		vehicle_category: z.string().optional().openapi({ example: 'STANDARD' }),
		adults: z.number().int().optional().openapi({ example: 1 }),
		children_under_140: z.number().int().optional().openapi({ example: 0 }),
		departure_date: z.string().datetime().optional().nullable(),
		departure_time: z.string().optional(),
		repeat_ride: z.array(z.any()).optional(),
		repeat_duration: z.array(z.any()).optional(),
		ride_requirements: z.any().optional(),
		// allow other preference fields through
	})
	.passthrough()
	.openapi('TaxiPreferences');

export const TaxiPaymentSchema = z
	.object({
		type: z.string().openapi({ example: 'CARD' }),
		price: z.number().optional().openapi({ example: 12.5 }),
		payment_method_id: z.string().optional().openapi({ example: 'pm_1J...' }),
		subtype: z.string().optional().openapi({ example: 'BUSINESS' }),
		extras: z.any().optional(),
		// allow provider-specific fields
	})
	.passthrough()
	.openapi('TaxiPayment');

export const CreateTaxiOrderSchema = z
	.object({
		// lightweight set of fields controller reads directly
		user_id: z.string().uuid().optional(),
		first_name: z.string().optional(),
		last_name: z.string().optional(),
		telephone: z.string().optional(),
		return_url: z.string().url().optional(),
		type: z.string().optional(),
		subtype: z.string().optional(),
		preferences: TaxiPreferencesSchema.optional(),
		pickup_location: LocationSchema.optional(),
		delivery_location: LocationSchema.optional(),
		route: z.array(LocationSchema).optional(),
		payment: TaxiPaymentSchema.optional(),
		business_user: z.any().optional(),
		business_client: z.any().optional(),
		cargo_preferences: z.any().optional(),
		flags: z.any().optional(),
		is_scheduled: z.boolean().optional(),
		estimates: z.any().optional(),
		// allow additional order fields without strict typing
	})
	.passthrough()
	.openapi('CreateTaxiOrder');

export const CreateDispatchOrderSchema = CreateTaxiOrderSchema.openapi('CreateDispatchOrder');

// -----------------------
// Preferences update
// -----------------------
export const UpdateTaxiOrderPreferencesSchema = z
	.object({
		order_id: z.string().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		vehicle_category: z.string().optional(),
		vehicle_class: z.string().optional(),
		ride_requirements: z.any().optional(),
	})
	.openapi('UpdateTaxiOrderPreferences');

// -----------------------
// Route / location / timeline / payment
// -----------------------
export const UpdateRouteSchema = z
	.object({
		order_id: z.string().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		route: z
			.array(LocationSchema)
			.openapi({ example: [{ address: 'A', coordinates: { latitude: 46, longitude: 14 } }] }),
	})
	.openapi('UpdateTaxiOrderRoute');

export const UpdatePickupLocationSchema = z
	.object({
		order_id: z.string().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		pickup_location: LocationSchema,
	})
	.openapi('UpdateTaxiOrderPickupLocation');

export const UpdateDeliveryLocationSchema = z
	.object({
		order_id: z.string().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		delivery_location: LocationSchema,
	})
	.openapi('UpdateTaxiOrderDeliveryLocation');

export const UpdateCompleteRouteSchema = z
	.object({
		order_id: z.string().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		route: z.array(LocationSchema),
	})
	.openapi('UpdateTaxiOrderCompleteRoute');

export const UpdateTimelineSchema = z
	.object({
		order_id: z.string().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		timeline: z
			.array(z.any())
			.openapi({ example: [{ status: 'ORDER_PHOTO', location: { timestamp: new Date().toISOString() } }] }),
	})
	.openapi('UpdateTaxiOrderTimeline');

export const UpdatePaymentSchema = z
	.object({
		order_id: z.string().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		payment: TaxiPaymentSchema,
	})
	.openapi('UpdateTaxiOrderPayment');

// -----------------------
// File upload schema (signature/photo) — controller expects path param + body.file
// -----------------------
export const TaxiFileBodySchema = z
	.object({
		file: FileUploadSchema,
	})
	.openapi('TaxiFileBody');

// -----------------------
// Pagination / filters
// -----------------------
export const TaxiPaginationSchema = z
	.object({
		where: z.any().optional(),
		orderBy: z.any().optional(),
		page: z.number().int().optional().default(1),
		take: z.number().int().optional().default(8),
	})
	.openapi('TaxiPagination');

// -----------------------
// Transfer price calculation
// -----------------------
export const TransferPriceRequestSchema = z
	.object({
		pickup_location: LocationSchema.optional(),
		delivery_location: LocationSchema.optional(),
		departure_time: z.string().optional(),
		route: z.array(LocationSchema).optional(),
		vehicle_category: z.string().optional(),
	})
	.openapi('TaxiTransferPriceRequest');

// -----------------------
// Types and register
// -----------------------
export type CreateTaxiOrder = z.infer<typeof CreateTaxiOrderSchema>;
export type CreateDispatchOrder = z.infer<typeof CreateDispatchOrderSchema>;
export type UpdateTaxiOrderPreferences = z.infer<typeof UpdateTaxiOrderPreferencesSchema>;
export type UpdateTaxiOrderRoute = z.infer<typeof UpdateRouteSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('TaxiCoordinates', CoordinatesSchema);
	registry.register('TaxiLocation', LocationSchema);
	registry.register('TaxiFileUpload', FileUploadSchema);

	registry.register('TaxiOrderId', IdOnlySchema);
	registry.register('TaxiIdAndStatus', IdAndStatusSchema);
	registry.register('TaxiIdAndDriver', IdAndDriverSchema);

	registry.register('CreateTaxiOrder', CreateTaxiOrderSchema);
	registry.register('CreateDispatchOrder', CreateDispatchOrderSchema);
	registry.register('UpdateTaxiOrderPreferences', UpdateTaxiOrderPreferencesSchema);

	registry.register('UpdateTaxiOrderRoute', UpdateRouteSchema);
	registry.register('UpdateTaxiOrderPickupLocation', UpdatePickupLocationSchema);
	registry.register('UpdateTaxiOrderDeliveryLocation', UpdateDeliveryLocationSchema);
	registry.register('UpdateTaxiOrderCompleteRoute', UpdateCompleteRouteSchema);
	registry.register('UpdateTaxiOrderTimeline', UpdateTimelineSchema);
	registry.register('UpdateTaxiOrderPayment', UpdatePaymentSchema);

	registry.register('TaxiFileBody', TaxiFileBodySchema);
	registry.register('TaxiPagination', TaxiPaginationSchema);
	registry.register('TaxiTransferPriceRequest', TransferPriceRequestSchema);
}
