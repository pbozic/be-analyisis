import { Prisma } from '@prisma/client';

// Minimal select used by DAO functions that return only the addon row (no relations).
export const addonDefaultSelect = {
    addon_id: true,
    module: true,
    name: true,
    price_cents: true,
    stripe_price_id: true,
    stripe_product_id: true,
} as const;

export type AddonDefaultPrisma = Prisma.addonGetPayload<{
    select: typeof addonDefaultSelect;
}>;

// Include shapes for richer DAO returns
export const addonWithActionsInclude = {
    include: {
        // Include the nested `action` relation from the join table so mappers receive full action objects
        actions: {
            include: {
                action: true,
            },
        },
        business_addons: {
            include: {
                reservation_module: true,
            },
        },
    },
} as const;

export type AddonWithActionsPrisma = Prisma.addonGetPayload<{
    include: typeof addonWithActionsInclude['include'];
}>;

export const addonWithUsagesInclude = {
    include: {
        // business_addon itself doesn't contain `usages`; usages live on reservation_module.
        // Include reservation_module.usages through business_addons -> reservation_module to surface usages.
        business_addons: {
            include: {
                reservation_module: {
                    include: {
                        usages: true,
                    },
                },
            },
        },
    },
} as const;

export type AddonWithUsagesPrisma = Prisma.addonGetPayload<{
    include: typeof addonWithUsagesInclude['include'];
}>;

export const addonWithActionsAndUsagesInclude = {
    include: {
        actions: {
            include: {
                action: true,
            },
        },
        business_addons: {
            include: {
                reservation_module: {
                    include: {
                        usages: true,
                    },
                },
            },
        },
    },
} as const;

export type AddonWithActionsAndUsagesPrisma = Prisma.addonGetPayload<{
    include: typeof addonWithActionsAndUsagesInclude['include'];
}>;

// business_addon rows that include the nested addon (with actions) and usages/reservation_module
export const businessAddonWithAddonInclude = {
    include: {
        addon: {
            include: {
                actions: {
                    include: {
                        action: true,
                    },
                },
            },
        },
        reservation_module: {
            include: {
                usages: true,
            },
        },
    },
} as const;

export type BusinessAddonWithAddonPrisma = Prisma.business_addonGetPayload<{
    include: typeof businessAddonWithAddonInclude['include'];
}>;

export default addonDefaultSelect;
