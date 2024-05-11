module.exports = {
	type: "object",
	properties: {
		allergen_id: {
			type: "string",
			format: "uuid",
		},
		name: {
			type: "string",
		},
		description: {
			type: "string",
			nullable: true,
		},
		code: {
			type: "integer",
			unique: true,
			minimum: -32768,
			maximum: 32767,
		},
	},
	required: ["allergen_id", "name", "code"],
};
