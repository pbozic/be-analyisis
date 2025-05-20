import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { municipalitiesUpdateOneRequiredWithoutSettlementsNestedInputSchema } from './municipalitiesUpdateOneRequiredWithoutSettlementsNestedInputSchema';
import { weather_dataUpdateManyWithoutSettlementNestedInputSchema } from './weather_dataUpdateManyWithoutSettlementNestedInputSchema';

export const settlementsUpdateInputSchema: z.ZodType<Prisma.settlementsUpdateInput> = z.object({
  settlement_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  eid_naselje: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  feature_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  geojson: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.lazy(() => municipalitiesUpdateOneRequiredWithoutSettlementsNestedInputSchema).optional(),
  weather_data: z.lazy(() => weather_dataUpdateManyWithoutSettlementNestedInputSchema).optional()
}).strict();

export default settlementsUpdateInputSchema;
