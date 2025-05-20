import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_bannersScalarWhereInputSchema } from './promo_bannersScalarWhereInputSchema';
import { promo_bannersUpdateManyMutationInputSchema } from './promo_bannersUpdateManyMutationInputSchema';
import { promo_bannersUncheckedUpdateManyWithoutFilesInputSchema } from './promo_bannersUncheckedUpdateManyWithoutFilesInputSchema';

export const promo_bannersUpdateManyWithWhereWithoutFilesInputSchema: z.ZodType<Prisma.promo_bannersUpdateManyWithWhereWithoutFilesInput> =
	z
		.object({
			where: z.lazy(() => promo_bannersScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => promo_bannersUpdateManyMutationInputSchema),
				z.lazy(() => promo_bannersUncheckedUpdateManyWithoutFilesInputSchema),
			]),
		})
		.strict();

export default promo_bannersUpdateManyWithWhereWithoutFilesInputSchema;
