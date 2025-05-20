import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateWithoutFiscal_deviceInputSchema } from './businessUpdateWithoutFiscal_deviceInputSchema';
import { businessUncheckedUpdateWithoutFiscal_deviceInputSchema } from './businessUncheckedUpdateWithoutFiscal_deviceInputSchema';
import { businessCreateWithoutFiscal_deviceInputSchema } from './businessCreateWithoutFiscal_deviceInputSchema';
import { businessUncheckedCreateWithoutFiscal_deviceInputSchema } from './businessUncheckedCreateWithoutFiscal_deviceInputSchema';

export const businessUpsertWithWhereUniqueWithoutFiscal_deviceInputSchema: z.ZodType<Prisma.businessUpsertWithWhereUniqueWithoutFiscal_deviceInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => businessUpdateWithoutFiscal_deviceInputSchema),z.lazy(() => businessUncheckedUpdateWithoutFiscal_deviceInputSchema) ]),
  create: z.union([ z.lazy(() => businessCreateWithoutFiscal_deviceInputSchema),z.lazy(() => businessUncheckedCreateWithoutFiscal_deviceInputSchema) ]),
}).strict();

export default businessUpsertWithWhereUniqueWithoutFiscal_deviceInputSchema;
