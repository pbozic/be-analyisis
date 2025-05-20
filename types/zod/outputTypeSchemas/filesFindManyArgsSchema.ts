import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { filesIncludeSchema } from '../inputTypeSchemas/filesIncludeSchema';
import { filesWhereInputSchema } from '../inputTypeSchemas/filesWhereInputSchema';
import { filesOrderByWithRelationInputSchema } from '../inputTypeSchemas/filesOrderByWithRelationInputSchema';
import { filesWhereUniqueInputSchema } from '../inputTypeSchemas/filesWhereUniqueInputSchema';
import { FilesScalarFieldEnumSchema } from '../inputTypeSchemas/FilesScalarFieldEnumSchema';
import { documentsArgsSchema } from '../outputTypeSchemas/documentsArgsSchema';
import { categoriesFindManyArgsSchema } from '../outputTypeSchemas/categoriesFindManyArgsSchema';
import { promo_bannersFindManyArgsSchema } from '../outputTypeSchemas/promo_bannersFindManyArgsSchema';
import { FilesCountOutputTypeArgsSchema } from '../outputTypeSchemas/FilesCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const filesSelectSchema: z.ZodType<Prisma.filesSelect> = z
	.object({
		file_id: z.boolean().optional(),
		url: z.boolean().optional(),
		file_type: z.boolean().optional(),
		public: z.boolean().optional(),
		mime_type: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		document_id: z.boolean().optional(),
		documents: z.union([z.boolean(), z.lazy(() => documentsArgsSchema)]).optional(),
		categories: z.union([z.boolean(), z.lazy(() => categoriesFindManyArgsSchema)]).optional(),
		promo_banners: z.union([z.boolean(), z.lazy(() => promo_bannersFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => FilesCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const filesFindManyArgsSchema: z.ZodType<Prisma.filesFindManyArgs> = z
	.object({
		select: filesSelectSchema.optional(),
		include: filesIncludeSchema.optional(),
		where: filesWhereInputSchema.optional(),
		orderBy: z.union([filesOrderByWithRelationInputSchema.array(), filesOrderByWithRelationInputSchema]).optional(),
		cursor: filesWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([FilesScalarFieldEnumSchema, FilesScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();

export default filesFindManyArgsSchema;
