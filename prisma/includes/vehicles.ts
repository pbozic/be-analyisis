import { Prisma } from '@prisma/client';

export const vehiclesDefaultInclude = Prisma.validator<Prisma.vehiclesInclude>()({
    // include business_premise relation commonly used
    business_premise: true,
});

export type VehicleWithIncludesPrisma = Prisma.vehiclesGetPayload<{ include: typeof vehiclesDefaultInclude }>;

export default vehiclesDefaultInclude;
