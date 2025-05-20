import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { fiscal_devicesWhereInputSchema } from './fiscal_devicesWhereInputSchema';
import { fiscal_devicesUpdateWithoutBusinessesInputSchema } from './fiscal_devicesUpdateWithoutBusinessesInputSchema';
import { fiscal_devicesUncheckedUpdateWithoutBusinessesInputSchema } from './fiscal_devicesUncheckedUpdateWithoutBusinessesInputSchema';

export const fiscal_devicesUpdateToOneWithWhereWithoutBusinessesInputSchema: z.ZodType<Prisma.fiscal_devicesUpdateToOneWithWhereWithoutBusinessesInput> = z.object({
  where: z.lazy(() => fiscal_devicesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => fiscal_devicesUpdateWithoutBusinessesInputSchema),z.lazy(() => fiscal_devicesUncheckedUpdateWithoutBusinessesInputSchema) ]),
}).strict();

export default fiscal_devicesUpdateToOneWithWhereWithoutBusinessesInputSchema;
