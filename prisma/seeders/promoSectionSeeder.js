import PromoDao from '../../dao/Promo.js';
const placeholder_promo_sections = [
	{
		translations: [
			{ language: 'en', translation: 'Featured Ads' },
			{ language: 'sl', translation: 'Izpostavljeni oglasi' },
			{ language: 'it', translation: 'Annunci in evidenza' },
			{ language: 'de', translation: 'Hervorgehobene Anzeigen' },
			{ language: 'es', translation: 'Anuncios destacados' },
			{ language: 'sr', translation: 'Istaknuti oglasi' },
			{ language: 'bs', translation: 'Istaknuti oglasi' },
			{ language: 'hr', translation: 'Istaknuti oglasi' },
			{ language: 'fr', translation: 'Annonces en vedette' },
			{ language: 'ru', translation: 'Рекомендуемые объявления' },
			{ language: 'ua', translation: 'Рекомендовані оголошення' },
		],
		sectionData: {
			name: 'Featured Ads',
			tag: 'featured_ads',
			description: 'Highlight your ads for better visibility.',
			t1price: 9,
			t2price: 19,
			t3price: 33,
			stripe_product_id: null,
			canPurchase: true,
			service_type: 'DELIVERY',
			promo_duration_days: 30,
		},
	},
	{
		translations: [
			{ language: 'EN', translation: 'Premium Listings' },
			{ language: 'SL', translation: 'Premium oglasi' },
			{ language: 'IT', translation: 'Annunci premium' },
			{ language: 'DE', translation: 'Premium-Anzeigen' },
			{ language: 'ES', translation: 'Anuncios premium' },
			{ language: 'SR', translation: 'Premium oglasi' },
			{ language: 'BS', translation: 'Premium oglasi' },
			{ language: 'HR', translation: 'Premium oglasi' },
			{ language: 'FR', translation: 'Annonces premium' },
			{ language: 'RU', translation: 'Премиум-объявления' },
			{ language: 'UA', translation: 'Преміум-оголошення' },
		],
		sectionData: {
			name: 'Premium Listings',
			tag: 'premium_listings',
			description: 'Get your listings at the top of search results.',
			t1price: 11,
			t2price: 18,
			t3price: 31,
			stripe_product_id: null,
			canPurchase: true,
			service_type: 'DELIVERY',
			promo_duration_days: 30,
		},
	},
	{
		translations: [
			{ language: 'EN', translation: 'Homepage Spotlight' },
			{ language: 'SL', translation: 'Izpostavitev na domači strani' },
			{ language: 'IT', translation: 'Evidenza in homepage' },
			{ language: 'DE', translation: 'Startseiten-Highlight' },
			{ language: 'ES', translation: 'Destacado en la página principal' },
			{ language: 'SR', translation: 'Početna stran istaknut' },
			{ language: 'BS', translation: 'Početna stran istaknut' },
			{ language: 'HR', translation: 'Početna stran istaknut' },
			{ language: 'FR', translation: "Mise en avant sur la page d'accueil" },
			{ language: 'RU', translation: 'Выделение на главной странице' },
			{ language: 'UA', translation: 'Виділення на головній сторінці' },
		],
		sectionData: {
			name: 'Homepage Spotlight',
			tag: 'homepage_spotlight',
			description: 'Your ad will appear on the homepage.',
			t1price: 9.5,
			t2price: 22,
			t3price: 28,
			stripe_product_id: null,
			canPurchase: true,
			service_type: 'DELIVERY',
			promo_duration_days: 30,
		},
	},
	{
		translations: [
			{ language: 'EN', translation: 'Social Media Boost' },
			{ language: 'SL', translation: 'Družbeni mediji pospešitev' },
			{ language: 'IT', translation: 'Boost sui social media' },
			{ language: 'DE', translation: 'Social-Media-Boost' },
			{ language: 'ES', translation: 'Impulso en redes sociales' },
			{ language: 'SR', translation: 'Povećanje društvenih mreža' },
			{ language: 'BS', translation: 'Povećanje društvenih mreža' },
			{ language: 'HR', translation: 'Povećanje društvenih mreža' },
			{ language: 'FR', translation: 'Boost sur les réseaux sociaux' },
			{ language: 'RU', translation: 'Реклама в социальных сетях' },
			{ language: 'UA', translation: 'Просування у соціальних мережах' },
		],
		sectionData: {
			name: 'Social Media Boost',
			tag: 'social_media_boost',
			description: 'Promote your ads via social media channels.',
			t1price: 10,
			t2price: 21,
			t3price: 27,
			stripe_product_id: null,
			canPurchase: true,
			service_type: 'DELIVERY',
			promo_duration_days: 30,
		},
	},
	{
		translations: [
			{ language: 'EN', translation: 'Urgent Label' },
			{ language: 'SL', translation: 'Nujna oznaka' },
			{ language: 'IT', translation: 'Etichetta urgente' },
			{ language: 'DE', translation: 'Dringendes Label' },
			{ language: 'ES', translation: 'Etiqueta urgente' },
			{ language: 'SR', translation: 'Hitna oznaka' },
			{ language: 'BS', translation: 'Hitna oznaka' },
			{ language: 'HR', translation: 'Hitna oznaka' },
			{ language: 'FR', translation: 'Étiquette urgente' },
			{ language: 'RU', translation: 'Срочная метка' },
			{ language: 'UA', translation: 'Мітка "Терміново"' },
		],
		sectionData: {
			name: 'Urgent Label',
			tag: 'urgent_label',
			description: 'Mark your ad as urgent for quick responses.',
			t1price: 10.5,
			t2price: 18.5,
			t3price: 29,
			stripe_product_id: null,
			canPurchase: true,
			service_type: 'DELIVERY',
			promo_duration_days: 30,
		},
	},
];
async function promoSectionSeed() {
	const existing_promo_sections = await PromoDao.getAllPromoSections();
	return new Promise(async (resolve, reject) => {
		console.log('Seeding Promo Sections...');
		let promisses = [];
		for (let promo_section of placeholder_promo_sections) {
			const existing = existing_promo_sections.find((ps) => ps.tag === promo_section.sectionData.tag);
			if (!existing) {
				promisses.push(PromoDao.createPromoSection(promo_section.sectionData, promo_section.translations));
			} else {
				console.log(
					`Promo section ${promo_section.tag} already exists!, updating ${existing.promo_sections_id}`
				);
				promisses.push(
					PromoDao.updatePromoSection(
						existing.promo_sections_id,
						promo_section.sectionData,
						promo_section.translations
					)
				);
			}
		}
		try {
			await Promise.all(promisses).then((values) => {
				console.log('Promo Sections seeded!');
				resolve();
			});
		} catch (error) {
			reject(error);
		}
	});
}
export default promoSectionSeed;
