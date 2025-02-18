const { name } = require('ejs');
const prisma = require('../prisma/prisma');
const stripe = require('../lib/stripe');
const { update } = require("../controllers/BusinessController");

async function createPromoSection(args,translations) {
    // Create a new translatable record
    let translatable = await prisma.translatable.create({
        data: {}
    });
    const sectionData = {
        name: args.name,
        tag: args.tag,
        description: args.description,
        service_type: args.service_type,
        canPurchase: args.canPurchase,
        translatable: {
            connect: {
                translatable_id: translatable.translatable_id
            }
        }
    }
    if (args.canPurchase) {
        sectionData.t1price = parseFloat(args.t1price)
        sectionData.t2price = parseFloat(args.t2price)
        sectionData.t3price = parseFloat(args.t3price)
    }
    const new_promo_section = await prisma.promo_sections.create({
        data: sectionData
    });

    // Create translations
    let translats = [];
    for (let translation of translations) {
        let trans = await prisma.translations.create({
            data: {
                translation: translation.translation,
                language: translation.language,
                translatable: {
                    connect: {
                        translatable_id: translatable.translatable_id
                    }
                }
            }
        });
        translats.push(trans);
    }

    // Attach translations to the response
    new_promo_section.translations = translats;
    return new_promo_section
}

async function updatePromoSection(id, args,translations) {
    const sectionData = {
        name: args.name,
        tag: args.tag,
        description: args.description,
        service_type: args.service_type,
        canPurchase: args.canPurchase,
    }
    if (args.canPurchase) {
        sectionData.t1price = parseFloat(args.t1price)
        sectionData.t2price = parseFloat(args.t2price)
        sectionData.t3price = parseFloat(args.t3price)
    }
    const updated_promo_section = await prisma.promo_sections.update({
        where: {
            promo_sections_id: id
        },
        data: sectionData,
        include:{
            translatable:true
        }
    });

    if (translations && translations.length > 0) {
        // Delete existing translations
        await prisma.translations.deleteMany({
            where: {
                translatable_id: updated_promo_section.translatable_id
            }
        });

        // Create new translations
        let translats = [];
        for (let translation of translations) {
            let trans = await prisma.translations.create({
                data: {
                    translation: translation.translation,
                    language: translation.language,
                    translatable: {
                        connect: {
                            translatable_id: existingWord.translatable_id
                        }
                    }
                }
            });
            translats.push(trans);
        }
        updated_promo_section.translations = translats;
    }

    return updated_promo_section
}

async function deletePromoSection(id) {
    return await prisma.promo_sections.delete({
        where: {
            promo_sections_id: id
        }
    });
}

async function getPromoSectionById(id) {
    const promo_section = await prisma.promo_sections.findUnique({
        where: {
            promo_sections_id: id
        },
    
        include: {
            promo_section_buy: true,
            translatable: {
                include: {
                    translations: true
                }
            },
        }
    });

    if (!promo_section) {
        throw new Error('Promo Section not found');
    }

    promo_section.translations = promo_section.translatable.translations;
    delete promo_section.translatable;

    return promo_section;
    
}

async function getAllPromoSections() {
    const promo_sections = await prisma.promo_sections.findMany({
        include: {
            promo_section_buy: true,
            translatable: {
                include: {
                    translations: true
                }
            },
        }
    });
    promo_sections.map((promo_section)=>{
        promo_section.translations = promo_section.translatable.translations;
        delete promo_section.translatable;

        return promo_section;
    })
    return promo_sections
}

async function getAllPromoSectionsByServiceType(type) {
    const promo_sections = await prisma.promo_sections.findMany({
        where: {
            service_type: type
        },
        include: {
            promo_section_buy: true,
            translatable: {
                include: {
                    translations: true
                }
            },
        }
    });
    promo_sections.map((promo_section)=>{
        promo_section.translations = promo_section.translatable.translations;
        delete promo_section.translatable;

        return promo_section;
    })
    return promo_sections
}   

async function createPromoAd(args) {
    return await prisma.promo_ads.create({
        data: {
            promo_ads_id: args.promo_ads_id,
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
            promo_ads_id: id
        },
        data: args
    });
}

async function deletePromoAd(id) {
    return await prisma.promo_ads.delete({
        where: {
            promo_ads_id: id
        }
    });
}

async function getPromoAdById(id) {
    return await prisma.promo_ads.findUnique({
        where: {
            promo_ads_id: id
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
                    categories_id: category
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
            promo_ads: args.promo_ads_id ? {
                connect: {
                    promo_ads_id: args.promo_ads_id
                }
            } : null,
            promo_sections: args.promo_sections_id ? {
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
            promo_banners_id: id
        },
        data: args
    });
}

async function deletePromoBanner(id) {
    return await prisma.promo_banners.delete({
        where: {
            promo_banners_id: id
        }
    });
}

async function getPromoBannerById(id) {
    return await prisma.promo_banners.findUnique({
        where: {
            promo_banners_id: id
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
async function createPromoSectionBuy(args) {
    return await prisma.promo_sections_buy.create({
        data: {
            promo_sections_id: args.promo_sections_id,
            business: {
                connect: {
                    business_id: args.business_id
                }
            },
            tier: args.tier
        },
    });
}



async function getPromoSectionBuyById(id) {
    return await prisma.promo_sections_buy.findUnique({
        where: {
            promo_sections_buy_id: id
        }
    });
}

async function getAllPromoSectionBuys() {
    return await prisma.promo_sections_buy.findMany();
}

async function getAllPromoSectionBuysBySection(section) {
    return await prisma.promo_sections_buy.findMany({
        where: {
            promo_sections_id: section
        }
    });
}

async function getAllPromoSectionBuysByBusiness(business) {
    return await prisma.promo_sections_buy.findMany({
        where: {
            business: {
                business_id: business
            }
        }
    });
}

async function getAllPromoSectionBuysByTier(tier) {
    return await prisma.promo_sections_buy.findMany({
        where: {
            tier: tier
        }
    });
}

async function updatePromoSectionBuy(id, args) {
    return await prisma.promo_sections_buy.update({
        where: {
            promo_sections_buy_id: id
        },
        data: args
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
    getAllPromoBannersBySection,
    createPromoSectionBuy,
    getPromoSectionBuyById,
    getAllPromoSectionBuys,
    getAllPromoSectionBuysBySection,
    getAllPromoSectionBuysByBusiness,
    getAllPromoSectionBuysByTier,
    updatePromoSectionBuy
}