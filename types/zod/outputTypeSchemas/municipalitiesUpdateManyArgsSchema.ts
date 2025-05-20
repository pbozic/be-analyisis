import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { municipalitiesUpdateManyMutationInputSchema } from '../inputTypeSchemas/municipalitiesUpdateManyMutationInputSchema'
import { municipalitiesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/municipalitiesUncheckedUpdateManyInputSchema'
import { municipalitiesWhereInputSchema } from '../inputTypeSchemas/municipalitiesWhereInputSchema'

export const municipalitiesUpdateManyArgsSchema: z.ZodType<Prisma.municipalitiesUpdateManyArgs> = z.object({
  data: z.union([ municipalitiesUpdateManyMutationInputSchema,municipalitiesUncheckedUpdateManyInputSchema ]),
  where: municipalitiesWhereInputSchema.optional(),
}).strict() ;

export default municipalitiesUpdateManyArgsSchema;
