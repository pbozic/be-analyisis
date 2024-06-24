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
async function alwaysAddWalletBalance(model, operation, args, query) {
	if (args.select != null) return args;
	if (operation.startsWith("find") && args.include?.wallet_balance !== true) {
		args.include = {
			...args.select,
			wallet_balance: true,
		};
	}
	return args
}
async function handleWalletBalance(model, operation, args, query, result) {
	let middlewareResult = result;
	if (operation.startsWith("find")) {
		if (!result) return result;
		if (typeof result !== "object") return result;
		if (Array.isArray(result)) {
			//add walletBalance to each user from 
			middlewareResult = await Promise.all(result.map(async (item) => {
				const { wallet_balance, ...rest } = item;
				const walletBalance =  wallet_balance?.balance || 0// Assuming function to retrieve wallet balance
				return {
				  ...item,
				  walletBalance
				};
			}));
		} else {
			const { wallet_balance, ...rest } = result;
			result.walletBalance = wallet_balance?.balance || 0;
			
		}
	}
	return middlewareResult;
}

//TODO: if user is type BUSINESS_CARETAKER || BUSINESS_OWNER, then handle address user_address_id, if empty get user_address.

module.exports = {
	handleHidePassword,
	alwaysAddWalletBalance,
	handleWalletBalance
};
