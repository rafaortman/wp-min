<?php  
    use Carbon_Fields\Container;
    use Carbon_Fields\Field;

// Redes sociais
    add_action( 'carbon_fields_register_fields', 'redes_sociais' );
    function redes_sociais() {
        Container::make( 'theme_options', 'Redes Sociais' )
        ->add_fields( array(
            Field::make( 'complex', 'redes_sociais', 'Redes sociais' )
                ->set_layout( 'tabbed-horizontal' )
                ->add_fields( array(
                    Field::make( 'text', 'nome', 'Nome' ),
                    Field::make( 'text', 'link', 'Link' ),
                    Field::make( 'image', 'icone', 'Ícone' )
                        ->set_value_type('url'),
            ) )
        ) );
    }
    
// Site logo
    add_action( 'carbon_fields_register_fields', 'site_logo' );
    function site_logo() {
        Container::make( 'theme_options', 'Site logo' )
        ->add_fields( array(
            Field::make( 'image', 'logo', 'Logo' )
                ->set_value_type('url')
        ) );
    }

// Página inicial
    add_action( 'carbon_fields_register_fields', 'home_fields' );
    function home_fields() {
        Container::make( 'post_meta', 'Slides' )
            ->where( 'post_id', '=', '8' ) // only show our new fields on pages
            ->add_fields( array(
                Field::make( 'complex', 'slides', 'Slides' )
                    ->set_layout( 'tabbed-horizontal' )
                    ->add_fields( array(
                        Field::make( 'text', 'titulo', 'Título' ),
                        Field::make( 'rich_text', 'conteudo', 'Conteúdo' ),
                        Field::make( 'text', 'link', 'Link' ),
                        Field::make( 'image', 'imagem', 'Imagem' )
                            ->set_value_type('url')
                    ) ),
            ) );
    }

// Page 
    add_action( 'carbon_fields_register_fields', 'page_fields' );
    function page_fields() {
        Container::make( 'post_meta', 'Conteúdo auxiliar' )
        ->where( 'post_type', '=', 'page' )
        ->add_fields( array(
            Field::make( 'rich_text', 'barra_lateral', 'Insira o conteúdo da barra lateral (ou deixe vazio se não for utilizar esse espaço).' )
        ));
    }

// Hide the_content
    add_action( 'admin_init', 'hide_editor' );
    function hide_editor() {
        if(isset($_GET['post'])) {
            $post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
            if( !isset( $post_id ) ) return;
                $page_title = get_the_title($post_id);
            if($page_title == 'Página inicial'){ 
                remove_post_type_support('page', 'editor');
            }
        }
    }
?>
