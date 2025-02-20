const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: path.resolve(__dirname, 'src/index.js'),
		dashboard: path.resolve(__dirname, 'src/components/dashboard.js'),
		router: path.resolve(__dirname, 'src/router.js'),
		home: path.resolve(__dirname, 'src/components/home.js')
		//dashboard: './src/components/dashboard.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name][contenthash].js',
		clean: true
	},
	devtool: 'source-map',
	devServer: {
		static: {directory: path.resolve(__dirname, 'dist')},
		port: 3000, open: true, hot: true, compress: true, historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.scss$/, 
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {loader: 'babel-loader', options: {presets: ['@babel/preset-env']}}
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'Single Page App',
			filename: 'index.html',
			template: './src/template.html',
			chunks: ['index', 'router'],
			inject: 'body'
		}),
		new htmlWebpackPlugin({
			template: './src/static/templates/dashboard.html',
			filename: './templates/dashboard.html',
			chunks: ['dashboard'],
			inject: 'body'
		}),
		new htmlWebpackPlugin({
			template: './src/static/templates/home.html',
			filename: './templates/home.html',
			chunks: ['home'],
			inject: 'body'
		}),
		/*new copyWebpackPlugin({
			patterns: [{
				from: './src/static/templates',
				to: 'templates'
			}]
		})*/
	]
}
