const dotenv = require("dotenv");
const prisma = require("../prisma/prisma");
const axios = require("axios");
dotenv.config();
const { faker } = require("@faker-js/faker");
const { Translator } = require("arml");
const translator = new Translator("ar4b0cbe5d5af7f5afe40a8d3d-arml-LM");
const businessReqJSON = require("../json/merchant-req.json");
const FoodByCuisine = {
	Italian: {
		dishes: ["Pasta", "Risotto", "Lasagna"],
		categories: ["pizza", "risotto", "italian", "gourmetCuisine", "traditional"],
		categories_ids: [],
	},
	Mexican: {
		dishes: ["Tacos", "Quesadilla", "Enchiladas", "Burrito"],
		categories: ["mexican", "fastFood", "healthy", "traditional"],
		categories_ids: [],
	},
	American: {
		dishes: ["Burger", "Sandwich"],
		categories: ["burger", "fastFood", "bbq", "steak", "chicken", "breakfast"],
		categories_ids: [],
	},
	Japanese: {
		dishes: ["Ramen", "Tempura", "Teriyaki"],
		categories: ["japanese", "sushi", "bowl", "seafood", "gourmetCuisine"],
		categories_ids: [],
	},
	Indian: {
		dishes: ["Curry", "Biryani", "Tikka Masala", "Korma"],
		categories: ["indian", "spicy", "healthy", "halal", "kosher"],
		categories_ids: [],
	},
	Chinese: {
		dishes: ["Noodles", "Dumplings", "Fried Rice", "Spring Rolls"],
		categories: ["chinese", "asian", "vegan", "vegetarian", "traditional"],
		categories_ids: [],
	},
	MiddleEastern: {
		dishes: ["Kebab", "Shawarma"],
		categories: ["kebab", "arabic", "kosher", "halal", "healthy"],
		categories_ids: [],
	},
	French: {
		dishes: ["Omelette", "Coq au Vin", "Quiche", "Cassoulet"],
		categories: ["gourmetCuisine", "french", "bakery", "desserts", "wine"],
		categories_ids: [],
	},
	General: {
		dishes: ["Soup", "Stew", "Salad"],
		categories: ["soups", "salads", "healthy", "vegan", "vegetarian"],
		categories_ids: [],
	},
};

const FoodTypes = Object.keys(FoodByCuisine);
const API_KEY = process.env.MONSTER_API;
async function generateAIImages(restaurantName) {
	const prompt = `A professional restaurant logo for ${restaurantName}, in a minimal and modern style.`;

	const response = await axios.post(
		"https://api.monsterapi.ai/v1/generate/txt2img",
		{
			model: "stable-diffusion-v1-5", // Specify the model
			prompt: prompt,
			width: 1024, // Image width
			height: 1024, // Image height
			steps: 30, // Number of inference steps
		},
		{
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${API_KEY}`,
			},
		},
	);
	let statusUrl = response.data.status_url;
	let statusResponse = await axios.get(statusUrl, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${API_KEY}`,
		},
	});
	while (statusResponse.data.status !== "COMPLETED") {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		statusResponse = await axios.get(statusUrl, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${API_KEY}`,
			},
		});
	}

	return statusResponse.data.result.output[0];
}

function generateFoodDescription(mainIngredient, dish, cuisine) {
	const templates = [
		"Our {adj} {mainIngredient} {dish} is prepared with the finest ingredients, delivering a perfect balance of flavors and textures that will delight your taste buds.",
		"Savor the taste of our {flavor} {mainIngredient} {dish}, a chef's special creation made with hand-picked {material} cookware to enhance its rich, authentic flavors.",
		"Experience a gourmet twist on {mainIngredient} {dish}, crafted with {adj} spices and slow-cooked to perfection for a truly unforgettable meal.",
		"We use only the freshest {mainIngredient} in our {dish}, carefully seasoned with {flavor} herbs and paired with a side of {sideDish} for a satisfying dining experience.",
		"This {dish} features premium {mainIngredient}, marinated with {adj} seasonings and cooked using traditional {cuisine} techniques to bring out its natural flavors.",
		"Enjoy our signature {mainIngredient} {dish}, infused with {flavor} sauces and served on a bed of {sideDish}, creating the perfect combination of taste and presentation.",
		"Our famous {mainIngredient} {dish} is made with {adj} care, using a secret blend of {flavor} spices and fresh ingredients that make every bite a delight.",
		"A timeless classic, our {mainIngredient} {dish} is slow-cooked with {flavor} aromatics and served with a side of {sideDish}, making it the ultimate comfort food.",
		"Treat yourself to our {adj} {mainIngredient} {dish}, topped with a luscious {flavor} sauce and complemented by freshly prepared {sideDish} for a meal worth savoring.",
		"A true masterpiece, our {mainIngredient} {dish} is carefully crafted with a blend of {flavor} ingredients, bringing together bold flavors in every delicious bite.",
	];

	return faker.helpers
		.arrayElement(templates)
		.replace("{mainIngredient}", mainIngredient)
		.replace("{dish}", dish)
		.replace("{adj}", faker.commerce.productAdjective()) // E.g., "Crispy", "Tender"
		.replace("{flavor}", faker.word.adjective()) // E.g., "Savory", "Spicy", "Tangy"
		.replace("{material}", faker.commerce.productMaterial()) // E.g., "Granite", "Stainless Steel" (for cookware)
		.replace("{cuisine}", faker.helpers.arrayElement(FoodTypes)) // Random cuisine type
		.replace(
			"{sideDish}",
			faker.helpers.arrayElement([
				"buttery mashed potatoes",
				"steamed vegetables",
				"garlic-infused rice",
				"crispy golden fries",
				"freshly baked bread",
			]),
		); // Random side dish
}

async function getFoodImage(food_type) {
	food_type = food_type.replace(/\s/g, "-");
	const response = await axios.get(
		`https://api.unsplash.com/photos/random?query=${food_type}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
	);
	console.log(response);
	const data = response.data
	return data.urls.small;
}

async function generateMenuItem(axios, category, menu, cuisine, business_id, user_id) {
    let meat = faker.food.meat()
	let mainIngredient = faker.helpers.arrayElement([meat, faker.food.vegetable()]);
	let name = mainIngredient + " " + faker.helpers.arrayElement(FoodByCuisine[cuisine].dishes);
	console.log("Creating", name);
	let description = generateFoodDescription(mainIngredient, name, cuisine);
	let names = await translateText(name);
	let descriptions = await translateText(description);
	let image = await getFoodImage(mainIngredient);
	let base64 = await getBASE64ImageFromURL(image);
	const menuItem = {
		category_id: category.menu_category_id,
		data: {
			names: names,
			description: descriptions,
			price: parseFloat(faker.commerce.price()),
			spicy_level: faker.number.int({ min: 0, max: 3 }),
			unit_size: "1",
			sides: [],
			extras: [],
			ingredients: [],
			availability: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
			allergens: ["4", "9"],
			business_id: business_id,
			discount: 0,
		},
		image: {
			documentData: {
				document_type: "MENU_ITEM_IMAGE",
			},
			files: [
				{
					url: "",
					file_type: "IMAGE",
					mime_type: "image/jpeg",
					base64: base64,
				},
			],
		},
		user_id: user_id,
	};
	let item = await axios.post("/menus/menu-items/create", menuItem);
	console.log("Item", item.data);
	return item.data;
}

function getRandomLocationInCity(cityBounds) {
	const { minLat, maxLat, minLng, maxLng } = cityBounds;

	const latitude = (Math.random() * (maxLat - minLat) + minLat).toString();
	const longitude = (Math.random() * (maxLng - minLng) + minLng).toString();

	return { latitude, longitude };
}

// **Bounding Box for Ljubljana, Slovenia**
const LJUBLJANA_BOUNDS = {
	minLat: 46.0211, // South boundary
	maxLat: 46.1055, // North boundary
	minLng: 14.4185, // West boundary
	maxLng: 14.6177, // East boundary
};

async function generateMenuCategory(axios, cuisine, menu_id, business_id) {
	let names = await translateText(cuisine);
	let description = await translateText(cuisine + "Food");
	let category = {
		menu_id: menu_id,
		data: {
			names: names,
			description: description,
			categories: faker.helpers.arrayElements(
				FoodByCuisine[cuisine].categories,
				faker.number.int({ min: 1, max: 4 }),
			),
			business_id: business_id,
		},
	};
	let categoryR = await axios.post("/menus/menu-categories/create", category);
	console.log("Category", categoryR.data);
	return categoryR.data;
}

async function getBASE64ImageFromURL(url) {
	console.log("GET BASE64", url);
	let response = await axios.get(url, {
		responseType: "arraybuffer",
	});
	let base64 = Buffer.from(response.data, "binary").toString("base64");
	return base64;
}

async function generateBusiness() {
	let users = [];
	let axiosC = axios.create({
		baseURL: "http://localhost:3001/api",
	});
	let userPassword = "TakeOver2024#";
	let userEmail = faker.internet.email();
	let businessName = faker.company.name();
	let businessDescription = faker.company.catchPhrase();
	let businessEmail = faker.internet.email();
	let bPn = faker.string.numeric(8);
	let businessPhone = `+000${bPn}`;
	let businessPhoneNumber = `0${bPn}`;
	let businessWebsite = faker.internet.url();
	let uPn = faker.string.numeric(8);
	let userPhone = `+000${uPn}`;
	let userPhoneNumber = `0${uPn}`;
	let address = {
		address: faker.location.streetAddress(),
		...getRandomLocationInCity(LJUBLJANA_BOUNDS),
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
	reqBody.finances.account_number = bankNumber;
	reqBody.finances.account_holder = businessName + " d.o.o.";
	reqBody.users[0].user.data.password = userPassword;
	reqBody.users[0].user.data.email = userEmail;
	reqBody.users[0].user.data.telephone = userPhone;
	reqBody.users[0].user.data.telephone_number = userPhoneNumber;
	let logo = await generateAIImages(businessName);
	let url = await getFoodImage("Restaurant");
	for (let doc of reqBody.business.documents) {
		let type = doc.documentData.document_type;

		if (type === "LOGO") {
			// get base64 image
			doc.files[0].base64 = await getBASE64ImageFromURL(logo);
			continue;
		}
		if (type === "BANNER") {
			doc.files[0].base64 = await getBASE64ImageFromURL(logo);
			continue;
		}

		doc.files[0].base64 = await getBASE64ImageFromURL(url);
	}
	let { data: business } = await axiosC.post("/merchant/auth/register", reqBody);
	console.log("business", business);
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
	console.log("Updated User", userB);
	// login user
	let { data: user } = await axiosC.post("/auth/login", {
		email: userEmail,
		password: userPassword,
	});

	// grab jwt token
	let jwt = user.access_token;
	console.log("JWT", jwt);
	//attach jwt to axios
	axiosC.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
	// create menu categories
	const catCount = faker.number.int({ min: 2, max: 7 });
	let categoryNames = getRandom(FoodTypes, catCount);
	console.log("Category Names", categoryNames);
	let menu = business.menu;
	for (let cuisine of categoryNames) {
		let category = await generateMenuCategory(axiosC, cuisine, menu.menu_id, business.business.business_id);
		const itemCount = faker.number.int({ min: 5, max: 15 });
		// create menu items
		for (let j = 0; j < itemCount; j++) {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			let item = generateMenuItem(axiosC, category, menu, cuisine, business.business.business_id, userB.user_id);
		}
	}

	console.log("Business DONE", business);
}

function getRandom(arr, n) {
	var result = new Array(n),
		len = arr.length,
		taken = new Array(len);
	if (n > len) throw new RangeError("getRandom: more elements taken than available");
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

async function translateText(text) {
	let translateEs = await translator.translate(text, { target: "es" });
	let translateSi = await translator.translate(text, { target: "sl" });
	let translateIt = await translator.translate(text, { target: "it" });
	let translateRu = await translator.translate(text, { target: "ru" });
	let translateDe = await translator.translate(text, { target: "de" });
	let translateFr = await translator.translate(text, { target: "fr" });
	let translateSrb = await translator.translate(text, { target: "sr" });
	let translateBih = await translator.translate(text, { target: "bs" });
	let translateHr = await translator.translate(text, { target: "hr" });

	return {
		en: text,
		es: translateEs.translated_text,
		si: translateSi.translated_text,
		it: translateIt.translated_text,
		ru: translateRu.translated_text,
		de: translateDe.translated_text,
		fr: translateFr.translated_text,
		srb: translateSrb.translated_text,
		bih: translateBih.translated_text,
		cro: translateHr.translated_text,
	};
}

generateBusiness();
