import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { flagsUpdateOneRequiredWithoutHistoryNestedInputSchema } from './flagsUpdateOneRequiredWithoutHistoryNestedInputSchema';
import { usersUpdateOneRequiredWithoutFlag_changesNestedInputSchema } from './usersUpdateOneRequiredWithoutFlag_changesNestedInputSchema';

export const flag_historyUpdateInputSchema: z.ZodType<Prisma.flag_historyUpdateInput> = z.object({
  flag_history_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  flag: z.lazy(() => flagsUpdateOneRequiredWithoutHistoryNestedInputSchema).optional(),
  user: z.lazy(() => usersUpdateOneRequiredWithoutFlag_changesNestedInputSchema).optional()
}).strict();

export default flag_historyUpdateInputSchema;
