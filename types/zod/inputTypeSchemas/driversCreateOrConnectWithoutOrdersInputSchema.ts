import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversCreateWithoutOrdersInputSchema } from './driversCreateWithoutOrdersInputSchema';
import { driversUncheckedCreateWithoutOrdersInputSchema } from './driversUncheckedCreateWithoutOrdersInputSchema';

export const driversCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.driversCreateOrConnectWithoutOrdersInput> =
	z
		.object({
			where: z.lazy(() => driversWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => driversCreateWithoutOrdersInputSchema),
				z.lazy(() => driversUncheckedCreateWithoutOrdersInputSchema),
			]),
		})
		.strict();

export default driversCreateOrConnectWithoutOrdersInputSchema;
