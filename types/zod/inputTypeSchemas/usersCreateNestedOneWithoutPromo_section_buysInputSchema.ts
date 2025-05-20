import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutPromo_section_buysInputSchema } from './usersCreateWithoutPromo_section_buysInputSchema';
import { usersUncheckedCreateWithoutPromo_section_buysInputSchema } from './usersUncheckedCreateWithoutPromo_section_buysInputSchema';
import { usersCreateOrConnectWithoutPromo_section_buysInputSchema } from './usersCreateOrConnectWithoutPromo_section_buysInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutPromo_section_buysInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutPromo_section_buysInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutPromo_section_buysInputSchema),z.lazy(() => usersUncheckedCreateWithoutPromo_section_buysInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutPromo_section_buysInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional()
}).strict();

export default usersCreateNestedOneWithoutPromo_section_buysInputSchema;
