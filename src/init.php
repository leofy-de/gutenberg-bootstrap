<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function bootstrap_blocks_cgb_block_assets() {
	// Scripts.
	wp_enqueue_script(
		'bootstrap_blocks-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		[ 'wp-blocks', 'wp-i18n', 'wp-element', 'jquery' ], // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Styles.
	// CSS Module styles, extracted by MiniCssExtractPlugin
	wp_enqueue_style(
		'bootstrap_blocks-cgb-block-editor-module-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		[ 'wp-edit-blocks' ] // Dependency to include the CSS after it.
	);
	// CSS styles by from src/assets/editor.scss
	wp_enqueue_style(
		'bootstrap_blocks-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		[ 'wp-edit-blocks' ] // Dependency to include the CSS after it.
	);
	// CSS styles by from src/assets/style.scss
	wp_enqueue_style(
		'bootstrap_blocks-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		[ 'wp-blocks' ] // Dependency to include the CSS after it.
	);
} // End function bootstrap_blocks_cgb_block_assets().

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'bootstrap_blocks_cgb_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function bootstrap_blocks_cgb_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'bootstrap_blocks-cgb-block-editor-js', // Handle.
		plugins_url( '/dist/blocks.editor.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		[ 'wp-blocks', 'wp-i18n', 'wp-element' ], // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Styles.
	// CSS Module styles, extracted by MiniCssExtractPlugin
	wp_enqueue_style(
		'bootstrap_blocks-cgb-block-editor-module-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		[ 'wp-edit-blocks' ] // Dependency to include the CSS after it.
	);
	// CSS styles by from src/assets/editor.scss
	wp_enqueue_style(
		'bootstrap_blocks-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.style.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		[ 'wp-edit-blocks' ] // Dependency to include the CSS after it.
	);
} // End function bootstrap_blocks_cgb_editor_assets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'bootstrap_blocks_cgb_editor_assets' );

// Add a custom block category
add_filter( 'block_categories', function ( $categories, $post ) {
	return array_merge(
		$categories,
		[
			[
				'slug'  => 'gbb',
				'title' => __( 'Bootstrap Blocks', 'gbb' ),
			],
		]
	);
}, 10, 2 );
