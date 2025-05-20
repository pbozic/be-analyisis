import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsCreateWithoutFilesInputSchema } from './documentsCreateWithoutFilesInputSchema';
import { documentsUncheckedCreateWithoutFilesInputSchema } from './documentsUncheckedCreateWithoutFilesInputSchema';

export const documentsCreateOrConnectWithoutFilesInputSchema: z.ZodType<Prisma.documentsCreateOrConnectWithoutFilesInput> =
	z
		.object({
			where: z.lazy(() => documentsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => documentsCreateWithoutFilesInputSchema),
				z.lazy(() => documentsUncheckedCreateWithoutFilesInputSchema),
			]),
		})
		.strict();

export default documentsCreateOrConnectWithoutFilesInputSchema;
