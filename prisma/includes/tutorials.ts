import { Prisma } from '@prisma/client';

// Minimal include for tutorial-related DAO functions (no relations currently)
export const tutorialDefaultInclude = Prisma.validator<Prisma.tutorialInclude>()({});

export type TutorialWithIncludesPrisma = Prisma.tutorialGetPayload<{ include: typeof tutorialDefaultInclude }>;

export default tutorialDefaultInclude;
