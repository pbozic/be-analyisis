import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';
import { vehicle_driversOrderByRelationAggregateInputSchema } from './vehicle_driversOrderByRelationAggregateInputSchema';
import { taxi_ordersOrderByRelationAggregateInputSchema } from './taxi_ordersOrderByRelationAggregateInputSchema';
import { taxi_order_sentOrderByRelationAggregateInputSchema } from './taxi_order_sentOrderByRelationAggregateInputSchema';
import { delivery_ordersOrderByRelationAggregateInputSchema } from './delivery_ordersOrderByRelationAggregateInputSchema';
import { delivery_order_sentOrderByRelationAggregateInputSchema } from './delivery_order_sentOrderByRelationAggregateInputSchema';
import { documentsOrderByRelationAggregateInputSchema } from './documentsOrderByRelationAggregateInputSchema';
import { driver_history_locationsOrderByRelationAggregateInputSchema } from './driver_history_locationsOrderByRelationAggregateInputSchema';
import { driver_municipalitiesOrderByRelationAggregateInputSchema } from './driver_municipalitiesOrderByRelationAggregateInputSchema';
import { vehiclesOrderByWithRelationInputSchema } from './vehiclesOrderByWithRelationInputSchema';
import { driver_activity_logsOrderByRelationAggregateInputSchema } from './driver_activity_logsOrderByRelationAggregateInputSchema';

export const driversOrderByWithRelationInputSchema: z.ZodType<Prisma.driversOrderByWithRelationInput> = z.object({
  driver_id: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  online: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  on_order: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  working_hours: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ride_requirements: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  current_vehicle_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  last_used_vehicle_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  location: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  delivery_timeline: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  last_ping_at: z.lazy(() => SortOrderSchema).optional(),
  is_inactive: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  transfer_requirements: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  regions: z.lazy(() => SortOrderSchema).optional(),
  handles_taxi_orders: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  handles_transfer_orders: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  handles_delivery_orders: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  taxi_orders_toggled: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  transfer_orders_toggled: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  delivery_orders_toggled: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  partner_cash_balance: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  come_to_work_last_sent_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
  vehicles: z.lazy(() => vehicle_driversOrderByRelationAggregateInputSchema).optional(),
  orders: z.lazy(() => taxi_ordersOrderByRelationAggregateInputSchema).optional(),
  received_orders: z.lazy(() => taxi_order_sentOrderByRelationAggregateInputSchema).optional(),
  delivery_orders: z.lazy(() => delivery_ordersOrderByRelationAggregateInputSchema).optional(),
  received_delivery_orders: z.lazy(() => delivery_order_sentOrderByRelationAggregateInputSchema).optional(),
  documents: z.lazy(() => documentsOrderByRelationAggregateInputSchema).optional(),
  driver_history_locations: z.lazy(() => driver_history_locationsOrderByRelationAggregateInputSchema).optional(),
  driver_municipalities: z.lazy(() => driver_municipalitiesOrderByRelationAggregateInputSchema).optional(),
  current_vehicle: z.lazy(() => vehiclesOrderByWithRelationInputSchema).optional(),
  activity_logs: z.lazy(() => driver_activity_logsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default driversOrderByWithRelationInputSchema;
