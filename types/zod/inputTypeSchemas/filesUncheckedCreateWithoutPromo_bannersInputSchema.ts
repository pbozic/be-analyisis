import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FILE_TYPESchema } from './FILE_TYPESchema';
import { categoriesUncheckedCreateNestedManyWithoutIconInputSchema } from './categoriesUncheckedCreateNestedManyWithoutIconInputSchema';

export const filesUncheckedCreateWithoutPromo_bannersInputSchema: z.ZodType<Prisma.filesUncheckedCreateWithoutPromo_bannersInput> =
	z
		.object({
			file_id: z.string().uuid().optional(),
			url: z.string().optional().nullable(),
			file_type: z.lazy(() => FILE_TYPESchema),
			public: z.boolean().optional(),
			mime_type: z.string(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			document_id: z.string().optional().nullable(),
			categories: z.lazy(() => categoriesUncheckedCreateNestedManyWithoutIconInputSchema).optional(),
		})
		.strict();

export default filesUncheckedCreateWithoutPromo_bannersInputSchema;
