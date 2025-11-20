import { languageTexts } from './texts.js';

/**
 * Retrieve localized texts for a given route and user language.
 *
 * @param {string} routeName - The name of the route to get texts for.
 * @param {string | null | undefined} userLang - The user's preferred language code.
 * @returns {Record<string, string>} Localized texts for the specified route and language.
 */
const getLocalisedTexts = (routeName: string, userLang: string | null | undefined): Record<string, string> => {
	const langSelected = userLang;
	const texts = languageTexts[langSelected ? langSelected.toLowerCase() : 'en'];
	console.info(`\nGot texts: ${texts}\nfor route: ${routeName} and language: ${langSelected}`);
	if (!texts) {
		console.log(`Localization texts not found for language: ${langSelected}`);
		return languageTexts['en'][routeName]; // Fallback to English if the selected language texts are not found
	}
	return texts[routeName];
};
export { getLocalisedTexts };
export default {
	getLocalisedTexts,
};
