module.exports = {
	type: "object",
	properties: {
		first_name: {
			type: "string",
		},
		password: {
			type: "string",
		},
		email: {
			type: "string",
			unique: true,
		},
		telephone: {
			type: "string",
			unique: true,
		},
		profile_picture: {
			type: "string",
		},
		address: {
			type: "string",
		},
		date_create: {
			type: "string",
			format: "date-time",
			default: "now()",
		},
		date_modify: {
			type: "string",
			format: "date-time",
			default: "now()",
		},
		last_name: {
			type: "string",
		},
		user_id: {
			type: "string",
			format: "uuid",
		},
		user_role: {
			type: "string",
			enum: ["PERSONAL", "OTHER_ROLE"],
			default: "PERSONAL",
		},
	},
	required: ["password", "email", "telephone"],
};
