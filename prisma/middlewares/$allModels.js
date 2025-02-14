const S3Helper = require('../../lib/s3');
const relationMap = require('../../relationMap.json');
function shouldGenerateS3Links(args, model) {
    return false;
    // Check if args include nested structures with files: true
    let relationsToCheck = [];
    for (let rel in relationMap[model]) {
        if (relationMap[model][rel] === "files") {
            relationsToCheck.push(rel);
        }
    }
    if (model === "categories") {
        console.log("args", args, model);
        console.log("model map", relationMap[model]);
    }
    for (let key in args) {
        console.log("key", key);
        if (relationMap[model][key] === "files")  return true;
        if (args[key] && typeof args[key] === 'object') {
            const include = args[key]?.include; // Ensure 'include' is defined
            if (include) {
                console.log(" relationsToCheck.some(rel => rel in include)",  relationsToCheck.some(rel => rel in include));
            }
            
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
        shouldGenerateS3Links(args, model)
    console.log("shouldGenerateLinks", shouldGenerateLinks);
    if (shouldGenerateLinks) {
        console.log(`Object.keys(result)`, Object.keys(result));
       
        if (Array.isArray(result)) {
            for (let res of result) {
                if (res) {
                    if (res.files) {
                        res.files = await Promise.all(document.files.map(async (file) => {
                            return {
                                ...file,
                                url: await S3Helper.GetObject(S3Helper.getFileKey(file.file_id, file.mime_type), file.public),
                            };
                        }));
                    }

                    if (relationsToCheck.some(rel => Object.keys(res).includes(rel))) {
                        for (let rel of relationsToCheck) {
                            if (res[rel] && Array.isArray(res[rel])) {
                                for (let f of res[rel]) {
                                    f.url = await S3Helper.GetObject(S3Helper.getFileKey(f.file_id, f.mime_type), f.public);
                                }
                            } else if (res[rel]) {
                                res[rel].url = await S3Helper.GetObject(S3Helper.getFileKey(res[rel].file_id, res[rel].mime_type), res[rel].public);
                            }
                        }
                    }
                   
                }
            }
        } else if (result) {
            if (result.files) {
                result.files = await Promise.all(result.files.map(async (file) => {
                    return {
                        ...file,
                        url: await S3Helper.GetObject(S3Helper.getFileKey(file.file_id, file.mime_type), file.public),
                    };
                }));
            }
            if (result && relationsToCheck.some(rel => Object.keys(result).includes(rel))) {
                for (let rel of relationsToCheck) {
                    if (result[rel] && Array.isArray(result[rel])) {
                        for (let f of result[rel]) {
                            f.url = await S3Helper.GetObject(S3Helper.getFileKey(f.file_id, f.mime_type), f.public);
                        }
                    } else if (result[rel]) {
                        result[rel].url = await S3Helper.GetObject(S3Helper.getFileKey(result[rel].file_id, result[rel].mime_type), result[rel].public);
                    }
                }

            }
        }
        if (relationsToCheck.some(rel => Object.keys(result).includes(rel))) {
            for (let rel of relationsToCheck) {
                if (result[rel] && Array.isArray(result[rel])) {
                    console.log("result[rel]", rel, result);
                } else if (result[rel]) {
                    console.log("result[rel]", rel, result);
                }
            }
        }
    }
    // Recursively process nested includes in args
    if (args && typeof args === 'object') {
        for (let key in args) {
            if (args[key] && typeof args[key] === 'object') {
                const relatedModel = relationMap[model]?.[key] || key;
                await generateS3LinksRecursively(args[key], null, model, operation);
            }
        }
    }

    // Recursively process nested includes in result
    if (result && typeof result === 'object') {
        for (let key in result) {
            if (result[key] && typeof result[key] === 'object') {
                const relatedModel = relationMap[model]?.[key] || key;
                await generateS3LinksRecursively(null, result[key], model, operation);
            }
        }
    }

    return result;
}


module.exports = {
    generateS3LinksRecursively
};