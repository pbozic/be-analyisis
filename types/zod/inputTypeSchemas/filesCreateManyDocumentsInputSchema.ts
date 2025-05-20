import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FILE_TYPESchema } from './FILE_TYPESchema';

export const filesCreateManyDocumentsInputSchema: z.ZodType<Prisma.filesCreateManyDocumentsInput> = z.object({
  file_id: z.string().uuid().optional(),
  url: z.string().optional().nullable(),
  file_type: z.lazy(() => FILE_TYPESchema),
  public: z.boolean().optional(),
  mime_type: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default filesCreateManyDocumentsInputSchema;
