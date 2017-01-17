var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'build.js'
	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
					'scss': 'vue-style-loader!css-loader!sass-loader?',
					//'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
				}
			}
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			enforce: 'pre',
			use: [{
				loader: 'eslint-loader',
				options: {
					rules: {
						semi: 0
					}
				}
			}],
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
			loader: 'file-loader'
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
			loader: 'file-loader',
			query: {
				name: '[name].[ext]?[hash]'
			}
		}]
	},

	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	}
}