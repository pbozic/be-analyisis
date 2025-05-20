import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { financesWhereInputSchema } from './financesWhereInputSchema';
import { financesUpdateWithoutBusinessInputSchema } from './financesUpdateWithoutBusinessInputSchema';
import { financesUncheckedUpdateWithoutBusinessInputSchema } from './financesUncheckedUpdateWithoutBusinessInputSchema';

export const financesUpdateToOneWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.financesUpdateToOneWithWhereWithoutBusinessInput> = z.object({
  where: z.lazy(() => financesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => financesUpdateWithoutBusinessInputSchema),z.lazy(() => financesUncheckedUpdateWithoutBusinessInputSchema) ]),
}).strict();

export default financesUpdateToOneWithWhereWithoutBusinessInputSchema;
