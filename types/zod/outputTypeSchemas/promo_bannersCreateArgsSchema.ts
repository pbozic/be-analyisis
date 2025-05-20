import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_bannersIncludeSchema } from '../inputTypeSchemas/promo_bannersIncludeSchema'
import { promo_bannersCreateInputSchema } from '../inputTypeSchemas/promo_bannersCreateInputSchema'
import { promo_bannersUncheckedCreateInputSchema } from '../inputTypeSchemas/promo_bannersUncheckedCreateInputSchema'
import { filesArgsSchema } from "../outputTypeSchemas/filesArgsSchema"
import { promo_adsArgsSchema } from "../outputTypeSchemas/promo_adsArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const promo_bannersSelectSchema: z.ZodType<Prisma.promo_bannersSelect> = z.object({
  promo_banners_id: z.boolean().optional(),
  type: z.boolean().optional(),
  size: z.boolean().optional(),
  title: z.boolean().optional(),
  text: z.boolean().optional(),
  promo_section_buy_id: z.boolean().optional(),
  file_id: z.boolean().optional(),
  promo_ads_id: z.boolean().optional(),
  files: z.union([z.boolean(),z.lazy(() => filesArgsSchema)]).optional(),
  promo_ads: z.union([z.boolean(),z.lazy(() => promo_adsArgsSchema)]).optional(),
}).strict()

export const promo_bannersCreateArgsSchema: z.ZodType<Prisma.promo_bannersCreateArgs> = z.object({
  select: promo_bannersSelectSchema.optional(),
  include: promo_bannersIncludeSchema.optional(),
  data: z.union([ promo_bannersCreateInputSchema,promo_bannersUncheckedCreateInputSchema ]),
}).strict() ;

export default promo_bannersCreateArgsSchema;
