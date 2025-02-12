const dotenv = require('dotenv');
const prisma = require('../prisma/prisma');
const axios = require('axios');
dotenv.config();

const FoodByCuisine = {
    Italian: ["Pasta", "Risotto", "Lasagna"],
    Mexican: ["Tacos", "Quesadilla", "Enchiladas", "Burrito"],
    American: ["Burger", "Sandwich"],
    Japanese: ["Ramen", "Tempura", "Teriyaki"],
    Indian: ["Curry", "Biryani", "Tikka Masala", "Korma"],
    Chinese: ["Noodles", "Dumplings", "Fried Rice", "Spring Rolls"],
    MiddleEastern: ["Kebab", "Shawarma"],
    French: ["Omelette", "Coq au Vin", "Quiche", "Cassoulet"],
    General: ["Soup", "Stew", "Salad"]
};


const FoodTypes = Object.keys(FoodByCuisine);

async function getFoodImage(food_type) {
    food_type = food_type.replace(/\s/g, '-');
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${food_type}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    console.log(response);
    const data = await response.json();
    return data.urls.small;
}
async function generateMenuItem(axios, category, menu) {


}
async function generateMenu(axios) {
    const menuItems = [];
    const itemCount = faker.number.int({ min: 5, max: 15 });

    for (let i = 0; i < itemCount; i++) {
        const image = await getFoodImage();
        menuItems.push({
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: faker.commerce.price({ min: 5, max: 50, dec: 2 }),
            image
        });
    }

    return menuItems;
}

async function generateMenuCategory(axios, menu) {

}

async function generateBusiness() {
    let users = [];
    let axiosC = axios.create({
        baseURL: 'http://localhost:3000'
    });
    let userPassword = 'TakeOver2024#';
    // make business register request
    let {data: business} = await axiosC.post('/merchant/auth/register', {

    });
    // update user to phone verified
    let userB = business.businessUsers[0];

    await prisma.users.update({
        where: {
            user_id: userB.user_id
        },
        data: {
            phone_verified: true
        }
    });
    // login user
    let {data: user} = await axiosC.post('/auth/login', {
        email: user.email,
        password: userPassword
    });

    // grab jwt token
    let jwt = user.access_token;
    //attach jwt to axios
    axiosC.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
    // create menu categories
    const catCount = faker.number.int({ min: 2, max: 7 });
    let menu = business.menu;
    for (let i = 0; i < catCount; i++) {
        let category = generateMenuCategory(axiosC, menu);
        const itemCount = faker.number.int({ min: 5, max: 15 });
        // create menu items
        for (let j = 0; j < itemCount; j++) {
            let item = generateMenuItem(axiosC, category, menu);
        }

    }

    return users
   
}


async function seedBusniness(number = 10) {
    for (let i = 0; i < number; i++) {
        generateBusiness();
    }
}

getFoodImage('Venison-Pasta').then(console.log);