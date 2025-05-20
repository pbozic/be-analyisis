import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { COMPANY_ROLESchema } from './COMPANY_ROLESchema';
import { usersCreateNestedOneWithoutBusiness_usersInputSchema } from './usersCreateNestedOneWithoutBusiness_usersInputSchema';
import { businessCreateNestedOneWithoutBusiness_usersInputSchema } from './businessCreateNestedOneWithoutBusiness_usersInputSchema';
import { addressesCreateNestedOneWithoutBusiness_usersInputSchema } from './addressesCreateNestedOneWithoutBusiness_usersInputSchema';
import { allowancesCreateNestedOneWithoutBusiness_userInputSchema } from './allowancesCreateNestedOneWithoutBusiness_userInputSchema';

export const business_usersCreateWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.business_usersCreateWithoutTaxi_ordersInput> = z.object({
  business_users_id: z.string().uuid().optional(),
  online: z.boolean().optional().nullable(),
  company_role: z.lazy(() => COMPANY_ROLESchema).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  users: z.lazy(() => usersCreateNestedOneWithoutBusiness_usersInputSchema).optional(),
  business: z.lazy(() => businessCreateNestedOneWithoutBusiness_usersInputSchema).optional(),
  operating_address: z.lazy(() => addressesCreateNestedOneWithoutBusiness_usersInputSchema).optional(),
  allowance: z.lazy(() => allowancesCreateNestedOneWithoutBusiness_userInputSchema).optional()
}).strict();

export default business_usersCreateWithoutTaxi_ordersInputSchema;
