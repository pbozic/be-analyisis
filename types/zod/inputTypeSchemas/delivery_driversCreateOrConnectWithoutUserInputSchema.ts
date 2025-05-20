import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';
import { delivery_driversCreateWithoutUserInputSchema } from './delivery_driversCreateWithoutUserInputSchema';
import { delivery_driversUncheckedCreateWithoutUserInputSchema } from './delivery_driversUncheckedCreateWithoutUserInputSchema';

export const delivery_driversCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.delivery_driversCreateOrConnectWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => delivery_driversWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => delivery_driversCreateWithoutUserInputSchema),
				z.lazy(() => delivery_driversUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default delivery_driversCreateOrConnectWithoutUserInputSchema;
