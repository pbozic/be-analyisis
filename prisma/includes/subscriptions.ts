import { Prisma } from '@prisma/client';

// Include action_bundle actions and their action ref for detailed subscription responses
export const subscriptionDefaultInclude = Prisma.validator<Prisma.action_bundleInclude>()({
    actions: { include: { action: true } },
});

export type SubscriptionWithIncludesPrisma = Prisma.action_bundleGetPayload<{ include: typeof subscriptionDefaultInclude }>;

export default subscriptionDefaultInclude;
