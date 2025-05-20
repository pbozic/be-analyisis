import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsCreateWithoutBusinessInputSchema } from './documentsCreateWithoutBusinessInputSchema';
import { documentsUncheckedCreateWithoutBusinessInputSchema } from './documentsUncheckedCreateWithoutBusinessInputSchema';

export const documentsCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.documentsCreateOrConnectWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => documentsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => documentsCreateWithoutBusinessInputSchema),
				z.lazy(() => documentsUncheckedCreateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default documentsCreateOrConnectWithoutBusinessInputSchema;
