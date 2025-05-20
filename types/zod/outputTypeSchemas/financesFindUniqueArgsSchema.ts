import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { financesIncludeSchema } from '../inputTypeSchemas/financesIncludeSchema'
import { financesWhereUniqueInputSchema } from '../inputTypeSchemas/financesWhereUniqueInputSchema'
import { businessFindManyArgsSchema } from "../outputTypeSchemas/businessFindManyArgsSchema"
import { FinancesCountOutputTypeArgsSchema } from "../outputTypeSchemas/FinancesCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const financesSelectSchema: z.ZodType<Prisma.financesSelect> = z.object({
  finance_id: z.boolean().optional(),
  bank_name: z.boolean().optional(),
  account_holder: z.boolean().optional(),
  account_number: z.boolean().optional(),
  payment_preferences: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  business: z.union([z.boolean(),z.lazy(() => businessFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FinancesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const financesFindUniqueArgsSchema: z.ZodType<Prisma.financesFindUniqueArgs> = z.object({
  select: financesSelectSchema.optional(),
  include: financesIncludeSchema.optional(),
  where: financesWhereUniqueInputSchema,
}).strict() ;

export default financesFindUniqueArgsSchema;
