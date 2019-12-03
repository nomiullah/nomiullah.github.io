<?php 
/**
* The template for displaying 404 pages (Not Found)
*
*/
get_header(); ?>
<!-- <script>
window.history.pushState("", "", '/notFound');
</script> -->

<!-- Inner Banner Start -->
<?php require ('template-parts/ip-banner.php');?>
<!-- Inner Banner End -->

	<div class="ip-detail-outer">
		<div class="ip-inner">
			<div class="ip-left">
				<div class="content-col-inner">
					<div class="title blog-content-inner title-404">
					
						<h1>404 ERROR: OOPS!</h1>
                        <h3>We can't seem to find the page you're looking for.</h3>                 
                
                	</div>
				</div>
			</div>
			<div class="ip-asidebar">
				<div class="sidebar-menu">
					<section id="recent-posts-2" class="widget widget_recent_entries">		
						<h2>Legal Resources</h2>		
						<!-- <?php //dynamic_sidebar();?> -->
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
					</section>
				</div>
			</div>
			<div class="clear"></div>
		</div>
	</div>
<?php get_footer(); ?>