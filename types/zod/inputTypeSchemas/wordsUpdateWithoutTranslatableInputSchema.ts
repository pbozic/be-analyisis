import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { categoriesUpdateOneWithoutWordsNestedInputSchema } from './categoriesUpdateOneWithoutWordsNestedInputSchema';
import { word_buyUpdateManyWithoutWordNestedInputSchema } from './word_buyUpdateManyWithoutWordNestedInputSchema';
import { word_bundlesUpdateManyWithoutWordsNestedInputSchema } from './word_bundlesUpdateManyWithoutWordsNestedInputSchema';

export const wordsUpdateWithoutTranslatableInputSchema: z.ZodType<Prisma.wordsUpdateWithoutTranslatableInput> = z.object({
  word_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  word: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  popularity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.lazy(() => categoriesUpdateOneWithoutWordsNestedInputSchema).optional(),
  subscriptions: z.lazy(() => word_buyUpdateManyWithoutWordNestedInputSchema).optional(),
  bundles: z.lazy(() => word_bundlesUpdateManyWithoutWordsNestedInputSchema).optional()
}).strict();

export default wordsUpdateWithoutTranslatableInputSchema;
