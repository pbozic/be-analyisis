const S3Helper = require('../../lib/s3');
const relationMap = require('../../relationMap.json');
function shouldGenerateS3Links(args, model) {
    // Check if args include nested structures with files: true
    let relationsToCheck = [];
    for (let rel in relationMap[model]) {
        if (relationMap[model][rel] === "files") {
            relationsToCheck.push(rel);
        }
    }
    if (model === "categories") {
        console.log("args", args);
        console.log("model map", relationMap[model]);
    }
    for (let key in args) {
        if (args[key] && typeof args[key] === 'object') {
            const include = args[key]?.include; // Ensure 'include' is defined
    
            if (include && (include.files || relationsToCheck.some(rel => rel in include))) {
                return true;
            } else if (shouldGenerateS3Links(args[key], model)) {
                return true;
            }
        }
    }
    
    return false;
}

async function generateS3LinksRecursively(args, result, model, opeartion) {
    // Check if should generate S3 links based on args
    if (shouldGenerateS3Links(args, model) || (result && Array.isArray(result) && result.some(doc => doc.files))) {
        // If result is an array, process each document
        if (Array.isArray(result)) {
            for (let document of result) {
                if (document && document.files) {
                    document.files = await Promise.all(document.files.map(async (file) => {
                        return {
                            ...file,
                            url: await S3Helper.GetObject(S3Helper.getFileKey(file.file_id, file.mime_type), file.public),
                        };
                    }));
                }
            }
        } else if (result && result.files) {
            // If result is a single document
            result.files = await Promise.all(result.files.map(async (file) => {
                return {
                    ...file,
                    url: await S3Helper.GetObject(S3Helper.getFileKey(file.file_id, file.mime_type), file.public),
                };
            }));
        }
    }

    // Recursively traverse nested includes in args
    if (args && typeof args === 'object') {
        for (let key in args) {
            if (args[key] && typeof args[key] === 'object') {
                await generateS3LinksRecursively(args[key], null); // No need to process results in args
            }
        }
    }

    // Recursively traverse nested includes in result
    if (result && typeof result === 'object') {
        for (let key in result) {
            if (result[key] && typeof result[key] === 'object') {
                await generateS3LinksRecursively(null, result[key]); // No need to process args in result
            }
        }
    }

    return result;
}

module.exports = {
    generateS3LinksRecursively
};