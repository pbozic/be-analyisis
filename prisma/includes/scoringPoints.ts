import { Prisma } from '@prisma/client';

export const scoringPointsDefaultInclude = Prisma.validator<Prisma.scoring_pointsInclude>()({
    user: true,
    driver: true,
    stores_module: true,
    food_drinks_module: true,
    delivery_order: { select: { order_id: true } },
    taxi_order: { select: { order_id: true } },
    late_events: true,
});

export type ScoringPointsWithIncludesPrisma = Prisma.scoring_pointsGetPayload<{
    include: typeof scoringPointsDefaultInclude;
}>;

export default scoringPointsDefaultInclude;
