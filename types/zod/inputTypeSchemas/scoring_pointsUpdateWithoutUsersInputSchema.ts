import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { SCORING_POINTS_REASONSchema } from './SCORING_POINTS_REASONSchema';
import { EnumSCORING_POINTS_REASONFieldUpdateOperationsInputSchema } from './EnumSCORING_POINTS_REASONFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { businessUpdateOneWithoutScoring_pointsNestedInputSchema } from './businessUpdateOneWithoutScoring_pointsNestedInputSchema';
import { delivery_ordersUpdateOneWithoutScoring_pointsNestedInputSchema } from './delivery_ordersUpdateOneWithoutScoring_pointsNestedInputSchema';
import { taxi_ordersUpdateOneWithoutScoring_pointsNestedInputSchema } from './taxi_ordersUpdateOneWithoutScoring_pointsNestedInputSchema';
import { late_eventsUpdateManyWithoutScoring_pointsNestedInputSchema } from './late_eventsUpdateManyWithoutScoring_pointsNestedInputSchema';

export const scoring_pointsUpdateWithoutUsersInputSchema: z.ZodType<Prisma.scoring_pointsUpdateWithoutUsersInput> = z
	.object({
		scoring_points_id: z
			.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		points: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
		isPenalty: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
		reason: z
			.union([
				z.lazy(() => SCORING_POINTS_REASONSchema),
				z.lazy(() => EnumSCORING_POINTS_REASONFieldUpdateOperationsInputSchema),
			])
			.optional(),
		expiration_date: z
			.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		businesses: z.lazy(() => businessUpdateOneWithoutScoring_pointsNestedInputSchema).optional(),
		delivery_orders: z.lazy(() => delivery_ordersUpdateOneWithoutScoring_pointsNestedInputSchema).optional(),
		taxi_orders: z.lazy(() => taxi_ordersUpdateOneWithoutScoring_pointsNestedInputSchema).optional(),
		late_events: z.lazy(() => late_eventsUpdateManyWithoutScoring_pointsNestedInputSchema).optional(),
	})
	.strict();

export default scoring_pointsUpdateWithoutUsersInputSchema;
