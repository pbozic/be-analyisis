const {prisma} = require('../prisma/prisma');
const moment = require('moment');
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const connectBusinessToPromoSections = async (businessId, promoSectionIds) => {
    for (const id of promoSectionIds) {
        const promoSection = await prisma.promo_section.findUnique({
            where: {
                id,
            },
        });
        if (promoSection.business_id) {
            throw new Error(`Promo section with id ${id} is already connected to a business`);
        }
        let today = moment();
        let in30Days = moment().add(30, 'days');
        const promoSectionBuy = await prisma.promo_section_buy.create({
            data: {
                business: {
                    connect: {
                        business_id: businessId,
                    },
                },
                promo_sections: {
                    connect: promoSectionIds.map((id) => ({promo_sections_id: id})),
                },
                tier: [1, 2, 3][Math.floor(Math.random() * 3)],
                active_at: today.toDate(),
                expires_at: in30Days.toDate(),
            },
        });
        const business = await prisma.business.update({
            where: {
                id: businessId,
            },
            data: {
                promo_section_buy: {
                    connect: {
                        promo_section_buy_id: promoSectionBuy.id,
                    }
                },
            },
        });
    }
    
    
    
    return business;
}

async function main() {
    rl.question("Are you sure you want to run this, this will randomly connect businesses to promo_Sections, without them paying anything? (yes/no) ", async (answer) => {
        if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "y") {
            console.log("Running the script...");
            let businesses = await prisma.business.findMany();
            let promoSections = await prisma.promo_section.findMany();
            for (let business of businesses) {
                let promoSectionIds = getRandomElements(promoSections).map((promoSection) => promoSection.promo_sections_id);
                await connectBusinessToPromoSections(business.business_id, promoSectionIds);
            }
        } else {
            console.log("Operation canceled.");
        }
        rl.close();
    });
   
}

function getRandomElements(array, min, max) {
    const count = Math.floor(Math.random() * (max - min + 1)) + min;
    return array.sort(() => Math.random() - 0.5).slice(0, count);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});