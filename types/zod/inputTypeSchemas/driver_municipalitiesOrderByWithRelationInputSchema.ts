import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { driversOrderByWithRelationInputSchema } from './driversOrderByWithRelationInputSchema';
import { municipalitiesOrderByWithRelationInputSchema } from './municipalitiesOrderByWithRelationInputSchema';

export const driver_municipalitiesOrderByWithRelationInputSchema: z.ZodType<Prisma.driver_municipalitiesOrderByWithRelationInput> =
	z
		.object({
			driver_municipalities_id: z.lazy(() => SortOrderSchema).optional(),
			driver_id: z.lazy(() => SortOrderSchema).optional(),
			municipalities_id: z.lazy(() => SortOrderSchema).optional(),
			created_at: z.lazy(() => SortOrderSchema).optional(),
			updated_at: z.lazy(() => SortOrderSchema).optional(),
			drivers: z.lazy(() => driversOrderByWithRelationInputSchema).optional(),
			municipalities: z.lazy(() => municipalitiesOrderByWithRelationInputSchema).optional(),
		})
		.strict();

export default driver_municipalitiesOrderByWithRelationInputSchema;
