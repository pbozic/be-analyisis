import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reservationsCreateWithoutBusinessInputSchema } from './reservationsCreateWithoutBusinessInputSchema';
import { reservationsUncheckedCreateWithoutBusinessInputSchema } from './reservationsUncheckedCreateWithoutBusinessInputSchema';
import { reservationsCreateOrConnectWithoutBusinessInputSchema } from './reservationsCreateOrConnectWithoutBusinessInputSchema';
import { reservationsCreateManyBusinessInputEnvelopeSchema } from './reservationsCreateManyBusinessInputEnvelopeSchema';
import { reservationsWhereUniqueInputSchema } from './reservationsWhereUniqueInputSchema';

export const reservationsCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.reservationsCreateNestedManyWithoutBusinessInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => reservationsCreateWithoutBusinessInputSchema),
					z.lazy(() => reservationsCreateWithoutBusinessInputSchema).array(),
					z.lazy(() => reservationsUncheckedCreateWithoutBusinessInputSchema),
					z.lazy(() => reservationsUncheckedCreateWithoutBusinessInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => reservationsCreateOrConnectWithoutBusinessInputSchema),
					z.lazy(() => reservationsCreateOrConnectWithoutBusinessInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => reservationsCreateManyBusinessInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => reservationsWhereUniqueInputSchema),
					z.lazy(() => reservationsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default reservationsCreateNestedManyWithoutBusinessInputSchema;
