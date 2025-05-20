import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersCreateWithoutBusinessInputSchema } from './business_usersCreateWithoutBusinessInputSchema';
import { business_usersUncheckedCreateWithoutBusinessInputSchema } from './business_usersUncheckedCreateWithoutBusinessInputSchema';
import { business_usersCreateOrConnectWithoutBusinessInputSchema } from './business_usersCreateOrConnectWithoutBusinessInputSchema';
import { business_usersCreateManyBusinessInputEnvelopeSchema } from './business_usersCreateManyBusinessInputEnvelopeSchema';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';

export const business_usersCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.business_usersCreateNestedManyWithoutBusinessInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => business_usersCreateWithoutBusinessInputSchema),
					z.lazy(() => business_usersCreateWithoutBusinessInputSchema).array(),
					z.lazy(() => business_usersUncheckedCreateWithoutBusinessInputSchema),
					z.lazy(() => business_usersUncheckedCreateWithoutBusinessInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => business_usersCreateOrConnectWithoutBusinessInputSchema),
					z.lazy(() => business_usersCreateOrConnectWithoutBusinessInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => business_usersCreateManyBusinessInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => business_usersWhereUniqueInputSchema),
					z.lazy(() => business_usersWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default business_usersCreateNestedManyWithoutBusinessInputSchema;
