import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FILE_TYPESchema } from './FILE_TYPESchema';
import { documentsCreateNestedOneWithoutFilesInputSchema } from './documentsCreateNestedOneWithoutFilesInputSchema';
import { promo_bannersCreateNestedManyWithoutFilesInputSchema } from './promo_bannersCreateNestedManyWithoutFilesInputSchema';

export const filesCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.filesCreateWithoutCategoriesInput> = z.object({
  file_id: z.string().uuid().optional(),
  url: z.string().optional().nullable(),
  file_type: z.lazy(() => FILE_TYPESchema),
  public: z.boolean().optional(),
  mime_type: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  documents: z.lazy(() => documentsCreateNestedOneWithoutFilesInputSchema).optional(),
  promo_banners: z.lazy(() => promo_bannersCreateNestedManyWithoutFilesInputSchema).optional()
}).strict();

export default filesCreateWithoutCategoriesInputSchema;
