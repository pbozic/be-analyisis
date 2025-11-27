import { Prisma } from '@prisma/client';

export const groupUsersDefaultInclude = Prisma.validator<Prisma.group_usersInclude>()({
	parent_user: {
		select: {
			first_name: true,
			last_name: true,
			email: true,
			telephone: true,
		},
	},
	child_user: {
		select: {
			first_name: true,
			last_name: true,
			email: true,
			telephone: true,
		},
	},
	allowance: true,
});

export type GroupUsersWithIncludesPrisma = Prisma.group_usersGetPayload<{ include: typeof groupUsersDefaultInclude }>;

export default groupUsersDefaultInclude;
