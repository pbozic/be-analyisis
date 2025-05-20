import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutPromo_section_buysInputSchema } from './usersCreateWithoutPromo_section_buysInputSchema';
import { usersUncheckedCreateWithoutPromo_section_buysInputSchema } from './usersUncheckedCreateWithoutPromo_section_buysInputSchema';
import { usersCreateOrConnectWithoutPromo_section_buysInputSchema } from './usersCreateOrConnectWithoutPromo_section_buysInputSchema';
import { usersUpsertWithoutPromo_section_buysInputSchema } from './usersUpsertWithoutPromo_section_buysInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutPromo_section_buysInputSchema } from './usersUpdateToOneWithWhereWithoutPromo_section_buysInputSchema';
import { usersUpdateWithoutPromo_section_buysInputSchema } from './usersUpdateWithoutPromo_section_buysInputSchema';
import { usersUncheckedUpdateWithoutPromo_section_buysInputSchema } from './usersUncheckedUpdateWithoutPromo_section_buysInputSchema';

export const usersUpdateOneWithoutPromo_section_buysNestedInputSchema: z.ZodType<Prisma.usersUpdateOneWithoutPromo_section_buysNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutPromo_section_buysInputSchema),z.lazy(() => usersUncheckedCreateWithoutPromo_section_buysInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutPromo_section_buysInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutPromo_section_buysInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => usersWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => usersWhereInputSchema) ]).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutPromo_section_buysInputSchema),z.lazy(() => usersUpdateWithoutPromo_section_buysInputSchema),z.lazy(() => usersUncheckedUpdateWithoutPromo_section_buysInputSchema) ]).optional(),
}).strict();

export default usersUpdateOneWithoutPromo_section_buysNestedInputSchema;
