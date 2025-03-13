
const { upsertFileOnS3Helper } = require("../controllers/FilesController");
const prisma = require("../prisma/prisma");
const fs = require("fs");
const path = require("path");

let CATEGORIES_FULL = {
    fastFood: {key:'fastFood',tag: 'fast-food', source: '../prisma/seeders/icons/fast-food.png', name: 'Fast food'},
    pizza: {key:'pizza', tag: 'pizza', source: '../prisma/seeders/icons/pizza.png', name: 'Pizza'},
    burger: {key:'burger',tag: 'burger', source: '../prisma/seeders/icons/burger.png', name: 'Burger'},
    salads: {key:'salads',tag: 'salads', source: '../prisma/seeders/icons/salads.png', name: 'Salads'},
    soups: {key:'soups',tag: 'soups', source: '../prisma/seeders/icons/ladle.png', name: 'Soups'},
    vegetarian: {key:'vegetarian',tag: 'vegetarian', source: '../prisma/seeders/icons/vegetarian.png', name: 'Vegetarian'},
    vegan: {key:'vegan',tag: 'vegan', source: '../prisma/seeders/icons/vegan-2.png', name: 'Vegan'},
    bakery: {key:'bakery',tag: 'bakery', source: '../prisma/seeders/icons/bakery.png', name: 'Bakeries'},
    sandwiches: {key:'sandwiches',tag: 'sandwiches', source: '../prisma/seeders/icons/sandwich.png', name: 'Sandwiches'},
    bbq: {key:'bbq',tag: 'bbq', source: '../prisma/seeders/icons/bbq.png', name: 'BBQ'},
    steak: {key:'steak',tag: 'steak', source: '../prisma/seeders/icons/meat.png', name: 'Steak'},
    chicken: {key:'chicken',tag: 'chicken', source: '../prisma/seeders/icons/chicken.png', name: 'Chicken'},
    kebab: {key:'kebab',tag: 'kebab', source: '../prisma/seeders/icons/kebab.png', name: 'Kebab'},
    fish: {key:'fish',tag: 'fish', source: '../prisma/seeders/icons/fish.png', name: 'Fish'},
    sushi: {key:'sushi',tag: 'sushi', source: '../prisma/seeders/icons/sushi.png', name: 'Sushi'},
    bowl: {key:'bowl',tag: 'bowl', source: '../prisma/seeders/icons/poke-bowl.png', name: 'Poke bowl'},
    seafood: {key:'seafood',tag: 'seafood', source: '../prisma/seeders/icons/seafood.png', name: 'Seafood'},
    risotto: {key:'risotto',tag: 'risotto', source: '../prisma/seeders/icons/risotto.png', name: 'Risotto'},
    italian: {key:'italian',tag: 'italian', source: '../prisma/seeders/icons/italian.png', name: 'Italian'},
    mexican: {key:'mexican',tag: 'mexican', source: '../prisma/seeders/icons/mexican.png', name: 'Mexican'},
    chinese: {key:'chinese',tag: 'chinese', source: '../prisma/seeders/icons/chinese.png', name: 'Chinese'},
    japanese: {key:'japanese',tag: 'japanese', source: '../prisma/seeders/icons/japanese-food.png', name: 'Japanese'},
    thai: {key:'thai',tag: 'thai', source: '../prisma/seeders/icons/thai.png', name: 'Thai'},
    korean: {key:'korean',tag: 'korean', source: '../prisma/seeders/icons/korean.png', name: 'Korean'},
    indian: {key:'indian',tag: 'indian', source: '../prisma/seeders/icons/indian.png', name: 'Indian'},
    arabic: {key:'arabic',tag: 'arabic', source: '../prisma/seeders/icons/arabic.png', name: 'Arabic'},
    kosher: {key:'kosher',tag: 'kosher', source: '../prisma/seeders/icons/kosher.png', name: 'Kosher'},
    halal: {key:'halal',tag: 'halal', source: '../prisma/seeders/icons/halal.png', name: 'Halal'},
    breakfast: {key:'breakfast',tag: 'breakfast', source: '../prisma/seeders/icons/breakfast.png', name: 'Breakfast'},
    lunch: {key:'lunch',tag: 'lunch', source: '../prisma/seeders/icons/dish.png', name: 'Lunch'},
    gourmetCuisine: {key:'gourmetCuisine',tag: 'gourmet-cuisine', source: '../prisma/seeders/icons/fine-dining.png', name: 'Fine dining'},
    traditional: {key:'traditional',tag: 'traditional', source: '../prisma/seeders/icons/traditional.png', name: 'Traditional'},
    healthy: {key:'healthy',tag: 'healthy', source: '../prisma/seeders/icons/healthy-food.png', name: 'Healthy'},
    snacksExtras: {key:'snacksExtras',tag: 'extras', source: '../prisma/seeders/icons/snacks_extras.png', name: 'Snacks & extras'},
    desserts: {key:'desserts',tag: 'desserts', source: '../prisma/seeders/icons/dessert.png', name: 'Desserts'},
    iceCream: {key:'iceCream',tag: 'ice-cream', source: '../prisma/seeders/icons/ice-cream.png', name: 'Ice cream'},
    hotDrinks: {key:'hotDrinks',tag: 'hot-drinks', source: '../prisma/seeders/icons/hot-drinks.png', name: 'Coffee & Tea'},
    pubs: {key:'pubs',tag: 'pubs', source: '../prisma/seeders/icons/pub.png', name: 'Pubs'},
    wine: {key:'wine',tag: 'wine', source: '../prisma/seeders/icons/wine.png', name: 'Wine'},
    cocktail: {key:'cocktail',tag: 'cocktail', source: '../prisma/seeders/icons/cocktail.png', name: 'Cocktails'},
    drinks: {key:'drinks',tag: 'soft-drinks', source: '../prisma/seeders/icons/drinks.png', name: 'Soft drinks'},
    
    kidsMeals: {key:'kidsMeals',tag: 'kids-meals', source: '../prisma/seeders/icons/kids-meals.png', name: 'Kids meals'},
}

const DIETARY_OPTIONS = [
    {title: "Gallbladder", tag: "gallbladder",   source: '../prisma/seeders/icons/liver_icon.png'},
    {title: "Gluten Free", tag: "gluten-free", key:"glutenFree",source: '../prisma/seeders/icons/gluten-free_icon.png'},
    {title: "Fit", tag: "fit", source: '../prisma/seeders/icons/icon_food_fit.png'},
    {title: "Vegeterian", tag: "vegetarian", source: '../prisma/seeders/icons/salads.png'},
    {title: "Diabetes", tag: "diabetes", source: '../prisma/seeders/icons/diabetes.png'},
    {title: "Diverse", tag: "diverse", source: '../prisma/seeders/icons/healthy-food.png'},
    {title: "Balanced", tag: "balanced", source: '../prisma/seeders/icons/balanced-diet.png'},
    {title: "Vegan", tag: "vegan", source: '../prisma/seeders/icons/vegan.png'},
    {title: "Dietary Plan", tag: "dietary-plan",  key:"dietaryPlan",source: '../prisma/seeders/icons/diet1_icon.png'},
]

async function fixCategoryIcons() {
    const categories = await prisma.categories.findMany({
        include: {
            icon: true,
        },
    });
    for (const category of categories) {
        let cat = Object.keys(CATEGORIES_FULL).find((key) => CATEGORIES_FULL[key].tag === category.tag);
        let catObj = CATEGORIES_FULL[cat];
        let diet = DIETARY_OPTIONS.find((diet) => diet.tag === category.tag);
        console.log(catObj, diet)
        if (catObj || diet) {
            let c = catObj || diet;
            console.log(`Processing ${c.name}: ${c.source}`);
            const imagePath = path.resolve(__dirname, c.source);
            let base64 = null;
            try {
                if (fs.existsSync(imagePath)) {
                    const imageBuffer = fs.readFileSync(imagePath);
                    base64 = `data:image/png;base64,${imageBuffer.toString("base64")}`;
                } else {
                    console.warn(`File not found: ${imagePath}`);
                }
            } catch (error) {
                console.error(`Error processing ${imagePath}:`, error);

            }
            if (!base64) {
                console.warn(`No base64 data for ${cat.source}`);
                continue;
            }
            let iconFileData = {
                file_type: "IMAGE",
                mime_type: "image/png",
                base64: base64
            }
            await prisma.categories.update({
                where: {
                    categories_id: category.categories_id,
                },
                data: {
                    icon: {
                        disconnect: true,
                    },
                },
            });
            if (category.icon
                && category.icon.file_id) {
            await prisma.files.delete({
                where: {
                    file_id: category.icon.file_id,
                },
            })

           
            let newCat = await prisma.categories.update({
                where: {
                    categories_id: category.categories_id,
                },
                data: {
                    icon: {
                        create: {
                            file_type: iconFileData.file_type,
                            mime_type: iconFileData.mime_type,
                            public: true,
                        }
                    },
                },
                include: {
                    icon: true,
                },
            });
            console.log(newCat);
            await upsertFileOnS3Helper(null, newCat.icon, iconFileData.file_type,iconFileData.mime_type,iconFileData.base64)
        }
        }
    }
}

fixCategoryIcons()