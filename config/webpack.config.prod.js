/**
 * Webpack Configuration
 *
 * Working of a Webpack can be very simple or complex. This is an intenally simple
 * build configuration.
 * @since 1.0.0
 */
const webpack              = require('webpack');
const autoprefixer         = require('autoprefixer');
const paths                = require('./paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


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
	mode     : 'production',
	entry    : {
		'./dist/blocks.build'       : paths.pluginBlocksJs, // 'name' : 'path/file.ext'.
		'./dist/blocks.editor.build': paths.pluginEditorBlocksJs, // 'name' : 'path/file.ext'.
	},
	output   : {
		// Add /* filename */ comments to generated require()s in the output.
		//pathinfo: true,
		// The dist folder.
		path    : paths.pluginDist,
		filename: '[name].js', // [name] = './dist/blocks.build' as defined above.
	},
	// You may want 'eval' instead if you prefer to see the compiled output in DevTools.
	//devtool: 'source-map',
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
	},
	stats    : 'minimal',
	// stats: 'errors-only',
	// Add externals.
	externals: {
		'react'    : 'React',
		'react-dom': 'ReactDOM',
		jquery     : 'jQuery', // import $ from 'jquery' // Use the WordPress version.
	},
};
