const S3Helper = require('../../lib/s3');

const handleS3LinkForDocuments = async (model, operation, args, query, result) => {
	let middlewareResult = result;

	if (args.include?.files) {
		if (!result) return result;
		if (Array.isArray(result)) {
			for (let document of middlewareResult) {
				let files = document.files.map(async (file) => {
					return {
						...file,
						url: await S3Helper.GetObject(S3Helper.getFileKey(file.file_id, file.mime_type), file.public),
					};
				});
				document.files = await Promise.all(files);
			}
		} else {
			let files = middlewareResult.files.map(async (file) => {
				return {
					...file,
					url: await S3Helper.GetObject(S3Helper.getFileKey(file.file_id, file.mime_type), file.public),
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

module.exports = {
	handleS3LinkForDocuments,
};
