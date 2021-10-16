const path = require("path")
const HtmlPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const copyPlugin = require("copy-webpack-plugin")

module.exports = {
	// mode: "development",
	//   entry: path.join(__dirname, 'app', 'index'),
	entry: "./src/index.js",
	watch: true,
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: "/dist/",
		filename: "bundle.js",
		chunkFilename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				include: [path.resolve(__dirname, "app")],
				exclude: [path.resolve(__dirname, "node_modules")],
				use: {
					loader: "babel-loader",
				},
				// query: {
				// 	presets: [
				// 		[
				// 			"@babel/env",
				// 			{
				// 				targets: {
				// 					browsers: "last 2 chrome versions",
				// 				},
				// 			},
				// 		],
				// 	],
				// },
			},
			{
				test: /\.css|.styl$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"stylus-loader",
				],
			},
		],
	},
	plugins: [
		new HtmlPlugin({
			inject: "body",
			template: path.resolve(__dirname, "./public/index.html"),
			filename: "./index.html",
		}),
		new MiniCssExtractPlugin(),
		new copyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src/assets/images"),
					to: "assets/images",
				},
			],
		}),
	],
	resolve: {
		extensions: [".json", ".js", ".jsx"],
	},
	devtool: "source-map",
	devServer: {
		contentBase: path.join(__dirname, "/dist/"),
		inline: true,
		host: "localhost",
		port: 8080,
	},
}
