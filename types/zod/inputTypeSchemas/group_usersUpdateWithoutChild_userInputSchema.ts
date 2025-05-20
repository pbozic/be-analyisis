import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { usersUpdateOneRequiredWithoutChild_usersNestedInputSchema } from './usersUpdateOneRequiredWithoutChild_usersNestedInputSchema';
import { allowancesUpdateOneWithoutUserNestedInputSchema } from './allowancesUpdateOneWithoutUserNestedInputSchema';

export const group_usersUpdateWithoutChild_userInputSchema: z.ZodType<Prisma.group_usersUpdateWithoutChild_userInput> = z.object({
  group_user_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  parent_user: z.lazy(() => usersUpdateOneRequiredWithoutChild_usersNestedInputSchema).optional(),
  allowance: z.lazy(() => allowancesUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export default group_usersUpdateWithoutChild_userInputSchema;
