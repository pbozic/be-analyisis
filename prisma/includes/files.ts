import { Prisma } from '@prisma/client';

export const filesDefaultInclude = Prisma.validator<Prisma.filesInclude>()({
	// no relations by default; keep this as a stable include shape for mappers
});

export type FileWithIncludesPrisma = Prisma.filesGetPayload<{
	include: typeof filesDefaultInclude;
}>;

export default filesDefaultInclude;
