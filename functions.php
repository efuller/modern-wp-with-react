<?php

/**
* Load styles and scripts.
*/
require get_template_directory() . '/inc/scripts.php';

// Enable featured images.
add_theme_support( 'post-thumbnails' );

add_action( 'rest_api_init', 'epf_insert_thumbnail_url' );
function epf_insert_thumbnail_url() {
	register_rest_field( 'post',
		'thumbnail',
		array(
			'get_callback'    => 'epf_get_thumbnail_url',
			'update_callback' => null,
			'schema'          => null,
		)
	);
}

function epf_get_thumbnail_url( $post ){
	if(has_post_thumbnail( $post['id']) ){
		$imgArray = wp_get_attachment_image_src( get_post_thumbnail_id( $post['id'] ), 'full' );
		$imgURL = $imgArray[0];
		return $imgURL;
	} else {
		return false;
	}
}