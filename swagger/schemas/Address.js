module.exports = {
	type: "object",
	properties: {
		address_id: {
			type: "string",
			format: "uuid",
		},
		address: {
			type: "string",
		},
		latitude: {
			type: "string",
		},
		longitude: {
			type: "string",
		},
		name: {
			type: "string",
		},
		icon: {
			type: "string",
		},
		street: {
			type: "string",
		},
		house_number: {
			type: "string",
		},
		city: {
			type: "string",
		},
		country: {
			type: "string",
		},
		postal: {
			type: "string",
		},
		users: {
			type: "user_address[]",
		},
	},
	required: [
		"address_id",
		"address",
		"latitude",
		"longitude",
		"name",
		"icon",
		"street",
		"house_number",
		"city",
		"country",
		"postal",
	],
	uniqueItems: [
		{
			uniqueAdressIdentifier: {
				fields: ["address", "latitude", "longitude"],
			},
		},
	],
};
