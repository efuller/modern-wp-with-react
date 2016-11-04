<?php

/**
 * Register Google font.
 *
 * @link http://themeshaper.com/2014/08/13/how-to-add-google-fonts-to-wordpress-themes/
 */
function modernwp_font_url() {
	$fonts_url = '';
	/**
	 * Translators: If there are characters in your language that are not
	 * supported by the following, translate this to 'off'. Do not translate
	 * into your own language.
	 */
	$roboto = _x( 'on', 'Roboto font: on or off', 'modernwp' );
	$open_sans = _x( 'on', 'Open Sans font: on or off', 'modernwp' );
	if ( 'off' !== $roboto || 'off' !== $open_sans ) {
		$font_families = array();
		if ( 'off' !== $roboto ) {
			$font_families[] = 'Roboto:300,400,700';
		}
		if ( 'off' !== $open_sans ) {
			$font_families[] = 'Open Sans:400,300,700';
		}
		$query_args = array(
			'family' => urlencode( implode( '|', $font_families ) ),
		);
		$fonts_url = add_query_arg( $query_args, '//fonts.googleapis.com/css' );
	}
	return $fonts_url;
}

/**
 * Enqueue theme scripts and styles
 */
function modernwp_scripts() {
	
	$version = '1.0.0';

	wp_enqueue_style( 'modernwp-font', modernwp_font_url(), array(), null );

	wp_enqueue_style( 'modernwp-style', get_stylesheet_directory_uri() . '/assets/style.css', array(), $version );

	// Enqueue scripts.
	wp_enqueue_script( 'modernwp-scripts', get_template_directory_uri() . '/assets/scripts.js', array(), $version, true );
	wp_localize_script( 'modernwp-scripts', 'WP_API', array(
		'api_url' => esc_url_raw( rest_url() ),
		'nonce'   => wp_create_nonce( 'wp_rest' ),
	) );
}
add_action( 'wp_enqueue_scripts', 'modernwp_scripts' );