import { Prisma } from '@prisma/client';

export const deviceAssignmentDefaultInclude = Prisma.validator<Prisma.device_assignmentInclude>()({
    device: true,
});

export type DeviceAssignmentWithIncludesPrisma = Prisma.device_assignmentGetPayload<{ include: typeof deviceAssignmentDefaultInclude }>;

export default deviceAssignmentDefaultInclude;
