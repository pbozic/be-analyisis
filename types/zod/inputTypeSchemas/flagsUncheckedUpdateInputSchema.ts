import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { flag_historyUncheckedUpdateManyWithoutFlagNestedInputSchema } from './flag_historyUncheckedUpdateManyWithoutFlagNestedInputSchema';

export const flagsUncheckedUpdateInputSchema: z.ZodType<Prisma.flagsUncheckedUpdateInput> = z.object({
  flag_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  history: z.lazy(() => flag_historyUncheckedUpdateManyWithoutFlagNestedInputSchema).optional()
}).strict();

export default flagsUncheckedUpdateInputSchema;
