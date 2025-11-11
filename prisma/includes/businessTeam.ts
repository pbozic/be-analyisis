import { Prisma } from '@prisma/client';

export const croppedUserColumns = {
	first_name: true,
	last_name: true,
	user_id: true,
} as const;

export const businessTeamWithUsersInclude = Prisma.validator<Prisma.business_teamsInclude>()({
	users: { select: croppedUserColumns },
});

export type BusinessTeamWithUsersPrisma = Prisma.business_teamsGetPayload<{
	include: typeof businessTeamWithUsersInclude;
}>;

export type BusinessTeamDefaultPrisma = Prisma.business_teamsGetPayload<Record<string, never>>;

export default businessTeamWithUsersInclude;
