async function handleHidePassword(model, operation, args, query, result) {
	let middlewareResult = result;
	if (operation.startsWith("find") && args.select?.password !== true) {
		if (!result) return result;
		if (typeof result !== "object") return result;
		if (Array.isArray(result)) {
			// If the result is an array of users, remove the password from each user
			middlewareResult = result.map(({ password, ...rest }) => rest);
		} else {
			// If the result is a single user object, remove the password
			const { password, ...rest } = result;
			middlewareResult = rest;
		}
	}
	return middlewareResult;
}

//TODO: if user is type BUSINESS_CARETAKER || BUSINESS_OWNER, then handle address user_address_id, if empty get user_address.

module.exports = {
	handleHidePassword,
};
