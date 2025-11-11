import { Prisma } from '@prisma/client';

export const businessClientWithBusinessInclude = Prisma.validator<Prisma.business_clientsInclude>()({
    crm_module: { include: { business: true } },
});

export const businessClientWithOrdersInclude = Prisma.validator<Prisma.business_clientsInclude>()({
    taxi_orders: true,
});

export const businessClientDetailInclude = Prisma.validator<Prisma.business_clientsInclude>()({
    crm_module: { include: { business: true } },
    taxi_orders: true,
});

export type BusinessClientWithBusinessPrisma = Prisma.business_clientsGetPayload<{
    include: typeof businessClientWithBusinessInclude;
}>;

export type BusinessClientWithOrdersPrisma = Prisma.business_clientsGetPayload<{
    include: typeof businessClientWithOrdersInclude;
}>;

export type BusinessClientDetailPrisma = Prisma.business_clientsGetPayload<{
    include: typeof businessClientDetailInclude;
}>;

export type BusinessClientDefaultPrisma = Prisma.business_clientsGetPayload<Record<string, never>>;
