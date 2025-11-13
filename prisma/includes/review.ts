import { Prisma } from '@prisma/client';

// include shape typed to Prisma.reviewsInclude so `typeof reviewsWithItemsInclude` can be used in Prisma generics
export const reviewsWithItemsInclude = Prisma.validator<Prisma.reviewsInclude>()({
	items: true,
});
export const reviewsBaseInclude = Prisma.validator<Prisma.reviewsInclude>()({} as const);

export const reviewItemsBaseInclude = Prisma.validator<Prisma.review_itemsInclude>()({} as const);

export type ReviewsWithItemsInclude = Prisma.reviewsGetPayload<{ include: typeof reviewsWithItemsInclude }>;
export type ReviewsBaseInclude = Prisma.reviewsGetPayload<{ include: typeof reviewsBaseInclude }>;
export type ReviewItemsBaseInclude = Prisma.review_itemsGetPayload<{ include: typeof reviewItemsBaseInclude }>;
