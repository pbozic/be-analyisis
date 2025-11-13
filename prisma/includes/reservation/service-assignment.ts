import { Prisma } from '@prisma/client';

export const serviceAssignmentBase = Prisma.validator<Prisma.service_assignmentDefaultArgs>()({
	select: {
		employee_id: true,
		service_id: true,
	},
});

export type ServiceAssignmentBasePrisma = Prisma.service_assignmentGetPayload<typeof serviceAssignmentBase>;
