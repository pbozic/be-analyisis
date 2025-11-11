import { Prisma } from '@prisma/client';

export const groupUsersDefaultInclude = Prisma.validator<Prisma.group_usersInclude>()({
	// keep empty by default; specific DAO functions can request parent_user or allowance
});

export type GroupUsersWithIncludesPrisma = Prisma.group_usersGetPayload<{ include: typeof groupUsersDefaultInclude }>;

export default groupUsersDefaultInclude;
