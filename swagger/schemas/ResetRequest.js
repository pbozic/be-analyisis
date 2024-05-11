module.exports = {
	type: "object",
	properties: {
		reset_request_id: {
			type: "string",
			format: "uuid",
		},
		user_id: {
			type: "string",
			format: "uuid",
		},
		token: {
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
		active: {
			type: "boolean",
			default: true,
		},
		users: {
			type: "users",
			relation: {
				fields: ["user_id"],
				references: ["user_id"],
			},
		},
	},
	required: ["reset_request_id", "user_id", "token", "active"],
};
