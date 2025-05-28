import S3Helper from '../../lib/s3.js';
const handleS3LinkForFiles = async (model, operation, args, query, result) => {
	let middlewareResult = result;
	if (Array.isArray(result)) {
		for (let file of middlewareResult) {
			file.url =
				file.public == false
					? await S3Helper.GetObject(S3Helper.getFileKey(file.file_id, file.mime_type), file.public)
					: file.url;
		}
	} else {
		middlewareResult.url =
			middlewareResult.public == false
				? await S3Helper.GetObject(
						S3Helper.getFileKey(middlewareResult.file_id, middlewareResult.mime_type),
						middlewareResult.public
					)
				: middlewareResult.url;
	}
	return middlewareResult;
};
export { handleS3LinkForFiles };
export default {
	handleS3LinkForFiles,
};
