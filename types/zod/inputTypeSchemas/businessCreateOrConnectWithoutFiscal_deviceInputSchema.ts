import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutFiscal_deviceInputSchema } from './businessCreateWithoutFiscal_deviceInputSchema';
import { businessUncheckedCreateWithoutFiscal_deviceInputSchema } from './businessUncheckedCreateWithoutFiscal_deviceInputSchema';

export const businessCreateOrConnectWithoutFiscal_deviceInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutFiscal_deviceInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => businessCreateWithoutFiscal_deviceInputSchema),z.lazy(() => businessUncheckedCreateWithoutFiscal_deviceInputSchema) ]),
}).strict();

export default businessCreateOrConnectWithoutFiscal_deviceInputSchema;
