import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { fiscal_devicesWhereUniqueInputSchema } from './fiscal_devicesWhereUniqueInputSchema';
import { fiscal_devicesCreateWithoutBusinessesInputSchema } from './fiscal_devicesCreateWithoutBusinessesInputSchema';
import { fiscal_devicesUncheckedCreateWithoutBusinessesInputSchema } from './fiscal_devicesUncheckedCreateWithoutBusinessesInputSchema';

export const fiscal_devicesCreateOrConnectWithoutBusinessesInputSchema: z.ZodType<Prisma.fiscal_devicesCreateOrConnectWithoutBusinessesInput> = z.object({
  where: z.lazy(() => fiscal_devicesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => fiscal_devicesCreateWithoutBusinessesInputSchema),z.lazy(() => fiscal_devicesUncheckedCreateWithoutBusinessesInputSchema) ]),
}).strict();

export default fiscal_devicesCreateOrConnectWithoutBusinessesInputSchema;
