import { DOCUMENT_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { File } from '../files/File.js';
import type { Driver } from '../drivers/Driver.js';
import type { Business } from '../business/Business.js';
import type { Vehicle } from '../vehicles/Vehicle.js';
import type { Transaction } from '../payments/Transaction.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import { FileResponseSchema } from '../files/File';
import { DriverResponseSchema } from '../drivers/Driver';
import { BusinessResponseSchema } from '../business/Business';
import { TransactionResponseSchema } from '../payments/Transaction';
import { TaxiOrderResponseSchema } from '../taxiOrders/TaxiOrder';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateDocumentSchema = z
	.object({
		document_id: z.string().uuid(),
		document_type: z.nativeEnum(DOCUMENT_TYPE),
		expiration_date: z.unknown().nullable().optional(),
		issue_date: z.unknown().nullable().optional(),
		additional_info: z.unknown().nullable().optional(),
		public: z.boolean(),
		driver_id: z.string().uuid().nullable().optional(),
		business_id: z.string().uuid().nullable().optional(),
		vehicle_id: z.string().uuid().nullable().optional(),
		transaction_id: z.string().uuid().nullable().optional(),
		order_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateDocument');

export type CreateDocumentInput = z.infer<typeof CreateDocumentSchema>;

export const UpdateDocumentSchema = CreateDocumentSchema.partial().openapi('UpdateDocument');
export type UpdateDocumentInput = z.infer<typeof UpdateDocumentSchema>;

export const DocumentResponseSchema = z
	.object({
		document_id: z.string(),
		document_type: z.nativeEnum(DOCUMENT_TYPE),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		expiration_date: z.string().datetime().nullable().optional(),
		issue_date: z.string().datetime().nullable().optional(),
		additional_info: z.unknown().nullable().optional(),
		public: z.boolean(),
		files: z.array(FileResponseSchema),
		driver_id: z.string().nullable().optional(),
		drivers: DriverResponseSchema.nullable().optional(),
		business_id: z.string().nullable().optional(),
		business: BusinessResponseSchema.nullable().optional(),
		vehicle_id: z.string().nullable().optional(),
		// vehicles: VehicleResponseSchema.nullable().optional(),
		transaction_id: z.string().nullable().optional(),
		transactions: TransactionResponseSchema.nullable().optional(),
		order_id: z.string().nullable().optional(),
		taxi_order: TaxiOrderResponseSchema.nullable().optional(),
	})
	.openapi('DocumentResponse');

export type DocumentResponse = z.infer<typeof DocumentResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateDocument', CreateDocumentSchema);
	registry.register('UpdateDocument', UpdateDocumentSchema);
	registry.register('DocumentResponse', DocumentResponseSchema);
}

export type Document = {
	document_id: string;
	document_type: DOCUMENT_TYPE;
	created_at: Date;
	updated_at: Date;
	expiration_date?: Date | null;
	issue_date?: Date | null;
	additional_info?: unknown | null;
	public: boolean;
	files?: File[];
	driver_id?: string | null;
	drivers?: Driver | null;
	business_id?: string | null;
	business?: Business | null;
	vehicle_id?: string | null;
	vehicles?: Vehicle | null;
	transaction_id?: string | null;
	transactions?: Transaction | null;
	order_id?: string | null;
	taxi_order?: TaxiOrder | null;
};
