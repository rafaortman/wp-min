<!-- front-page.php -->

<?php get_header(); ?>

<main class="front-page">
	<?php $slides = carbon_get_the_post_meta( 'slides' ); ?>
	<?php if( $slides ) : ?>
		<section id="slides">
			<?php foreach($slides as $slide) : ?>
				<?= ( $slide[ 'link' ] ) ? '<a href="' . $slide[ 'link' ] . '" class="slide" ' : '<div class="slide" ' ; ?>
				<?= ( $slide[ 'imagem' ] ) ? 'style="background-image:url(' . wp_get_attachment_image_url( $slide[ 'imagem' ], 'url') . ')">' : '>'; ?>
				<div class="slide-wrapper">
					<div class="slide-texto">
						<h2 class="slide-titulo">
							<?= $slide[ 'titulo' ]; ?>
						</h2>
						<div class="slide-conteudo">
							<?= $slide[ 'conteudo' ]; ?>
						</div>
					</div>	
				</div>
				<?= ( $slide[ 'link' ] ) ? '</a>' : '</div>' ; ?>
			<?php endforeach; ?>
		</section>
	<?php endif; ?>
</main>

<?php get_footer(); ?>
