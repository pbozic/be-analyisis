import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_sections_buyIncludeSchema } from '../inputTypeSchemas/promo_sections_buyIncludeSchema'
import { promo_sections_buyWhereInputSchema } from '../inputTypeSchemas/promo_sections_buyWhereInputSchema'
import { promo_sections_buyOrderByWithRelationInputSchema } from '../inputTypeSchemas/promo_sections_buyOrderByWithRelationInputSchema'
import { promo_sections_buyWhereUniqueInputSchema } from '../inputTypeSchemas/promo_sections_buyWhereUniqueInputSchema'
import { Promo_sections_buyScalarFieldEnumSchema } from '../inputTypeSchemas/Promo_sections_buyScalarFieldEnumSchema'
import { promo_sectionsArgsSchema } from "../outputTypeSchemas/promo_sectionsArgsSchema"
import { businessArgsSchema } from "../outputTypeSchemas/businessArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const promo_sections_buySelectSchema: z.ZodType<Prisma.promo_sections_buySelect> = z.object({
  promo_sections_buy_id: z.boolean().optional(),
  promo_sections_id: z.boolean().optional(),
  stripe_subscription_id: z.boolean().optional(),
  business_id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  active_at: z.boolean().optional(),
  expires_at: z.boolean().optional(),
  tier: z.boolean().optional(),
  promo_section: z.union([z.boolean(),z.lazy(() => promo_sectionsArgsSchema)]).optional(),
  business: z.union([z.boolean(),z.lazy(() => businessArgsSchema)]).optional(),
  bought_by: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
}).strict()

export const promo_sections_buyFindFirstArgsSchema: z.ZodType<Prisma.promo_sections_buyFindFirstArgs> = z.object({
  select: promo_sections_buySelectSchema.optional(),
  include: promo_sections_buyIncludeSchema.optional(),
  where: promo_sections_buyWhereInputSchema.optional(),
  orderBy: z.union([ promo_sections_buyOrderByWithRelationInputSchema.array(),promo_sections_buyOrderByWithRelationInputSchema ]).optional(),
  cursor: promo_sections_buyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Promo_sections_buyScalarFieldEnumSchema,Promo_sections_buyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default promo_sections_buyFindFirstArgsSchema;
