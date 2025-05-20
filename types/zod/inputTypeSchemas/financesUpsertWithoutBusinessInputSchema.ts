import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { financesUpdateWithoutBusinessInputSchema } from './financesUpdateWithoutBusinessInputSchema';
import { financesUncheckedUpdateWithoutBusinessInputSchema } from './financesUncheckedUpdateWithoutBusinessInputSchema';
import { financesCreateWithoutBusinessInputSchema } from './financesCreateWithoutBusinessInputSchema';
import { financesUncheckedCreateWithoutBusinessInputSchema } from './financesUncheckedCreateWithoutBusinessInputSchema';
import { financesWhereInputSchema } from './financesWhereInputSchema';

export const financesUpsertWithoutBusinessInputSchema: z.ZodType<Prisma.financesUpsertWithoutBusinessInput> = z.object({
  update: z.union([ z.lazy(() => financesUpdateWithoutBusinessInputSchema),z.lazy(() => financesUncheckedUpdateWithoutBusinessInputSchema) ]),
  create: z.union([ z.lazy(() => financesCreateWithoutBusinessInputSchema),z.lazy(() => financesUncheckedCreateWithoutBusinessInputSchema) ]),
  where: z.lazy(() => financesWhereInputSchema).optional()
}).strict();

export default financesUpsertWithoutBusinessInputSchema;
