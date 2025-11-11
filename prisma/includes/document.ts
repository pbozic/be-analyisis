import { Prisma } from '@prisma/client';

export const documentsDefaultInclude = Prisma.validator<Prisma.documentsInclude>()({
	files: true,
});

export type DocumentWithIncludesPrisma = Prisma.documentsGetPayload<{
	include: typeof documentsDefaultInclude;
}>;

export default documentsDefaultInclude;
