<?php
/**
 * Plugin Name: Gutenberg Bootstrap 4 Blocks
 * Plugin URI: https://github.com/buckpesch-io/gutenberg-bootstrap
 * Description: Add bootstrap 4 components using Gutenberg
 * Author: Sebastian Buckpesch <sebastian@buckpesch.io>
 * Author URI: https://buckpesch.io/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package Gutenberg_Bootstrap_Blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
 */
add_action( 'init', 'gutenberg_bootstrap_load_textdomain' );

function gutenberg_bootstrap_load_textdomain() {
	load_plugin_textdomain( 'gutenberg-bootstrap', false, basename( __DIR__ ) . '/languages' );
}


/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function gutenberg_bootstrap_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	wp_register_script(
		'gutenberg-bootstrap',
		plugins_url( 'blocks/block.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'blocks/block.build.js' )
	);

	wp_register_style(
		'gutenberg-bootstrap',
		plugins_url( 'assets/css/style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'assets/css/style.css' )
	);

	register_block_type( 'gutenberg-bootstrap/alert', array(
		'style' => 'gutenberg-bootstrap',
		'script' => 'gutenberg-bootstrap',
	) );

	/*
	 * Pass already loaded translations to our JavaScript.
	 *
	 * This happens _before_ our JavaScript runs, afterwards it's too late.
	 */
	wp_add_inline_script(
		'gutenberg-bootstrap',
		sprintf(
			'var gutenberg_bootstrap = { localeData: %s };',
			json_encode( gutenberg_get_jed_locale_data( 'gutenberg-bootstrap' ) )
		),
		'before'
	);

}
add_action( 'init', 'gutenberg_bootstrap_register_block' );
