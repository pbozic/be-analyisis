const {businessIndex, businessSearch, menusIndex, fullSearch} = require('../elasticsearch');


async function run() {
    await businessIndex();
    //await menusIndex();
   // let result = await fullSearch("", 46.063655, 14.524589, [], null);
    //c//onsole.log(result);
}

run()