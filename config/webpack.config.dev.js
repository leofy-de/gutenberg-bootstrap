/**
 * Webpack Configuration
 *
 * Working of a Webpack can be very simple or complex. This is an intenally simple
 * build configuration.
 *
 * @since 1.0.0
 */
const path                  = require('path');
const rootPath              = process.cwd();
const autoprefixer          = require('autoprefixer');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const webpack               = require('webpack');
const {TsConfigPathsPlugin} = require('awesome-typescript-loader');

const MiniCssExtractPluginLoader = {
	loader : MiniCssExtractPlugin.loader,
	options: {
		publicPath: path.resolve(rootPath, 'dist', 'css')
	},
};

const CSSModuleLoader = {
	loader : 'typings-for-css-modules-loader',
	options: {
		namedExport   : true,
		camelcase     : true,
		modules       : true,
		localIdentName: '[local]--[hash:base64:5]',
		sourceMap     : true,
		importLoaders : 2,
	},
};

const CSSLoader = {
	loader : 'typings-for-css-modules-loader',
	options: {
		namedExport  : false,
		camelcase    : true,
		modules      : false,
		sourceMap    : true,
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
	mode     : 'development',
	entry    : {
		'blocks.style.build'       : `${path.resolve(rootPath, 'src', 'assets', 'scss')}/style.scss`,
		'blocks.style.editor.build': `${path.resolve(rootPath, 'src', 'assets', 'scss')}/editor.scss`,
		'blocks.build'             : `${path.resolve(rootPath, 'src')}/blocks.ts`,
		'blocks.editor.build'      : `${path.resolve(rootPath, 'src')}/blocks.editor.ts`,
	},
	output   : {
		pathinfo: true,
		path    : path.resolve(rootPath, 'dist'),
		filename: '[name].js',
	},
	devtool  : 'source-map',
	devServer: {
		contentBase       : '/',
		historyApiFallback: true,
		hot               : true,
	},
	module   : {
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
					MiniCssExtractPluginLoader,
					CSSLoader,
					postCSSLoader,
					'sass-loader'
				]
			},
			{
				test: /\.module\.scss$/,
				use : [
					MiniCssExtractPluginLoader,
					CSSModuleLoader,
					postCSSLoader,
					'sass-loader',
				]
			},
		],
	},
	// Add plugins.
	plugins  : [
		new webpack.WatchIgnorePlugin([
			/s?css\.d\.ts$/,
		]),
		new MiniCssExtractPlugin({
			filename     : `[name].css`,
			chunkFilename: `chunks/[name].css`,
		}),
	],
	resolve  : {
		extensions      : ['.tsx', '.ts', '.js', '.jsx', '.es6', '.scss', '.d.ts'],
		enforceExtension: false,
		plugins         : [new TsConfigPathsPlugin()],
	},
	stats    : 'minimal',
	// stats: 'errors-only',
	// Add externals.
	externals: {
		react      : 'React',
		'react-dom': 'ReactDOM',
		ga         : 'ga', // Old Google Analytics.
		gtag       : 'gtag', // New Google Analytics.
		jquery     : 'jQuery', // import $ from 'jquery' // Use the WordPress version.
	},
};
