import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithoutDelivery_driverInputSchema } from './documentsUpdateWithoutDelivery_driverInputSchema';
import { documentsUncheckedUpdateWithoutDelivery_driverInputSchema } from './documentsUncheckedUpdateWithoutDelivery_driverInputSchema';
import { documentsCreateWithoutDelivery_driverInputSchema } from './documentsCreateWithoutDelivery_driverInputSchema';
import { documentsUncheckedCreateWithoutDelivery_driverInputSchema } from './documentsUncheckedCreateWithoutDelivery_driverInputSchema';

export const documentsUpsertWithWhereUniqueWithoutDelivery_driverInputSchema: z.ZodType<Prisma.documentsUpsertWithWhereUniqueWithoutDelivery_driverInput> =
	z
		.object({
			where: z.lazy(() => documentsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => documentsUpdateWithoutDelivery_driverInputSchema),
				z.lazy(() => documentsUncheckedUpdateWithoutDelivery_driverInputSchema),
			]),
			create: z.union([
				z.lazy(() => documentsCreateWithoutDelivery_driverInputSchema),
				z.lazy(() => documentsUncheckedCreateWithoutDelivery_driverInputSchema),
			]),
		})
		.strict();

export default documentsUpsertWithWhereUniqueWithoutDelivery_driverInputSchema;
