import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const weather_dataTime_epoch_settlement_idCompoundUniqueInputSchema: z.ZodType<Prisma.weather_dataTime_epoch_settlement_idCompoundUniqueInput> =
	z
		.object({
			time_epoch: z.bigint(),
			settlement_id: z.string(),
		})
		.strict();

export default weather_dataTime_epoch_settlement_idCompoundUniqueInputSchema;
