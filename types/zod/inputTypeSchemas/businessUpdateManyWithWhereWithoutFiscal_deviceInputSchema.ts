import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessScalarWhereInputSchema } from './businessScalarWhereInputSchema';
import { businessUpdateManyMutationInputSchema } from './businessUpdateManyMutationInputSchema';
import { businessUncheckedUpdateManyWithoutFiscal_deviceInputSchema } from './businessUncheckedUpdateManyWithoutFiscal_deviceInputSchema';

export const businessUpdateManyWithWhereWithoutFiscal_deviceInputSchema: z.ZodType<Prisma.businessUpdateManyWithWhereWithoutFiscal_deviceInput> = z.object({
  where: z.lazy(() => businessScalarWhereInputSchema),
  data: z.union([ z.lazy(() => businessUpdateManyMutationInputSchema),z.lazy(() => businessUncheckedUpdateManyWithoutFiscal_deviceInputSchema) ]),
}).strict();

export default businessUpdateManyWithWhereWithoutFiscal_deviceInputSchema;
