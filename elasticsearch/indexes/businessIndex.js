const esClient = require("../client");
const prisma = require("../../prisma/prisma");
const Constants = require("../../lib/constants");
const fs = require("fs");



async function createBusinessIndex(force = false) {
    try {
        const indexExists = await esClient.indices.exists({ index: 'business_index' });

        if (indexExists) {
            console.log("⚠️ Index 'business_index' already exists. Deleting...");
            if (force) {
                await esClient.indices.delete({ index: 'business_index' });
            } else {
                console.log("🚫 Skipping index creation. Use --force to override.");
                return;
            }
        }

        console.log("🚀 Creating business_index with optimized mappings...");

        await esClient.indices.create({
            index: 'business_index',
            body: {
                settings: {
                    analysis: {
                        analyzer: {
                            custom_text_analyzer: {
                                type: "standard",
                                stopwords: "_english_"
                            }
                        }
                    }
                },
                mappings: {
                    properties: {
                        business_id: { type: "keyword" },
                        name: { type: "text", analyzer: "custom_text_analyzer" },
                        description: { type: "text", analyzer: "custom_text_analyzer" },
                        location: { type: "geo_point" }, // Allows geo-based queries
                        popular: { type: "boolean" },
                        new: { type: "boolean" },
                        working_hours: { type: "object" },
                        delivery_address: { type: "object" },
                        address: { type: "object" },
                        seats: { type: "integer" },
                        restaurant_overwhelmed: { type: "boolean" },
                        logo: { type: "text" },
                        banner: { type: "text" },
                        telephone: { type: "text" },
                        menus: {
                            type: "nested",
                            properties: {
                                isDailyMeal: { type: "boolean" },
                                date: { type: "date" },
                                menu_category_id: { type: "keyword" },
                                menu_category_name: {
                                    type: "text",
                                    analyzer: "custom_text_analyzer"
                                },
                                translations: {
                                    type: "text",
                                    analyzer: "custom_text_analyzer" // 🔥 Add translation support
                                },
                                menu_items: {
                                    type: "nested",
                                    properties: {
                                        menu_item_id: { type: "keyword" },
                                        name: { type: "text", analyzer: "custom_text_analyzer" },
                                        translations: { type: "text", analyzer: "custom_text_analyzer" }, // 🔥 Handle translations
                                        description: { type: "text", analyzer: "custom_text_analyzer" }
                                    }
                                }
                            }
                        },
                        promo_sections: { 
                            type: "nested", 
                            properties: { 
                                promo_sections_id: { type: "keyword" }, 
                                tier:  { type: "integer" }, 
                                expires_at: { type: "date" } 
                            } 
                        },

                        word_buys: {
                            type: "nested",
                            properties: {
                                word_id: { type: "keyword" },
                                word: { type: "text", analyzer: "custom_text_analyzer" },
                                translations: { type: "text", analyzer: "custom_text_analyzer" },
                                price: { type: "double" },
                                expires_at: { type: "date" }
                            }
                        }
                    }
                }
            }
        });

        console.log(" business_index created successfully.");
    } catch (error) {
        console.error("❌ Error creating business_index:", error);
    }
}

async function indexBusinesses(business_id = null, force = false) {
    //TODO: 
    //- Call this function on:
    //  - App startup
    //  - Business creation
    //  - Business update
    //  - Business deletion
    //  - Menu creation
    //  - Menu update
    //  - Menu deletion
    //  - Word buy creation
    //  - Word buy update
    //  - Word buy deletion
    //  - Address update
    //  - Delivery address update
    //  - Business popularity change
    //  - Business new status change
    //  - Business location change
    //  - Business description change
    //  - Business name change
    //  - Menu category name change
    //  - Menu item name change
    //  - Menu item description change
    //  - Word update

    try {
        await createBusinessIndex(force);
        console.log("🚀 Fetching businesses from database...");
        
        const whereClause = { type: "MERCHANT" };
        if (business_id) {
            whereClause.business_id = business_id;
        }

        const businesses = await prisma.business.findMany({
            where: whereClause,
            include: {
                address: true,
                delivery_address: true,
                word_buys: {
                    where: {
                        expires_at: {
                            gt: new Date() // Only include word_buys where expires_at is greater than now
                        }
                    },
                    include: {
                        word: {
                            include: {
                                translatable: {
                                    include: {
                                        translations: true
                                    }
                                }
                            }
                        }
                    }
                },
                menus: {
                    include: {
                        categories: {
                            include: {
                                menu_items: true,
                                menu_categories_categories: {
                                    include: {
                                        category: {
                                            include: {
                                                translatable: {
                                                    include: {
                                                        translations: true
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                documents: {
					include: {
						files: true // Full nested objects
					},
					where: {
						document_type: {
							in: ['BANNER', 'LOGO']
						}
					}
				},
                promo_sections: {
                    include: {
                        promo_section: true
                    }
                }
            }
        });
        
        console.log(`Found ${businesses.length} businesses. Preparing data for indexing...`);

        const bulkOps = [];

        for (const business of businesses) {
           // console.log(JSON.parse(JSON.stringify(business)))
            if (!business.menus || business.menus.length === 0) {
                console.warn(`⚠️ Skipping ${business.name} (No menus found)`);
                continue;
            }
            let logo, banner;
            for (let doc of business.documents) {
                if (doc.document_type === Constants.DOCUMENT_TYPE.LOGO) {
                    logo = doc.files[0].url;
                }
                if (doc.document_type === Constants.DOCUMENT_TYPE.BANNER) {
                    banner = doc.files[0].url;
                }
            }
            //fs.writeFileSync('business.json', JSON.stringify(business, null, 2))
            let categoriesIds = []
            for (let menu of business.menus) {
                for (let category of menu.categories) {
                    if (category.menu_categories_categories.length > 0){
                        for (let cat of category.menu_categories_categories) {
                            categoriesIds.push(cat.category.categories_id)
                        }
                    }
                }
            }
            console.log(categoriesIds)
            const doc = {
                business_id: business.business_id,
                name: business.name,
                description: business.description,
                popular: business.popular,
                new: business.new,
                working_hours: business.working_hours,
                delivery_address: business.delivery_address,
                address: business.address,
                seats: business.seats,
                restaurant_overwhelmed: business.restaurant_overwhelmed,
                logo: logo,
                banner: banner,
                telephone: business.telephone,
                location: business.delivery_address? { lat: parseFloat(business.delivery_address.latitude), lon: parseFloat(business.delivery_address.longitude) } : { lat: parseFloat(business.address.latitude), lon: parseFloat(usiness.address.longitude) },
                menus: business.menus.map(menu => {
                    if (menu.isDailyMeal) {
                    }
                    let menu1 = {

                    menu_category_name: menu.categories.flatMap(cat => {
                        if (!cat.names) return []
                        return  Object.values(cat.names).filter(value => value !== "") || []
                    }
                       
                    ),
                    menu_category_id: categoriesIds,
                    translations: menu.categories.flatMap(cat =>
                        cat.menu_categories_categories.flatMap(rel =>
                            rel.category.translatable?.translations.map(t => t.translation) || []
                        )
                    ),
                    menu_items: menu.categories.flatMap(cat =>
                        cat.menu_items.map(item => ({
                            menu_item_id: item.menu_item_id,
                            name: Object.values(item.names).filter(value => value !== ""),
                            translations: item.menu_category?.menu_categories_categories.flatMap(rel =>
                                rel.category.translatable?.translations.map(t => t.translation) || []
                            ),
                            description: Object.values(item.description).filter(value => value !== "")
                        }))
                    )
                }
                if (menu.isDailyMeal) {
                    menu1.isDailyMeal = true,
                    menu1.date = menu.date
                }
                return menu1

            }),
                promo_sections: business.promo_sections.map(section => {
                    return {
                        name: section.promo_section.name,
                        promo_sections_id: section.promo_sections_id,
                        tier: section.tier,
                        expires_at: section.expires_at
                    }
                }
                    
                ),
            };
            
            
            //console.log(JSON.stringify(doc))
            
            bulkOps.push(
                { update: { _index: 'business_index', _id: business.business_id } }, // Use business_id as _id
                { doc, doc_as_upsert: true } // Update if exists, create if not
            );
        }
        
        if (bulkOps.length > 0) {
            console.log(`📤 Sending ${bulkOps.length / 2} businesses to Elasticsearch...`);
            const bulkResponse = await esClient.bulk({ refresh: true, body: bulkOps });

            if (bulkResponse.errors) {
                console.error("❌ Some bulk operations failed!");
                const failedOps = [];

                bulkResponse.items.forEach((item, index) => {
                    const operation = Object.keys(item)[0]; // "index" or "update"
                    const result = item[operation];
                    if (result.error) {
                        console.error(`🚨 Error in ${operation} at index ${index}:`, result.error);
                        failedOps.push(bulkOps[index * 2]); // Retry failed operations
                        failedOps.push(bulkOps[index * 2 + 1]);
                    }
                });

                if (failedOps.length > 0) {
                    console.log(`🔁 Retrying ${failedOps.length / 2} failed documents...`);
                    await esClient.bulk({ refresh: true, body: failedOps });
                }
            } else {
                console.log(` Successfully indexed ${bulkOps.length / 2} businesses!`);
            }
        } else {
            console.log("⚠️ No businesses to index.");
        }
    } catch (error) {
        console.error("❌ Error indexing businesses:", error);
    }
}

module.exports = indexBusinesses;

