/**
 * Webpack Configuration
 *
 * Working of a Webpack can be very simple or complex. This is an intenally simple
 * build configuration.
 *
 * @since 1.0.0
 */
const webpack              = require('webpack');
const autoprefixer         = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths                = require('./paths');

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

function recursiveIssuer(m) {
	if (m.issuer) {
		return recursiveIssuer(m.issuer);
	} else if (m.name) {
		return m.name;
	} else {
		return false;
	}
}


// Export configuration.
module.exports = {
	mode        : 'development',
	entry       : {
		'./dist/blocks.build'       : paths.pluginBlocksJs, // 'name' : 'path/file.ext'.
		'./dist/blocks.editor.build': paths.pluginEditorBlocksJs, // 'name' : 'path/file.ext'.
	},
	output      : {
		// Add /* filename */ comments to generated require()s in the output.
		pathinfo: true,
		// The dist folder.
		path    : paths.pluginDist,
		filename: '[name].js', // [name] = './dist/blocks.build' as defined above.
	},
	// You may want 'eval' instead if you prefer to see the compiled output in DevTools.
	devtool     : 'source-map',
	devServer   : {
		contentBase       : '/',
		historyApiFallback: true,
		hot               : true,
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
		splitChunks: {
			cacheGroups: {
				styles: {
					name   : 'styles',
					test   : (m, c, entry = './dist/blocks.build') => m.constructor.name === 'CssModule' && recursiveIssuer(
						m) === entry,
					chunks : 'all',
					enforce: true
				},
				editor: {
					name   : 'editor',
					test   : (m, c, entry = './dist/blocks.editor.build') => m.constructor.name === 'CssModule' && recursiveIssuer(
						m) === entry,
					chunks : 'all',
					enforce: true
				}
			}
		}
	},
	// Add plugins.
	plugins     : [
		new webpack.WatchIgnorePlugin([
			/s?css\.d\.ts$/,
		]),
		new MiniCssExtractPlugin({
			filename     : `[name].css`,
			chunkFilename: `chunks/[name].css`,
		}),
	],
	resolve     : {
		extensions      : ['.tsx', '.ts', '.js', '.jsx', '.es6', '.scss', '.d.ts'],
		enforceExtension: false,
	},
	stats       : 'minimal',
	// stats: 'errors-only',
	// Add externals.
	externals   : {
		react      : 'React',
		'react-dom': 'ReactDOM',
		ga         : 'ga', // Old Google Analytics.
		gtag       : 'gtag', // New Google Analytics.
		jquery     : 'jQuery', // import $ from 'jquery' // Use the WordPress version.
	},
};
