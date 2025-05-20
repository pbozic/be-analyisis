import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';
import { scoring_pointsUpdateWithoutBusinessesInputSchema } from './scoring_pointsUpdateWithoutBusinessesInputSchema';
import { scoring_pointsUncheckedUpdateWithoutBusinessesInputSchema } from './scoring_pointsUncheckedUpdateWithoutBusinessesInputSchema';
import { scoring_pointsCreateWithoutBusinessesInputSchema } from './scoring_pointsCreateWithoutBusinessesInputSchema';
import { scoring_pointsUncheckedCreateWithoutBusinessesInputSchema } from './scoring_pointsUncheckedCreateWithoutBusinessesInputSchema';

export const scoring_pointsUpsertWithWhereUniqueWithoutBusinessesInputSchema: z.ZodType<Prisma.scoring_pointsUpsertWithWhereUniqueWithoutBusinessesInput> =
	z
		.object({
			where: z.lazy(() => scoring_pointsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => scoring_pointsUpdateWithoutBusinessesInputSchema),
				z.lazy(() => scoring_pointsUncheckedUpdateWithoutBusinessesInputSchema),
			]),
			create: z.union([
				z.lazy(() => scoring_pointsCreateWithoutBusinessesInputSchema),
				z.lazy(() => scoring_pointsUncheckedCreateWithoutBusinessesInputSchema),
			]),
		})
		.strict();

export default scoring_pointsUpsertWithWhereUniqueWithoutBusinessesInputSchema;
