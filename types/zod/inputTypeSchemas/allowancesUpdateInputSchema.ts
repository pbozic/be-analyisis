import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { group_usersUpdateOneWithoutAllowanceNestedInputSchema } from './group_usersUpdateOneWithoutAllowanceNestedInputSchema';
import { business_usersUpdateOneWithoutAllowanceNestedInputSchema } from './business_usersUpdateOneWithoutAllowanceNestedInputSchema';

export const allowancesUpdateInputSchema: z.ZodType<Prisma.allowancesUpdateInput> = z.object({
  allowance_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount_taxi_wallet: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  amount_transfer_wallet: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  amount_delivery_wallet: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  amount_any_wallet: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  amount_taxi_purchase_order: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  amount_transfer_purchase_order: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  amount_delivery_purchase_order: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  amount_any_purchase_order: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => group_usersUpdateOneWithoutAllowanceNestedInputSchema).optional(),
  business_user: z.lazy(() => business_usersUpdateOneWithoutAllowanceNestedInputSchema).optional()
}).strict();

export default allowancesUpdateInputSchema;
