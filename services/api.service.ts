import { ServiceSchema } from "moleculer";
import ApiGateway = require("moleculer-web");

const ApiService: ServiceSchema = {
	name: "api",

	mixins: [ApiGateway],

	// More info about settings: https://moleculer.services/docs/0.13/moleculer-web.html
	settings: {
		port: process.env.PORT || 3000,
		path: "/api",
		routes: [
			{
				path: "/",
				whitelist: [
					// Access to any actions in all services under "/api" URL
					"login.*",
				],
				authorization: false,
			}],

		// Serve assets from "public" folder
		assets: {
			folder: "public",
		},
	},
};

export = ApiService;
