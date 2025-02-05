const { name } = require('ejs');
const prisma = require('../prisma');

async function createPromoSection(args) {
    return await prisma.promo_sections.create({
        data: {
            promo_sections_id: args.promo_sections_id,
            name: args.name,
            tag: args.tag,
            description: args.description,
            service_type: args.service_type,
        },
    });
}

async function updatePromoSection(id, args) {
    return await prisma.promo_sections.update({
        where: {
            promo_sections_id: id
        },
        data: args
    });
}

async function deletePromoSection(id) {
    return await prisma.promo_sections.delete({
        where: {
            promo_sections_id: id
        }
    });
}

async function getPromoSectionById(id) {
    return await prisma.promo_sections.findUnique({
        where: {
            promo_sections_id: id
        }
    });
}

async function getAllPromoSections() {
    return await prisma.promo_sections.findMany();
}

async function getAllPromoSectionsByServiceType(type) {
    return await prisma.promo_sections.findMany({
        where: {
            service_type: type
        }
    });
}   

async function createPromoAd(args) {
    return await prisma.promo_ads.create({
        data: {
            promo_ad_id: args.promo_ad_id,
            title: args.title,
            text: args.text,
            tag: args.tag,
            service_type: args.service_type,
            discount: args.discount || 0,
            categories: {
                connect: args.categories.map((category) => {
                    return {
                        id: category
                    }
                })
            }
        }
    });
}

async function updatePromoAd(id, args) {
    return await prisma.promo_ads.update({
        where: {
            promo_ad_id: id
        },
        data: args
    });
}

async function deletePromoAd(id) {
    return await prisma.promo_ads.delete({
        where: {
            promo_ad_id: id
        }
    });
}

async function getPromoAdById(id) {
    return await prisma.promo_ads.findUnique({
        where: {
            promo_ad_id: id
        }
    });
}

async function getAllPromoAds() {
    return await prisma.promo_ads.findMany();
}

async function getAllPromoAdsByServiceType(type) {
    return await prisma.promo_ads.findMany({
        where: {
            service_type: type
        }
    });
}

async function getAllPromoAdsByCategory(category) {
    return await prisma.promo_ads.findMany({
        where: {
            categories: {
                some: {
                    id: category
                }
            }
        }
    });
}

async function createPromoBanner(args) {
    return await prisma.promo_banners.create({
        data: {
            promo_banner_id: args.promo_banner_id,
            title: args.title,
            text: args.text,
            type: args.type,                  
            size: args.size,
            promo_ads_id: args.promo_ad_id ? {
                connect: {
                    promo_ads_id: args.promo_ad_id
                }
            } : null,
            promo_sections_id: args.promo_sections_id ? {
                connect: {
                    promo_sections_id: args.promo_sections_id
                }
            } : null,
        }
    });
}

async function updatePromoBanner(id, args) {
    return await prisma.promo_banners.update({
        where: {
            promo_banner_id: id
        },
        data: args
    });
}

async function deletePromoBanner(id) {
    return await prisma.promo_banners.delete({
        where: {
            promo_banner_id: id
        }
    });
}

async function getPromoBannerById(id) {
    return await prisma.promo_banners.findUnique({
        where: {
            promo_banner_id: id
        }
    });
}

async function getAllPromoBanners() {
    return await prisma.promo_banners.findMany();
}

async function getAllPromoBannersByType(type) {
    return await prisma.promo_banners.findMany({
        where: {
            type: type
        }
    });
}

async function getAllPromoBannersBySize(size) {
    return await prisma.promo_banners.findMany({
        where: {
            size: size
        }
    });
}

async function getAllPromoBannersByAd(ad) {
    return await prisma.promo_banners.findMany({
        where: {
            promo_ads_id: ad
        }
    });
}

async function getAllPromoBannersBySection(section) {
    return await prisma.promo_banners.findMany({
        where: {
            promo_sections_id: section
        }
    });
}

module.exports = {
    createPromoSection,
    updatePromoSection,
    deletePromoSection,
    getPromoSectionById,
    getAllPromoSections,
    getAllPromoSectionsByServiceType,
    createPromoAd,
    updatePromoAd,
    deletePromoAd,
    getPromoAdById,
    getAllPromoAds,
    getAllPromoAdsByServiceType,
    getAllPromoAdsByCategory,
    createPromoBanner,
    updatePromoBanner,
    deletePromoBanner,
    getPromoBannerById,
    getAllPromoBanners,
    getAllPromoBannersByType,
    getAllPromoBannersBySize,
    getAllPromoBannersByAd,
    getAllPromoBannersBySection
}