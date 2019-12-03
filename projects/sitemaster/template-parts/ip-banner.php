<!-- ip atf starts here -->
<section class="ip-atf">
    <div class="ip-atf-detail">
        <div class="ip-atf-slider">
            <?php
            $description = get_bloginfo( 'description', 'display' );
            if ( $description || is_customize_preview() ) :
                ?>
                    <span class="title">
                        <?php echo $description; ?>
                    </span>
            <?php endif; ?>
            <span class="author"><?php bloginfo( 'name' ); ?></span>
        </div>         
        <div class="contactus-btn">
            <a href="#" class="cta"><?php bloginfo( 'name' ); ?></a>
        </div>   
    </div>
</section>
<!-- ip atf ends here -->