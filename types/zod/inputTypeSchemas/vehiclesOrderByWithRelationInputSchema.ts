import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { documentsOrderByRelationAggregateInputSchema } from './documentsOrderByRelationAggregateInputSchema';
import { vehicle_driversOrderByRelationAggregateInputSchema } from './vehicle_driversOrderByRelationAggregateInputSchema';
import { delivery_driversOrderByWithRelationInputSchema } from './delivery_driversOrderByWithRelationInputSchema';
import { vehicle_specificationsOrderByWithRelationInputSchema } from './vehicle_specificationsOrderByWithRelationInputSchema';
import { taxi_ordersOrderByRelationAggregateInputSchema } from './taxi_ordersOrderByRelationAggregateInputSchema';
import { delivery_ordersOrderByRelationAggregateInputSchema } from './delivery_ordersOrderByRelationAggregateInputSchema';
import { driversOrderByWithRelationInputSchema } from './driversOrderByWithRelationInputSchema';

export const vehiclesOrderByWithRelationInputSchema: z.ZodType<Prisma.vehiclesOrderByWithRelationInput> = z.object({
  vehicle_id: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  active: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  class: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  make: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  model: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  license_plate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  delivery_driver_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  vehicle_specification_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  documents: z.lazy(() => documentsOrderByRelationAggregateInputSchema).optional(),
  drivers: z.lazy(() => vehicle_driversOrderByRelationAggregateInputSchema).optional(),
  delivery_driver: z.lazy(() => delivery_driversOrderByWithRelationInputSchema).optional(),
  vehicle_specification: z.lazy(() => vehicle_specificationsOrderByWithRelationInputSchema).optional(),
  taxi_orders: z.lazy(() => taxi_ordersOrderByRelationAggregateInputSchema).optional(),
  delivery_orders: z.lazy(() => delivery_ordersOrderByRelationAggregateInputSchema).optional(),
  current_driver: z.lazy(() => driversOrderByWithRelationInputSchema).optional()
}).strict();

export default vehiclesOrderByWithRelationInputSchema;
