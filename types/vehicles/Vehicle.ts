import { VEHICLE_CATEGORY, VEHICLE_CLASS } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Document } from '../documents/Document.js';
import type { VehicleSpecification } from './VehicleSpecification.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { Driver } from '../drivers/Driver.js';
import type { BusinessPremise } from '../invoices/BusinessPremise.js';
import type { Invoice } from '../invoices/Invoice.js';
import type { TransportModule } from '../transport/TransportModule.js';
import type { VehicleDriver } from '../drivers/VehicleDriver.js';
import { DocumentResponseSchema } from '../documents/Document';
import { VehicleDriverResponseSchema } from '../drivers/VehicleDriver';
import { VehicleSpecificationResponseSchema } from './VehicleSpecification';
import { TaxiOrderResponseSchema } from '../taxiOrders/TaxiOrder';
import { DeliveryOrderResponseSchema } from '../deliveryOrders/DeliveryOrder';
import { DriverResponseSchema } from '../drivers/Driver';
import { BusinessPremiseResponseSchema } from '../invoices/BusinessPremise';
import { InvoiceResponseSchema } from '../invoices/Invoice';
import { TransportModuleResponseSchema } from '../transport/TransportModule';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Vehicle = {
	vehicle_id: string;
	transport_module_id?: string | null;
	active?: boolean | null;
	class?: VEHICLE_CLASS | null;
	category?: VEHICLE_CATEGORY | null;
	make?: string | null;
	model?: string | null;
	color?: string | null;
	license_plate?: string | null;
	created_at: Date;
	updated_at: Date;
	documents: Document[];
	drivers: VehicleDriver[];
	vehicle_specification_id?: string | null;
	vehicle_specification?: VehicleSpecification | null;
	taxi_orders: TaxiOrder[];
	delivery_orders: DeliveryOrder[];
	current_driver?: Driver | null;
	business_premise_id?: string | null;
	business_premise?: BusinessPremise | null;
	invoices: Invoice[];
	transport_module?: TransportModule | null;
};

export const CreateVehicleSchema = z
	.object({
		vehicle_id: z.string().uuid(),
		transport_module_id: z.string().uuid().nullable().optional(),
		active: z.boolean().nullable().optional(),
		class: z.nativeEnum(VEHICLE_CLASS).nullable().optional(),
		category: z.nativeEnum(VEHICLE_CATEGORY).nullable().optional(),
		make: z.string().nullable().optional(),
		model: z.string().nullable().optional(),
		color: z.string().nullable().optional(),
		license_plate: z.string().nullable().optional(),
		vehicle_specification_id: z.string().uuid().nullable().optional(),
		business_premise_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateVehicle');

export type CreateVehicleInput = z.infer<typeof CreateVehicleSchema>;

export const UpdateVehicleSchema = CreateVehicleSchema.partial().openapi('UpdateVehicle');
export type UpdateVehicleInput = z.infer<typeof UpdateVehicleSchema>;

export const VehicleResponseSchema = z
	.object({
		vehicle_id: z.string(),
		transport_module_id: z.string().nullable().optional(),
		active: z.boolean().nullable().optional(),
		class: z.nativeEnum(VEHICLE_CLASS).nullable().optional(),
		category: z.nativeEnum(VEHICLE_CATEGORY).nullable().optional(),
		make: z.string().nullable().optional(),
		model: z.string().nullable().optional(),
		color: z.string().nullable().optional(),
		license_plate: z.string().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		documents: z.array(DocumentResponseSchema),
		drivers: z.array(VehicleDriverResponseSchema),
		vehicle_specification_id: z.string().nullable().optional(),
		vehicle_specification: VehicleSpecificationResponseSchema.nullable().optional(),
		taxi_orders: z.array(TaxiOrderResponseSchema),
		delivery_orders: z.array(DeliveryOrderResponseSchema),
		current_driver: DriverResponseSchema.nullable().optional(),
		business_premise_id: z.string().nullable().optional(),
		business_premise: BusinessPremiseResponseSchema.nullable().optional(),
		invoices: z.array(InvoiceResponseSchema),
		transport_module: TransportModuleResponseSchema.nullable().optional(),
	})
	.openapi('VehicleResponse');

export type VehicleResponse = z.infer<typeof VehicleResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateVehicle', CreateVehicleSchema);
	registry.register('UpdateVehicle', UpdateVehicleSchema);
	registry.register('VehicleResponse', VehicleResponseSchema);
}
