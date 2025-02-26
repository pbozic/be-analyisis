const prisma = require("../prisma");
const faker = require("@faker-js/faker");
const PromoDao = require("../../dao/Promo");

const placeholder_promo_sections = [
	{
		translations: [
			{ language: "EN", translation: "Featured Ads" },
			{ language: "SI", translation: "Izpostavljeni oglasi" },
			{ language: "IT", translation: "Annunci in evidenza" },
			{ language: "DE", translation: "Hervorgehobene Anzeigen" },
			{ language: "ES", translation: "Anuncios destacados" },
			{ language: "SRB", translation: "Istaknuti oglasi" },
			{ language: "BIH", translation: "Istaknuti oglasi" },
			{ language: "CRO", translation: "Istaknuti oglasi" },
			{ language: "FR", translation: "Annonces en vedette" },
			{ language: "RU", translation: "Рекомендуемые объявления" }
		],
		sectionData: {
			name: "Featured Ads",
			tag: "featured_ads",
			description: "Highlight your ads for better visibility.",
			t1price: 9,
			t2price: 19,
			t3price: 33,
			stripe_product_id: null,
			canPurchase: true,
			service_type: "DELIVERY",
			promo_duration_days: 30
		}
	},
	{
		translations: [
			{ language: "EN", translation: "Premium Listings" },
			{ language: "SI", translation: "Premium oglasi" },
			{ language: "IT", translation: "Annunci premium" },
			{ language: "DE", translation: "Premium-Anzeigen" },
			{ language: "ES", translation: "Anuncios premium" },
			{ language: "SRB", translation: "Premium oglasi" },
			{ language: "BIH", translation: "Premium oglasi" },
			{ language: "CRO", translation: "Premium oglasi" },
			{ language: "FR", translation: "Annonces premium" },
			{ language: "RU", translation: "Премиум-объявления" }
		],
		sectionData: {
			name: "Premium Listings",
			tag: "premium_listings",
			description: "Get your listings at the top of search results.",
			t1price: 11,
			t2price: 18,
			t3price: 31,
			stripe_product_id: null,
			canPurchase: true,
			service_type: "DELIVERY",
			promo_duration_days: 30
		}
	},
	{
		translations: [
			{ language: "EN", translation: "Homepage Spotlight" },
			{ language: "SI", translation: "Izpostavitev na domači strani" },
			{ language: "IT", translation: "Evidenza in homepage" },
			{ language: "DE", translation: "Startseiten-Highlight" },
			{ language: "ES", translation: "Destacado en la página principal" },
			{ language: "SRB", translation: "Početna stran istaknut" },
			{ language: "BIH", translation: "Početna stran istaknut" },
			{ language: "CRO", translation: "Početna stran istaknut" },
			{ language: "FR", translation: "Mise en avant sur la page d'accueil" },
			{ language: "RU", translation: "Выделение на главной странице" }
		],
		sectionData: {
			name: "Homepage Spotlight",
			tag: "homepage_spotlight",
			description: "Your ad will appear on the homepage.",
			t1price: 9.5,
			t2price: 22,
			t3price: 28,
			stripe_product_id: null,
			canPurchase: true,
			service_type: "DELIVERY",
			promo_duration_days: 30
		}
	},
	{
		translations: [
			{ language: "EN", translation: "Social Media Boost" },
			{ language: "SI", translation: "Družbeni mediji pospešitev" },
			{ language: "IT", translation: "Boost sui social media" },
			{ language: "DE", translation: "Social-Media-Boost" },
			{ language: "ES", translation: "Impulso en redes sociales" },
			{ language: "SRB", translation: "Povećanje društvenih mreža" },
			{ language: "BIH", translation: "Povećanje društvenih mreža" },
			{ language: "CRO", translation: "Povećanje društvenih mreža" },
			{ language: "FR", translation: "Boost sur les réseaux sociaux" },
			{ language: "RU", translation: "Реклама в социальных сетях" }
		],
		sectionData: {
			name: "Social Media Boost",
			tag: "social_media_boost",
			description: "Promote your ads via social media channels.",
			t1price: 10,
			t2price: 21,
			t3price: 27,
			stripe_product_id: null,
			canPurchase: true,
			service_type: "DELIVERY",
			promo_duration_days: 30
		}
	},
	{
		translations: [
			{ language: "EN", translation: "Urgent Label" },
			{ language: "SI", translation: "Nujna oznaka" },
			{ language: "IT", translation: "Etichetta urgente" },
			{ language: "DE", translation: "Dringendes Label" },
			{ language: "ES", translation: "Etiqueta urgente" },
			{ language: "SRB", translation: "Hitna oznaka" },
			{ language: "BIH", translation: "Hitna oznaka" },
			{ language: "CRO", translation: "Hitna oznaka" },
			{ language: "FR", translation: "Étiquette urgente" },
			{ language: "RU", translation: "Срочная метка" }
		],
		sectionData: {
			name: "Urgent Label",
			tag: "urgent_label",
			description: "Mark your ad as urgent for quick responses.",
			t1price: 10.5,
			t2price: 18.5,
			t3price: 29,
			stripe_product_id: null,
			canPurchase: true,
			service_type: "DELIVERY",
			promo_duration_days: 30
		}
	}
];



async function promoSectionSeed() {
	const existing_promo_sections = await PromoDao.getAllPromoSections()
	return new Promise(async (resolve, reject) => {
		console.log("Seeding Promo Sections...");
		let promisses = [];
		for (let promo_section of placeholder_promo_sections) {
			if(!existing_promo_sections.find(ps=>ps.tag===promo_section.sectionData.tag)){
				promisses.push(
					PromoDao.createPromoSection(promo_section.sectionData, promo_section.translations)
				);
			}else{
				console.log(`Promo section ${promo_section.tag} already exists!`)
			}
		}
		try {
			await Promise.all(promisses).then((values) => {
				console.log("Promo Sections seeded!");
				resolve();
			});
		} catch (error) {
			reject(error);
		}
	});
}

module.exports = promoSectionSeed;
