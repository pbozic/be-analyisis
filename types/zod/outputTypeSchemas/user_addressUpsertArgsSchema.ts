import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_addressIncludeSchema } from '../inputTypeSchemas/user_addressIncludeSchema'
import { user_addressWhereUniqueInputSchema } from '../inputTypeSchemas/user_addressWhereUniqueInputSchema'
import { user_addressCreateInputSchema } from '../inputTypeSchemas/user_addressCreateInputSchema'
import { user_addressUncheckedCreateInputSchema } from '../inputTypeSchemas/user_addressUncheckedCreateInputSchema'
import { user_addressUpdateInputSchema } from '../inputTypeSchemas/user_addressUpdateInputSchema'
import { user_addressUncheckedUpdateInputSchema } from '../inputTypeSchemas/user_addressUncheckedUpdateInputSchema'
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { addressesArgsSchema } from "../outputTypeSchemas/addressesArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const user_addressSelectSchema: z.ZodType<Prisma.user_addressSelect> = z.object({
  user_id: z.boolean().optional(),
  address_id: z.boolean().optional(),
  name: z.boolean().optional(),
  icon: z.boolean().optional(),
  primary: z.boolean().optional(),
  users: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  address: z.union([z.boolean(),z.lazy(() => addressesArgsSchema)]).optional(),
}).strict()

export const user_addressUpsertArgsSchema: z.ZodType<Prisma.user_addressUpsertArgs> = z.object({
  select: user_addressSelectSchema.optional(),
  include: user_addressIncludeSchema.optional(),
  where: user_addressWhereUniqueInputSchema,
  create: z.union([ user_addressCreateInputSchema,user_addressUncheckedCreateInputSchema ]),
  update: z.union([ user_addressUpdateInputSchema,user_addressUncheckedUpdateInputSchema ]),
}).strict() ;

export default user_addressUpsertArgsSchema;
