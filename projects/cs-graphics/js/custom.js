 $(document).ready(function() {
     $('.slider').bxSlider({
         auto: true,
         mode: 'fade',
         autoControls: true,
         stopAutoOnClick: true,
         pager: false,
         nav:false
     });
     $('#nav-icon3').click(function() {
         $(this).toggleClass('open');
         $('header .navbar ul').toggleClass('active');
         $('body').toggleClass('open');
     });

     $('.ourwork-content .portfolio-share .project-info').click(function(e) {
        e.preventDefault();
         $('.ourwork-content .portfolio-content').addClass('active');
     });
     $('.ourwork-content .portfolio-content .close').click(function(e) {
        e.preventDefault();
         $('.ourwork-content .portfolio-content').removeClass('active');
     });
 });