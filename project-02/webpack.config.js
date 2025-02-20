const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		bundle: path.resolve(__dirname, './src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name][contenthash].js',
		clean: true
	},
	devtool: 'source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist')
		},
		port: 3000, open: true, hot: true, compress: true, historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader'
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'Single Page Application',
			template: './src/template.html',
			filename: 'index.html',
			inject: 'body'
		}),
		new copyPlugin({
			patterns: [
				{
					from: './src/static/js/templates/', // Relative to your project root
					//from: './src/static/handlebars/',
          to: 'components' // Optional; defaults to 'dist/'
        },
			],
		}),
	]
};
