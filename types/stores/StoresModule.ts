import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Reviewable } from '../reviews/Reviewable.js';
import type { BusinessLocalLocation } from './BusinessLocalLocation.js';
import type { Business } from '../business/Business.js';
import type { Address } from '../addresses/Address.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { Menu } from '../menus/Menu.js';
import type { OrderLobby } from '../orderLobbies/OrderLobby.js';
import type { File } from '../files/File.js';
import type { LateEvent } from '../general/LateEvent.js';
import { ReviewableResponseSchema } from '../reviews/Reviewable';
import { BusinessLocalLocationResponseSchema } from './BusinessLocalLocation';
import { BusinessResponseSchema } from '../business/Business';
import { AddressResponseSchema } from '../addresses/Address';
import { DeliveryOrderResponseSchema } from '../deliveryOrders/DeliveryOrder';
import { MenuResponseSchema } from '../menus/Menu';
import { OrderLobbyResponseSchema } from '../orderLobbies/OrderLobby';
import { FileResponseSchema } from '../files/File';
import { LateEventResponseSchema } from '../general/LateEvent';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type StoresModule = {
	stores_id: string;
	business_id: string;
	enabled: boolean;
	settings?: unknown | null;
	created_at: Date;
	updated_at: Date;
	reviewable_id?: string | null;
	reviewable?: Reviewable | null;
	business_local_locations: BusinessLocalLocation[];
	business: Business;
	delivery_address_id?: string | null;
	delivery_address?: Address | null;
	delivery_orders: DeliveryOrder[];
	minimum_order: number;
	menu?: Menu | null;
	order_lobbies: OrderLobby[];
	overwhelmed: boolean;
	online: boolean;
	logo_id?: string | null;
	logo?: File | null;
	banner_id?: string | null;
	banner?: File | null;
	late_events: LateEvent[];
};

export const CreateStoresModuleSchema = z
	.object({
		stores_id: z.string().uuid(),
		business_id: z.string().uuid(),
		enabled: z.boolean(),
		settings: z.unknown().nullable().optional(),
		reviewable_id: z.string().uuid().nullable().optional(),
		delivery_address_id: z.string().uuid().nullable().optional(),
		minimum_order: z.number(),
		overwhelmed: z.boolean(),
		online: z.boolean(),
		logo_id: z.string().uuid().nullable().optional(),
		banner_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateStoresModule');

export type CreateStoresModuleInput = z.infer<typeof CreateStoresModuleSchema>;

export const UpdateStoresModuleSchema = CreateStoresModuleSchema.partial().openapi('UpdateStoresModule');
export type UpdateStoresModuleInput = z.infer<typeof UpdateStoresModuleSchema>;

export const StoresModuleResponseSchema = z
	.object({
		stores_id: z.string(),
		business_id: z.string(),
		enabled: z.boolean(),
		settings: z.unknown().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		reviewable_id: z.string().nullable().optional(),
		reviewable: ReviewableResponseSchema.nullable().optional(),
		business_local_locations: z.array(BusinessLocalLocationResponseSchema),
		business: BusinessResponseSchema,
		delivery_address_id: z.string().nullable().optional(),
		delivery_address: AddressResponseSchema.nullable().optional(),
		delivery_orders: z.array(DeliveryOrderResponseSchema),
		minimum_order: z.number(),
		menu: MenuResponseSchema.nullable().optional(),
		order_lobbies: z.array(OrderLobbyResponseSchema),
		overwhelmed: z.boolean(),
		online: z.boolean(),
		logo_id: z.string().nullable().optional(),
		logo: FileResponseSchema.nullable().optional(),
		banner_id: z.string().nullable().optional(),
		banner: FileResponseSchema.nullable().optional(),
		late_events: z.array(LateEventResponseSchema),
	})
	.openapi('StoresModuleResponse');

export type StoresModuleResponse = z.infer<typeof StoresModuleResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateStoresModule', CreateStoresModuleSchema);
	registry.register('UpdateStoresModule', UpdateStoresModuleSchema);
	registry.register('StoresModuleResponse', StoresModuleResponseSchema);
}
