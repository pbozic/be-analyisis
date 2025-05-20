import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_bannersWhereUniqueInputSchema } from './promo_bannersWhereUniqueInputSchema';
import { promo_bannersCreateWithoutFilesInputSchema } from './promo_bannersCreateWithoutFilesInputSchema';
import { promo_bannersUncheckedCreateWithoutFilesInputSchema } from './promo_bannersUncheckedCreateWithoutFilesInputSchema';

export const promo_bannersCreateOrConnectWithoutFilesInputSchema: z.ZodType<Prisma.promo_bannersCreateOrConnectWithoutFilesInput> =
	z
		.object({
			where: z.lazy(() => promo_bannersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => promo_bannersCreateWithoutFilesInputSchema),
				z.lazy(() => promo_bannersUncheckedCreateWithoutFilesInputSchema),
			]),
		})
		.strict();

export default promo_bannersCreateOrConnectWithoutFilesInputSchema;
