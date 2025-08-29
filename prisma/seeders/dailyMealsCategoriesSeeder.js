import fs from 'fs';
import path from 'path';
import prisma from '../prisma.js';
import { upsertFileOnS3Helper } from '../../controllers/FilesController.js';
import CategoriesDao from '../../dao/Categories.js';
import url from 'node:url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let languages = {
	bs: {
		title: 'Slijedite li neke specifične dijetalne smjernice?',
		gallbladder: 'Žučna kesa',
		glutenFree: 'Bez glutena',
		fit: 'Fit',
		vegetarian: 'Vegetarijanska',
		vegan: 'Veganska',
		diabetes: 'Dijabetes',
		diverse: 'Raznovrsno',
		balanced: 'Uravnoteženo',
		dietaryPlan: 'Dijetni plan',
		modalTitle: 'Info',
		modalDescription:
			"Kada je odabrano 'I', prikazat ćemo vam samo restorane sa svim odabranim prehrambenim opcijama.\nKada je odabrano 'ILI', prikazat ćemo vam restorane s bilo kojom od odabranih prehrambenih opcija.",
	},
	hr: {
		title: 'Slijedite li neke specifične dijetalne smjernice?',
		gallbladder: 'Žučna kesa',
		glutenFree: 'Bez glutena',
		fit: 'Fit',
		vegetarian: 'Vegetarijanska',
		vegan: 'Veganska',
		diabetes: 'Dijabetes',
		diverse: 'Raznovrsno',
		balanced: 'Uravnoteženo',
		dietaryPlan: 'Dijetni plan',
		modalTitle: 'Info',
		modalDescription:
			"Kada je odabrano 'I', prikazat ćemo vam samo restorane sa svim odabranim prehrambenim opcijama.\nKada je odabrano 'ILI', prikazat ćemo vam restorane s bilo kojom od odabranih prehrambenih opcija.",
	},
	de: {
		title: 'Befolgen Sie spezifische Ernährungsrichtlinien?',
		gallbladder: 'Gallenblase',
		glutenFree: 'Glutenfrei',
		fit: 'Fit',
		vegetarian: 'Vegetarisch',
		vegan: 'Vegan',
		diabetes: 'Diabetes',
		diverse: 'Verschiedenes',
		balanced: 'Ausgewogen',
		dietaryPlan: 'Ernährungsplan',
		modalTitle: 'Info',
		modalDescription:
			"Wenn 'UND' ausgewählt ist, zeigen wir Ihnen nur Restaurants mit allen ausgewählten Ernährungsoptionen.\nWenn 'ODER' ausgewählt ist, zeigen wir Ihnen Restaurants mit einer der ausgewählten Ernährungsoptionen.",
	},
	en: {
		title: 'Are you following any specific dietary guidelines?',
		gallbladder: 'Gallbladder',
		glutenFree: 'Gluten-free',
		fit: 'Fit',
		vegetarian: 'Vegetarian',
		vegan: 'Vegan',
		diabetes: 'Diabetes',
		diverse: 'Diverse',
		balanced: 'Balanced',
		dietaryPlan: 'Dietary plan',
		modalTitle: 'Info',
		modalDescription:
			"When 'AND' is selected, we will only show you the restaurants with all of the selected dietary options.\nWhen 'OR' is selected, we will show you the restaurants with any of the selected dietary options.",
	},
	es: {
		title: '¿Sigue alguna pauta dietética específica?',
		gallbladder: 'Vesícula biliar',
		glutenFree: 'Sin gluten',
		fit: 'En forma',
		vegetarian: 'Vegetariano',
		vegan: 'Vegano',
		diabetes: 'Diabetes',
		diverse: 'Diverso',
		balanced: 'Equilibrado',
		dietaryPlan: 'Plan dietético',
		modalTitle: 'Información',
		modalDescription:
			"Cuando se selecciona 'Y', te mostraremos solo los restaurantes con todas las opciones dietéticas seleccionadas.\nCuando se selecciona 'O', te mostraremos los restaurantes con cualquiera de las opciones dietéticas seleccionadas.",
	},
	fr: {
		title: 'Suivez-vous des directives alimentaires spécifiques ?',
		gallbladder: 'Vésicule biliaire',
		glutenFree: 'Sans gluten',
		fit: 'En forme',
		vegetarian: 'Végétarien',
		vegan: 'Végétalien',
		diabetes: 'Diabète',
		diverse: 'Diverses',
		balanced: 'Équilibré',
		dietaryPlan: 'Plan alimentaire',
		modalTitle: 'Info',
		modalDescription:
			"Lorsque 'ET' est sélectionné, nous vous montrerons uniquement les restaurants avec toutes les options diététiques sélectionnées.\nLorsque 'OU' est sélectionné, nous vous montrerons les restaurants avec n'importe laquelle des options diététiques sélectionnées.",
	},
	it: {
		title: 'Segui delle linee guida dietetiche specifiche?',
		gallbladder: 'Cistifellea',
		glutenFree: 'Senza glutine',
		fit: 'In forma',
		vegetarian: 'Vegetariano',
		vegan: 'Vegano',
		diabetes: 'Diabete',
		diverse: 'Diverse',
		balanced: 'Equilibrato',
		dietaryPlan: 'Piano alimentare',
		modalTitle: 'Informazioni',
		modalDescription:
			"Quando è selezionato 'E', ti mostreremo solo i ristoranti con tutte le opzioni dietetiche selezionate.\nQuando è selezionato 'O', ti mostreremo i ristoranti con qualsiasi delle opzioni dietetiche selezionate.",
	},
	ru: {
		title: 'Вы следуете каким-то конкретным диетическим рекомендациям?',
		gallbladder: 'Поджелудочная железа',
		glutenFree: 'Без глютена',
		fit: 'Фитнес',
		vegetarian: 'Вегетарианец',
		vegan: 'Веган',
		diabetes: 'Диабет',
		diverse: 'Разнообразные',
		balanced: 'Сбалансированная',
		dietaryPlan: 'План питания',
		modalTitle: 'Информация',
		modalDescription:
			"Когда выбрано 'И', мы покажем вам только рестораны со всеми выбранными диетическими опциями.\nКогда выбрано 'ИЛИ', мы покажем вам рестораны с любой из выбранных диетических опций.",
	},
	sl: {
		title: 'Sledite kakšnim posebnim prehranskim smernicam?',
		gallbladder: 'Žolčnik',
		glutenFree: 'Brezglutensko',
		fit: 'Fit',
		vegetarian: 'Vegetarijansko',
		vegan: 'Vegansko',
		diabetes: 'Diabetes',
		diverse: 'Različno',
		balanced: 'Uravnoteženo',
		dietaryPlan: 'Prehranski načrt',
		modalTitle: 'Info',
		modalDescription:
			"Ko je izbrano 'IN', vam bomo pokazali samo restavracije z vsemi izbranimi prehranskimi možnostmi.\nKo je izbrano 'ALI', vam bomo pokazali restavracije s katerokoli izmed izbranih prehranskih možnosti.",
	},
	sr: {
		title: 'Da li pratite neke specifične dijetetske smernice?',
		gallbladder: 'Žučna kesa',
		glutenFree: 'Bez glutena',
		fit: 'Fit',
		vegetarian: 'Vegetarijanska',
		vegan: 'Veganska',
		diabetes: 'Dijabetes',
		diverse: 'Različito',
		balanced: 'Balansirano',
		dietaryPlan: 'Dijetni plan',
		modalTitle: 'Info',
		modalDescription:
			"Kada je odabrano 'I', prikazat ćemo vam samo restorane sa svim odabranim prehrambenim opcijama.\nKada je odabrano 'ILI', prikazat ćemo vam restorane s bilo kojom od odabranih prehrambenih opcija.",
	},
	ua: {
		title: 'Ви дотримуєтеся якихось конкретних дієтичних рекомендацій?',
		gallbladder: 'Жовчний міхур',
		glutenFree: 'Без глютену',
		fit: 'Фітнес',
		vegetarian: 'Вегетаріанська',
		vegan: 'Веганська',
		diabetes: 'Діабет',
		diverse: 'Різноманітна',
		balanced: 'Збалансована',
		dietaryPlan: 'Дієтичний план',
		modalTitle: 'Інформація',
		modalDescription:
			"Коли вибрано 'І', ми покажемо вам лише ті ресторани, які мають всі обрані дієтичні опції.\nКоли вибрано 'АБО', ми покажемо вам ресторани з будь-якою з обраних дієтичних опцій.",
	},
};
const DIETARY_OPTIONS = [
	{ title: 'Gallbladder', tag: 'gallbladder', source: './icons/liver_icon.png' },
	{ title: 'Gluten Free', tag: 'gluten-free', key: 'glutenFree', source: './icons/gluten-free_icon.png' },
	{ title: 'Fit', tag: 'fit', source: './icons/icon_food_fit.png' },
	{ title: 'Vegeterian', tag: 'vegetarian', source: './icons/salads.png' },
	{ title: 'Diabetes', tag: 'diabetes', source: './icons/diabetes.png' },
	{ title: 'Diverse', tag: 'diverse', source: './icons/healthy-food.png' },
	{ title: 'Balanced', tag: 'balanced', source: './icons/balanced-diet.png' },
	{ title: 'Vegan', tag: 'vegan', source: './icons/vegan.png' },
	{ title: 'Dietary Plan', tag: 'dietary-plan', key: 'dietaryPlan', source: './icons/diet1_icon.png' },
];
async function seedCategories() {
	console.log('Seeding dietary options...');
	for (let doption of DIETARY_OPTIONS) {
		console.log(`Seeding dietary option: ${doption.tag}`);
		let translations = [];
		for (let lang in languages) {
			translations.push({
				language: lang,
				translation: languages[lang][doption.key ? doption.key : doption.tag],
			});
		}
		const imagePath = path.resolve(__dirname, doption.source);
		let base64 = null;
		try {
			if (fs.existsSync(imagePath)) {
				const imageBuffer = fs.readFileSync(imagePath);
				base64 = `data:image/png;base64,${imageBuffer.toString('base64')}`;
			} else {
				console.warn(`File not found: ${imagePath}`);
			}
		} catch (error) {
			console.error(`Error processing ${imagePath}:`, error);
		}
		let categoryObj = {
			categoryData: {
				name: doption.title,
				description: doption.title,
				category_type: 'CUISINE',
				tag: doption.tag,
			},
			translations: translations,
			iconFileData: {
				file_type: 'IMAGE',
				mime_type: 'image/png',
				base64: base64,
			},
			parent_categories_id: null,
			subcategories: [],
		};
		try {
			let categoryExists = await prisma.categories.findUnique({
				where: {
					tag_category_type: {
						tag: categoryObj.categoryData.tag,
						category_type: categoryObj.categoryData.category_type,
					},
				},
			});
			if (categoryExists) {
				console.log(`Dietary option ${categoryExists.tag} already exists.`);
				continue;
			}
			const cat = await CategoriesDao.createCategory(
				categoryObj.categoryData,
				categoryObj.translations,
				categoryObj.subcategories,
				[],
				categoryObj.parent_categories_id,
				categoryObj.iconFileData
			);
			console.log(`Dietary option ${cat.categories_id} created.`);
			if (categoryObj.iconFileData) {
				const { file_type, mime_type, base64 } = categoryObj.iconFileData;
				await upsertFileOnS3Helper(user_id, category.icon, file_type, mime_type, base64);
			}
		} catch (error) {}
	}
	console.log('Dietary options seeded.');
}
export default seedCategories;
