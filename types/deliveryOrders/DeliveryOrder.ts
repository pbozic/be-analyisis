import { DELIVERY_ORDER_STATUS } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { LineItem } from '../menuItems/LineItem.js';
import type { User } from '../users/User.js';
import type { Vehicle } from '../vehicles/Vehicle.js';
import type { Driver } from '../drivers/Driver.js';
import type { TransportModule } from '../transport/TransportModule.js';
import type { Transaction } from '../payments/Transaction.js';
import type { DriverHistoryLocation } from '../drivers/DriverHistoryLocation.js';
import type { Cashback } from '../cashback/Cashback.js';
import type { OrderLobby } from '../orderLobbies/OrderLobby.js';
import type { ScoringPoint } from '../general/ScoringPoint.js';
import type { LateEvent } from '../general/LateEvent.js';
import type { BusinessLocalLocation } from '../stores/BusinessLocalLocation.js';
import type { PromoAnalytic } from '../promoAnalytics/PromoAnalytic.js';
import type { Invoice } from '../invoices/Invoice.js';
import type { Review } from '../reviews/Review.js';
import type { StoresModule } from '../stores/StoresModule.js';
import type { FoodDrinksModule } from '../foodDrinks/FoodDrinksModule.js';
import type { File } from '../files/File.js';
import type { DeliveryOrderSent } from './DeliveryOrderSent.js';
import type { WalletTransferHistory } from '../wallet/WalletTransferHistory.js';
import type { MenuItemStockChange } from '../menuItems/MenuItemStockChange.js';
import { LineItemResponseSchema } from '../menuItems/LineItem';
import { UserResponseSchema } from '../users/User';
import { DeliveryOrderSentResponseSchema } from './DeliveryOrderSent';
import { VehicleResponseSchema } from '../vehicles/Vehicle';
import { DriverResponseSchema } from '../drivers/Driver';
import { TransportModuleResponseSchema } from '../transport/TransportModule';
import { TransactionResponseSchema } from '../payments/Transaction';
import { WalletTransferHistoryResponseSchema } from '../wallet/WalletTransferHistory';
import { DriverHistoryLocationResponseSchema } from '../drivers/DriverHistoryLocation';
import { CashbackResponseSchema } from '../cashback/Cashback';
import { OrderLobbyResponseSchema } from '../orderLobbies/OrderLobby';
import { ScoringPointResponseSchema } from '../general/ScoringPoint';
import { LateEventResponseSchema } from '../general/LateEvent';
import { MenuItemStockChangeResponseSchema } from '../menuItems/MenuItemStockChange';
import { BusinessLocalLocationResponseSchema } from '../stores/BusinessLocalLocation';
import { PromoAnalyticResponseSchema } from '../promoAnalytics/PromoAnalytic';
import { InvoiceResponseSchema } from '../invoices/Invoice';
import { ReviewResponseSchema } from '../reviews/Review';
import { StoresModuleResponseSchema } from '../stores/StoresModule';
import { FoodDrinksModuleResponseSchema } from '../foodDrinks/FoodDrinksModule';
import { FileResponseSchema } from '../files/File';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateDeliveryOrderSchema = z
	.object({
		order_id: z.string().uuid(),
		user_id: z.string().uuid().nullable().optional(),
		route: z.unknown(),
		pickup_location: z.unknown(),
		delivery_location: z.unknown(),
		payment: z.unknown().nullable().optional(),
		estimates: z.unknown().nullable().optional(),
		details: z.unknown().nullable().optional(),
		courier_instructions: z.string().nullable().optional(),
		restaurant_message: z.string().nullable().optional(),
		rejection_reason: z.string().nullable().optional(),
		scheduled_at: z.unknown().nullable().optional(),
		timeline: z.unknown(),
		status: z.nativeEnum(DELIVERY_ORDER_STATUS),
		last_sent_at: z.unknown().nullable().optional(),
		vehicle_id: z.string().uuid().nullable().optional(),
		driver_id: z.string().uuid().nullable().optional(),
		transport_module_id: z.string().uuid().nullable().optional(),
		payment_intent_id: z.string().uuid().nullable().optional(),
		find_drivers_attempts: z.number().nullable().optional(),
		is_daily_meal: z.boolean(),
		allow_credits_usage: z.boolean(),
		order_number: z.number(),
		business_local_location_id: z.string().uuid().nullable().optional(),
		review_id: z.string().uuid().nullable().optional(),
		stores_id: z.string().uuid().nullable().optional(),
		food_drinks_id: z.string().uuid().nullable().optional(),
		file_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateDeliveryOrder');

export type CreateDeliveryOrderInput = z.infer<typeof CreateDeliveryOrderSchema>;

export const UpdateDeliveryOrderSchema = CreateDeliveryOrderSchema.partial().openapi('UpdateDeliveryOrder');
export type UpdateDeliveryOrderInput = z.infer<typeof UpdateDeliveryOrderSchema>;

export const DeliveryOrderResponseSchema = z
	.object({
		order_id: z.string(),
		user_id: z.string().nullable().optional(),
		route: z.unknown(),
		pickup_location: z.unknown(),
		delivery_location: z.unknown(),
		payment: z.unknown().nullable().optional(),
		estimates: z.unknown().nullable().optional(),
		items: z.array(LineItemResponseSchema),
		details: z.unknown().nullable().optional(),
		courier_instructions: z.string().nullable().optional(),
		restaurant_message: z.string().nullable().optional(),
		rejection_reason: z.string().nullable().optional(),
		scheduled_at: z.string().datetime().nullable().optional(),
		timeline: z.unknown(),
		status: z.nativeEnum(DELIVERY_ORDER_STATUS),
		last_sent_at: z.string().datetime().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		customer: UserResponseSchema.nullable().optional(),
		history: z.array(DeliveryOrderSentResponseSchema),
		vehicle_id: z.string().nullable().optional(),
		vehicle: VehicleResponseSchema.nullable().optional(),
		driver_id: z.string().nullable().optional(),
		driver: DriverResponseSchema.nullable().optional(),
		transport_module_id: z.string().nullable().optional(),
		transport_module: TransportModuleResponseSchema.nullable().optional(),
		payment_intent_id: z.string().nullable().optional(),
		transactions: z.array(TransactionResponseSchema),
		find_drivers_attempts: z.number().nullable().optional(),
		is_daily_meal: z.boolean(),
		wallet_transfer: z.array(WalletTransferHistoryResponseSchema),
		driver_history_locations: z.array(DriverHistoryLocationResponseSchema),
		cashback: z.array(CashbackResponseSchema),
		order_lobbies: OrderLobbyResponseSchema.nullable().optional(),
		allow_credits_usage: z.boolean(),
		order_number: z.number(),
		scoring_points: z.array(ScoringPointResponseSchema),
		late_events: z.array(LateEventResponseSchema),
		stock_movements: z.array(MenuItemStockChangeResponseSchema),
		business_local_location_id: z.string().nullable().optional(),
		business_local_location: BusinessLocalLocationResponseSchema.nullable().optional(),
		promo_analytics: z.array(PromoAnalyticResponseSchema),
		invoice: InvoiceResponseSchema.nullable().optional(),
		review_id: z.string().nullable().optional(),
		review: ReviewResponseSchema.nullable().optional(),
		stores_id: z.string().nullable().optional(),
		stores_module: StoresModuleResponseSchema.nullable().optional(),
		food_drinks_id: z.string().nullable().optional(),
		food_drinks_module: FoodDrinksModuleResponseSchema.nullable().optional(),
		file_id: z.string().nullable().optional(),
		picture_of_delivery: FileResponseSchema.nullable().optional(),
	})
	.openapi('DeliveryOrderResponse');

export type DeliveryOrderResponse = z.infer<typeof DeliveryOrderResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateDeliveryOrder', CreateDeliveryOrderSchema);
	registry.register('UpdateDeliveryOrder', UpdateDeliveryOrderSchema);
	registry.register('DeliveryOrderResponse', DeliveryOrderResponseSchema);
}

export type DeliveryOrder = {
	order_id: string;
	user_id?: string | null;
	route: unknown;
	pickup_location: unknown;
	delivery_location: unknown;
	payment?: unknown | null;
	estimates?: unknown | null;
	items?: LineItem[];
	details?: unknown | null;
	courier_instructions?: string | null;
	restaurant_message?: string | null;
	rejection_reason?: string | null;
	scheduled_at?: Date | null;
	timeline: unknown;
	status: DELIVERY_ORDER_STATUS;
	last_sent_at?: Date | null;
	created_at: Date;
	updated_at: Date;
	customer?: User | null;
	history?: DeliveryOrderSent[];
	vehicle_id?: string | null;
	vehicle?: Vehicle | null;
	driver_id?: string | null;
	driver?: Driver | null;
	transport_module_id?: string | null;
	transport_module?: TransportModule | null;
	payment_intent_id?: string | null;
	transactions?: Transaction[];
	find_drivers_attempts?: number | null;
	is_daily_meal: boolean;
	wallet_transfer?: WalletTransferHistory[];
	driver_history_locations?: DriverHistoryLocation[];
	cashback?: Cashback[];
	order_lobbies?: OrderLobby | null;
	allow_credits_usage: boolean;
	order_number: number;
	scoring_points?: ScoringPoint[];
	late_events?: LateEvent[];
	stock_movements?: MenuItemStockChange[];
	business_local_location_id?: string | null;
	business_local_location?: BusinessLocalLocation | null;
	promo_analytics?: PromoAnalytic[];
	invoice?: Invoice | null;
	review_id?: string | null;
	review?: Review | null;
	stores_id?: string | null;
	stores_module?: StoresModule | null;
	food_drinks_id?: string | null;
	food_drinks_module?: FoodDrinksModule | null;
	file_id?: string | null;
	picture_of_delivery?: File | null;
};
