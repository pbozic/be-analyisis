const S3Helper = require("../../lib/s3");
const handleS3LinkForFiles = async (model, operation, args, query, result) => {
    let middlewareResult = result;
    if (Array.isArray(result)) { 
        for (let file of middlewareResult) {
            file.url = await S3Helper.GetObject(S3Helper.getFileKey(file.file_id, file.mime_type), file.public);
        }
    }
    else {
        middlewareResult.url = await S3Helper.GetObject(S3Helper.getFileKey(middlewareResult.file_id, middlewareResult.mime_type), middlewareResult.public);
    }
    return middlewareResult;
};

module.exports = {
    handleS3LinkForFiles
};