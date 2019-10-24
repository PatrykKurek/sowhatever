<?php

function animate_js(){
	
	wp_enqueue_script('animate js', get_stylesheet_directory_uri() . '/js/animate.js' , array('jquery'), '1.0.0', false);
}
add_action('wp_enqueue_scripts', 'animate_js');
function resources(){

    wp_enqueue_style('style', get_stylesheet_uri());
}

add_action('wp_enqueue_scripts', 'resources');

//Navigation Menus

register_nav_menus(array(

    'primary' => __('Primary Menu'),
    'footer' => __('Footer Menu')
));
