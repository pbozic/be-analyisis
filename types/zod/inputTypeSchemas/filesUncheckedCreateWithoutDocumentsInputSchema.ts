import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FILE_TYPESchema } from './FILE_TYPESchema';
import { categoriesUncheckedCreateNestedManyWithoutIconInputSchema } from './categoriesUncheckedCreateNestedManyWithoutIconInputSchema';
import { promo_bannersUncheckedCreateNestedManyWithoutFilesInputSchema } from './promo_bannersUncheckedCreateNestedManyWithoutFilesInputSchema';

export const filesUncheckedCreateWithoutDocumentsInputSchema: z.ZodType<Prisma.filesUncheckedCreateWithoutDocumentsInput> = z.object({
  file_id: z.string().uuid().optional(),
  url: z.string().optional().nullable(),
  file_type: z.lazy(() => FILE_TYPESchema),
  public: z.boolean().optional(),
  mime_type: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  categories: z.lazy(() => categoriesUncheckedCreateNestedManyWithoutIconInputSchema).optional(),
  promo_banners: z.lazy(() => promo_bannersUncheckedCreateNestedManyWithoutFilesInputSchema).optional()
}).strict();

export default filesUncheckedCreateWithoutDocumentsInputSchema;
