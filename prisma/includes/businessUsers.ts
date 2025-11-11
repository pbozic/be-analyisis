import { Prisma } from '@prisma/client';

export const businessUsersDefaultInclude = Prisma.validator<Prisma.business_usersInclude>()({
    users: true,
    business: true,
    allowance: true,
    operating_address: true,
});

export type BusinessUserWithBusinessPrisma = Prisma.business_usersGetPayload<{
    include: typeof businessUsersDefaultInclude;
}>;

export type BusinessUserDefaultPrisma = Prisma.business_usersGetPayload<Record<string, never>>;

export const businessUsersAllowanceInclude = Prisma.validator<Prisma.business_usersInclude>()({
    allowance: true,
});

export type BusinessUserWithAllowancePrisma = Prisma.business_usersGetPayload<{
    include: typeof businessUsersAllowanceInclude;
}>;

export const businessUsersUsersInclude = Prisma.validator<Prisma.business_usersInclude>()({
    users: true,
});

export type BusinessUserWithUsersPrisma = Prisma.business_usersGetPayload<{
    include: typeof businessUsersUsersInclude;
}>;

export default businessUsersDefaultInclude;
