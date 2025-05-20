import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_bannersWhereUniqueInputSchema } from './promo_bannersWhereUniqueInputSchema';
import { promo_bannersUpdateWithoutFilesInputSchema } from './promo_bannersUpdateWithoutFilesInputSchema';
import { promo_bannersUncheckedUpdateWithoutFilesInputSchema } from './promo_bannersUncheckedUpdateWithoutFilesInputSchema';
import { promo_bannersCreateWithoutFilesInputSchema } from './promo_bannersCreateWithoutFilesInputSchema';
import { promo_bannersUncheckedCreateWithoutFilesInputSchema } from './promo_bannersUncheckedCreateWithoutFilesInputSchema';

export const promo_bannersUpsertWithWhereUniqueWithoutFilesInputSchema: z.ZodType<Prisma.promo_bannersUpsertWithWhereUniqueWithoutFilesInput> =
	z
		.object({
			where: z.lazy(() => promo_bannersWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => promo_bannersUpdateWithoutFilesInputSchema),
				z.lazy(() => promo_bannersUncheckedUpdateWithoutFilesInputSchema),
			]),
			create: z.union([
				z.lazy(() => promo_bannersCreateWithoutFilesInputSchema),
				z.lazy(() => promo_bannersUncheckedCreateWithoutFilesInputSchema),
			]),
		})
		.strict();

export default promo_bannersUpsertWithWhereUniqueWithoutFilesInputSchema;
