const S3Helper = require('../helpers/S3Helper');
function shouldGenerateS3Links(args) {
    // Check if args include nested structures with files: true
    for (let key in args) {
        if (args[key] && typeof args[key] === 'object') {
            if (args[key].include?.files) {
                return true;
            } else if (shouldGenerateS3Links(args[key])) {
                return true;
            }
        }
    }
    return false;
}

async function generateS3LinksRecursively(args, result) {
    // Check if should generate S3 links based on args
    if (shouldGenerateS3Links(args) || (result && Array.isArray(result) && result.some(doc => doc.files))) {
        // If result is an array, process each document
        if (Array.isArray(result)) {
            for (let document of result) {
                if (document.files) {
                    document.files = await Promise.all(document.files.map(async (file) => {
                        return {
                            ...file,
                            url: await S3Helper.GetObject(S3Helper.getFileKey(file.file_id, file.mime_type)),
                        };
                    }));
                }
            }
        } else if (result.files) {
            // If result is a single document
            result.files = await Promise.all(result.files.map(async (file) => {
                return {
                    ...file,
                    url: await S3Helper.GetObject(S3Helper.getFileKey(file.file_id, file.mime_type)),
                };
            }));
        }
    }

    // Recursively traverse nested includes in args
    for (let key in args) {
        if (args[key] && typeof args[key] === 'object') {
            await generateS3LinksRecursively(args[key], null); // No need to process results in args
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