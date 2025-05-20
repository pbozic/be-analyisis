import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { vehiclesOrderByWithRelationInputSchema } from './vehiclesOrderByWithRelationInputSchema';
import { driversOrderByWithRelationInputSchema } from './driversOrderByWithRelationInputSchema';

export const vehicle_driversOrderByWithRelationInputSchema: z.ZodType<Prisma.vehicle_driversOrderByWithRelationInput> = z.object({
  vehicle_drivers_id: z.lazy(() => SortOrderSchema).optional(),
  vehicle_id: z.lazy(() => SortOrderSchema).optional(),
  driver_id: z.lazy(() => SortOrderSchema).optional(),
  can_drive: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  vehicle: z.lazy(() => vehiclesOrderByWithRelationInputSchema).optional(),
  driver: z.lazy(() => driversOrderByWithRelationInputSchema).optional()
}).strict();

export default vehicle_driversOrderByWithRelationInputSchema;
