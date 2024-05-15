const joiValidate = (schema) => {
	return async (req, res, next) => {
		try {
			const result = await schema.validateAsync(req.body);
			console.log("result", result);
			if (result.error) {
				return res.status(400).json({
					error: result.error.details[0].message,
				});
			}
			if (!req.value) {
				req.value = {};
			}
			console.log("body", req.body);
			req.value["body"] = result;
			console.log("value", result);
			next();
		} catch (error) {
			console.log(error)
			return res.status(400).json({
				error: error.message,
			});
		}
	};
};

module.exports = joiValidate;
