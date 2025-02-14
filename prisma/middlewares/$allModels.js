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

async function generateS3LinksRecursively(args, result, model, operation) {
    if (!relationMap[model]) {
        console.warn(`⚠ Warning: Model '${model}' not found in relationMap.`);
        return result;
    }

    // Extract relations that reference "files"
    const relationsToCheck = Object.keys(relationMap[model]).filter(
        (rel) => relationMap[model][rel] === "files"
    );

    // Check if we should generate S3 links
    const shouldGenerateLinks =
        shouldGenerateS3Links(args, model) ||
        (result && Array.isArray(result) && result.some(doc => doc?.files));

    if (shouldGenerateLinks) {
        if (Array.isArray(result)) {
            for (let document of result) {
                for (const key in document) {
                    // Replace relation keys with actual model names from relationMap
                    const relatedModel = relationMap[model][key];
                    if (relatedModel === "files" && document[key]) {
                        document[key] = await Promise.all(document[key].map(async (file) => ({
                            ...file,
                            url: await S3Helper.GetObject(S3Helper.getFileKey(file.file_id, file.mime_type), file.public),
                        })));
                    }
                }
            }
        } else if (result && typeof result === 'object') {
            for (const key in result) {
                const relatedModel = relationMap[model][key];
                if (relatedModel === "files" && result[key]) {
                    result[key] = await Promise.all(result[key].map(async (file) => ({
                        ...file,
                        url: await S3Helper.GetObject(S3Helper.getFileKey(file.file_id, file.mime_type), file.public),
                    })));
                }
            }
        }
    }

    // Recursively process nested includes in args
    if (args && typeof args === 'object') {
        for (let key in args) {
            if (args[key] && typeof args[key] === 'object') {
                const relatedModel = relationMap[model]?.[key] || key;
                await generateS3LinksRecursively(args[key], null, relatedModel, operation);
            }
        }
    }

    // Recursively process nested includes in result
    if (result && typeof result === 'object') {
        for (let key in result) {
            if (result[key] && typeof result[key] === 'object') {
                const relatedModel = relationMap[model]?.[key] || key;
                await generateS3LinksRecursively(null, result[key], relatedModel, operation);
            }
        }
    }

    return result;
}


module.exports = {
    generateS3LinksRecursively
};