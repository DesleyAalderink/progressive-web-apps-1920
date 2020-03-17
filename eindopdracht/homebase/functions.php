<?php

define( 'TEMPLATE_FILE_PATH', dirname( __FILE__ ) );

// post types
require_once( TEMPLATE_FILE_PATH . '/_functions/posttypes/ptype-docenten.php' );

// functions
require_once( TEMPLATE_FILE_PATH . '/_functions/wp_bootstrap_navwalker.php' ); //Navwalker
require_once( TEMPLATE_FILE_PATH . '/_functions/theme_settings.php' ); //Thema options
// require_once $_SERVER['DOCUMENT_ROOT'] . '/service-worker.js';

// Widgets
remove_filter( 'the_content', 'wpautop' );
// Shortcodes
// Async load
function async_scripts($url)
{
    if ( strpos( $url, '#asyncload') === false )
        return $url;
    else if ( is_admin() )
        return str_replace( '#asyncload', '', $url );
    else
	return str_replace( '#asyncload', '', $url )."' async='async";
    }
add_filter( 'clean_url', 'async_scripts', 11, 1 );


function theme_setup(){
	register_nav_menu( 'hoofdmenu', 'Hoofdmenu' );

	add_theme_support( 'post-thumbnails' );
	/*
		add thumb size template

		add_image_size('thumb name', width, height, crop);

		Use thumbnail regenerator for image sizes to take effect
	*/
	add_image_size('background', 1920, 1080, true);
	add_image_size('functie-thumb', 700, 600, true);

}

add_action('after_setup_theme', 'theme_setup');

function load_scripts() {
  wp_enqueue_script('serviceworker', '/register-service-worker.js', array(), false, true);
	wp_enqueue_script( 'modernizr',  get_stylesheet_directory_uri() . '/assets/js/modernizr.min.js#asyncload', array(), false, true);
  wp_enqueue_script( 'main',  get_stylesheet_directory_uri() . '/assets/js/main.js#asyncload', array('jquery') , false, true);
  // wp_enqueue_script( 'serviceworker',  get_stylesheet_directory_uri() . '/service-worker.js#asyncload', array('jquery') , false, true);
  wp_enqueue_script( 'gsap',  get_stylesheet_directory_uri() . '/bower_components/greensock-js-business-green/src/minified/jquery.gsap.min.js', array('jquery') , false, true);
  wp_enqueue_script( 'tweenmax',  get_stylesheet_directory_uri() . '/bower_components/greensock-js-business-green/src/minified/TweenMax.min.js', array('jquery') , false, true);
  // wp_enqueue_style( '_homepage-stylesheet', get_template_directory_uri() . '/dev/styles/critical.css', array(), false, false );

	// on debug we seperate our own written javascripts from the javascripts included from bower
	if(WP_DEBUG) {
    wp_enqueue_script( 'scripts',  get_stylesheet_directory_uri() . '/assets/scripts/scripts.js#asyncload', array('jquery') , false, true);
    wp_enqueue_script( 'modernizr',  get_stylesheet_directory_uri() . '/assets/scripts/modernizr.js#asyncload', array('jquery') , false, true);
		wp_enqueue_style( 'fonts',  get_stylesheet_directory_uri() . '/assets/styles/fonts.css', array(), false, false);
    wp_enqueue_script( 'gsap',  get_stylesheet_directory_uri() . '/bower_components/greensock-js-business-green/src/minified/jquery.gsap.min.js', array('jquery') , false, true);
    wp_enqueue_script( 'tweenmax',  get_stylesheet_directory_uri() . '/bower_components/greensock-js-business-green/src/minified/TweenMax.min.js', array('jquery') , false, true);
    wp_enqueue_script( 'main',  get_stylesheet_directory_uri() . '/dev/scripts/main.js#asyncload', array('jquery') , false, true);
	}

  if (is_page_template("templates/template-homepage.php")) {
	   wp_enqueue_style( 'criticalHome',  get_stylesheet_directory_uri() . '/assets/css/homepage.css', array(), false, false);
  }

	//styles
	// wp_enqueue_style( 'vendor',  get_stylesheet_directory_uri() . '/assets/styles/vendor.css', array(), false, false);
	// wp_enqueue_style( 'main',  get_stylesheet_directory_uri() . '/assets/css/main.css', array(), false, true);
}

function prefix_add_footer_styles() {
  wp_enqueue_style( 'main',  get_stylesheet_directory_uri() . '/assets/css/main.css', array());
};
add_action( 'get_footer', 'prefix_add_footer_styles' );

add_action( 'wp_enqueue_scripts', 'load_scripts' );
add_action( 'init', 'my_add_excerpts_to_pages' );
function my_add_excerpts_to_pages() {
     add_post_type_support( 'page', 'excerpt' );
}

//remove html margin
function remove_admin_login_header() {
    remove_action('wp_head', '_admin_bar_bump_cb');
}
add_action('get_header', 'remove_admin_login_header');

?>
