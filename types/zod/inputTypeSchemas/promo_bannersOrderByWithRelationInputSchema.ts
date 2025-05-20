import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { filesOrderByWithRelationInputSchema } from './filesOrderByWithRelationInputSchema';
import { promo_adsOrderByWithRelationInputSchema } from './promo_adsOrderByWithRelationInputSchema';

export const promo_bannersOrderByWithRelationInputSchema: z.ZodType<Prisma.promo_bannersOrderByWithRelationInput> = z.object({
  promo_banners_id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  size: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  promo_section_buy_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  file_id: z.lazy(() => SortOrderSchema).optional(),
  promo_ads_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  files: z.lazy(() => filesOrderByWithRelationInputSchema).optional(),
  promo_ads: z.lazy(() => promo_adsOrderByWithRelationInputSchema).optional()
}).strict();

export default promo_bannersOrderByWithRelationInputSchema;
