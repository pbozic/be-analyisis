import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_driversWhereInputSchema } from './vehicle_driversWhereInputSchema';

export const Vehicle_driversListRelationFilterSchema: z.ZodType<Prisma.Vehicle_driversListRelationFilter> = z
	.object({
		every: z.lazy(() => vehicle_driversWhereInputSchema).optional(),
		some: z.lazy(() => vehicle_driversWhereInputSchema).optional(),
		none: z.lazy(() => vehicle_driversWhereInputSchema).optional(),
	})
	.strict();

export default Vehicle_driversListRelationFilterSchema;
