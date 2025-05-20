import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { FILE_TYPESchema } from './FILE_TYPESchema';
import { EnumFILE_TYPEFieldUpdateOperationsInputSchema } from './EnumFILE_TYPEFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { promo_bannersUncheckedUpdateManyWithoutFilesNestedInputSchema } from './promo_bannersUncheckedUpdateManyWithoutFilesNestedInputSchema';

export const filesUncheckedUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.filesUncheckedUpdateWithoutCategoriesInput> = z.object({
  file_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  file_type: z.union([ z.lazy(() => FILE_TYPESchema),z.lazy(() => EnumFILE_TYPEFieldUpdateOperationsInputSchema) ]).optional(),
  public: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  mime_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  document_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  promo_banners: z.lazy(() => promo_bannersUncheckedUpdateManyWithoutFilesNestedInputSchema).optional()
}).strict();

export default filesUncheckedUpdateWithoutCategoriesInputSchema;
