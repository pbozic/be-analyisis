import { Prisma } from '@prisma/client';

// Include helper for menu_items. Use Prisma.validator so we can derive the correct payload type.
export const menuItemsDefaultInclude = Prisma.validator<Prisma.menu_itemsInclude>()({
    menu_category: {
        include: { menu_categories_categories: { include: { category: true } } },
    },
    tax_rate: true,
    image_file: true,
});

export type MenuItemWithIncludesPrisma = Prisma.menu_itemsGetPayload<{ include: typeof menuItemsDefaultInclude }>;

export default menuItemsDefaultInclude;
