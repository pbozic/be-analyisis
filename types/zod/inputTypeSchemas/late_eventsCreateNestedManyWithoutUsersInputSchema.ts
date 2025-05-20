import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsCreateWithoutUsersInputSchema } from './late_eventsCreateWithoutUsersInputSchema';
import { late_eventsUncheckedCreateWithoutUsersInputSchema } from './late_eventsUncheckedCreateWithoutUsersInputSchema';
import { late_eventsCreateOrConnectWithoutUsersInputSchema } from './late_eventsCreateOrConnectWithoutUsersInputSchema';
import { late_eventsCreateManyUsersInputEnvelopeSchema } from './late_eventsCreateManyUsersInputEnvelopeSchema';
import { late_eventsWhereUniqueInputSchema } from './late_eventsWhereUniqueInputSchema';

export const late_eventsCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.late_eventsCreateNestedManyWithoutUsersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => late_eventsCreateWithoutUsersInputSchema),
					z.lazy(() => late_eventsCreateWithoutUsersInputSchema).array(),
					z.lazy(() => late_eventsUncheckedCreateWithoutUsersInputSchema),
					z.lazy(() => late_eventsUncheckedCreateWithoutUsersInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => late_eventsCreateOrConnectWithoutUsersInputSchema),
					z.lazy(() => late_eventsCreateOrConnectWithoutUsersInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => late_eventsCreateManyUsersInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => late_eventsWhereUniqueInputSchema),
					z.lazy(() => late_eventsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default late_eventsCreateNestedManyWithoutUsersInputSchema;
