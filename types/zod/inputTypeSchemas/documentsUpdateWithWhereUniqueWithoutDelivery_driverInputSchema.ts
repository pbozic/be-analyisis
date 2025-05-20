import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithoutDelivery_driverInputSchema } from './documentsUpdateWithoutDelivery_driverInputSchema';
import { documentsUncheckedUpdateWithoutDelivery_driverInputSchema } from './documentsUncheckedUpdateWithoutDelivery_driverInputSchema';

export const documentsUpdateWithWhereUniqueWithoutDelivery_driverInputSchema: z.ZodType<Prisma.documentsUpdateWithWhereUniqueWithoutDelivery_driverInput> =
	z
		.object({
			where: z.lazy(() => documentsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => documentsUpdateWithoutDelivery_driverInputSchema),
				z.lazy(() => documentsUncheckedUpdateWithoutDelivery_driverInputSchema),
			]),
		})
		.strict();

export default documentsUpdateWithWhereUniqueWithoutDelivery_driverInputSchema;
