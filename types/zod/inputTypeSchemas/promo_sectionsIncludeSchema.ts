import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_sections_buyFindManyArgsSchema } from "../outputTypeSchemas/promo_sections_buyFindManyArgsSchema"
import { translatableArgsSchema } from "../outputTypeSchemas/translatableArgsSchema"
import { Promo_sectionsCountOutputTypeArgsSchema } from "../outputTypeSchemas/Promo_sectionsCountOutputTypeArgsSchema"

export const promo_sectionsIncludeSchema: z.ZodType<Prisma.promo_sectionsInclude> = z.object({
  promo_section_buy: z.union([z.boolean(),z.lazy(() => promo_sections_buyFindManyArgsSchema)]).optional(),
  translatable: z.union([z.boolean(),z.lazy(() => translatableArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Promo_sectionsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default promo_sectionsIncludeSchema;
