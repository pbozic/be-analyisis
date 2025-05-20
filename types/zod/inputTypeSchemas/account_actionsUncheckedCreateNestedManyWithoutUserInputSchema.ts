import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { account_actionsCreateWithoutUserInputSchema } from './account_actionsCreateWithoutUserInputSchema';
import { account_actionsUncheckedCreateWithoutUserInputSchema } from './account_actionsUncheckedCreateWithoutUserInputSchema';
import { account_actionsCreateOrConnectWithoutUserInputSchema } from './account_actionsCreateOrConnectWithoutUserInputSchema';
import { account_actionsCreateManyUserInputEnvelopeSchema } from './account_actionsCreateManyUserInputEnvelopeSchema';
import { account_actionsWhereUniqueInputSchema } from './account_actionsWhereUniqueInputSchema';

export const account_actionsUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.account_actionsUncheckedCreateNestedManyWithoutUserInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => account_actionsCreateWithoutUserInputSchema),
					z.lazy(() => account_actionsCreateWithoutUserInputSchema).array(),
					z.lazy(() => account_actionsUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => account_actionsUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => account_actionsCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => account_actionsCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => account_actionsCreateManyUserInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => account_actionsWhereUniqueInputSchema),
					z.lazy(() => account_actionsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default account_actionsUncheckedCreateNestedManyWithoutUserInputSchema;
