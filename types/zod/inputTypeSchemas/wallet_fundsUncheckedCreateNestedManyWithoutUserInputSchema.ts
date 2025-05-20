import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_fundsCreateWithoutUserInputSchema } from './wallet_fundsCreateWithoutUserInputSchema';
import { wallet_fundsUncheckedCreateWithoutUserInputSchema } from './wallet_fundsUncheckedCreateWithoutUserInputSchema';
import { wallet_fundsCreateOrConnectWithoutUserInputSchema } from './wallet_fundsCreateOrConnectWithoutUserInputSchema';
import { wallet_fundsCreateManyUserInputEnvelopeSchema } from './wallet_fundsCreateManyUserInputEnvelopeSchema';
import { wallet_fundsWhereUniqueInputSchema } from './wallet_fundsWhereUniqueInputSchema';

export const wallet_fundsUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.wallet_fundsUncheckedCreateNestedManyWithoutUserInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => wallet_fundsCreateWithoutUserInputSchema),
					z.lazy(() => wallet_fundsCreateWithoutUserInputSchema).array(),
					z.lazy(() => wallet_fundsUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => wallet_fundsUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => wallet_fundsCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => wallet_fundsCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => wallet_fundsCreateManyUserInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => wallet_fundsWhereUniqueInputSchema),
					z.lazy(() => wallet_fundsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default wallet_fundsUncheckedCreateNestedManyWithoutUserInputSchema;
