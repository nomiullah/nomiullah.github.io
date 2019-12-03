<?php
/**
 * Displays header site branding
 *
 * @package WordPress
 * @subpackage Site_Master
 * @since 1.0.0
 */
?>
	
	<div class="logo trn-3s">
		<?php if ( has_custom_logo() ) : ?>
			<div class="site-logo"><?php the_custom_logo(); ?></div>
		<?php endif; ?>
		<?php $blog_info = get_bloginfo( 'name' ); ?>
		<?php if ( ! empty( $blog_info ) ) : ?>
			<?php if ( is_front_page() && is_home() ) : ?>
				<h1 class="site-title trn-3s"><a class="trn-3s" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1><br>
			<?php else : ?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
			<?php endif; ?>
		<?php endif; ?>


		<?php
		$description = get_bloginfo( 'description', 'display' );
		if ( $description || is_customize_preview() ) :
			?>
				<!-- <p class="site-description">
					<?php //echo $description; ?>
				</p> -->
		<?php endif; ?>
	</div>

	<div class="header-right">
	<?php if ( has_nav_menu( 'menu-1' ) || has_nav_menu( 'social' ) ) : ?>
		<div class="nav main-nav">
		<?php if ( has_nav_menu( 'menu-1' ) ) : ?>
			<nav id="site-navigation" class="nav main-navigation" aria-label="<?php esc_attr_e( 'Top Menu', 'sitemaster' ); ?>">
				<div class="nav-inner">
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'menu-1',
						'menu_class'     => 'main-menu',
						'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
					)
				);
				?>
				</div>
			</nav><!-- #site-navigation -->
		<?php endif; ?>
		<?php if ( has_nav_menu( 'social' ) ) : ?>
			<nav class="nav social-navigation" aria-label="<?php esc_attr_e( 'Social Links Menu', 'sitemaster' ); ?>">
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'social',
						'menu_class'     => 'social-links-menu',
						'link_before'    => '<span class="screen-reader-text">',
						'link_after'     => '</span>' . sitemaster_get_icon_svg( 'link' ),
						'depth'          => 1,
					)
				);
				?>
			</nav><!-- .social-navigation -->
		<?php endif; ?>
		</div>
		<?php endif; ?>

		<?php if ( !has_nav_menu( 'menu-1' ) ) :?>
			<nav id="site-navigation" class="nav main-navigation">
				<div class="nav-inner">
					<div class="menu-main-menu-container">
						<ul id="menu-main-menu" class="main-menu">
							<li id="menu-item-1" class="menu-item menu-item-5"><a href="#">Page 1</a></li>
							<li id="menu-item-2" class="menu-item menu-item-6">
								<a href="#">Page 2</a>
								<ul class="sub-menu">
								    <li><a href="#">Submenu 1</a></li>
								    <li class="parent">
								        <a href="#">Submenu 1</a>
								        <ul class="sub-menu">
								            <li><a href="#">Submenu 1</a></li>
								            <li><a href="#">Submenu 1</a></li>
								            <li><a href="#">Submenu 1</a></li>
								        </ul>
								    </li>
								    <li><a href="#">Submenu 1</a></li>
								</ul>
							</li>
							<li id="menu-item-3" class="menu-item menu-item-7"><a href="#">Page 3</a></li>
						</ul>
					</div>	
				</div>		
			</nav>
		<?php endif; ?>	

		<a href="tel:8005555555" class="header-tel trn-3s">
	        <span>
	            call
	            <div class="a">(000) 000-0000</div>
	        </span>
	    </a>

	    <div class="menu-btn">
	    	<span></span>
	    	<span></span>
	    	<span></span>
	    </div>

	</div>
