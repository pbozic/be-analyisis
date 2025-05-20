import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { lost_itemsWhereUniqueInputSchema } from './lost_itemsWhereUniqueInputSchema';
import { lost_itemsCreateWithoutUserInputSchema } from './lost_itemsCreateWithoutUserInputSchema';
import { lost_itemsUncheckedCreateWithoutUserInputSchema } from './lost_itemsUncheckedCreateWithoutUserInputSchema';

export const lost_itemsCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.lost_itemsCreateOrConnectWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => lost_itemsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => lost_itemsCreateWithoutUserInputSchema),
				z.lazy(() => lost_itemsUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default lost_itemsCreateOrConnectWithoutUserInputSchema;
