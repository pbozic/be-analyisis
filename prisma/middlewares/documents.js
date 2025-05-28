import S3Helper from '../../lib/s3.js';
const handleS3LinkForDocuments = async (model, operation, args, query, result) => {
	let middlewareResult = result;
	if (args.include?.files) {
		if (!result) return result;
		if (Array.isArray(result)) {
			for (let document of middlewareResult) {
				let files = document.files.map(async (file) => {
					return {
						...file,
						url:
							file.public == false
								? await S3Helper.GetObject(
										S3Helper.getFileKey(file.file_id, file.mime_type),
										file.public
									)
								: file.url,
					};
				});
				document.files = await Promise.all(files);
			}
		} else {
			let files = middlewareResult.files.map(async (file) => {
				return {
					...file,
					url:
						file.public == false
							? await S3Helper.GetObject(S3Helper.getFileKey(file.file_id, file.mime_type), file.public)
							: file.url,
				};
			});
			middlewareResult = {
				...middlewareResult,
				files,
			};
		}
	}
	return middlewareResult;
};
export { handleS3LinkForDocuments };
export default {
	handleS3LinkForDocuments,
};
