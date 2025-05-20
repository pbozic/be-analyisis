import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { promo_sectionsUpdateOneRequiredWithoutPromo_section_buyNestedInputSchema } from './promo_sectionsUpdateOneRequiredWithoutPromo_section_buyNestedInputSchema';
import { businessUpdateOneRequiredWithoutPromo_sectionsNestedInputSchema } from './businessUpdateOneRequiredWithoutPromo_sectionsNestedInputSchema';
import { usersUpdateOneWithoutPromo_section_buysNestedInputSchema } from './usersUpdateOneWithoutPromo_section_buysNestedInputSchema';

export const promo_sections_buyUpdateInputSchema: z.ZodType<Prisma.promo_sections_buyUpdateInput> = z.object({
  promo_sections_buy_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stripe_subscription_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  active_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tier: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  promo_section: z.lazy(() => promo_sectionsUpdateOneRequiredWithoutPromo_section_buyNestedInputSchema).optional(),
  business: z.lazy(() => businessUpdateOneRequiredWithoutPromo_sectionsNestedInputSchema).optional(),
  bought_by: z.lazy(() => usersUpdateOneWithoutPromo_section_buysNestedInputSchema).optional()
}).strict();

export default promo_sections_buyUpdateInputSchema;
