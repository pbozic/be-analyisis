import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutPromo_section_buysInputSchema } from './usersUpdateWithoutPromo_section_buysInputSchema';
import { usersUncheckedUpdateWithoutPromo_section_buysInputSchema } from './usersUncheckedUpdateWithoutPromo_section_buysInputSchema';

export const usersUpdateToOneWithWhereWithoutPromo_section_buysInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutPromo_section_buysInput> = z.object({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutPromo_section_buysInputSchema),z.lazy(() => usersUncheckedUpdateWithoutPromo_section_buysInputSchema) ]),
}).strict();

export default usersUpdateToOneWithWhereWithoutPromo_section_buysInputSchema;
