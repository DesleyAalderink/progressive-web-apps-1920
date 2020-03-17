<?php
	function build_docenten_post_type() {
		register_post_type('docenten',
				array(
					'labels'=> array(
						'name'						=> 'Docenten',
						'singular_name'		=> 'Docent',
						'add_new_item'		=> 'Docent toevoegen',
						'add_new'					=> 'Docent toevoegen',
						'all_items'				=> 'Alle Docenten'
					),
					'public' 		=> true,
					'menu_position'	=> 4,
					'menu_icon'   => 'dashicons-groups',
					'hierarchical'	=> true,
					'supports' => array('title', 'thumbnail')
			)
		);
	}

	add_action('init', 'build_docenten_post_type');

	function docent_add_metabox(){
		add_meta_box("docent_meta", "docent_linkPanel", "docenten", "normal", "low");
	}

	add_action("admin_init", "docent_add_metabox");

	function docent_save_details() {

		global $post;

		if(isset($post)){
    		$post_type = $post->post_type;

    		if($post->ID) {

    			switch($post_type) {


    				case 'docenten':

    					// Update docent
    					if(isset($_POST["docent_link"]))
    						update_post_meta($post->ID, "docent_link", $_POST["docent_link"]);

    	      	break;

    				default:
    			}

    		}
        }

	}

	add_action('save_post', 'docent_save_details');

?>
