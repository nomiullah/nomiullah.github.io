<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Site_Master
 * @since 1.0.0
 */
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="profile" href="https://gmpg.org/xfn/11" />
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">

	<header id="masthead" class="<?php echo is_singular() && sitemaster_can_show_post_thumbnail() ? 'header featured-image' : 'header'; ?>">		
		
			<?php get_template_part( 'template-parts/header/site', 'branding' ); ?>

		<?php if ( is_singular() && sitemaster_can_show_post_thumbnail() ) : ?>
			<div class="site-featured-image">
				<?php
					sitemaster_post_thumbnail();
					the_post();
					$discussion = ! is_page() && sitemaster_can_show_post_thumbnail() ? sitemaster_get_discussion_data() : null;

					$classes = 'entry-header';
				if ( ! empty( $discussion ) && absint( $discussion->responses ) > 0 ) {
					$classes = 'entry-header has-discussion';
				}
				?>
				<div class="<?php echo $classes; ?>">
					<?php get_template_part( 'template-parts/header/entry', 'header' ); ?>
				</div><!-- .entry-header -->
				<?php rewind_posts(); ?>
			</div>
		<?php endif; ?>
	</header><!-- #masthead -->

	<ul class="sm-nav">    
        <li><a href="sms:8005555555">MESSAGE US</a></li>
        <li><a href="tel:8005555555">CALL US</a></li>
    </ul>

	<div id="content" class="content">

		
		<?php if(is_home() || is_front_page()):?>
		<!-- atf starts here -->
        <section class="hp-atf-bg">
            <div class="atf-detail">
                <h1><?php bloginfo( 'name' ); ?></h1>

                <?php
				$description = get_bloginfo( 'description', 'display' );
				if ( $description || is_customize_preview() ) :
					?>
						<span class="subtitle">
							<?php echo $description; ?>
						</span>
				<?php endif; ?>
                <div class="clear"></div>
                <button class="cta form-cta"><?php bloginfo( 'name' ); ?></button>
            </div>
        </section>
        <!-- atf ends here -->
		<?php endif;