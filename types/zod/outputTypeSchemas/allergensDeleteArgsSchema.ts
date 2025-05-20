import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { allergensWhereUniqueInputSchema } from '../inputTypeSchemas/allergensWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const allergensSelectSchema: z.ZodType<Prisma.allergensSelect> = z.object({
  allergen_id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  code: z.boolean().optional(),
}).strict()

export const allergensDeleteArgsSchema: z.ZodType<Prisma.allergensDeleteArgs> = z.object({
  select: allergensSelectSchema.optional(),
  where: allergensWhereUniqueInputSchema,
}).strict() ;

export default allergensDeleteArgsSchema;
