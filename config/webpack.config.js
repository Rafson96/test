const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const settings = {
	mode: 'development',
	entry: {
		main: './src/js/app.js',
	},

	output: {
		filename: 'js/[name]-[contenthash:6].js',
		path: path.join(__dirname, '../build'),
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			
			{
				test: /\.(css|sass|scss)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
				
			
			},
			
			{
				test: /\.(jpg|png|svg|jepg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name][contenthash:6].[ext]',
							outputPath: 'images',
							publicPath: '../images',
						},
					},
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'nowa aplikacja',
			template: './src/template/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name]-[contenthash:6].css',
		}),
	],
}

module.exports = settings
