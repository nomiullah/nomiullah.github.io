$(document).ready(function(){

  // MODAL
  var modalText = {
    ug: {
      title: 'undergroundcellar.com/',
      tag: 'BUSINESS ANALYTICS.',
      detail: 'Underground Cellar is a groundbreaking online wine marketplace for discovering and buying premium wine that randomly rewards our consumers with free upgrades to rare and private-stash bottles from prestigious wineries.',
      link: 'https://www.undergroundcellar.com/'
    },
    otrading: {
      title: 'OracleTrading',
      tag: 'Online Trading.',
      detail: 'Oracle Trading Inc. is an importer and distributor of officially licensed soccer and entertainment merchandise. We also provide international flag themed products for over 150 countries. We specialize in providing retailers throughout North America.',
      link: 'https://www.oracletrading.ca/'
    },
    agency: {
      title: 'ShootAndCut',
      tag: 'Advertisement Agency',
      detail: 'Shoot & Cut work is driven by the spirit of ‘Social & Media Entrepreneurship’, with strong conviction to facilitate media, development and humanitarian partners to find robust solutions by offering technology innovation to fulfil the ‘Development Communication Needs’ of its clientele.',
      link: 'http://www.shootandcut.org/'
    },
    hijabs: {
      title: 'uniquehijabs.com',
      tag: 'Unique Hijabs.',
      detail: 'UNIQUE HIJABS IS A COMPANY BASED IN THE USA AND IS A FAMILY RUN BUSINESS.  IT ALL STARTED WITH A NEED FOR AN EASY TO WEAR HIJAB AND THEN A DESIRE TO SHARE OUR HANDMADE HIJABS WITH THE REST OF THE WORLD.',
      link: 'https://uniquehijabs.com/'
    },
    learning: {
      title: 'LearningrxFranchise',
      tag: 'learning Platform ',
      detail: 'LearningRx is one of the top educational and child brain training franchises in the nation. We change lives every day through the incredible power of our brain training programs!',
      link: 'https://www.learningrx-franchise.com/ '
    },
    route: {
      title: 'Route 5 va Organization',
      tag: 'Tour and Routes.',
      detail: '“It is doubtful that a comparable area exists elsewhere in the Commonwealth, or indeed, in the nation….” -Route 5 Corridor Study, To the Governor and the Virginia General Assembly, 1992',
      link: 'https://route5va.org/'
    },
    roambi: {
      title: 'Roambi.com',
      tag: 'BUSINESS ANALYTICS.',
      detail: 'Roambi provides analytics, reporting, and business intelligence for companies to use on the go. A Wordpress hosted site written in PHP and Javascript with Hubspot Integration.',
      link: 'http://www.roambi.com'
    },
    walker: {
      title: 'WalkerTracker',
      tag: 'PERFORMANCE METRICS.',
      detail: 'Walker Tracker offers goal management, fitness tracking, and team competitions to companies for internal use. A Ruby on Rails and Javascript companion site for the Walker Tracker App. Features visual metrics and gamified progression system.',
    },
    powur: {
      title: 'Powur.com',
      tag: 'MULTI-LEVEL MARKETING.',
      detail: 'Powur is a multi-level marketing platform for lead generation, recruitment, and team building. Built with Ruby on Rails and Angular-UI. Makes use of Angular-material for front-end visuals. Features complex user tree heiarchy and commission system.',
      link: 'http://www.powur.com/with/42'
    },
    mystand: {
      title: 'MyStand',
      tag: 'CROWD-FUNDED CHARITY.',
      detail: 'MyStand is a crowd-funding, media sharing website, that has you donating actions instead of money out of your pocket. Single page App built with Node.js on Sails and Angular 2.0. Features social media sharing and large scale crowd-funding.',
    },
    never: {
      title: 'NeverSurrender',
      tag: 'ALS AWARENESS.',
      detail: 'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.',
    },
    themall: {
      title: 'The Mall',
      tag: 'PEER GUIDED SHOPPING.',
      detail: 'The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.',
    }
  };

  $('#gallery .button').on('click', function(){
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
      slideWidth = 700,
      threshold = slideWidth/3,
      dragStart, 
      dragEnd;

  setDimensions();

  $('#next').click(function(){ shiftSlide(-1) })
  $('#prev').click(function(){ shiftSlide(1) })

  carousel.on('mousedown', function(){
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function(){
      dragEnd = event.pageX;
      $(this).css('transform','translateX('+ dragPos() +'px)');
    });
    $(document).on('mouseup', function(){
      if (dragPos() > threshold) { return shiftSlide(1) }
      if (dragPos() < -threshold) { return shiftSlide(-1) }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1)
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup')
    carousel.off('mousemove')
            .addClass('transition')
            .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
    setTimeout(function(){
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition')
      carousel.css('transform','translateX(0px)'); 
    },700)
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link) $('#modal .button').addClass('visible')
                                               .parent()
                                               .attr('href', modalText[id].link)

    $.each($('#modal li'), function(index, value ) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background: "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
              
    });
  }
})




