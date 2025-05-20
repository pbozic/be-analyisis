import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_bannersWhereUniqueInputSchema } from './promo_bannersWhereUniqueInputSchema';
import { promo_bannersUpdateWithoutFilesInputSchema } from './promo_bannersUpdateWithoutFilesInputSchema';
import { promo_bannersUncheckedUpdateWithoutFilesInputSchema } from './promo_bannersUncheckedUpdateWithoutFilesInputSchema';

export const promo_bannersUpdateWithWhereUniqueWithoutFilesInputSchema: z.ZodType<Prisma.promo_bannersUpdateWithWhereUniqueWithoutFilesInput> =
	z
		.object({
			where: z.lazy(() => promo_bannersWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => promo_bannersUpdateWithoutFilesInputSchema),
				z.lazy(() => promo_bannersUncheckedUpdateWithoutFilesInputSchema),
			]),
		})
		.strict();

export default promo_bannersUpdateWithWhereUniqueWithoutFilesInputSchema;
