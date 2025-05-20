import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsCreateWithoutLost_itemsInputSchema } from './documentsCreateWithoutLost_itemsInputSchema';
import { documentsUncheckedCreateWithoutLost_itemsInputSchema } from './documentsUncheckedCreateWithoutLost_itemsInputSchema';

export const documentsCreateOrConnectWithoutLost_itemsInputSchema: z.ZodType<Prisma.documentsCreateOrConnectWithoutLost_itemsInput> =
	z
		.object({
			where: z.lazy(() => documentsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => documentsCreateWithoutLost_itemsInputSchema),
				z.lazy(() => documentsUncheckedCreateWithoutLost_itemsInputSchema),
			]),
		})
		.strict();

export default documentsCreateOrConnectWithoutLost_itemsInputSchema;
