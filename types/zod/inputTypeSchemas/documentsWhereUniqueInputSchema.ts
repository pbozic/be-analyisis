import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereInputSchema } from './documentsWhereInputSchema';
import { EnumDOCUMENT_TYPEFilterSchema } from './EnumDOCUMENT_TYPEFilterSchema';
import { DOCUMENT_TYPESchema } from './DOCUMENT_TYPESchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { FilesListRelationFilterSchema } from './FilesListRelationFilterSchema';
import { DriversNullableRelationFilterSchema } from './DriversNullableRelationFilterSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { Delivery_driversNullableRelationFilterSchema } from './Delivery_driversNullableRelationFilterSchema';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';
import { BusinessNullableRelationFilterSchema } from './BusinessNullableRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { UsersNullableRelationFilterSchema } from './UsersNullableRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { VehiclesNullableRelationFilterSchema } from './VehiclesNullableRelationFilterSchema';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';
import { Menu_itemsNullableRelationFilterSchema } from './Menu_itemsNullableRelationFilterSchema';
import { menu_itemsWhereInputSchema } from './menu_itemsWhereInputSchema';
import { Lost_itemsNullableRelationFilterSchema } from './Lost_itemsNullableRelationFilterSchema';
import { lost_itemsWhereInputSchema } from './lost_itemsWhereInputSchema';
import { TransactionsNullableRelationFilterSchema } from './TransactionsNullableRelationFilterSchema';
import { transactionsWhereInputSchema } from './transactionsWhereInputSchema';

export const documentsWhereUniqueInputSchema: z.ZodType<Prisma.documentsWhereUniqueInput> = z.object({
  document_id: z.string().uuid()
})
.and(z.object({
  document_id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => documentsWhereInputSchema),z.lazy(() => documentsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => documentsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => documentsWhereInputSchema),z.lazy(() => documentsWhereInputSchema).array() ]).optional(),
  document_type: z.union([ z.lazy(() => EnumDOCUMENT_TYPEFilterSchema),z.lazy(() => DOCUMENT_TYPESchema) ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  expiration_date: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  issue_date: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  additional_info: z.lazy(() => JsonNullableFilterSchema).optional(),
  public: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  driver_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  delivery_driver_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  business_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  vehicle_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  menu_item_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  lost_item_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  transaction_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  files: z.lazy(() => FilesListRelationFilterSchema).optional(),
  drivers: z.union([ z.lazy(() => DriversNullableRelationFilterSchema),z.lazy(() => driversWhereInputSchema) ]).optional().nullable(),
  delivery_driver: z.union([ z.lazy(() => Delivery_driversNullableRelationFilterSchema),z.lazy(() => delivery_driversWhereInputSchema) ]).optional().nullable(),
  business: z.union([ z.lazy(() => BusinessNullableRelationFilterSchema),z.lazy(() => businessWhereInputSchema) ]).optional().nullable(),
  user: z.union([ z.lazy(() => UsersNullableRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional().nullable(),
  vehicles: z.union([ z.lazy(() => VehiclesNullableRelationFilterSchema),z.lazy(() => vehiclesWhereInputSchema) ]).optional().nullable(),
  menu_items: z.union([ z.lazy(() => Menu_itemsNullableRelationFilterSchema),z.lazy(() => menu_itemsWhereInputSchema) ]).optional().nullable(),
  lost_items: z.union([ z.lazy(() => Lost_itemsNullableRelationFilterSchema),z.lazy(() => lost_itemsWhereInputSchema) ]).optional().nullable(),
  transactions: z.union([ z.lazy(() => TransactionsNullableRelationFilterSchema),z.lazy(() => transactionsWhereInputSchema) ]).optional().nullable(),
}).strict());

export default documentsWhereUniqueInputSchema;
