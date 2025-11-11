import { Prisma } from '@prisma/client';

// Transport module include (empty for now) — use Prisma.validator to derive payload types
export const transportDefaultInclude = Prisma.validator<Prisma.transport_moduleInclude>()({});

export type TransportModuleWithIncludesPrisma = Prisma.transport_moduleGetPayload<{ include: typeof transportDefaultInclude }>;

export default transportDefaultInclude;
