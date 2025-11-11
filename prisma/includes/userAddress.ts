import { Prisma } from '@prisma/client';

export const userAddressDefaultSelect = {
	user_id: true,
	address_id: true,
	primary: true,
	details: true,
	type: true,
} as const;

export type UserAddressDefaultPrisma = Prisma.user_addressGetPayload<{
	select: typeof userAddressDefaultSelect;
}>;

export default userAddressDefaultSelect;
