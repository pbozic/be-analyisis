import dotenv from 'dotenv';
import axios from 'axios';
import { faker } from '@faker-js/faker';
import { Translator } from 'arml';
import * as turf from '@turf/turf';

import prisma from '../prisma/prisma.js';
import businessReqJSON from '../json/merchant-req.json' with { type: 'json' };
dotenv.config();
const translator = new Translator('ar4b0cbe5d5af7f5afe40a8d3d-arml-LM');
const FoodByCuisine = {
	Italian: {
		dishes: ['Pasta', 'Risotto', 'Lasagna'],
		categories: ['pizza', 'risotto', 'italian', 'gourmetCuisine', 'traditional'],
		categories_ids: ['Italian', 'Pizza'],
	},
	Mexican: {
		dishes: ['Tacos', 'Quesadilla', 'Enchiladas', 'Burrito'],
		categories: ['mexican', 'fastFood', 'healthy', 'traditional'],
		categories_ids: ['Mexican', 'Steak'],
	},
	American: {
		dishes: ['Burger', 'Sandwich'],
		categories: ['burger', 'fastFood', 'bbq', 'steak', 'chicken', 'breakfast'],
		categories_ids: ['Burger', 'Sandwiches'],
	},
	Japanese: {
		dishes: ['Ramen', 'Tempura', 'Teriyaki'],
		categories: ['japanese', 'sushi', 'bowl', 'seafood', 'gourmetCuisine'],
		categories_ids: ['Japanese', 'Sushi'],
	},
	Indian: {
		dishes: ['Curry', 'Biryani', 'Tikka Masala', 'Korma'],
		categories: ['indian', 'spicy', 'healthy', 'halal', 'kosher'],
		categories_ids: ['Indian'],
	},
	Chinese: {
		dishes: ['Noodles', 'Dumplings', 'Fried Rice', 'Spring Rolls'],
		categories: ['chinese', 'asian', 'vegan', 'vegetarian', 'traditional'],
		categories_ids: ['Chinese'],
	},
	'Middle Eastern': {
		dishes: ['Kebab', 'Shawarma'],
		categories: ['kebab', 'arabic', 'kosher', 'halal', 'healthy'],
		categories_ids: ['Kosher', 'Kebab', 'Arabic'],
	},
	French: {
		dishes: ['Omelette', 'Coq au Vin', 'Quiche', 'Cassoulet'],
		categories: ['gourmetCuisine', 'french', 'bakery', 'desserts', 'wine'],
		categories_ids: ['Salads', 'Fine dining'],
	},
	General: {
		dishes: ['Soup', 'Stew', 'Salad'],
		categories: ['soups', 'salads', 'healthy', 'vegan', 'vegetarian'],
		categories_ids: ['Healthy', 'Salads', 'Vegan'],
	},
};
const FoodTypes = Object.keys(FoodByCuisine);
const API_KEY = process.env.MONSTER_API;
const dishImages = {
	Shawarma:
		'https://images.pexels.com/photos/18177331/pexels-photo-18177331/free-photo-of-arabic-food-served-on-a-tray.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	'Coq au Vin': 'https://www.recipetineats.com/tachyon/2016/09/Coq-au-Vin_00.jpg?resize=900%2C1260&zoom=0.72',
	Teriyaki:
		'https://images.pexels.com/photos/11787138/pexels-photo-11787138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	Cassoulet: 'https://diethood.com/wp-content/uploads/2021/12/chicken-cassoulet-5.jpg',
	'Fried Rice':
		'https://www.seriouseats.com/thmb/tuMCogfAOy2zNdVqE7ydUwuru9Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-vegetable-fried-rice-recipe-hero-2-fed2a62b8bce4c51b945d9c24c2edb68.jpg',
	'Spring Rolls':
		'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_728,h_546/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-01-Spring-Rolls%2FVegetarian_Spring_Rolls-2',
};
async function generateAIImages(restaurantName) {
	const prompt = `A professional restaurant logo for ${restaurantName}, in a minimal and modern style.`;
	const response = await axios.post(
		'https://api.monsterapi.ai/v1/generate/txt2img',
		{
			model: 'stable-diffusion-v1-5', // Specify the model
			prompt: prompt,
			width: 1024, // Image width
			height: 1024, // Image height
			steps: 30, // Number of inference steps
		},
		{
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${API_KEY}`,
			},
		}
	);
	let statusUrl = response.data.status_url;
	let statusResponse = await axios.get(statusUrl, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${API_KEY}`,
		},
	});
	while (statusResponse.data.status !== 'COMPLETED') {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		statusResponse = await axios.get(statusUrl, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${API_KEY}`,
			},
		});
	}
	return statusResponse.data.result.output[0];
}
function generateFoodDescription(mainIngredient, dish, cuisine) {
	const templates = [
		'Our {adj} {mainIngredient} {dish} is prepared with the finest ingredients, delivering a perfect balance of flavors and textures that will delight your taste buds.',
		"Savor the taste of our {flavor} {mainIngredient} {dish}, a chef's special creation made with hand-picked {material} cookware to enhance its rich, authentic flavors.",
		'Experience a gourmet twist on {mainIngredient} {dish}, crafted with {adj} spices and slow-cooked to perfection for a truly unforgettable meal.',
		'We use only the freshest {mainIngredient} in our {dish}, carefully seasoned with {flavor} herbs and paired with a side of {sideDish} for a satisfying dining experience.',
		'This {dish} features premium {mainIngredient}, marinated with {adj} seasonings and cooked using traditional {cuisine} techniques to bring out its natural flavors.',
		'Enjoy our signature {mainIngredient} {dish}, infused with {flavor} sauces and served on a bed of {sideDish}, creating the perfect combination of taste and presentation.',
		'Our famous {mainIngredient} {dish} is made with {adj} care, using a secret blend of {flavor} spices and fresh ingredients that make every bite a delight.',
		'A timeless classic, our {mainIngredient} {dish} is slow-cooked with {flavor} aromatics and served with a side of {sideDish}, making it the ultimate comfort food.',
		'Treat yourself to our {adj} {mainIngredient} {dish}, topped with a luscious {flavor} sauce and complemented by freshly prepared {sideDish} for a meal worth savoring.',
		'A true masterpiece, our {mainIngredient} {dish} is carefully crafted with a blend of {flavor} ingredients, bringing together bold flavors in every delicious bite.',
	];
	return faker.helpers
		.arrayElement(templates)
		.replace('{mainIngredient}', mainIngredient)
		.replace('{dish}', dish)
		.replace('{adj}', faker.commerce.productAdjective()) // E.g., "Crispy", "Tender"
		.replace('{flavor}', faker.word.adjective()) // E.g., "Savory", "Spicy", "Tangy"
		.replace('{material}', faker.commerce.productMaterial()) // E.g., "Granite", "Stainless Steel" (for cookware)
		.replace('{cuisine}', faker.helpers.arrayElement(FoodTypes)) // Random cuisine type
		.replace(
			'{sideDish}',
			faker.helpers.arrayElement([
				'buttery mashed potatoes',
				'steamed vegetables',
				'garlic-infused rice',
				'crispy golden fries',
				'freshly baked bread',
			])
		); // Random side dish
}
async function getFoodImage(food_type) {
	if (dishImages[food_type]) {
		return dishImages[food_type];
	}
	food_type = food_type.replace(/\s/g, '-');
	const response = await axios.get(`https://api.pexels.com/v1/search?query=${encodeURI(food_type)}&per_page=1`, {
		headers: {
			Authorization: process.env.PEXELS_API,
		},
	});
	const data = response.data.photos[0];
	console.log(food_type, data);
	dishImages[food_type] = data.src.large;
	return data.src.large;
}
function capitalizeFirstLetter(val) {
	return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
async function generateMenuItem(axios, category, menu, cuisine, business_id, user_id) {
	let meat = faker.food.meat();
	let mainIngredient = capitalizeFirstLetter(faker.helpers.arrayElement([meat, faker.food.vegetable()]));
	let dish = faker.helpers.arrayElement(FoodByCuisine[cuisine].dishes);
	let name = mainIngredient + ' ' + dish;
	console.log('Creating', name);
	let description = generateFoodDescription(mainIngredient, name, cuisine);
	let names = await translateText(name);
	let descriptions = await translateText(description);
	let image = await getFoodImage(dish);
	let base64 = await getBASE64ImageFromURL(image);
	const menuItem = {
		category_id: category.menu_category_id,
		data: {
			names: names,
			description: descriptions,
			price: parseFloat(
				faker.commerce.price({
					min: 5,
					max: 25,
					decimals: 2,
				})
			),
			spicy_level: faker.number.int({ min: 0, max: 3 }),
			unit_size: '1',
			sides: [],
			extras: [],
			ingredients: [],
			availability: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
			allergens: ['4', '9'],
			business_id: business_id,
			discount: 0,
		},
		image: {
			documentData: {
				document_type: 'MENU_ITEM_IMAGE',
			},
			files: [
				{
					url: '',
					file_type: 'IMAGE',
					mime_type: 'image/jpeg',
					base64: base64,
				},
			],
		},
		user_id: user_id,
	};
	let item = await axios.post('/menus/menu-items/create', menuItem);
	console.log('Item', item.data);
	return item.data;
}
function getRandomLocationInPolygon(polygon) {
	let randomPoint;
	do {
		randomPoint = turf.randomPoint(1, { bbox: turf.bbox(polygon) }).features[0].geometry.coordinates;
	} while (!turf.booleanPointInPolygon(randomPoint, polygon));
	return { latitude: randomPoint[1].toString(), longitude: randomPoint[0].toString() };
}
const LJUBLJANA_POLYGON = turf.polygon([
	[
		[14.506507346157, 46.026781129707],
		[14.530196616176, 46.016768407432],
		[14.541526267055, 46.018318114004],
		[14.54461617184, 46.020106183004],
		[14.528136679653, 46.036434537432],
		[14.519210288051, 46.04167765714],
		[14.529509970668, 46.046205405598],
		[14.54238457394, 46.045967112298],
		[14.559722373012, 46.04382242635],
		[14.589763113979, 46.039890285861],
		[14.612594077114, 46.034051136731],
		[14.616542288784, 46.039890285861],
		[14.619803854946, 46.046443697869],
		[14.60435433102, 46.042869205869],
		[14.600062796596, 46.044299030423],
		[14.608474204067, 46.048111714984],
		[14.626670310024, 46.057880518044],
		[14.611907431606, 46.071220481636],
		[14.60040611935, 46.065741958107],
		[14.59027809811, 46.061096697005],
		[14.588218161586, 46.066813885932],
		[14.591308066371, 46.077532019357],
		[14.568820425991, 46.081580550286],
		[14.545646140102, 46.081580550286],
		[14.524046274979, 46.088649436398],
		[14.523359629471, 46.096387456467],
		[14.538809153397, 46.096625532175],
		[14.556490275223, 46.090197127267],
		[14.567476603348, 46.095316103059],
		[14.565588328201, 46.101505857684],
		[14.535719248612, 46.111979244157],
		[14.524217936356, 46.114835276931],
		[14.513746592362, 46.100672661956],
		[14.506365153153, 46.093530467792],
		[14.50258860286, 46.087577932665],
		[14.491945597489, 46.085077676342],
		[14.48284754451, 46.091149530831],
		[14.477182719071, 46.095792262699],
		[14.480444285233, 46.101267803046],
		[14.480787607987, 46.104957534421],
		[14.473749491531, 46.106028700502],
		[14.465338084061, 46.107099845769],
		[14.470487925369, 46.112574263191],
		[14.470439191321, 46.11702191757],
		[14.477133985022, 46.119877689013],
		[14.479708905676, 46.123209235297],
		[14.479708905676, 46.127730297318],
		[14.472499127844, 46.130942405382],
		[14.471125836829, 46.122138403104],
		[14.460482831458, 46.124874932895],
		[14.454646344641, 46.121424503412],
		[14.450869794348, 46.117378897095],
		[14.457392926673, 46.11416599812],
		[14.453959699133, 46.110833905029],
		[14.446234937171, 46.106549489321],
		[14.44400333927, 46.100479330332],
		[14.45807957218, 46.097622553658],
		[14.46597599552, 46.091908556275],
		[14.463572736243, 46.089051335564],
		[14.463401074866, 46.085717724329],
		[14.462714429358, 46.083693647789],
		[14.461169476966, 46.076072928864],
		[14.460482831458, 46.070833074038],
		[14.464774365882, 46.065235406844],
		[14.479193921546, 46.064878089665],
		[14.489321942786, 46.064639876927],
		[14.497390027503, 46.056301783528],
		[14.494643445471, 46.052251398111],
		[14.484687085608, 46.054991397224],
		[14.475074048499, 46.052013130894],
		[14.462371106604, 46.052727929461],
		[14.45584797428, 46.0518939969],
		[14.447779889563, 46.046294409309],
		[14.459303934588, 46.028248702464],
		[14.476126749529, 46.027533587138],
		[14.493807871356, 46.023481092202],
		[14.506507346157, 46.026781129707], // Closing the polygon
	],
]);
async function generateMenuCategory(axios, cuisine, menu_id, business_id, dbCategories) {
	let names = await translateText(cuisine);
	let description = await translateText(cuisine + ' Food');
	let catNames = faker.helpers.arrayElements(
		FoodByCuisine[cuisine].categories_ids,
		faker.number.int({ min: 1, max: 4 })
	);
	let catIds = [];
	for (let cat of catNames) {
		let category = dbCategories.find((c) => c.name === cat);
		if (category) {
			catIds.push(category.categories_id);
		}
	}
	let category = {
		menu_id: menu_id,
		data: {
			names: names,
			description: description,
			categories: faker.helpers.arrayElements(
				FoodByCuisine[cuisine].categories,
				faker.number.int({ min: 1, max: 4 })
			),
			category_ids: catIds,
			business_id: business_id,
		},
	};
	let categoryR = await axios.post('/menus/menu-categories/create', category);
	console.log('Category', categoryR.data);
	return categoryR.data;
}
async function getBASE64ImageFromURL(url) {
	console.log('GET BASE64', url);
	let response = await axios.get(url, {
		responseType: 'arraybuffer',
	});
	let base64 = Buffer.from(response.data, 'binary').toString('base64');
	return base64;
}
async function generateBusiness() {
	let users = [];
	let axiosC = axios.create({
		baseURL: 'http://localhost:3001/api',
	});
	let userPassword = 'TakeOver2024#';
	let userEmail = faker.internet.email();
	let businessName = faker.company.name();
	let businessDescription = faker.company.catchPhrase();
	let businessEmail = faker.internet.email();
	let bPn = faker.string.numeric(8);
	let businessPhone = `+386${bPn}`;
	let businessPhoneNumber = `0${bPn}`;
	let businessWebsite = faker.internet.url();
	let uPn = faker.string.numeric(8);
	let userPhone = `+386${uPn}`;
	let userPhoneNumber = `0${uPn}`;
	const location = getRandomLocationInPolygon(LJUBLJANA_POLYGON);
	console.log('Location', location);
	let address = {
		address: faker.location.streetAddress(),
		...location,
	};
	let bankNumber = faker.finance.accountNumber();
	// make business register request
	let reqBody = JSON.parse(JSON.stringify(businessReqJSON));
	reqBody.business.data.name = businessName;
	reqBody.business.data.description = businessDescription;
	reqBody.business.data.email = businessEmail;
	reqBody.business.data.telephone = businessPhone;
	reqBody.business.data.telephone_number = businessPhoneNumber;
	reqBody.business.data.website_url = businessWebsite;
	reqBody.addresses.delivery = address;
	reqBody.addresses.business = address;
	reqBody.finances.account_number = bankNumber;
	reqBody.finances.account_holder = businessName + ' d.o.o.';
	reqBody.users[0].user.data.password = userPassword;
	reqBody.users[0].user.data.email = userEmail;
	reqBody.users[0].user.data.telephone = userPhone;
	reqBody.users[0].user.data.telephone_number = userPhoneNumber;
	let logo = await generateAIImages(businessName);
	let url = await getFoodImage('Restaurant');
	for (let doc of reqBody.business.documents) {
		let type = doc.documentData.document_type;
		if (type === 'LOGO') {
			// get base64 image
			doc.files[0].base64 = await getBASE64ImageFromURL(logo);
			continue;
		}
		if (type === 'BANNER') {
			doc.files[0].base64 = await getBASE64ImageFromURL(logo);
			continue;
		}
		doc.files[0].base64 = await getBASE64ImageFromURL(url);
	}
	let { data: business } = await axiosC.post('/merchant/auth/register', reqBody);
	console.log('business', business);
	// update user to phone verified
	let userB = business.businessUsers[0].businessUser;
	await prisma.users.update({
		where: {
			user_id: userB.user_id,
		},
		data: {
			phone_verified: true,
		},
	});
	console.log('Updated User', userB);
	// login user
	let { data: user } = await axiosC.post('/auth/login', {
		email: userEmail,
		password: userPassword,
	});
	// grab jwt token
	let jwt = user.access_token;
	console.log('JWT', jwt);
	//attach jwt to axios
	axiosC.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
	// create menu categories
	const catCount = faker.number.int({ min: 2, max: 4 });
	let categoryNames = getRandom(FoodTypes, catCount);
	let dbCategories = await prisma.categories.findMany({
		where: {
			category_type: 'MENU',
		},
	});
	console.log('Category Names', categoryNames);
	let menu = business.menu;
	for (let cuisine of categoryNames) {
		let category = await generateMenuCategory(
			axiosC,
			cuisine,
			menu.menu_id,
			business.business.business_id,
			dbCategories
		);
		const itemCount = faker.number.int({ min: 5, max: 10 });
		// create menu items
		for (let j = 0; j < itemCount; j++) {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			let item = await generateMenuItem(
				axiosC,
				category,
				menu,
				cuisine,
				business.business.business_id,
				userB.user_id
			);
		}
	}
	console.log('Business DONE', business);
}
function getRandom(arr, n) {
	var result = new Array(n),
		len = arr.length,
		taken = new Array(len);
	if (n > len) throw new RangeError('getRandom: more elements taken than available');
	while (n--) {
		var x = Math.floor(Math.random() * len);
		result[n] = arr[x in taken ? taken[x] : x];
		taken[x] = --len in taken ? taken[len] : len;
	}
	return result;
}
async function seedBusniness(number = 10) {
	for (let i = 0; i < number; i++) {
		generateBusiness();
	}
}
let translations = {};
async function translateText(text) {
	if (translations[text]) {
		return translations[text];
	}
	let translateEs = await translator.translate(text, { target: 'es' });
	let translateSl = await translator.translate(text, { target: 'sl' });
	let translateIt = await translator.translate(text, { target: 'it' });
	let translateRu = await translator.translate(text, { target: 'ru' });
	let translateDe = await translator.translate(text, { target: 'de' });
	let translateFr = await translator.translate(text, { target: 'fr' });
	let translateSr = await translator.translate(text, { target: 'sr' });
	let translateBs = await translator.translate(text, { target: 'bs' });
	let translateHr = await translator.translate(text, { target: 'hr' });
	let translateUa = await translator.translate(text, { target: 'ua' });

	translations[text] = {
		en: text,
		es: translateEs.translated_text,
		sl: translateSl.translated_text,
		it: translateIt.translated_text,
		ru: translateRu.translated_text,
		de: translateDe.translated_text,
		fr: translateFr.translated_text,
		sr: translateSr.translated_text,
		br: translateBs.translated_text,
		hr: translateHr.translated_text,
		ua: translateUa.translated_text,
	};
	return {
		en: text,
		es: translateEs.translated_text,
		sl: translateSl.translated_text,
		it: translateIt.translated_text,
		ru: translateRu.translated_text,
		de: translateDe.translated_text,
		fr: translateFr.translated_text,
		sr: translateSr.translated_text,
		bs: translateBs.translated_text,
		hr: translateHr.translated_text,
		ua: translateUa.translated_text,
	};
}
async function generateNumBUsinesses(num) {
	for (let i = 0; i < num; i++) await generateBusiness();
}
generateNumBUsinesses(10);
