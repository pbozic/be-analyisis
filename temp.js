let naselja = require("./naselja-zone.json");

let fs = require("fs");
let path = require("path");


for (let i = 0; i < naselja.features.length; i++) {
    let naselje = naselja.features[i];
    let name = naselje.properties.NAZIV;
    console.log("Settlement: ", name);
    if (name === "Ljubljana") {
        fs.writeFileSync(path.join(__dirname, "ljubljana.json"), JSON.stringify(naselje, null, 2));
    }
    // console.log("Municipality created: ", muGJ.properties.NAZIV);
}