import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wordsScalarWhereInputSchema } from './wordsScalarWhereInputSchema';
import { wordsUpdateManyMutationInputSchema } from './wordsUpdateManyMutationInputSchema';
import { wordsUncheckedUpdateManyWithoutTranslatableInputSchema } from './wordsUncheckedUpdateManyWithoutTranslatableInputSchema';

export const wordsUpdateManyWithWhereWithoutTranslatableInputSchema: z.ZodType<Prisma.wordsUpdateManyWithWhereWithoutTranslatableInput> = z.object({
  where: z.lazy(() => wordsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => wordsUpdateManyMutationInputSchema),z.lazy(() => wordsUncheckedUpdateManyWithoutTranslatableInputSchema) ]),
}).strict();

export default wordsUpdateManyWithWhereWithoutTranslatableInputSchema;
