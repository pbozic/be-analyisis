import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { documentsArgsSchema } from '../outputTypeSchemas/documentsArgsSchema';
import { categoriesFindManyArgsSchema } from '../outputTypeSchemas/categoriesFindManyArgsSchema';
import { promo_bannersFindManyArgsSchema } from '../outputTypeSchemas/promo_bannersFindManyArgsSchema';
import { FilesCountOutputTypeArgsSchema } from '../outputTypeSchemas/FilesCountOutputTypeArgsSchema';

export const filesIncludeSchema: z.ZodType<Prisma.filesInclude> = z
	.object({
		documents: z.union([z.boolean(), z.lazy(() => documentsArgsSchema)]).optional(),
		categories: z.union([z.boolean(), z.lazy(() => categoriesFindManyArgsSchema)]).optional(),
		promo_banners: z.union([z.boolean(), z.lazy(() => promo_bannersFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => FilesCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export default filesIncludeSchema;
