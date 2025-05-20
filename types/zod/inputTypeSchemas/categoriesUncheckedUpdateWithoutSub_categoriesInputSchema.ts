import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { CATEGORY_TYPESchema } from './CATEGORY_TYPESchema';
import { EnumCATEGORY_TYPEFieldUpdateOperationsInputSchema } from './EnumCATEGORY_TYPEFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { menu_categories_categoriesUncheckedUpdateManyWithoutCategoryNestedInputSchema } from './menu_categories_categoriesUncheckedUpdateManyWithoutCategoryNestedInputSchema';
import { promo_ads_categoryUncheckedUpdateManyWithoutCategoryNestedInputSchema } from './promo_ads_categoryUncheckedUpdateManyWithoutCategoryNestedInputSchema';
import { wordsUncheckedUpdateManyWithoutCategoryNestedInputSchema } from './wordsUncheckedUpdateManyWithoutCategoryNestedInputSchema';

export const categoriesUncheckedUpdateWithoutSub_categoriesInputSchema: z.ZodType<Prisma.categoriesUncheckedUpdateWithoutSub_categoriesInput> = z.object({
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
  menu_categories: z.lazy(() => menu_categories_categoriesUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional(),
  promo_ads_category: z.lazy(() => promo_ads_categoryUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional(),
  words: z.lazy(() => wordsUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export default categoriesUncheckedUpdateWithoutSub_categoriesInputSchema;
