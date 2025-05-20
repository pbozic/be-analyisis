import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateWithoutFilesInputSchema } from './documentsCreateWithoutFilesInputSchema';
import { documentsUncheckedCreateWithoutFilesInputSchema } from './documentsUncheckedCreateWithoutFilesInputSchema';
import { documentsCreateOrConnectWithoutFilesInputSchema } from './documentsCreateOrConnectWithoutFilesInputSchema';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';

export const documentsCreateNestedOneWithoutFilesInputSchema: z.ZodType<Prisma.documentsCreateNestedOneWithoutFilesInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => documentsCreateWithoutFilesInputSchema),
					z.lazy(() => documentsUncheckedCreateWithoutFilesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => documentsCreateOrConnectWithoutFilesInputSchema).optional(),
			connect: z.lazy(() => documentsWhereUniqueInputSchema).optional(),
		})
		.strict();

export default documentsCreateNestedOneWithoutFilesInputSchema;
