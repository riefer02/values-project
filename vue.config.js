const path = require("path");

module.exports = {
	publicPath: process.env.NODE_ENV === "production" ? "" : "/",
	outputDir: path.resolve(__dirname, "../server/public"),
	transpileDependencies: ["vuetify"],
	devServer: {
		proxy: {
			"/api": {
				target: "http://localhost:6969",
			},
		},
	},
};
