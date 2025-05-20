import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutMenusInputSchema } from './businessCreateWithoutMenusInputSchema';
import { businessUncheckedCreateWithoutMenusInputSchema } from './businessUncheckedCreateWithoutMenusInputSchema';
import { businessCreateOrConnectWithoutMenusInputSchema } from './businessCreateOrConnectWithoutMenusInputSchema';
import { businessUpsertWithoutMenusInputSchema } from './businessUpsertWithoutMenusInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateToOneWithWhereWithoutMenusInputSchema } from './businessUpdateToOneWithWhereWithoutMenusInputSchema';
import { businessUpdateWithoutMenusInputSchema } from './businessUpdateWithoutMenusInputSchema';
import { businessUncheckedUpdateWithoutMenusInputSchema } from './businessUncheckedUpdateWithoutMenusInputSchema';

export const businessUpdateOneRequiredWithoutMenusNestedInputSchema: z.ZodType<Prisma.businessUpdateOneRequiredWithoutMenusNestedInput> = z.object({
  create: z.union([ z.lazy(() => businessCreateWithoutMenusInputSchema),z.lazy(() => businessUncheckedCreateWithoutMenusInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutMenusInputSchema).optional(),
  upsert: z.lazy(() => businessUpsertWithoutMenusInputSchema).optional(),
  connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => businessUpdateToOneWithWhereWithoutMenusInputSchema),z.lazy(() => businessUpdateWithoutMenusInputSchema),z.lazy(() => businessUncheckedUpdateWithoutMenusInputSchema) ]).optional(),
}).strict();

export default businessUpdateOneRequiredWithoutMenusNestedInputSchema;
