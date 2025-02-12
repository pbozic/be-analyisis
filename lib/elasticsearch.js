const {businessIndex, businessSearch, menusIndex, fullSearch} = require('../elasticsearch');


async function run() {
    //await businessIndex();
    //await menusIndex();
    let result = await fullSearch("Tacos", 0, 0);
    console.log(result);
}

run()