<?php

/**
 * Enqueue theme scripts and styles
 */
function modernwp_scripts() {
	
	$version = '1.0.0';

	wp_enqueue_style( 'modernwp-style', get_stylesheet_directory_uri() . '/assets/style.css', array(), $version );

	// Enqueue scripts.
	wp_enqueue_script( 'modernwp-scripts', get_template_directory_uri() . '/assets/scripts.js', array(), $version, true );
	wp_localize_script( 'modernwp-scripts', 'WP_API', array(
		'api_url' => esc_url_raw( rest_url() ),
		'nonce'   => wp_create_nonce( 'wp_rest' ),
	) );
}
add_action( 'wp_enqueue_scripts', 'modernwp_scripts' );