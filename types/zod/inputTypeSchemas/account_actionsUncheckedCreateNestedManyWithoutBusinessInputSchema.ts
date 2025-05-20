import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsCreateWithoutBusinessInputSchema } from './account_actionsCreateWithoutBusinessInputSchema';
import { account_actionsUncheckedCreateWithoutBusinessInputSchema } from './account_actionsUncheckedCreateWithoutBusinessInputSchema';
import { account_actionsCreateOrConnectWithoutBusinessInputSchema } from './account_actionsCreateOrConnectWithoutBusinessInputSchema';
import { account_actionsCreateManyBusinessInputEnvelopeSchema } from './account_actionsCreateManyBusinessInputEnvelopeSchema';
import { account_actionsWhereUniqueInputSchema } from './account_actionsWhereUniqueInputSchema';

export const account_actionsUncheckedCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.account_actionsUncheckedCreateNestedManyWithoutBusinessInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => account_actionsCreateWithoutBusinessInputSchema),
					z.lazy(() => account_actionsCreateWithoutBusinessInputSchema).array(),
					z.lazy(() => account_actionsUncheckedCreateWithoutBusinessInputSchema),
					z.lazy(() => account_actionsUncheckedCreateWithoutBusinessInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => account_actionsCreateOrConnectWithoutBusinessInputSchema),
					z.lazy(() => account_actionsCreateOrConnectWithoutBusinessInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => account_actionsCreateManyBusinessInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => account_actionsWhereUniqueInputSchema),
					z.lazy(() => account_actionsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default account_actionsUncheckedCreateNestedManyWithoutBusinessInputSchema;
