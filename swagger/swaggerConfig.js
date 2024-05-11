const swaggerJsdoc = require("swagger-jsdoc");
const User = require("./schemas/User");
const Allergen = require("./schemas/Allergen");
const ResetRequest = require("./schemas/ResetRequest");
const UserAddress = require("./schemas/UserAddress");
const Address = require("./schemas/Address");

const options = {
	definition: {
		openapi: "3.1.0",
		info: {
			title: "Klinki Express API with Swagger",
			version: "0.1.0",
			description:
				"This is a simple CRUD API application made with Express and documented with Swagger",
			license: {
				name: "MIT",
				url: "https://spdx.org/licenses/MIT.html",
			},
			contact: {
				name: "Klikni",
				url: "https://klikni.si",
				email: "info@klikni.si",
			},
		},
		components: {
			schemas: {
				User,
				Allergen,
				ResetRequest,
				UserAddress,
				Address,
				AuthenticatedUser: {
					...User,
					properties: {
						...User.properties,
						accessToken: {
							type: "string",
						},
						refreshToken: {
							type: "string",
						},
					},
				},
			},
		},
		servers: [
			{
				url: "http://localhost:3001",
			},
		],
	},

	apis: ["${__dirname}/../routes/*.js"], // Modify this based on your route files location
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
