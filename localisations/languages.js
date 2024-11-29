const { languageTexts } = require("./texts");

// Modified function to accept user data directly
const getLocalisedTexts = (routeName, user) => {
    const langSelected = user.language;
    const texts = languageTexts[langSelected ? langSelected.toLowerCase() : 'en'];

    if (!texts) {
        console.log(`Localization texts not found for language: ${langSelected}`);
        return languageTexts['en'][routeName]; // Fallback to English if the selected language texts are not found
    }

    return texts[routeName] || routeName;
};
module.exports = { getLocalisedTexts };
