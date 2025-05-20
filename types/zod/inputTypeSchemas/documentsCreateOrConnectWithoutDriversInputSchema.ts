import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsCreateWithoutDriversInputSchema } from './documentsCreateWithoutDriversInputSchema';
import { documentsUncheckedCreateWithoutDriversInputSchema } from './documentsUncheckedCreateWithoutDriversInputSchema';

export const documentsCreateOrConnectWithoutDriversInputSchema: z.ZodType<Prisma.documentsCreateOrConnectWithoutDriversInput> =
	z
		.object({
			where: z.lazy(() => documentsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => documentsCreateWithoutDriversInputSchema),
				z.lazy(() => documentsUncheckedCreateWithoutDriversInputSchema),
			]),
		})
		.strict();

export default documentsCreateOrConnectWithoutDriversInputSchema;
