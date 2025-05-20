import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { PROMO_SERVICE_TYPESSchema } from './PROMO_SERVICE_TYPESSchema';
import { EnumPROMO_SERVICE_TYPESFieldUpdateOperationsInputSchema } from './EnumPROMO_SERVICE_TYPESFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { promo_bannersUpdateManyWithoutPromo_adsNestedInputSchema } from './promo_bannersUpdateManyWithoutPromo_adsNestedInputSchema';
import { promo_ads_categoryUpdateManyWithoutPromo_adNestedInputSchema } from './promo_ads_categoryUpdateManyWithoutPromo_adNestedInputSchema';

export const promo_adsUpdateInputSchema: z.ZodType<Prisma.promo_adsUpdateInput> = z.object({
  promo_ads_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tag: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  service_type: z.union([ z.lazy(() => PROMO_SERVICE_TYPESSchema),z.lazy(() => EnumPROMO_SERVICE_TYPESFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  active_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  active_until: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banner: z.lazy(() => promo_bannersUpdateManyWithoutPromo_adsNestedInputSchema).optional(),
  categories: z.lazy(() => promo_ads_categoryUpdateManyWithoutPromo_adNestedInputSchema).optional()
}).strict();

export default promo_adsUpdateInputSchema;
