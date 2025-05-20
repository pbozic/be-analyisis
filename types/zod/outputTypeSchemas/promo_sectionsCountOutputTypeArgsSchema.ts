import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_sectionsCountOutputTypeSelectSchema } from './promo_sectionsCountOutputTypeSelectSchema';

export const promo_sectionsCountOutputTypeArgsSchema: z.ZodType<Prisma.promo_sectionsCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => promo_sectionsCountOutputTypeSelectSchema).nullish(),
}).strict();

export default promo_sectionsCountOutputTypeSelectSchema;
