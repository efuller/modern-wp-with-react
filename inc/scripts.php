<?php

/**
 * Enqueue theme scripts and styles
 */
function modernwp_scripts() {
	
	$version = '1.0.0';

	wp_enqueue_style( 'modernwp-style', get_stylesheet_directory_uri() . '/assets/style.css', array(), $version );

	// Enqueue scripts.
	wp_enqueue_script( 'modernwp-scripts', get_template_directory_uri() . '/assets/scripts.js', array(), $version, true );
}
add_action( 'wp_enqueue_scripts', 'modernwp_scripts' );