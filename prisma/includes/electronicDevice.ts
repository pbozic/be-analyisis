import { Prisma } from '@prisma/client';

export const electronicDeviceDefaultInclude = Prisma.validator<Prisma.electronic_deviceInclude>()({
	assignments: true,
	// include business_premise if needed by mappers
	business_premise: true,
});

export type ElectronicDeviceWithIncludesPrisma = Prisma.electronic_deviceGetPayload<{
	include: typeof electronicDeviceDefaultInclude;
}>;

export default electronicDeviceDefaultInclude;
