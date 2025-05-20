import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { word_buyIncludeSchema } from '../inputTypeSchemas/word_buyIncludeSchema'
import { word_buyWhereUniqueInputSchema } from '../inputTypeSchemas/word_buyWhereUniqueInputSchema'
import { word_buyCreateInputSchema } from '../inputTypeSchemas/word_buyCreateInputSchema'
import { word_buyUncheckedCreateInputSchema } from '../inputTypeSchemas/word_buyUncheckedCreateInputSchema'
import { word_buyUpdateInputSchema } from '../inputTypeSchemas/word_buyUpdateInputSchema'
import { word_buyUncheckedUpdateInputSchema } from '../inputTypeSchemas/word_buyUncheckedUpdateInputSchema'
import { wordsArgsSchema } from "../outputTypeSchemas/wordsArgsSchema"
import { businessArgsSchema } from "../outputTypeSchemas/businessArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const word_buySelectSchema: z.ZodType<Prisma.word_buySelect> = z.object({
  word_buy_id: z.boolean().optional(),
  word_id: z.boolean().optional(),
  stripe_subscription_id: z.boolean().optional(),
  price: z.boolean().optional(),
  active_at: z.boolean().optional(),
  expires_at: z.boolean().optional(),
  business_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  deleted_at: z.boolean().optional(),
  word: z.union([z.boolean(),z.lazy(() => wordsArgsSchema)]).optional(),
  business: z.union([z.boolean(),z.lazy(() => businessArgsSchema)]).optional(),
}).strict()

export const word_buyUpsertArgsSchema: z.ZodType<Prisma.word_buyUpsertArgs> = z.object({
  select: word_buySelectSchema.optional(),
  include: word_buyIncludeSchema.optional(),
  where: word_buyWhereUniqueInputSchema,
  create: z.union([ word_buyCreateInputSchema,word_buyUncheckedCreateInputSchema ]),
  update: z.union([ word_buyUpdateInputSchema,word_buyUncheckedUpdateInputSchema ]),
}).strict() ;

export default word_buyUpsertArgsSchema;
