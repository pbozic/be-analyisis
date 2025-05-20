import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const financesCreateWithoutBusinessInputSchema: z.ZodType<Prisma.financesCreateWithoutBusinessInput> = z.object({
  finance_id: z.string().uuid().optional(),
  bank_name: z.string(),
  account_holder: z.string(),
  account_number: z.string(),
  payment_preferences: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default financesCreateWithoutBusinessInputSchema;
