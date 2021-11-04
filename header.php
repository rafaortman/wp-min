<!doctype html>
<html <?php language_attributes(); ?> style="margin-top:0 !important">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" type="image/png" href="<?php bloginfo('template_url'); ?>/favicon.png">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

    <header id="siteTopo">
        <h1>
            <?php the_custom_logo(); ?>
            <span class="sr-only">
                <?php bloginfo('name'); ?>
            </span>
        </h1>
        <div id="searchForm">
            <?php get_search_form(); ?>
        </div>
        <?php 
            wp_nav_menu( 
                array(
                    'menu'              => "menu", 
                    'menu_class'        => "menu", 
                    'menu_id'           => "menuPrincipal", 
                    'container'         => "nav",
                    'container_class'   => "menu-container",
                ) 
            );  
        ?>
	<?php 
            if ( function_exists ( 'wpm_language_switcher' ) ) { 
                wpm_language_switcher ('list','flag'); 
            }
        ?>
        <button id="menuBt" class="toggle-bt">
            <span class="stripes">
                <span class="stripe stripe-top"></span>
                <span class="stripe stripe-mid stripe-x1"></span>
                <span class="stripe stripe-mid stripe-x2"></span>
                <span class="stripe stripe-bot"></span>
            </span>
        </button>
    </header>
