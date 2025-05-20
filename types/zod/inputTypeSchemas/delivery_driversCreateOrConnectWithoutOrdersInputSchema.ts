import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';
import { delivery_driversCreateWithoutOrdersInputSchema } from './delivery_driversCreateWithoutOrdersInputSchema';
import { delivery_driversUncheckedCreateWithoutOrdersInputSchema } from './delivery_driversUncheckedCreateWithoutOrdersInputSchema';

export const delivery_driversCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.delivery_driversCreateOrConnectWithoutOrdersInput> =
	z
		.object({
			where: z.lazy(() => delivery_driversWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => delivery_driversCreateWithoutOrdersInputSchema),
				z.lazy(() => delivery_driversUncheckedCreateWithoutOrdersInputSchema),
			]),
		})
		.strict();

export default delivery_driversCreateOrConnectWithoutOrdersInputSchema;
