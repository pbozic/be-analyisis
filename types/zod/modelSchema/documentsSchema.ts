import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema';
import { DOCUMENT_TYPESchema } from '../inputTypeSchemas/DOCUMENT_TYPESchema';
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { filesWithRelationsSchema } from './filesSchema';
import type { filesWithRelations } from './filesSchema';
import { driversWithRelationsSchema } from './driversSchema';
import type { driversWithRelations } from './driversSchema';
import { delivery_driversWithRelationsSchema } from './delivery_driversSchema';
import type { delivery_driversWithRelations } from './delivery_driversSchema';
import { businessWithRelationsSchema } from './businessSchema';
import type { businessWithRelations } from './businessSchema';
import { usersWithRelationsSchema } from './usersSchema';
import type { usersWithRelations } from './usersSchema';
import { vehiclesWithRelationsSchema } from './vehiclesSchema';
import type { vehiclesWithRelations } from './vehiclesSchema';
import { menu_itemsWithRelationsSchema } from './menu_itemsSchema';
import type { menu_itemsWithRelations } from './menu_itemsSchema';
import { lost_itemsWithRelationsSchema } from './lost_itemsSchema';
import type { lost_itemsWithRelations } from './lost_itemsSchema';
import { transactionsWithRelationsSchema } from './transactionsSchema';
import type { transactionsWithRelations } from './transactionsSchema';

/////////////////////////////////////////
// DOCUMENTS SCHEMA
/////////////////////////////////////////

export const documentsSchema = z.object({
	document_type: DOCUMENT_TYPESchema,
	document_id: z.string().uuid(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	expiration_date: z.coerce.date().nullable(),
	issue_date: z.coerce.date().nullable(),
	additional_info: JsonValueSchema.nullable(),
	public: z.boolean(),
	driver_id: z.string().nullable(),
	delivery_driver_id: z.string().nullable(),
	business_id: z.string().nullable(),
	user_id: z.string().nullable(),
	vehicle_id: z.string().nullable(),
	menu_item_id: z.string().nullable(),
	lost_item_id: z.string().nullable(),
	transaction_id: z.string().nullable(),
});

export type documents = z.infer<typeof documentsSchema>;

/////////////////////////////////////////
// DOCUMENTS RELATION SCHEMA
/////////////////////////////////////////

export type documentsRelations = {
	files: filesWithRelations[];
	drivers?: driversWithRelations | null;
	delivery_driver?: delivery_driversWithRelations | null;
	business?: businessWithRelations | null;
	user?: usersWithRelations | null;
	vehicles?: vehiclesWithRelations | null;
	menu_items?: menu_itemsWithRelations | null;
	lost_items?: lost_itemsWithRelations | null;
	transactions?: transactionsWithRelations | null;
};

export type documentsWithRelations = Omit<z.infer<typeof documentsSchema>, 'additional_info'> & {
	additional_info?: JsonValueType | null;
} & documentsRelations;

export const documentsWithRelationsSchema: z.ZodType<documentsWithRelations> = documentsSchema.merge(
	z.object({
		files: z.lazy(() => filesWithRelationsSchema).array(),
		drivers: z.lazy(() => driversWithRelationsSchema).nullable(),
		delivery_driver: z.lazy(() => delivery_driversWithRelationsSchema).nullable(),
		business: z.lazy(() => businessWithRelationsSchema).nullable(),
		user: z.lazy(() => usersWithRelationsSchema).nullable(),
		vehicles: z.lazy(() => vehiclesWithRelationsSchema).nullable(),
		menu_items: z.lazy(() => menu_itemsWithRelationsSchema).nullable(),
		lost_items: z.lazy(() => lost_itemsWithRelationsSchema).nullable(),
		transactions: z.lazy(() => transactionsWithRelationsSchema).nullable(),
	})
);

export default documentsSchema;
