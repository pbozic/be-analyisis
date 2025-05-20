import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { CATEGORY_TYPESchema } from './CATEGORY_TYPESchema';
import { EnumCATEGORY_TYPEFieldUpdateOperationsInputSchema } from './EnumCATEGORY_TYPEFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { promo_ads_categoryUncheckedUpdateManyWithoutCategoryNestedInputSchema } from './promo_ads_categoryUncheckedUpdateManyWithoutCategoryNestedInputSchema';
import { categoriesUncheckedUpdateManyWithoutParent_categoryNestedInputSchema } from './categoriesUncheckedUpdateManyWithoutParent_categoryNestedInputSchema';
import { wordsUncheckedUpdateManyWithoutCategoryNestedInputSchema } from './wordsUncheckedUpdateManyWithoutCategoryNestedInputSchema';

export const categoriesUncheckedUpdateWithoutMenu_categoriesInputSchema: z.ZodType<Prisma.categoriesUncheckedUpdateWithoutMenu_categoriesInput> = z.object({
  categories_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tag: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon_file_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category_type: z.union([ z.lazy(() => CATEGORY_TYPESchema),z.lazy(() => EnumCATEGORY_TYPEFieldUpdateOperationsInputSchema) ]).optional(),
  parent_categories_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  translatable_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deleted_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  promo_ads_category: z.lazy(() => promo_ads_categoryUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional(),
  sub_categories: z.lazy(() => categoriesUncheckedUpdateManyWithoutParent_categoryNestedInputSchema).optional(),
  words: z.lazy(() => wordsUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export default categoriesUncheckedUpdateWithoutMenu_categoriesInputSchema;
