import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FILE_TYPESchema } from './FILE_TYPESchema';
import { promo_bannersUncheckedCreateNestedManyWithoutFilesInputSchema } from './promo_bannersUncheckedCreateNestedManyWithoutFilesInputSchema';

export const filesUncheckedCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.filesUncheckedCreateWithoutCategoriesInput> = z.object({
  file_id: z.string().uuid().optional(),
  url: z.string().optional().nullable(),
  file_type: z.lazy(() => FILE_TYPESchema),
  public: z.boolean().optional(),
  mime_type: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  document_id: z.string().optional().nullable(),
  promo_banners: z.lazy(() => promo_bannersUncheckedCreateNestedManyWithoutFilesInputSchema).optional()
}).strict();

export default filesUncheckedCreateWithoutCategoriesInputSchema;
