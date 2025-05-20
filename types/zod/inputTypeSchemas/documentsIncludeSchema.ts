import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { filesFindManyArgsSchema } from "../outputTypeSchemas/filesFindManyArgsSchema"
import { driversArgsSchema } from "../outputTypeSchemas/driversArgsSchema"
import { delivery_driversArgsSchema } from "../outputTypeSchemas/delivery_driversArgsSchema"
import { businessArgsSchema } from "../outputTypeSchemas/businessArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { vehiclesArgsSchema } from "../outputTypeSchemas/vehiclesArgsSchema"
import { menu_itemsArgsSchema } from "../outputTypeSchemas/menu_itemsArgsSchema"
import { lost_itemsArgsSchema } from "../outputTypeSchemas/lost_itemsArgsSchema"
import { transactionsArgsSchema } from "../outputTypeSchemas/transactionsArgsSchema"
import { DocumentsCountOutputTypeArgsSchema } from "../outputTypeSchemas/DocumentsCountOutputTypeArgsSchema"

export const documentsIncludeSchema: z.ZodType<Prisma.documentsInclude> = z.object({
  files: z.union([z.boolean(),z.lazy(() => filesFindManyArgsSchema)]).optional(),
  drivers: z.union([z.boolean(),z.lazy(() => driversArgsSchema)]).optional(),
  delivery_driver: z.union([z.boolean(),z.lazy(() => delivery_driversArgsSchema)]).optional(),
  business: z.union([z.boolean(),z.lazy(() => businessArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  vehicles: z.union([z.boolean(),z.lazy(() => vehiclesArgsSchema)]).optional(),
  menu_items: z.union([z.boolean(),z.lazy(() => menu_itemsArgsSchema)]).optional(),
  lost_items: z.union([z.boolean(),z.lazy(() => lost_itemsArgsSchema)]).optional(),
  transactions: z.union([z.boolean(),z.lazy(() => transactionsArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DocumentsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default documentsIncludeSchema;
