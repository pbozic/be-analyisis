import { Prisma } from '@prisma/client';

export const serviceLocationBase = Prisma.validator<Prisma.service_locationDefaultArgs>()({
	select: {
		service_location_id: true,
		service_id: true,
		location_id: true,
	},
});

export type ServiceLocationBasePrisma = Prisma.service_locationGetPayload<typeof serviceLocationBase>;
