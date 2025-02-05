const prisma = require('../prisma');

async function createWord(args) {
    return await prisma.words.create({
        data: {
            word: args.word,
            popularity: 0,
            category: {
                connect: {
                    category_id: args.category
                }
            }

        },
    });
}

async function updateWord(id, args) {
    return await prisma.words.update({
        where: {
            word_id: id
        },
        data: args
    });
}

async function deleteWord(id) {
    return await prisma.words.delete({
        where: {
            word_id: id
        }
    });
}

async function getWordById(id) {
    return await prisma.words.findUnique({
        where: {
            word_id: id
        }
    });
}

async function getAllWords() {
    return await prisma.words.findMany();
}

async function getAllWordsByCategory(category) {
    return await prisma.words.findMany({
        where: {
            category: {
                category_id: category
            }
        }
    });
}
async function removeCategoryFromWord(id) {
    return await prisma.words.update({
        where: {
            word_id: id
        },
        data: {
            category: {
                disconnect: true
            }
        }
    });
}

async function addCategoryToWord(id, category) {
    // if word already has a category then remove it
    const word = await getWordById(id);
    if (word.category) {
        await removeCategoryFromWord(id);
    }
    return await prisma.words.update({
        where: {
            word_id: id
        },
        data: {
            category: {
                connect: {
                    category_id: category
                }
            }
        }
    });
}

async function createWordBuy(args) {
    return await prisma.word_buy.create({
        data: {
            word_buy_id: args.word_buyer_id,
            word: {
                connect: {
                    word_id: args.word
                }
            },
            business: {
                connect: {
                    business_id: args.business_id
                }
            },
            price: args.price,
            stripe_subscription_id: args.stripe_subscription_id || null
        }
    });
}

async function addStripeSubToWordBuy(id, stripe_subscription_id) {
    return await prisma.word_buy.update({
        where: {
            word_buy_id: id
        },
        data: {
            stripe_subscription_id: stripe_subscription_id
        }
    });
}

async function getWordBuyById(id) {
    return await prisma.word_buy.findUnique({
        where: {
            word_buy_id: id
        }
    });
}

async function getAllWordBuys() {
    return await prisma.word_buy.findMany();
}

async function getAllWordBuysByWord(word) {
    return await prisma.word_buy.findMany({
        where: {
            word: {
                word_id: word
            }
        }
    });
}

async function getAllWordBuysByBusiness(business) {
    return await prisma.word_buy.findMany({
        where: {
            business: {
                business_id: business
            }
        }
    });
}

module.exports = {
    createWord,
    updateWord,
    deleteWord,
    getWordById,
    getAllWords,
    getAllWordsByCategory,
    createWordBuy,
    addStripeSubToWordBuy,
    getWordBuyById,
    getAllWordBuys,
    getAllWordBuysByWord,
    getAllWordBuysByBusiness,
    removeCategoryFromWord,
    addCategoryToWord
};