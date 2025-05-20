import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereInputSchema } from './documentsWhereInputSchema';
import { documentsUpdateWithoutFilesInputSchema } from './documentsUpdateWithoutFilesInputSchema';
import { documentsUncheckedUpdateWithoutFilesInputSchema } from './documentsUncheckedUpdateWithoutFilesInputSchema';

export const documentsUpdateToOneWithWhereWithoutFilesInputSchema: z.ZodType<Prisma.documentsUpdateToOneWithWhereWithoutFilesInput> =
	z
		.object({
			where: z.lazy(() => documentsWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => documentsUpdateWithoutFilesInputSchema),
				z.lazy(() => documentsUncheckedUpdateWithoutFilesInputSchema),
			]),
		})
		.strict();

export default documentsUpdateToOneWithWhereWithoutFilesInputSchema;
