<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Site_Master
 * @since 1.0.0
 */

?>

<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="title-header">
		<?php
		if ( is_sticky() && is_home() && ! is_paged() ) {
			printf( '<span class="sticky-post">%s</span>', _x( 'Featured', 'post', 'sitemaster' ) );
		}
		if ( is_singular() ) :
			the_title( '<h1 class="title">', '</h1>' );
		else :
			the_title( sprintf( '<h2 class="title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );
		endif;
		?>
	</header><!-- .title-header -->

	<?php sitemaster_post_thumbnail(); ?>

	<div class="entry-content">
		<?php
		the_content(
			sprintf(
				wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers */
					__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'sitemaster' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				get_the_title()
			)
		);

		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'sitemaster' ),
				'after'  => '</div>',
			)
		);
		?>
	</div><!-- .content -->

	<div class="title-options">
		<?php sitemaster_entry_footer(); ?>
	</div><!-- .options -->
</div><!-- #post-<?php the_ID(); ?> -->
