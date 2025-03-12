const addAddressPivotTable = async (model, operation, args, query) => {
	if (args.include?.addresses) {
		args = {
			...args,
			include: {
				...args.include,
				addresses: {
					include: {
						address: true,
					},
				},
			},
		};
	}
	return args;
};

const handleAddressPivotTable = async (model, operation, args, query, result) => {
	let middlewareResult = result;
	if (args.include?.addresses) {
		if (args.include?.addresses.include?.address) {
			if (!result) return result;
			if (typeof result !== "object") return result;
			if (Array.isArray(result)) {
				middlewareResult = result.map((user) => {
					user.addresses = user.addresses.map((address) => {
						return {
							...address.address,
							name: address.name,
							icon: address.icon,
						};
					});
					return user;
				});
			} else {
				//console.log("res", result);
				let addresses = result.addresses.map((address) => {
					return {
						...address.address,
						name: address.name,
						icon: address.icon,
					};
				});
				middlewareResult = {
					...middlewareResult,
					addresses,
				};
			}
		}
	}
	return middlewareResult;
};

module.exports = {
	handleAddressPivotTable,
	addAddressPivotTable,
};
