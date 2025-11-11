import { Prisma } from '@prisma/client';

export const businessPremiseDefaultInclude = Prisma.validator<Prisma.business_premiseInclude>()({
	transport_module: true,
	vehicle: true,
	devices: true,
	invoices: true,
});

export type BusinessPremiseWithIncludesPrisma = Prisma.business_premiseGetPayload<{
	include: typeof businessPremiseDefaultInclude;
}>;

export default businessPremiseDefaultInclude;
