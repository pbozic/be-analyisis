import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { weather_dataWhereUniqueInputSchema } from './weather_dataWhereUniqueInputSchema';
import { weather_dataUpdateWithoutSettlementInputSchema } from './weather_dataUpdateWithoutSettlementInputSchema';
import { weather_dataUncheckedUpdateWithoutSettlementInputSchema } from './weather_dataUncheckedUpdateWithoutSettlementInputSchema';
import { weather_dataCreateWithoutSettlementInputSchema } from './weather_dataCreateWithoutSettlementInputSchema';
import { weather_dataUncheckedCreateWithoutSettlementInputSchema } from './weather_dataUncheckedCreateWithoutSettlementInputSchema';

export const weather_dataUpsertWithWhereUniqueWithoutSettlementInputSchema: z.ZodType<Prisma.weather_dataUpsertWithWhereUniqueWithoutSettlementInput> =
	z
		.object({
			where: z.lazy(() => weather_dataWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => weather_dataUpdateWithoutSettlementInputSchema),
				z.lazy(() => weather_dataUncheckedUpdateWithoutSettlementInputSchema),
			]),
			create: z.union([
				z.lazy(() => weather_dataCreateWithoutSettlementInputSchema),
				z.lazy(() => weather_dataUncheckedCreateWithoutSettlementInputSchema),
			]),
		})
		.strict();

export default weather_dataUpsertWithWhereUniqueWithoutSettlementInputSchema;
