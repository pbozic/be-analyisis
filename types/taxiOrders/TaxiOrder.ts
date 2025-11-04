import { ORDER_SUBTYPE, ORDER_TYPE, TAXI_ORDER_STATUS } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Driver } from '../drivers/Driver.js';
import type { Vehicle } from '../vehicles/Vehicle.js';
import type { User } from '../users/User.js';
import type { BusinessUser } from '../businessUsers/BusinessUser.js';
import type { BusinessClient } from '../crm/BusinessClient.js';
import type { Document } from '../documents/Document.js';
import type { DriverHistoryLocation } from '../drivers/DriverHistoryLocation.js';
import type { Transaction } from '../payments/Transaction.js';
import type { Cashback } from '../cashback/Cashback.js';
import type { ScoringPoint } from '../general/ScoringPoint.js';
import type { LateEvent } from '../general/LateEvent.js';
import type { Invoice } from '../invoices/Invoice.js';
import type { Review } from '../reviews/Review.js';
import type { TransportModule } from '../transport/TransportModule.js';
import type { TaxiOrderSent } from './TaxiOrderSent.js';
import type { WalletTransferHistory } from '../wallet/WalletTransferHistory.js';
import { DriverResponseSchema } from '../drivers/Driver';
import { VehicleResponseSchema } from '../vehicles/Vehicle';
import { UserResponseSchema } from '../users/User';
import { BusinessUserResponseSchema } from '../businessUsers/BusinessUser';
import { BusinessClientResponseSchema } from '../crm/BusinessClient';
import { TaxiOrderSentResponseSchema } from './TaxiOrderSent';
import { DocumentResponseSchema } from '../documents/Document';
import { DriverHistoryLocationResponseSchema } from '../drivers/DriverHistoryLocation';
import { WalletTransferHistoryResponseSchema } from '../wallet/WalletTransferHistory';
import { TransactionResponseSchema } from '../payments/Transaction';
import { CashbackResponseSchema } from '../cashback/Cashback';
import { ScoringPointResponseSchema } from '../general/ScoringPoint';
import { LateEventResponseSchema } from '../general/LateEvent';
import { InvoiceResponseSchema } from '../invoices/Invoice';
import { ReviewResponseSchema } from '../reviews/Review';
import { TransportModuleResponseSchema } from '../transport/TransportModule';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type TaxiOrder = {
	order_id: string;
	user_id: string;
	business_users_id?: string | null;
	business_clients_id?: string | null;
	driver_id?: string | null;
	vehicle_id?: string | null;
	route: unknown;
	pickup_location: unknown;
	delivery_location?: unknown | null;
	payment?: unknown | null;
	estimates?: unknown | null;
	timeline: unknown;
	preferences?: unknown | null;
	status: TAXI_ORDER_STATUS;
	last_sent_at?: Date | null;
	created_at: Date;
	updated_at: Date;
	driver?: Driver | null;
	vehicle?: Vehicle | null;
	customer?: User | null;
	business_users?: BusinessUser | null;
	business_clients?: BusinessClient | null;
	history: TaxiOrderSent[];
	telephone?: string | null;
	first_name?: string | null;
	last_name?: string | null;
	cancellation_reason?: string | null;
	find_drivers_attempts?: number | null;
	is_scheduled: boolean;
	parent_order_id?: string | null;
	parent_order?: TaxiOrder | null;
	grouped_orders: TaxiOrder[];
	type: ORDER_TYPE;
	subtype: ORDER_SUBTYPE;
	cargo_documents: Document[];
	cargo_preferences?: unknown | null;
	driver_history_locations: DriverHistoryLocation[];
	wallet_transfer: WalletTransferHistory[];
	transactions: Transaction[];
	customer_note?: string | null;
	parent_user_type?: string | null;
	creating_user_id?: string | null;
	cashback: Cashback[];
	allow_credits_usage: boolean;
	order_number: number;
	scoring_points: ScoringPoint[];
	late_events: LateEvent[];
	invoice?: Invoice | null;
	review_id?: string | null;
	review?: Review | null;
	transport_module_id?: string | null;
	transport_module?: TransportModule | null;
};

export const CreateTaxiOrderSchema = z
	.object({
		order_id: z.string().uuid(),
		user_id: z.string().uuid(),
		business_users_id: z.string().uuid().nullable().optional(),
		business_clients_id: z.string().uuid().nullable().optional(),
		driver_id: z.string().uuid().nullable().optional(),
		vehicle_id: z.string().uuid().nullable().optional(),
		route: z.unknown(),
		pickup_location: z.unknown(),
		delivery_location: z.unknown().nullable().optional(),
		payment: z.unknown().nullable().optional(),
		estimates: z.unknown().nullable().optional(),
		timeline: z.unknown(),
		preferences: z.unknown().nullable().optional(),
		status: z.nativeEnum(TAXI_ORDER_STATUS),
		last_sent_at: z.unknown().nullable().optional(),
		telephone: z.string().nullable().optional(),
		first_name: z.string().nullable().optional(),
		last_name: z.string().nullable().optional(),
		cancellation_reason: z.string().nullable().optional(),
		find_drivers_attempts: z.number().nullable().optional(),
		is_scheduled: z.boolean(),
		parent_order_id: z.string().uuid().nullable().optional(),
		parent_order: z.unknown().nullable().optional(),
		grouped_orders: z.array(z.unknown()),
		type: z.nativeEnum(ORDER_TYPE),
		subtype: z.nativeEnum(ORDER_SUBTYPE),
		cargo_preferences: z.unknown().nullable().optional(),
		customer_note: z.string().nullable().optional(),
		parent_user_type: z.string().nullable().optional(),
		creating_user_id: z.string().uuid().nullable().optional(),
		allow_credits_usage: z.boolean(),
		order_number: z.number(),
		review_id: z.string().uuid().nullable().optional(),
		transport_module_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateTaxiOrder');

export type CreateTaxiOrderInput = z.infer<typeof CreateTaxiOrderSchema>;

export const UpdateTaxiOrderSchema = CreateTaxiOrderSchema.partial().openapi('UpdateTaxiOrder');
export type UpdateTaxiOrderInput = z.infer<typeof UpdateTaxiOrderSchema>;

export const baseTaxiOrderResponseSchema = z
	.object({
		order_id: z.string().uuid(),
		user_id: z.string().uuid(),
		business_users_id: z.string().uuid().nullable().optional(),
		business_clients_id: z.string().uuid().nullable().optional(),
		driver_id: z.string().uuid().nullable().optional(),
		vehicle_id: z.string().uuid().nullable().optional(),
		route: z.unknown(),
		pickup_location: z.unknown(),
		delivery_location: z.unknown().nullable().optional(),
		payment: z.unknown().nullable().optional(),
		estimates: z.unknown().nullable().optional(),
		timeline: z.unknown(),
		preferences: z.unknown().nullable().optional(),
		status: z.nativeEnum(TAXI_ORDER_STATUS),
		last_sent_at: z.string().datetime().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		driver: DriverResponseSchema.nullable().optional(),
		vehicle: VehicleResponseSchema.nullable().optional(),
		customer: UserResponseSchema.nullable().optional(),
		business_users: BusinessUserResponseSchema.nullable().optional(),
		business_clients: BusinessClientResponseSchema.nullable().optional(),
		history: z.array(TaxiOrderSentResponseSchema),
		telephone: z.string().nullable().optional(),
		first_name: z.string().nullable().optional(),
		last_name: z.string().nullable().optional(),
		cancellation_reason: z.string().nullable().optional(),
		find_drivers_attempts: z.number().nullable().optional(),
		is_scheduled: z.boolean(),
		parent_order_id: z.string().uuid().nullable().optional(),
		type: z.nativeEnum(ORDER_TYPE),
		subtype: z.nativeEnum(ORDER_SUBTYPE),
		cargo_documents: z.array(DocumentResponseSchema),
		cargo_preferences: z.unknown().nullable().optional(),
		driver_history_locations: z.array(DriverHistoryLocationResponseSchema),
		wallet_transfer: z.array(WalletTransferHistoryResponseSchema),
		transactions: z.array(TransactionResponseSchema),
		customer_note: z.string().nullable().optional(),
		parent_user_type: z.string().nullable().optional(),
		creating_user_id: z.string().uuid().nullable().optional(),
		cashback: z.array(CashbackResponseSchema),
		allow_credits_usage: z.boolean(),
		order_number: z.number(),
		scoring_points: z.array(ScoringPointResponseSchema),
		late_events: z.array(LateEventResponseSchema),
		invoice: InvoiceResponseSchema.nullable().optional(),
		review_id: z.string().uuid().nullable().optional(),
		review: ReviewResponseSchema.nullable().optional(),
		transport_module_id: z.string().uuid().nullable().optional(),
		transport_module: TransportModuleResponseSchema.nullable().optional(),
	})
	.openapi('TaxiOrderResponse');

type TaxiOrderRes = z.infer<typeof baseTaxiOrderResponseSchema> & {
	grouped_orders: TaxiOrderRes[];
};

export const TaxiOrderResponseSchema: z.ZodType<TaxiOrderRes> = baseTaxiOrderResponseSchema
	.extend({
		parent_order: z
			.lazy(() => TaxiOrderResponseSchema)
			.nullable()
			.optional(),
		grouped_orders: z.array(z.lazy(() => TaxiOrderResponseSchema)),
	})
	.openapi('TaxiOrderResponse');

export type TaxiOrderResponse = z.infer<typeof TaxiOrderResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateTaxiOrder', CreateTaxiOrderSchema);
	registry.register('UpdateTaxiOrder', UpdateTaxiOrderSchema);
	registry.register('TaxiOrderResponse', TaxiOrderResponseSchema);
}
