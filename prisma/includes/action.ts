import { Prisma } from '@prisma/client';

// Minimal select used by DAO functions that return only the action row (no relations).
export const actionDefaultSelect = {
    action_id: true,
    module: true,
    name: true,
} as const;

export type ActionDefaultPrisma = Prisma.actionGetPayload<{
    select: typeof actionDefaultSelect;
}>;

export default actionDefaultSelect;
