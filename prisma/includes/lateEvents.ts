import { Prisma } from '@prisma/client';

export const lateEventsDefaultInclude = Prisma.validator<Prisma.late_eventsInclude>()({
    driver: true,
    stores_module: true,
    food_drinks_module: true,
    delivery_order: true,
    taxi_order: true,
    scoring_points: true,
});

export type LateEventsWithIncludesPrisma = Prisma.late_eventsGetPayload<{ include: typeof lateEventsDefaultInclude }>;

export default lateEventsDefaultInclude;
