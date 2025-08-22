import fs from 'fs';
import path from 'path';
import prisma from '../prisma.js';
import { upsertFileOnS3Helper } from '../../controllers/FilesController.js';
import CategoriesDao from '../../dao/Categories.js';
import WordDao from '../../dao/Word.js';
import url from 'node:url';
import { DeleteObject } from '../../lib/s3.js';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let languages = {
	en: {
		decoration: 'Decoration',
		eggs: 'Eggs',
		heating: 'Heating',
		beauty: 'Beauty',
		honey: 'Honey and beekeeping products',
		meat: 'Meat products',
		dairy: 'Dairy products',
		oils: 'Oils and fats',
		bakery: 'Bakery products',
		drinks: 'Drinks',
		fish: 'Fish products',
		fruitsAndVegetables: 'Fruits and vegetables',
		preservedAndProcessedProducts: 'Preserved and processed products',
		sweets: 'Sweet products',
		garden: 'Garden',
		grains: 'Grains and milling products',
	},
	sl: {
		decoration: 'Dekoracija',
		eggs: 'Jajca',
		heating: 'Kurjava',
		beauty: 'Lepota',
		honey: 'Med in čebelarski izdelki',
		meat: 'Mesni izdelki',
		dairy: 'Mlečni izdelki',
		oils: 'Olja in maščobe',
		bakery: 'Pekovski izdelki',
		drinks: 'Pijače',
		fish: 'Ribji izdelki',
		fruitsAndVegetables: 'Sadje in zelenjava',
		preservedAndProcessedProducts: 'Shranjeni in predelani izdelki',
		sweets: 'Sladki izdelki',
		garden: 'Vrt',
		grains: 'Žita in mlevski izdelki',
	},
	it: {
		decoration: 'Decorazione',
		eggs: 'Uova',
		heating: 'Riscaldamento',
		beauty: 'Bellezza',
		honey: 'Miele e prodotti apistici',
		meat: 'Prodotti a base di carne',
		dairy: 'Prodotti lattiero-caseari',
		oils: 'Oli e grassi',
		bakery: 'Prodotti da forno',
		drinks: 'Bevande',
		fish: 'Prodotti ittici',
		fruitsAndVegetables: 'Frutta e verdura',
		preservedAndProcessedProducts: 'Prodotti conservati e trasformati',
		sweets: 'Dolci',
		garden: 'Giardino',
		grains: 'Cereali e prodotti molitoria',
	},
	de: {
		decoration: 'Dekoration',
		eggs: 'Eier',
		heating: 'Heizung',
		beauty: 'Schönheit',
		honey: 'Honig und Imkereiprodukte',
		meat: 'Fleischprodukte',
		dairy: 'Milchprodukte',
		oils: 'Öle und Fette',
		bakery: 'Backwaren',
		drinks: 'Getränke',
		fish: 'Fischprodukte',
		fruitsAndVegetables: 'Obst und Gemüse',
		preservedAndProcessedProducts: 'Konservierte und verarbeitete Produkte',
		sweets: 'Süßwaren',
		garden: 'Garten',
		grains: 'Getreide und Mühlprodukte',
	},
	es: {
		decoration: 'Decoración',
		eggs: 'Huevos',
		heating: 'Calefacción',
		beauty: 'Belleza',
		honey: 'Miel y productos apícolas',
		meat: 'Productos cárnicos',
		dairy: 'Productos lácteos',
		oils: 'Aceites y grasas',
		bakery: 'Productos de panadería',
		drinks: 'Bebidas',
		fish: 'Productos pesqueros',
		fruitsAndVegetables: 'Frutas y verduras',
		preservedAndProcessedProducts: 'Productos conservados y procesados',
		sweets: 'Dulces',
		garden: 'Jardín',
		grains: 'Cereales y productos de molinería',
	},
	sr: {
		decoration: 'Dekoracija',
		eggs: 'Jaja',
		heating: 'Grejanje',
		beauty: 'Lepota',
		honey: 'Med i pčelarski proizvodi',
		meat: 'Mesni proizvodi',
		dairy: 'Mlečni proizvodi',
		oils: 'Ulja i masti',
		bakery: 'Pekarski proizvodi',
		drinks: 'Pića',
		fish: 'Riblji proizvodi',
		fruitsAndVegetables: 'Voće i povrće',
		preservedAndProcessedProducts: 'Konzervisani i prerađeni proizvodi',
		sweets: 'Slatki proizvodi',
		garden: 'Bašta',
		grains: 'Žita i mleveni proizvodi',
	},
	bs: {
		decoration: 'Dekoracija',
		eggs: 'Jaja',
		heating: 'Grijanje',
		beauty: 'Ljepota',
		honey: 'Med i pčelarski proizvodi',
		meat: 'Mesni proizvodi',
		dairy: 'Mliječni proizvodi',
		oils: 'Ulja i masti',
		bakery: 'Pekarski proizvodi',
		drinks: 'Pića',
		fish: 'Ribji proizvodi',
		fruitsAndVegetables: 'Voće i povrće',
		preservedAndProcessedProducts: 'Konzervirani i prerađeni proizvodi',
		sweets: 'Slatkiši',
		garden: 'Vrt',
		grains: 'Žita and mlinski proizvodi',
	},
	hr: {
		decoration: 'Dekoracija',
		eggs: 'Jaja',
		heating: 'Grijanje',
		beauty: 'Ljepota',
		honey: 'Med i pčelarski proizvodi',
		meat: 'Mesni proizvodi',
		dairy: 'Mliječni proizvodi',
		oils: 'Ulja i masti',
		bakery: 'Pekarski proizvodi',
		drinks: 'Pića',
		fish: 'Ribji proizvodi',
		fruitsAndVegetables: 'Voće i povrće',
		preservedAndProcessedProducts: 'Konzervirani i prerađeni proizvodi',
		sweets: 'Slatkiši',
		garden: 'Vrt',
		grains: 'Žita i mlinski proizvodi',
	},
	fr: {
		decoration: 'Décoration',
		eggs: 'Œufs',
		heating: 'Chauffage',
		beauty: 'Beauté',
		honey: 'Miel et produits apicoles',
		meat: 'Produits carnés',
		dairy: 'Produits laitiers',
		oils: 'Huiles et graisses',
		bakery: 'Produits de boulangerie',
		drinks: 'Boissons',
		fish: 'Produits de la pêche',
		fruitsAndVegetables: 'Fruits et légumes',
		preservedAndProcessedProducts: 'Produits conservés et transformés',
		sweets: 'Sucreries',
		garden: 'Jardin',
		grains: 'Céréales et produits de minoterie',
	},
	ru: {
		decoration: 'Декорация',
		eggs: 'Яйца',
		heating: 'Отопление',
		beauty: 'Красота',
		honey: 'Мёд и пчеловодческие продукты',
		meat: 'Мясные продукты',
		dairy: 'Молочные продукты',
		oils: 'Масла и жиры',
		bakery: 'Хлебобулочные изделия',
		drinks: 'Напитки',
		fish: 'Рыбные продукты',
		fruitsAndVegetables: 'Фрукты и овощи',
		preservedAndProcessedProducts: 'Консервированные и переработанные продукты',
		sweets: 'Сладости',
		garden: 'Сад',
		grains: 'Зерновые и мучные изделия',
	},
};
let CATEGORIES_FULL = {
	decoration: {
		key: 'decoration',
		tag: 'decoration',
		source: './categoryIcons/localIcons/dekoracija-1.png',
		name: 'decoration',
	},
	eggs: {
		key: 'eggs',
		tag: 'eggs',
		source: './categoryIcons/localIcons/jajca-1.png',
		name: 'eggs',
	},
	heating: {
		key: 'heating',
		tag: 'heating',
		source: './categoryIcons/localIcons/kurjava-1.png',
		name: 'heating',
	},
	beauty: {
		key: 'beauty',
		tag: 'beauty',
		source: './categoryIcons/localIcons/lepota-1.png',
		name: 'beauty',
	},
	honey: {
		key: 'honey',
		tag: 'honey',
		source: './categoryIcons/localIcons/med_in_cebelarski_izdelki.png',
		name: 'honey',
	},
	meat: {
		key: 'meat',
		tag: 'meat',
		source: './categoryIcons/localIcons/mesni_izdelki.png',
		name: 'meat',
	},
	dairy: {
		key: 'dairy',
		tag: 'dairy',
		source: './categoryIcons/localIcons/mlecni_izdelki.png',
		name: 'dairy',
	},
	oils: {
		key: 'oils',
		tag: 'oils',
		source: './categoryIcons/localIcons/olja_in_mascobe.png',
		name: 'oils',
	},
	bakery: {
		key: 'bakery',
		tag: 'bakery',
		source: './categoryIcons/localIcons/pekovski_izdelki.png',
		name: 'bakery',
	},
	drinks: {
		key: 'drinks',
		tag: 'drinks',
		source: './categoryIcons/localIcons/pijace.png',
		name: 'drinks',
	},
	fish: {
		key: 'fish',
		tag: 'fish',
		source: './categoryIcons/localIcons/ribji_izdelki.png',
		name: 'fish',
	},
	fruitsAndVegetables: {
		key: 'fruitsAndVegetables',
		tag: 'fruitsAndVegetables',
		source: './categoryIcons/localIcons/sadje_in_zelenjava.png',
		name: 'fruitsAndVegetables',
	},
	preservedAndProcessedProducts: {
		key: 'preservedAndProcessedProducts',
		tag: 'preservedAndProcessedProducts',
		source: './categoryIcons/localIcons/shranjeni_in_predelani_izdelki.png',
		name: 'preservedAndProcessedProducts',
	},
	sweets: {
		key: 'sweets',
		tag: 'sweets',
		source: './categoryIcons/localIcons/sladki_izdelki.png',
		name: 'sweets',
	},
	garden: {
		key: 'garden',
		tag: 'garden',
		source: './categoryIcons/localIcons/vrt-1.png',
		name: 'garden',
	},
	grains: {
		key: 'grains',
		tag: 'grains',
		source: './categoryIcons/localIcons/zita_in_mlevski_izdelki.png',
		name: 'grains',
	},
};
async function seedCategories() {
	console.log('Seeding categories...');
	for (let key in CATEGORIES_FULL) {
		console.log(`Seeding category: ${key}`);
		let category = CATEGORIES_FULL[key];
		let translations = [];
		for (let lang in languages) {
			translations.push({
				language: lang,
				translation: languages[lang][key],
			});
		}
		const imagePath = path.resolve(__dirname, category.source);
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
				name: category.name,
				description: category.name,
				category_type: 'LOCAL',
				tag: category.tag,
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
				include: {
					icon: true,
				},
			});
			let category_id = categoryExists?.categories_id;
			if (categoryExists) {
				if (categoryExists.icon) {
					const key = getFileKey(categoryExists.icon.file_id, categoryExists.icon.mime_type);
					await DeleteObject(key);
				}

				const cat = await CategoriesDao.updateCategory(
					//TODO: delete old images
					category_id,
					categoryObj.categoryData,
					categoryObj.translations,
					categoryObj.subcategories,
					categoryObj.parent_categories_id,
					categoryObj.iconFileData
				);
				category_id = cat.categories_id;
				if (categoryObj.iconFileData) {
					const { file_type, mime_type, base64 } = categoryObj.iconFileData;
					await upsertFileOnS3Helper(null, cat.icon, file_type, mime_type, base64);
				}
				console.log(`Category ${cat.categories_id} updated.`);
				console.log(`Category ${categoryExists.tag} tag updated.`);
			} else {
				const cat = await CategoriesDao.createCategory(
					categoryObj.categoryData,
					categoryObj.translations,
					categoryObj.subcategories,
					[],
					categoryObj.parent_categories_id,
					categoryObj.iconFileData
				);
				category_id = cat.categories_id;
				if (categoryObj.iconFileData) {
					const { file_type, mime_type, base64 } = categoryObj.iconFileData;
					await upsertFileOnS3Helper(null, cat.icon, file_type, mime_type, base64);
				}
				console.log(`Category ${cat.categories_id} created.`);
			}
			let wordObj = {
				wordData: {
					word: categoryObj.categoryData.name,
					categories_id: category_id,
				},
				translations: translations,
			};
			let wordExists = await prisma.words.findUnique({
				where: {
					word: wordObj.wordData.word,
				},
			});
			if (wordExists) {
				let updatedWord = await prisma.words.update({
					where: {
						word: wordObj.wordData.word,
					},
					data: {
						category: {
							connect: {
								categories_id: category_id,
							},
						},
					},
				});
				console.log(`word ${wordExists.tag} already exists.`);
			} else {
				const word = await WordDao.createWord(
					wordObj.wordData.word,
					wordObj.wordData.categories_id,
					wordObj.translations
				);
				console.log(`Word ${word.word_id} created.`);
			}
		} catch (error) {
			console.log('Error creating category and word:', error);
		}
	}
	console.log('Categories seeded.');
}
export default seedCategories;
