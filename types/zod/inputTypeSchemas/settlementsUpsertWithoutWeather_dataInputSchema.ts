import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { settlementsUpdateWithoutWeather_dataInputSchema } from './settlementsUpdateWithoutWeather_dataInputSchema';
import { settlementsUncheckedUpdateWithoutWeather_dataInputSchema } from './settlementsUncheckedUpdateWithoutWeather_dataInputSchema';
import { settlementsCreateWithoutWeather_dataInputSchema } from './settlementsCreateWithoutWeather_dataInputSchema';
import { settlementsUncheckedCreateWithoutWeather_dataInputSchema } from './settlementsUncheckedCreateWithoutWeather_dataInputSchema';
import { settlementsWhereInputSchema } from './settlementsWhereInputSchema';

export const settlementsUpsertWithoutWeather_dataInputSchema: z.ZodType<Prisma.settlementsUpsertWithoutWeather_dataInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => settlementsUpdateWithoutWeather_dataInputSchema),
				z.lazy(() => settlementsUncheckedUpdateWithoutWeather_dataInputSchema),
			]),
			create: z.union([
				z.lazy(() => settlementsCreateWithoutWeather_dataInputSchema),
				z.lazy(() => settlementsUncheckedCreateWithoutWeather_dataInputSchema),
			]),
			where: z.lazy(() => settlementsWhereInputSchema).optional(),
		})
		.strict();

export default settlementsUpsertWithoutWeather_dataInputSchema;
