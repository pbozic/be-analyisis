const {businessIndex, businessSearch, menusIndex, fullSearch} = require('../elasticsearch');


async function run() {
    await businessIndex();
    //await menusIndex();
    let result = await fullSearch("Кинески", 46.063655, 14.524589);
    //console.log(result);
}

run()