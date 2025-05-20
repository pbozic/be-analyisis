import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehicle_driversSelectSchema } from '../inputTypeSchemas/vehicle_driversSelectSchema';
import { vehicle_driversIncludeSchema } from '../inputTypeSchemas/vehicle_driversIncludeSchema';

export const vehicle_driversArgsSchema: z.ZodType<Prisma.vehicle_driversDefaultArgs> = z
	.object({
		select: z.lazy(() => vehicle_driversSelectSchema).optional(),
		include: z.lazy(() => vehicle_driversIncludeSchema).optional(),
	})
	.strict();

export default vehicle_driversArgsSchema;
