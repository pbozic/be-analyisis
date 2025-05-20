import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsCreateWithoutDelivery_driverInputSchema } from './documentsCreateWithoutDelivery_driverInputSchema';
import { documentsUncheckedCreateWithoutDelivery_driverInputSchema } from './documentsUncheckedCreateWithoutDelivery_driverInputSchema';

export const documentsCreateOrConnectWithoutDelivery_driverInputSchema: z.ZodType<Prisma.documentsCreateOrConnectWithoutDelivery_driverInput> =
	z
		.object({
			where: z.lazy(() => documentsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => documentsCreateWithoutDelivery_driverInputSchema),
				z.lazy(() => documentsUncheckedCreateWithoutDelivery_driverInputSchema),
			]),
		})
		.strict();

export default documentsCreateOrConnectWithoutDelivery_driverInputSchema;
