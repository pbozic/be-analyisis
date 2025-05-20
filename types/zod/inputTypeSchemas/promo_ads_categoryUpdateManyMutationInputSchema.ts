import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const promo_ads_categoryUpdateManyMutationInputSchema: z.ZodType<Prisma.promo_ads_categoryUpdateManyMutationInput> = z.object({
  promo_ads_category_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default promo_ads_categoryUpdateManyMutationInputSchema;
