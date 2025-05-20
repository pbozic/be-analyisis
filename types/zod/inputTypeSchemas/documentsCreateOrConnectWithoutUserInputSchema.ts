import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsCreateWithoutUserInputSchema } from './documentsCreateWithoutUserInputSchema';
import { documentsUncheckedCreateWithoutUserInputSchema } from './documentsUncheckedCreateWithoutUserInputSchema';

export const documentsCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.documentsCreateOrConnectWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => documentsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => documentsCreateWithoutUserInputSchema),
				z.lazy(() => documentsUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export default documentsCreateOrConnectWithoutUserInputSchema;
