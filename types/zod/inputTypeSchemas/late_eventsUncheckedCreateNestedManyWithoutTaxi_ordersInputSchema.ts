import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsCreateWithoutTaxi_ordersInputSchema } from './late_eventsCreateWithoutTaxi_ordersInputSchema';
import { late_eventsUncheckedCreateWithoutTaxi_ordersInputSchema } from './late_eventsUncheckedCreateWithoutTaxi_ordersInputSchema';
import { late_eventsCreateOrConnectWithoutTaxi_ordersInputSchema } from './late_eventsCreateOrConnectWithoutTaxi_ordersInputSchema';
import { late_eventsCreateManyTaxi_ordersInputEnvelopeSchema } from './late_eventsCreateManyTaxi_ordersInputEnvelopeSchema';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';

export const late_eventsUncheckedCreateNestedManyWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.late_eventsUncheckedCreateNestedManyWithoutTaxi_ordersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => late_eventsCreateWithoutTaxi_ordersInputSchema),
					z.lazy(() => late_eventsCreateWithoutTaxi_ordersInputSchema).array(),
					z.lazy(() => late_eventsUncheckedCreateWithoutTaxi_ordersInputSchema),
					z.lazy(() => late_eventsUncheckedCreateWithoutTaxi_ordersInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => late_eventsCreateOrConnectWithoutTaxi_ordersInputSchema),
					z.lazy(() => late_eventsCreateOrConnectWithoutTaxi_ordersInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => late_eventsCreateManyTaxi_ordersInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => late_eventsWhereUniqueInputSchema),
					z.lazy(() => late_eventsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default late_eventsUncheckedCreateNestedManyWithoutTaxi_ordersInputSchema;
