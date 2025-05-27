const S3Helper = require('../../lib/s3');
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
	if (shouldGenerateS3Links(args) || (result && Array.isArray(result) && result.some((doc) => doc?.files))) {
		// If result is an array, process each document
		if (Array.isArray(result)) {
			for (let document of result) {
				if (document && document?.files) {
					if (Array.isArray(document.files)) {
						document.files = await Promise.all(
							document.files.map(async (file) => {
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
							})
						);
					} else {
						document.files = {
							...document.files,
							url:
								document.files.public == false
									? await S3Helper.GetObject(
											S3Helper.getFileKey(document.files.file_id, document.files.mime_type),
											document.files.public
										)
									: document.files.url,
						};
					}
				}
			}
		} else if (result && result.files) {
			if (Array.isArray(result.files)) {
				// If result is a single document
				result.files = await Promise.all(
					result.files.map(async (file) => {
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
					})
				);
			} else {
				result.files = {
					...result.files,
					url:
						result.files.public == false
							? await S3Helper.GetObject(
									S3Helper.getFileKey(result.files.file_id, result.files.mime_type),
									result.files.public
								)
							: result.files.url,
				};
			}
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
	generateS3LinksRecursively,
};
