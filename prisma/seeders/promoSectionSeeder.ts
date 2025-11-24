import PromoDao from '../../dao/Promo.js';
import { TranslationItem } from '../../schemas/dto/Promo/promo-section.dto.js';
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
			{ language: 'en', translation: 'Premium Listings' },
			{ language: 'sl', translation: 'Premium oglasi' },
			{ language: 'it', translation: 'Annunci premium' },
			{ language: 'de', translation: 'Premium-Anzeigen' },
			{ language: 'es', translation: 'Anuncios premium' },
			{ language: 'sr', translation: 'Premium oglasi' },
			{ language: 'bs', translation: 'Premium oglasi' },
			{ language: 'hr', translation: 'Premium oglasi' },
			{ language: 'fr', translation: 'Annonces premium' },
			{ language: 'ru', translation: 'Премиум-объявления' },
			{ language: 'ua', translation: 'Преміум-оголошення' },
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
			{ language: 'en', translation: 'Homepage Spotlight' },
			{ language: 'sl', translation: 'Izpostavitev na domači strani' },
			{ language: 'it', translation: 'Evidenza in homepage' },
			{ language: 'de', translation: 'Startseiten-Highlight' },
			{ language: 'es', translation: 'Destacado en la página principal' },
			{ language: 'sr', translation: 'Početna stran istaknut' },
			{ language: 'bs', translation: 'Početna stran istaknut' },
			{ language: 'hr', translation: 'Početna stran istaknut' },
			{ language: 'fr', translation: "Mise en avant sur la page d'accueil" },
			{ language: 'ru', translation: 'Выделение на главной странице' },
			{ language: 'ua', translation: 'Виділення на головній сторінці' },
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
			{ language: 'en', translation: 'Social Media Boost' },
			{ language: 'sl', translation: 'Družbeni mediji pospešitev' },
			{ language: 'it', translation: 'Boost sui social media' },
			{ language: 'de', translation: 'Social-Media-Boost' },
			{ language: 'es', translation: 'Impulso en redes sociales' },
			{ language: 'sr', translation: 'Povećanje društvenih mreža' },
			{ language: 'bs', translation: 'Povećanje društvenih mreža' },
			{ language: 'hr', translation: 'Povećanje društvenih mreža' },
			{ language: 'fr', translation: 'Boost sur les réseaux sociaux' },
			{ language: 'ru', translation: 'Реклама в социальных сетях' },
			{ language: 'ua', translation: 'Просування у соціальних мережах' },
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
			{ language: 'en', translation: 'Urgent Label' },
			{ language: 'sl', translation: 'Nujna oznaka' },
			{ language: 'it', translation: 'Etichetta urgente' },
			{ language: 'de', translation: 'Dringendes Label' },
			{ language: 'es', translation: 'Etiqueta urgente' },
			{ language: 'sr', translation: 'Hitna oznaka' },
			{ language: 'bs', translation: 'Hitna oznaka' },
			{ language: 'hr', translation: 'Hitna oznaka' },
			{ language: 'fr', translation: 'Étiquette urgente' },
			{ language: 'ru', translation: 'Срочная метка' },
			{ language: 'ua', translation: 'Мітка "Терміново"' },
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
	try {
		const existing_promo_sections = await PromoDao.getAllPromoSections({});
		console.log('Seeding Promo Sections...');
		for (let promo_section of placeholder_promo_sections) {
			const existing = existing_promo_sections.find((ps) => ps.tag === promo_section.sectionData.tag);
			if (!existing) {
				await PromoDao.createPromoSection(
					promo_section.sectionData,
					promo_section.translations as TranslationItem[]
				);
			} else {
				console.log(
					`Promo section ${promo_section.sectionData.tag} already exists!, updating ${existing.promo_sections_id}`
				);
				await PromoDao.updatePromoSection(
					existing.promo_sections_id as string,
					promo_section.sectionData,
					promo_section.translations as TranslationItem[]
				);
			}
		}
		console.log('Promo Sections seeded!');
	} catch (error) {
		console.error('Error seeding Promo Sections:', error);
	}
}
export default promoSectionSeed;
