/**
 * Webpack Configuration
 *
 * Working of a Webpack can be very simple or complex. This is an intenally simple
 * build configuration.
 * @since 1.0.0
 */
const path                    = require('path');
const rootPath                = process.cwd();
const autoprefixer            = require('autoprefixer');
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const UglifyJsPlugin          = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


const CSSModuleLoader = {
	loader : 'typings-for-css-modules-loader',
	options: {
		namedExport   : true,
		camelcase     : true,
		modules       : true,
		localIdentName: '[hash:base64:5]',
		sourceMap     : true,
		minimize      : true,
	},
};

const CSSLoader = {
	loader : 'typings-for-css-modules-loader',
	options: {
		namedExport  : false,
		camelcase    : true,
		modules      : false,
		sourceMap    : true,
		minimize     : true,
		importLoaders: 2,
	},
};

const postCSSLoader = {
	loader : 'postcss-loader',
	options: {
		ident    : 'postcss',
		sourceMap: true,
		plugins  : () => [
			autoprefixer({
				browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
			})
		]
	}
};

// Export configuration.
module.exports = {
	mode        : 'production',
	entry       : {
		'blocks.style.build'       : `${path.resolve(rootPath, 'src', 'assets', 'scss')}/style.scss`,
		'blocks.style.editor.build': `${path.resolve(rootPath, 'src', 'assets', 'scss')}/editor.scss`,
		'blocks.build'             : `${path.resolve(rootPath, 'src')}/blocks.ts`,
		'blocks.editor.build'      : `${path.resolve(rootPath, 'src')}/blocks.editor.ts`,
	},
	output      : {
		pathinfo: true,
		path    : path.resolve(rootPath, 'dist'),
		filename: '[name].js',
	},
	module      : {
		rules: [
			{
				test   : /\.([tj])s(x)?$/,
				resolve: {extensions: ['.ts', '.tsx', '.js', '.jsx', '.d.ts']},
				exclude: /node_modules/,
				use    : {
					loader: 'awesome-typescript-loader',
				},
			},
			{
				test   : /\.scss$/,
				exclude: /\.module\.scss$/,
				use    : [
					MiniCssExtractPlugin.loader,
					CSSLoader,
					postCSSLoader,
					'sass-loader'
				]
			},
			{
				test: /\.module\.scss$/,
				use : [
					MiniCssExtractPlugin.loader,
					CSSModuleLoader,
					postCSSLoader,
					'sass-loader',
				]
			},
		],
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache    : true,
				parallel : true,
				sourceMap: true // set to true if you want JS source maps
			}),
			new OptimizeCSSAssetsPlugin({})
		],
	},
	// Add plugins.
	plugins     : [
		new MiniCssExtractPlugin(),
	],
	resolve     : {
		extensions      : ['.tsx', '.ts', '.js', '.jsx', '.es6', '.scss', '.d.ts'],
		enforceExtension: false,
	},
	stats       : 'minimal',
	// stats: 'errors-only',
	// Add externals.
	externals   : {
		'react'    : 'React',
		'react-dom': 'ReactDOM',
		jquery     : 'jQuery', // import $ from 'jquery' // Use the WordPress version.
	},
};
