import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { USER_ROLESSchema } from './USER_ROLESSchema';
import { EnumUSER_ROLESFieldUpdateOperationsInputSchema } from './EnumUSER_ROLESFieldUpdateOperationsInputSchema';
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema';

export const user_rolesUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.user_rolesUncheckedUpdateManyWithoutUserInput> = z.object({
  user_roles_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => USER_ROLESSchema),z.lazy(() => EnumUSER_ROLESFieldUpdateOperationsInputSchema) ]).optional(),
  primary: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export default user_rolesUncheckedUpdateManyWithoutUserInputSchema;
