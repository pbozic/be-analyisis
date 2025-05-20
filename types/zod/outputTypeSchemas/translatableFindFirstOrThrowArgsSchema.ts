import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { translatableIncludeSchema } from '../inputTypeSchemas/translatableIncludeSchema'
import { translatableWhereInputSchema } from '../inputTypeSchemas/translatableWhereInputSchema'
import { translatableOrderByWithRelationInputSchema } from '../inputTypeSchemas/translatableOrderByWithRelationInputSchema'
import { translatableWhereUniqueInputSchema } from '../inputTypeSchemas/translatableWhereUniqueInputSchema'
import { TranslatableScalarFieldEnumSchema } from '../inputTypeSchemas/TranslatableScalarFieldEnumSchema'
import { translationsFindManyArgsSchema } from "../outputTypeSchemas/translationsFindManyArgsSchema"
import { wordsFindManyArgsSchema } from "../outputTypeSchemas/wordsFindManyArgsSchema"
import { categoriesFindManyArgsSchema } from "../outputTypeSchemas/categoriesFindManyArgsSchema"
import { promo_sectionsFindManyArgsSchema } from "../outputTypeSchemas/promo_sectionsFindManyArgsSchema"
import { TranslatableCountOutputTypeArgsSchema } from "../outputTypeSchemas/TranslatableCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const translatableSelectSchema: z.ZodType<Prisma.translatableSelect> = z.object({
  translatable_id: z.boolean().optional(),
  translations: z.union([z.boolean(),z.lazy(() => translationsFindManyArgsSchema)]).optional(),
  words: z.union([z.boolean(),z.lazy(() => wordsFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => categoriesFindManyArgsSchema)]).optional(),
  promo_sections: z.union([z.boolean(),z.lazy(() => promo_sectionsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TranslatableCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const translatableFindFirstOrThrowArgsSchema: z.ZodType<Prisma.translatableFindFirstOrThrowArgs> = z.object({
  select: translatableSelectSchema.optional(),
  include: translatableIncludeSchema.optional(),
  where: translatableWhereInputSchema.optional(),
  orderBy: z.union([ translatableOrderByWithRelationInputSchema.array(),translatableOrderByWithRelationInputSchema ]).optional(),
  cursor: translatableWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TranslatableScalarFieldEnumSchema,TranslatableScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default translatableFindFirstOrThrowArgsSchema;
