import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutAddressesInputSchema } from './usersCreateWithoutAddressesInputSchema';
import { usersUncheckedCreateWithoutAddressesInputSchema } from './usersUncheckedCreateWithoutAddressesInputSchema';
import { usersCreateOrConnectWithoutAddressesInputSchema } from './usersCreateOrConnectWithoutAddressesInputSchema';
import { usersUpsertWithoutAddressesInputSchema } from './usersUpsertWithoutAddressesInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutAddressesInputSchema } from './usersUpdateToOneWithWhereWithoutAddressesInputSchema';
import { usersUpdateWithoutAddressesInputSchema } from './usersUpdateWithoutAddressesInputSchema';
import { usersUncheckedUpdateWithoutAddressesInputSchema } from './usersUncheckedUpdateWithoutAddressesInputSchema';

export const usersUpdateOneRequiredWithoutAddressesNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutAddressesNestedInput> = z.object({
  create: z.union([ z.lazy(() => usersCreateWithoutAddressesInputSchema),z.lazy(() => usersUncheckedCreateWithoutAddressesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutAddressesInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutAddressesInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutAddressesInputSchema),z.lazy(() => usersUpdateWithoutAddressesInputSchema),z.lazy(() => usersUncheckedUpdateWithoutAddressesInputSchema) ]).optional(),
}).strict();

export default usersUpdateOneRequiredWithoutAddressesNestedInputSchema;
