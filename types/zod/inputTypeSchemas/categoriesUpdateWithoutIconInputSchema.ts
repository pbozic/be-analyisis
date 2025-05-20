import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { CATEGORY_TYPESchema } from './CATEGORY_TYPESchema';
import { EnumCATEGORY_TYPEFieldUpdateOperationsInputSchema } from './EnumCATEGORY_TYPEFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { menu_categories_categoriesUpdateManyWithoutCategoryNestedInputSchema } from './menu_categories_categoriesUpdateManyWithoutCategoryNestedInputSchema';
import { promo_ads_categoryUpdateManyWithoutCategoryNestedInputSchema } from './promo_ads_categoryUpdateManyWithoutCategoryNestedInputSchema';
import { categoriesUpdateOneWithoutSub_categoriesNestedInputSchema } from './categoriesUpdateOneWithoutSub_categoriesNestedInputSchema';
import { categoriesUpdateManyWithoutParent_categoryNestedInputSchema } from './categoriesUpdateManyWithoutParent_categoryNestedInputSchema';
import { translatableUpdateOneRequiredWithoutCategoriesNestedInputSchema } from './translatableUpdateOneRequiredWithoutCategoriesNestedInputSchema';
import { wordsUpdateManyWithoutCategoryNestedInputSchema } from './wordsUpdateManyWithoutCategoryNestedInputSchema';

export const categoriesUpdateWithoutIconInputSchema: z.ZodType<Prisma.categoriesUpdateWithoutIconInput> = z.object({
  categories_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tag: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  category_type: z.union([ z.lazy(() => CATEGORY_TYPESchema),z.lazy(() => EnumCATEGORY_TYPEFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deleted_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  menu_categories: z.lazy(() => menu_categories_categoriesUpdateManyWithoutCategoryNestedInputSchema).optional(),
  promo_ads_category: z.lazy(() => promo_ads_categoryUpdateManyWithoutCategoryNestedInputSchema).optional(),
  parent_category: z.lazy(() => categoriesUpdateOneWithoutSub_categoriesNestedInputSchema).optional(),
  sub_categories: z.lazy(() => categoriesUpdateManyWithoutParent_categoryNestedInputSchema).optional(),
  translatable: z.lazy(() => translatableUpdateOneRequiredWithoutCategoriesNestedInputSchema).optional(),
  words: z.lazy(() => wordsUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export default categoriesUpdateWithoutIconInputSchema;
