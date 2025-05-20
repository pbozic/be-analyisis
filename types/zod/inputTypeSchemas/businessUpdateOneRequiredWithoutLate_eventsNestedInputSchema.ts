import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutLate_eventsInputSchema } from './businessCreateWithoutLate_eventsInputSchema';
import { businessUncheckedCreateWithoutLate_eventsInputSchema } from './businessUncheckedCreateWithoutLate_eventsInputSchema';
import { businessCreateOrConnectWithoutLate_eventsInputSchema } from './businessCreateOrConnectWithoutLate_eventsInputSchema';
import { businessUpsertWithoutLate_eventsInputSchema } from './businessUpsertWithoutLate_eventsInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateToOneWithWhereWithoutLate_eventsInputSchema } from './businessUpdateToOneWithWhereWithoutLate_eventsInputSchema';
import { businessUpdateWithoutLate_eventsInputSchema } from './businessUpdateWithoutLate_eventsInputSchema';
import { businessUncheckedUpdateWithoutLate_eventsInputSchema } from './businessUncheckedUpdateWithoutLate_eventsInputSchema';

export const businessUpdateOneRequiredWithoutLate_eventsNestedInputSchema: z.ZodType<Prisma.businessUpdateOneRequiredWithoutLate_eventsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutLate_eventsInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutLate_eventsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutLate_eventsInputSchema).optional(),
			upsert: z.lazy(() => businessUpsertWithoutLate_eventsInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => businessUpdateToOneWithWhereWithoutLate_eventsInputSchema),
					z.lazy(() => businessUpdateWithoutLate_eventsInputSchema),
					z.lazy(() => businessUncheckedUpdateWithoutLate_eventsInputSchema),
				])
				.optional(),
		})
		.strict();

export default businessUpdateOneRequiredWithoutLate_eventsNestedInputSchema;
