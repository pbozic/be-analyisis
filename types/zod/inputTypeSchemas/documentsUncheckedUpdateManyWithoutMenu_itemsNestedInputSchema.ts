import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateWithoutMenu_itemsInputSchema } from './documentsCreateWithoutMenu_itemsInputSchema';
import { documentsUncheckedCreateWithoutMenu_itemsInputSchema } from './documentsUncheckedCreateWithoutMenu_itemsInputSchema';
import { documentsCreateOrConnectWithoutMenu_itemsInputSchema } from './documentsCreateOrConnectWithoutMenu_itemsInputSchema';
import { documentsUpsertWithWhereUniqueWithoutMenu_itemsInputSchema } from './documentsUpsertWithWhereUniqueWithoutMenu_itemsInputSchema';
import { documentsCreateManyMenu_itemsInputEnvelopeSchema } from './documentsCreateManyMenu_itemsInputEnvelopeSchema';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithWhereUniqueWithoutMenu_itemsInputSchema } from './documentsUpdateWithWhereUniqueWithoutMenu_itemsInputSchema';
import { documentsUpdateManyWithWhereWithoutMenu_itemsInputSchema } from './documentsUpdateManyWithWhereWithoutMenu_itemsInputSchema';
import { documentsScalarWhereInputSchema } from './documentsScalarWhereInputSchema';

export const documentsUncheckedUpdateManyWithoutMenu_itemsNestedInputSchema: z.ZodType<Prisma.documentsUncheckedUpdateManyWithoutMenu_itemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => documentsCreateWithoutMenu_itemsInputSchema),z.lazy(() => documentsCreateWithoutMenu_itemsInputSchema).array(),z.lazy(() => documentsUncheckedCreateWithoutMenu_itemsInputSchema),z.lazy(() => documentsUncheckedCreateWithoutMenu_itemsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => documentsCreateOrConnectWithoutMenu_itemsInputSchema),z.lazy(() => documentsCreateOrConnectWithoutMenu_itemsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => documentsUpsertWithWhereUniqueWithoutMenu_itemsInputSchema),z.lazy(() => documentsUpsertWithWhereUniqueWithoutMenu_itemsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => documentsCreateManyMenu_itemsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => documentsWhereUniqueInputSchema),z.lazy(() => documentsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => documentsWhereUniqueInputSchema),z.lazy(() => documentsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => documentsWhereUniqueInputSchema),z.lazy(() => documentsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => documentsWhereUniqueInputSchema),z.lazy(() => documentsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => documentsUpdateWithWhereUniqueWithoutMenu_itemsInputSchema),z.lazy(() => documentsUpdateWithWhereUniqueWithoutMenu_itemsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => documentsUpdateManyWithWhereWithoutMenu_itemsInputSchema),z.lazy(() => documentsUpdateManyWithWhereWithoutMenu_itemsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => documentsScalarWhereInputSchema),z.lazy(() => documentsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default documentsUncheckedUpdateManyWithoutMenu_itemsNestedInputSchema;
