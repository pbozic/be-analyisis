const fs = require("fs");

const validateUserInput = (fields) => {
    for (let i in fields) {
        if (!fields[i]) {
            return false;
        }
    }
    return true;
}

const jsonParse = (item) => {
    let value = item;
    try {
        item = JSON.parse(item);
    } catch (e) {
        item = value;
    }
    return item;
}

const displayValidFromMenuFormat = (date) => {
    let d = new Date(date);
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    console.log("DATE:", date, `${day}. ${month}. ${year}`);
    return `${day}. ${month}. ${year}`;
};
const displayPrice = (price) => {
    return displayDecimalValue(Number(price).toFixed(2));
}

const displayDecimalValue = (price) => {
    return price.toString().replace(".", ",");
}

function getImageInBase64(imagePath) {
    if (!!imagePath) {
        let imageFileType = imagePath.substring(imagePath.lastIndexOf(".") + 1);
        let base64Prefix = `data:image/${imageFileType};charset=utf-8;base64,`;
        let image = fs.readFileSync(path.join(__dirname, imagePath));
        return base64Prefix + Buffer.from(image).toString('base64');
    }
    return null;
}

const parseMimeType = (fileExt) => {
    if (!fileExt) {
        return null;
    }
    if (fileExt.includes('.pdf')) {
        return 'application/pdf'
    }
}

module.exports = {
    validateUserInput,
    jsonParse,
    displayDecimalValue,
    displayPrice,
    displayValidFromMenuFormat,
    parseMimeType,
}