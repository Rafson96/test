const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const settings = {
	mode: 'production',
	entry: {
		main: './src/app.js',
	},

	output: {
		filename: 'js/[name]-[contenthash:6].js',
		path: path.join(__dirname, '../build'),
	},

	module: {
		rules: [
			{
				test: /\.(css|sass)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(jpg|png|svg|jepg)$/,
				use: 'file-loader',
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'nowa aplikacja',
			template: './src/template/template.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name]-[contenthash:6].css',
		}),
	],
}

module.exports = settings
