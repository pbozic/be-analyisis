const validateRequest = (schema) => {
	return async (req, res, next) => {
		try {
			const result = await schema.validateAsync(req.body);
			if (result.error) {
				return res.status(400).json({
					error: result.error.details[0].message,
				});
			}
			if (!req.value) {
				req.value = {};
			}
			console.log("body", req.body);
			req.value["body"] = result.value;
			console.log("value", result.value);
			next();
		} catch (error) {
			res.status(400).json({
				error: error.message,
			});
		}
	};
};

module.exports = {
	validateRequest,
};
