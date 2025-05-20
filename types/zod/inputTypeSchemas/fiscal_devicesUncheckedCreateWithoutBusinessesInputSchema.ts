import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const fiscal_devicesUncheckedCreateWithoutBusinessesInputSchema: z.ZodType<Prisma.fiscal_devicesUncheckedCreateWithoutBusinessesInput> = z.object({
  fiscal_devices_id: z.string().uuid().optional(),
  name: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default fiscal_devicesUncheckedCreateWithoutBusinessesInputSchema;
