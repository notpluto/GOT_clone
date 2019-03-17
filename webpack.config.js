const path = require('path');
const Html = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './assets/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.(s*)css$/,
				use: ['style-loader','css-loader','sass-loader']
			}
		]
	},
	devServer: {
		port: 8000,
		contentBase: path.join(__dirname, 'dist'),
	},
	plugins: [new Html({
		template: './index.html',
		title: "Main"
	})]
}