import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const driver_municipalitiesDriver_idMunicipalities_idCompoundUniqueInputSchema: z.ZodType<Prisma.driver_municipalitiesDriver_idMunicipalities_idCompoundUniqueInput> = z.object({
  driver_id: z.string(),
  municipalities_id: z.string()
}).strict();

export default driver_municipalitiesDriver_idMunicipalities_idCompoundUniqueInputSchema;
