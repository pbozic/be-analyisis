import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversCreateWithoutUserInputSchema } from './driversCreateWithoutUserInputSchema';
import { driversUncheckedCreateWithoutUserInputSchema } from './driversUncheckedCreateWithoutUserInputSchema';

export const driversCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.driversCreateOrConnectWithoutUserInput> = z
	.object({
		where: z.lazy(() => driversWhereUniqueInputSchema),
		create: z.union([
			z.lazy(() => driversCreateWithoutUserInputSchema),
			z.lazy(() => driversUncheckedCreateWithoutUserInputSchema),
		]),
	})
	.strict();

export default driversCreateOrConnectWithoutUserInputSchema;
