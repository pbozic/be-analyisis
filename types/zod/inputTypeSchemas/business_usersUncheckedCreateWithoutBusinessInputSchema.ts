import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { COMPANY_ROLESchema } from './COMPANY_ROLESchema';
import { allowancesUncheckedCreateNestedOneWithoutBusiness_userInputSchema } from './allowancesUncheckedCreateNestedOneWithoutBusiness_userInputSchema';
import { taxi_ordersUncheckedCreateNestedManyWithoutBusiness_usersInputSchema } from './taxi_ordersUncheckedCreateNestedManyWithoutBusiness_usersInputSchema';

export const business_usersUncheckedCreateWithoutBusinessInputSchema: z.ZodType<Prisma.business_usersUncheckedCreateWithoutBusinessInput> = z.object({
  business_users_id: z.string().uuid().optional(),
  online: z.boolean().optional().nullable(),
  company_role: z.lazy(() => COMPANY_ROLESchema).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string(),
  operating_address_id: z.string().optional().nullable(),
  allowance: z.lazy(() => allowancesUncheckedCreateNestedOneWithoutBusiness_userInputSchema).optional(),
  taxi_orders: z.lazy(() => taxi_ordersUncheckedCreateNestedManyWithoutBusiness_usersInputSchema).optional()
}).strict();

export default business_usersUncheckedCreateWithoutBusinessInputSchema;
