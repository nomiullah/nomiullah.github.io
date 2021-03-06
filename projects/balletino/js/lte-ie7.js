/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-code' : '&#xe22d;',
			'icon-home' : '&#xe000;',
			'icon-home-2' : '&#xe001;',
			'icon-home-3' : '&#xe002;',
			'icon-office' : '&#xe003;',
			'icon-newspaper' : '&#xe004;',
			'icon-pencil' : '&#xe005;',
			'icon-pencil-2' : '&#xe006;',
			'icon-quill' : '&#xe007;',
			'icon-pen' : '&#xe008;',
			'icon-blog' : '&#xe009;',
			'icon-droplet' : '&#xe00a;',
			'icon-paint-format' : '&#xe00b;',
			'icon-image' : '&#xe00c;',
			'icon-image-2' : '&#xe00d;',
			'icon-images' : '&#xe00e;',
			'icon-camera' : '&#xe00f;',
			'icon-music' : '&#xe010;',
			'icon-headphones' : '&#xe011;',
			'icon-play' : '&#xe012;',
			'icon-film' : '&#xe013;',
			'icon-camera-2' : '&#xe014;',
			'icon-dice' : '&#xe015;',
			'icon-pacman' : '&#xe016;',
			'icon-spades' : '&#xe017;',
			'icon-clubs' : '&#xe018;',
			'icon-diamonds' : '&#xe019;',
			'icon-pawn' : '&#xe01a;',
			'icon-bullhorn' : '&#xe01b;',
			'icon-connection' : '&#xe01c;',
			'icon-podcast' : '&#xe01d;',
			'icon-feed' : '&#xe01e;',
			'icon-book' : '&#xe01f;',
			'icon-books' : '&#xe020;',
			'icon-library' : '&#xe021;',
			'icon-file' : '&#xe022;',
			'icon-profile' : '&#xe023;',
			'icon-file-2' : '&#xe024;',
			'icon-file-3' : '&#xe025;',
			'icon-file-4' : '&#xe026;',
			'icon-copy' : '&#xe027;',
			'icon-copy-2' : '&#xe028;',
			'icon-copy-3' : '&#xe029;',
			'icon-paste' : '&#xe02a;',
			'icon-paste-2' : '&#xe02b;',
			'icon-paste-3' : '&#xe02c;',
			'icon-stack' : '&#xe02d;',
			'icon-folder' : '&#xe02e;',
			'icon-folder-open' : '&#xe02f;',
			'icon-tag' : '&#xe030;',
			'icon-tags' : '&#xe031;',
			'icon-barcode' : '&#xe032;',
			'icon-qrcode' : '&#xe033;',
			'icon-ticket' : '&#xe034;',
			'icon-cart' : '&#xe035;',
			'icon-cart-2' : '&#xe036;',
			'icon-cart-3' : '&#xe037;',
			'icon-coin' : '&#xe038;',
			'icon-credit' : '&#xe039;',
			'icon-calculate' : '&#xe03a;',
			'icon-support' : '&#xe03b;',
			'icon-phone' : '&#xe03c;',
			'icon-phone-hang-up' : '&#xe03d;',
			'icon-address-book' : '&#xe03e;',
			'icon-notebook' : '&#xe03f;',
			'icon-envelop' : '&#xe040;',
			'icon-pushpin' : '&#xe041;',
			'icon-location' : '&#xe042;',
			'icon-location-2' : '&#xe043;',
			'icon-compass' : '&#xe044;',
			'icon-map' : '&#xe045;',
			'icon-map-2' : '&#xe046;',
			'icon-history' : '&#xe047;',
			'icon-clock' : '&#xe048;',
			'icon-clock-2' : '&#xe049;',
			'icon-alarm' : '&#xe04a;',
			'icon-alarm-2' : '&#xe04b;',
			'icon-bell' : '&#xe04c;',
			'icon-stopwatch' : '&#xe04d;',
			'icon-calendar' : '&#xe04e;',
			'icon-calendar-2' : '&#xe04f;',
			'icon-print' : '&#xe050;',
			'icon-keyboard' : '&#xe051;',
			'icon-screen' : '&#xe052;',
			'icon-laptop' : '&#xe053;',
			'icon-mobile' : '&#xe054;',
			'icon-mobile-2' : '&#xe055;',
			'icon-tablet' : '&#xe056;',
			'icon-tv' : '&#xe057;',
			'icon-cabinet' : '&#xe058;',
			'icon-drawer' : '&#xe059;',
			'icon-drawer-2' : '&#xe05a;',
			'icon-drawer-3' : '&#xe05b;',
			'icon-box-add' : '&#xe05c;',
			'icon-box-remove' : '&#xe05d;',
			'icon-download' : '&#xe05e;',
			'icon-upload' : '&#xe05f;',
			'icon-disk' : '&#xe060;',
			'icon-storage' : '&#xe061;',
			'icon-undo' : '&#xe062;',
			'icon-redo' : '&#xe063;',
			'icon-flip' : '&#xe064;',
			'icon-flip-2' : '&#xe065;',
			'icon-undo-2' : '&#xe066;',
			'icon-redo-2' : '&#xe067;',
			'icon-forward' : '&#xe068;',
			'icon-reply' : '&#xe069;',
			'icon-bubble' : '&#xe06a;',
			'icon-bubbles' : '&#xe06b;',
			'icon-bubbles-2' : '&#xe06c;',
			'icon-bubble-2' : '&#xe06d;',
			'icon-bubbles-3' : '&#xe06e;',
			'icon-bubbles-4' : '&#xe06f;',
			'icon-user' : '&#xe070;',
			'icon-users' : '&#xe071;',
			'icon-user-2' : '&#xe072;',
			'icon-users-2' : '&#xe073;',
			'icon-user-3' : '&#xe074;',
			'icon-user-4' : '&#xe075;',
			'icon-quotes-left' : '&#xe076;',
			'icon-busy' : '&#xe077;',
			'icon-spinner' : '&#xe078;',
			'icon-spinner-2' : '&#xe079;',
			'icon-spinner-3' : '&#xe07a;',
			'icon-spinner-4' : '&#xe07b;',
			'icon-spinner-5' : '&#xe07c;',
			'icon-spinner-6' : '&#xe07d;',
			'icon-binoculars' : '&#xe07e;',
			'icon-search' : '&#xe07f;',
			'icon-zoom-in' : '&#xe080;',
			'icon-zoom-out' : '&#xe081;',
			'icon-expand' : '&#xe082;',
			'icon-contract' : '&#xe083;',
			'icon-expand-2' : '&#xe084;',
			'icon-contract-2' : '&#xe085;',
			'icon-key' : '&#xe086;',
			'icon-key-2' : '&#xe087;',
			'icon-lock' : '&#xe088;',
			'icon-lock-2' : '&#xe089;',
			'icon-unlocked' : '&#xe08a;',
			'icon-wrench' : '&#xe08b;',
			'icon-settings' : '&#xe08c;',
			'icon-equalizer' : '&#xe08d;',
			'icon-cog' : '&#xe08e;',
			'icon-cogs' : '&#xe08f;',
			'icon-cog-2' : '&#xe090;',
			'icon-hammer' : '&#xe091;',
			'icon-wand' : '&#xe092;',
			'icon-aid' : '&#xe093;',
			'icon-bug' : '&#xe094;',
			'icon-pie' : '&#xe095;',
			'icon-stats' : '&#xe096;',
			'icon-bars' : '&#xe097;',
			'icon-bars-2' : '&#xe098;',
			'icon-gift' : '&#xe099;',
			'icon-trophy' : '&#xe09a;',
			'icon-glass' : '&#xe09b;',
			'icon-mug' : '&#xe09c;',
			'icon-food' : '&#xe09d;',
			'icon-leaf' : '&#xe09e;',
			'icon-rocket' : '&#xe09f;',
			'icon-meter' : '&#xe0a0;',
			'icon-meter2' : '&#xe0a1;',
			'icon-dashboard' : '&#xe0a2;',
			'icon-hammer-2' : '&#xe0a3;',
			'icon-fire' : '&#xe0a4;',
			'icon-lab' : '&#xe0a5;',
			'icon-magnet' : '&#xe0a6;',
			'icon-remove' : '&#xe0a7;',
			'icon-remove-2' : '&#xe0a8;',
			'icon-briefcase' : '&#xe0a9;',
			'icon-airplane' : '&#xe0aa;',
			'icon-truck' : '&#xe0ab;',
			'icon-road' : '&#xe0ac;',
			'icon-accessibility' : '&#xe0ad;',
			'icon-target' : '&#xe0ae;',
			'icon-shield' : '&#xe0af;',
			'icon-lightning' : '&#xe0b0;',
			'icon-switch' : '&#xe0b1;',
			'icon-power-cord' : '&#xe0b2;',
			'icon-signup' : '&#xe0b3;',
			'icon-list' : '&#xe0b4;',
			'icon-list-2' : '&#xe0b5;',
			'icon-numbered-list' : '&#xe0b6;',
			'icon-menu' : '&#xe0b7;',
			'icon-menu-2' : '&#xe0b8;',
			'icon-tree' : '&#xe0b9;',
			'icon-cloud' : '&#xe0ba;',
			'icon-cloud-download' : '&#xe0bb;',
			'icon-cloud-upload' : '&#xe0bc;',
			'icon-download-2' : '&#xe0bd;',
			'icon-upload-2' : '&#xe0be;',
			'icon-download-3' : '&#xe0bf;',
			'icon-upload-3' : '&#xe0c0;',
			'icon-globe' : '&#xe0c1;',
			'icon-earth' : '&#xe0c2;',
			'icon-link' : '&#xe0c3;',
			'icon-flag' : '&#xe0c4;',
			'icon-attachment' : '&#xe0c5;',
			'icon-eye' : '&#xe0c6;',
			'icon-eye-blocked' : '&#xe0c7;',
			'icon-eye-2' : '&#xe0c8;',
			'icon-bookmark' : '&#xe0c9;',
			'icon-bookmarks' : '&#xe0ca;',
			'icon-brightness-medium' : '&#xe0cb;',
			'icon-brightness-contrast' : '&#xe0cc;',
			'icon-contrast' : '&#xe0cd;',
			'icon-star' : '&#xe0ce;',
			'icon-star-2' : '&#xe0cf;',
			'icon-star-3' : '&#xe0d0;',
			'icon-heart' : '&#xe0d1;',
			'icon-heart-2' : '&#xe0d2;',
			'icon-heart-broken' : '&#xe0d3;',
			'icon-thumbs-up' : '&#xe0d4;',
			'icon-thumbs-up-2' : '&#xe0d5;',
			'icon-happy' : '&#xe0d7;',
			'icon-smiley' : '&#xe0d6;',
			'icon-smiley-2' : '&#xe0d8;',
			'icon-tongue' : '&#xe0d9;',
			'icon-tongue-2' : '&#xe0da;',
			'icon-sad' : '&#xe0db;',
			'icon-sad-2' : '&#xe0dc;',
			'icon-wink' : '&#xe0dd;',
			'icon-wink-2' : '&#xe0de;',
			'icon-grin' : '&#xe0df;',
			'icon-grin-2' : '&#xe0e0;',
			'icon-cool' : '&#xe0e1;',
			'icon-cool-2' : '&#xe0e2;',
			'icon-angry' : '&#xe0e3;',
			'icon-angry-2' : '&#xe0e4;',
			'icon-evil' : '&#xe0e5;',
			'icon-evil-2' : '&#xe0e6;',
			'icon-shocked' : '&#xe0e7;',
			'icon-confused' : '&#xe0e8;',
			'icon-confused-2' : '&#xe0e9;',
			'icon-neutral' : '&#xe0ea;',
			'icon-neutral-2' : '&#xe0eb;',
			'icon-wondering' : '&#xe0ec;',
			'icon-wondering-2' : '&#xe0ed;',
			'icon-point-up' : '&#xe0ee;',
			'icon-point-right' : '&#xe0ef;',
			'icon-point-down' : '&#xe0f0;',
			'icon-point-left' : '&#xe0f1;',
			'icon-warning' : '&#xe0f2;',
			'icon-notification' : '&#xe0f3;',
			'icon-question' : '&#xe0f4;',
			'icon-info' : '&#xe0f5;',
			'icon-info-2' : '&#xe0f6;',
			'icon-blocked' : '&#xe0f7;',
			'icon-cancel-circle' : '&#xe0f8;',
			'icon-spam' : '&#xe0f9;',
			'icon-close' : '&#xe0fa;',
			'icon-checkmark' : '&#xe0fb;',
			'icon-checkmark-2' : '&#xe0fc;',
			'icon-spell-check' : '&#xe0fd;',
			'icon-minus' : '&#xe0fe;',
			'icon-plus' : '&#xe0ff;',
			'icon-enter' : '&#xe100;',
			'icon-exit' : '&#xe101;',
			'icon-play-2' : '&#xe102;',
			'icon-pause' : '&#xe103;',
			'icon-stop' : '&#xe104;',
			'icon-backward' : '&#xe105;',
			'icon-forward-2' : '&#xe106;',
			'icon-play-3' : '&#xe107;',
			'icon-pause-2' : '&#xe108;',
			'icon-stop-2' : '&#xe109;',
			'icon-forward-3' : '&#xe10a;',
			'icon-first' : '&#xe10b;',
			'icon-last' : '&#xe10c;',
			'icon-previous' : '&#xe10d;',
			'icon-next' : '&#xe10e;',
			'icon-eject' : '&#xe10f;',
			'icon-volume-high' : '&#xe110;',
			'icon-volume-medium' : '&#xe111;',
			'icon-volume-low' : '&#xe112;',
			'icon-volume-mute' : '&#xe113;',
			'icon-volume-mute-2' : '&#xe114;',
			'icon-volume-increase' : '&#xe115;',
			'icon-volume-decrease' : '&#xe116;',
			'icon-loop' : '&#xe117;',
			'icon-loop-2' : '&#xe118;',
			'icon-loop-3' : '&#xe119;',
			'icon-shuffle' : '&#xe11a;',
			'icon-arrow-up' : '&#xe11b;',
			'icon-arrow-up-right' : '&#xe11c;',
			'icon-arrow-right' : '&#xe11d;',
			'icon-arrow-down-right' : '&#xe11e;',
			'icon-arrow-down' : '&#xe11f;',
			'icon-arrow-down-left' : '&#xe120;',
			'icon-arrow-left' : '&#xe121;',
			'icon-arrow-up-left' : '&#xe122;',
			'icon-arrow-up-2' : '&#xe123;',
			'icon-arrow-up-right-2' : '&#xe124;',
			'icon-arrow-right-2' : '&#xe125;',
			'icon-arrow-down-right-2' : '&#xe126;',
			'icon-arrow-down-2' : '&#xe127;',
			'icon-arrow-down-left-2' : '&#xe128;',
			'icon-arrow-left-2' : '&#xe129;',
			'icon-arrow-up-left-2' : '&#xe12a;',
			'icon-arrow-up-3' : '&#xe12b;',
			'icon-arrow-right-3' : '&#xe12c;',
			'icon-arrow-down-right-3' : '&#xe12d;',
			'icon-arrow-down-3' : '&#xe12e;',
			'icon-arrow-down-left-3' : '&#xe12f;',
			'icon-arrow-left-3' : '&#xe130;',
			'icon-tab' : '&#xe131;',
			'icon-checkbox-checked' : '&#xe132;',
			'icon-checkbox-unchecked' : '&#xe133;',
			'icon-checkbox-partial' : '&#xe134;',
			'icon-radio-checked' : '&#xe135;',
			'icon-radio-unchecked' : '&#xe136;',
			'icon-crop' : '&#xe137;',
			'icon-scissors' : '&#xe138;',
			'icon-filter' : '&#xe139;',
			'icon-filter-2' : '&#xe13a;',
			'icon-font' : '&#xe13b;',
			'icon-text-height' : '&#xe13c;',
			'icon-bold' : '&#xe13d;',
			'icon-underline' : '&#xe13e;',
			'icon-italic' : '&#xe13f;',
			'icon-strikethrough' : '&#xe140;',
			'icon-omega' : '&#xe141;',
			'icon-sigma' : '&#xe142;',
			'icon-table' : '&#xe143;',
			'icon-table-2' : '&#xe144;',
			'icon-insert-template' : '&#xe145;',
			'icon-pilcrow' : '&#xe146;',
			'icon-left-to-right' : '&#xe147;',
			'icon-right-to-left' : '&#xe148;',
			'icon-paragraph-left' : '&#xe149;',
			'icon-paragraph-center' : '&#xe14a;',
			'icon-paragraph-right' : '&#xe14b;',
			'icon-paragraph-justify' : '&#xe14c;',
			'icon-paragraph-left-2' : '&#xe14d;',
			'icon-paragraph-right-2' : '&#xe14e;',
			'icon-paragraph-justify-2' : '&#xe14f;',
			'icon-indent-increase' : '&#xe150;',
			'icon-indent-decrease' : '&#xe151;',
			'icon-new-tab' : '&#xe152;',
			'icon-embed' : '&#xe153;',
			'icon-code-2' : '&#xe154;',
			'icon-console' : '&#xe155;',
			'icon-share' : '&#xe156;',
			'icon-mail' : '&#xe157;',
			'icon-mail-2' : '&#xe158;',
			'icon-mail-3' : '&#xe159;',
			'icon-mail-4' : '&#xe15a;',
			'icon-google' : '&#xe15b;',
			'icon-google-plus' : '&#xe15c;',
			'icon-google-plus-2' : '&#xe15d;',
			'icon-google-plus-3' : '&#xe15e;',
			'icon-google-plus-4' : '&#xe15f;',
			'icon-google-drive' : '&#xe160;',
			'icon-facebook' : '&#xe161;',
			'icon-facebook-2' : '&#xe162;',
			'icon-facebook-3' : '&#xe163;',
			'icon-instagram' : '&#xe164;',
			'icon-twitter' : '&#xe165;',
			'icon-twitter-2' : '&#xe166;',
			'icon-twitter-3' : '&#xe167;',
			'icon-feed-2' : '&#xe168;',
			'icon-feed-3' : '&#xe169;',
			'icon-feed-4' : '&#xe16a;',
			'icon-youtube' : '&#xe16b;',
			'icon-youtube-2' : '&#xe16c;',
			'icon-vimeo' : '&#xe16d;',
			'icon-vimeo2' : '&#xe16e;',
			'icon-vimeo-2' : '&#xe16f;',
			'icon-lanyrd' : '&#xe170;',
			'icon-flickr' : '&#xe171;',
			'icon-flickr-2' : '&#xe172;',
			'icon-flickr-3' : '&#xe173;',
			'icon-picassa' : '&#xe174;',
			'icon-picassa-2' : '&#xe175;',
			'icon-dribbble' : '&#xe176;',
			'icon-dribbble-2' : '&#xe177;',
			'icon-dribbble-3' : '&#xe178;',
			'icon-forrst' : '&#xe179;',
			'icon-forrst-2' : '&#xe17a;',
			'icon-deviantart' : '&#xe17b;',
			'icon-deviantart-2' : '&#xe17c;',
			'icon-steam' : '&#xe17d;',
			'icon-steam-2' : '&#xe17e;',
			'icon-github' : '&#xe17f;',
			'icon-github-2' : '&#xe180;',
			'icon-github-3' : '&#xe181;',
			'icon-github-4' : '&#xe182;',
			'icon-wordpress' : '&#xe183;',
			'icon-wordpress-2' : '&#xe184;',
			'icon-joomla' : '&#xe185;',
			'icon-blogger' : '&#xe186;',
			'icon-blogger-2' : '&#xe187;',
			'icon-tumblr' : '&#xe188;',
			'icon-tumblr-2' : '&#xe189;',
			'icon-yahoo' : '&#xe18a;',
			'icon-tux' : '&#xe18b;',
			'icon-apple' : '&#xe18c;',
			'icon-finder' : '&#xe18d;',
			'icon-android' : '&#xe18e;',
			'icon-windows' : '&#xe18f;',
			'icon-windows8' : '&#xe190;',
			'icon-soundcloud' : '&#xe191;',
			'icon-soundcloud-2' : '&#xe192;',
			'icon-reddit' : '&#xe193;',
			'icon-linkedin' : '&#xe194;',
			'icon-lastfm' : '&#xe195;',
			'icon-lastfm-2' : '&#xe196;',
			'icon-delicious' : '&#xe197;',
			'icon-stumbleupon' : '&#xe198;',
			'icon-stumbleupon-2' : '&#xe199;',
			'icon-stackoverflow' : '&#xe19a;',
			'icon-pinterest' : '&#xe19b;',
			'icon-pinterest-2' : '&#xe19c;',
			'icon-xing' : '&#xe19d;',
			'icon-xing-2' : '&#xe19e;',
			'icon-flattr' : '&#xe19f;',
			'icon-foursquare' : '&#xe1a0;',
			'icon-foursquare-2' : '&#xe1a1;',
			'icon-paypal' : '&#xe1a2;',
			'icon-paypal-2' : '&#xe1a3;',
			'icon-yelp' : '&#xe1a4;',
			'icon-libreoffice' : '&#xe1a5;',
			'icon-file-pdf' : '&#xe1a6;',
			'icon-file-openoffice' : '&#xe1a7;',
			'icon-file-word' : '&#xe1a8;',
			'icon-file-excel' : '&#xe1a9;',
			'icon-file-zip' : '&#xe1aa;',
			'icon-file-powerpoint' : '&#xe1ab;',
			'icon-file-xml' : '&#xe1ac;',
			'icon-file-css' : '&#xe1ad;',
			'icon-html5' : '&#xe1ae;',
			'icon-html5-2' : '&#xe1af;',
			'icon-css3' : '&#xe1b0;',
			'icon-chrome' : '&#xe1b1;',
			'icon-firefox' : '&#xe1b2;',
			'icon-IE' : '&#xe1b3;',
			'icon-opera' : '&#xe1b4;',
			'icon-happy-2' : '&#xe1b5;',
			'icon-shocked-2' : '&#xe1b6;',
			'icon-backward-2' : '&#xe1b7;',
			'icon-checkmark-circle' : '&#xe1b8;',
			'icon-arrow-up-left-3' : '&#xe1b9;',
			'icon-arrow-up-right-3' : '&#xe1ba;',
			'icon-text-width' : '&#xe1bb;',
			'icon-paragraph-center-2' : '&#xe1bc;',
			'icon-flickr-4' : '&#xe1bd;',
			'icon-github-5' : '&#xe1be;',
			'icon-skype' : '&#xe1bf;',
			'icon-paypal-3' : '&#xe1c0;',
			'icon-safari' : '&#xe1c1;',
			'icon-IcoMoon' : '&#xe1c2;',
			'icon-warning-2' : '&#xe1c3;',
			'icon-cloud-2' : '&#xe1c4;',
			'icon-locked' : '&#xe1c5;',
			'icon-inbox' : '&#xe1c6;',
			'icon-comment' : '&#xe1c7;',
			'icon-mic' : '&#xe1c8;',
			'icon-envelope' : '&#xe1c9;',
			'icon-briefcase-2' : '&#xe1ca;',
			'icon-cart-4' : '&#xe1cb;',
			'icon-contrast-2' : '&#xe1cc;',
			'icon-clock-3' : '&#xe1cd;',
			'icon-user-5' : '&#xe1ce;',
			'icon-cog-3' : '&#xe1cf;',
			'icon-music-2' : '&#xe1d0;',
			'icon-twitter-4' : '&#xe1d1;',
			'icon-pencil-3' : '&#xe1d2;',
			'icon-frame' : '&#xe1d4;',
			'icon-star-4' : '&#xe1d3;',
			'icon-key-3' : '&#xe1d5;',
			'icon-chart' : '&#xe1d6;',
			'icon-apple-2' : '&#xe1d7;',
			'icon-file-5' : '&#xe1d8;',
			'icon-plus-2' : '&#xe1d9;',
			'icon-minus-2' : '&#xe1da;',
			'icon-picture' : '&#xe1db;',
			'icon-folder-2' : '&#xe1dc;',
			'icon-camera-3' : '&#xe1dd;',
			'icon-search-2' : '&#xe1de;',
			'icon-dribbble-4' : '&#xe1df;',
			'icon-forrst-3' : '&#xe1e0;',
			'icon-feed-5' : '&#xe1e1;',
			'icon-blocked-2' : '&#xe1e2;',
			'icon-target-2' : '&#xe1e3;',
			'icon-play-4' : '&#xe1e4;',
			'icon-bug-2' : '&#xe1e5;',
			'icon-console-2' : '&#xe1e6;',
			'icon-film-2' : '&#xe1e7;',
			'icon-type' : '&#xe1e8;',
			'icon-home-4' : '&#xe1e9;',
			'icon-earth-2' : '&#xe1ea;',
			'icon-location-3' : '&#xe1eb;',
			'icon-info-3' : '&#xe1ec;',
			'icon-eye-3' : '&#xe1ed;',
			'icon-heart-3' : '&#xe1ee;',
			'icon-bookmark-2' : '&#xe1ef;',
			'icon-wrench-2' : '&#xe1f0;',
			'icon-calendar-3' : '&#xe1f1;',
			'icon-window' : '&#xe1f2;',
			'icon-monitor' : '&#xe1f3;',
			'icon-mobile-3' : '&#xe1f4;',
			'icon-droplet-2' : '&#xe1f5;',
			'icon-refresh' : '&#xe1f6;',
			'icon-location-4' : '&#xe1f7;',
			'icon-tag-2' : '&#xe1f8;',
			'icon-phone-2' : '&#xe1f9;',
			'icon-star-5' : '&#xe1fa;',
			'icon-pointer' : '&#xe1fb;',
			'icon-thumbs-up-3' : '&#xe1fc;',
			'icon-thumbs-down' : '&#xe1fd;',
			'icon-headphones-2' : '&#xe1fe;',
			'icon-move' : '&#xe1ff;',
			'icon-checkmark-3' : '&#xe200;',
			'icon-cancel' : '&#xe201;',
			'icon-skype-2' : '&#xe202;',
			'icon-gift-2' : '&#xe203;',
			'icon-cone' : '&#xe204;',
			'icon-alarm-3' : '&#xe205;',
			'icon-coffee' : '&#xe206;',
			'icon-flag-2' : '&#xe207;',
			'icon-ipod' : '&#xe208;',
			'icon-trashcan' : '&#xe209;',
			'icon-bolt' : '&#xe20a;',
			'icon-ampersand' : '&#xe20b;',
			'icon-compass-2' : '&#xe20c;',
			'icon-list-3' : '&#xe20d;',
			'icon-grid' : '&#xe20e;',
			'icon-volume' : '&#xe20f;',
			'icon-volume-2' : '&#xe210;',
			'icon-stats-2' : '&#xe211;',
			'icon-target-3' : '&#xe212;',
			'icon-forward-4' : '&#xe213;',
			'icon-paperclip' : '&#xe214;',
			'icon-keyboard-2' : '&#xe215;',
			'icon-crop-2' : '&#xe216;',
			'icon-floppy' : '&#xe217;',
			'icon-trophy-2' : '&#xe218;',
			'icon-diary' : '&#xe219;',
			'icon-address-book-2' : '&#xe21a;',
			'icon-stop-3' : '&#xe21b;',
			'icon-smiley-3' : '&#xe21c;',
			'icon-shit' : '&#xe21d;',
			'icon-bookmark-3' : '&#xe21e;',
			'icon-camera-4' : '&#xe21f;',
			'icon-lamp' : '&#xe220;',
			'icon-disk-2' : '&#xe221;',
			'icon-button' : '&#xe222;',
			'icon-database' : '&#xe223;',
			'icon-credit-card' : '&#xe224;',
			'icon-atom' : '&#xe225;',
			'icon-winsows' : '&#xe226;',
			'icon-target-4' : '&#xe227;',
			'icon-battery' : '&#xe228;',
			'icon-switch-2' : '&#xe229;',
			'icon-pause-3' : '&#xe22a;',
			'icon-mouse' : '&#xe22b;',
			'icon-basket' : '&#xe22c;',
			'icon-filter-3' : '&#xe22e;',
			'icon-sunrise' : '&#xe22f;',
			'icon-sun' : '&#xe230;',
			'icon-moon' : '&#xe231;',
			'icon-sun-2' : '&#xe232;',
			'icon-windy' : '&#xe233;',
			'icon-wind' : '&#xe234;',
			'icon-snowflake' : '&#xe235;',
			'icon-cloudy' : '&#xe236;',
			'icon-cloud-3' : '&#xe237;',
			'icon-weather' : '&#xe238;',
			'icon-weather-2' : '&#xe239;',
			'icon-weather-3' : '&#xe23a;',
			'icon-lines' : '&#xe23b;',
			'icon-cloud-4' : '&#xe23c;',
			'icon-lightning-2' : '&#xe23d;',
			'icon-lightning-3' : '&#xe23e;',
			'icon-rainy' : '&#xe240;',
			'icon-windy-2' : '&#xe23f;',
			'icon-windy-3' : '&#xe241;',
			'icon-snowy' : '&#xe242;',
			'icon-snowy-2' : '&#xe243;',
			'icon-snowy-3' : '&#xe244;',
			'icon-weather-4' : '&#xe245;',
			'icon-cloudy-2' : '&#xe246;',
			'icon-cloud-5' : '&#xe247;',
			'icon-lightning-4' : '&#xe248;',
			'icon-sun-3' : '&#xe249;',
			'icon-moon-2' : '&#xe24a;',
			'icon-cloudy-3' : '&#xe24b;',
			'icon-cloud-6' : '&#xe24c;',
			'icon-cloud-7' : '&#xe24d;',
			'icon-lightning-5' : '&#xe24e;',
			'icon-rainy-2' : '&#xe24f;',
			'icon-rainy-3' : '&#xe250;',
			'icon-windy-4' : '&#xe251;',
			'icon-snowy-4' : '&#xe252;',
			'icon-snowy-5' : '&#xe253;',
			'icon-weather-5' : '&#xe254;',
			'icon-cloudy-4' : '&#xe255;',
			'icon-lightning-6' : '&#xe256;',
			'icon-thermometer' : '&#xe257;',
			'icon-compass-3' : '&#xe258;',
			'icon-none' : '&#xe259;',
			'icon-Celsius' : '&#xe25a;',
			'icon-Fahrenheit' : '&#xe25b;',
			'icon-rainy-4' : '&#xe25c;',
			'icon-windy-5' : '&#xe25d;',
			'icon-chat' : '&#xe25e;',
			'icon-chat-alt-stroke' : '&#xe25f;',
			'icon-chat-alt-fill' : '&#xe260;',
			'icon-comment-alt1-stroke' : '&#xe261;',
			'icon-comment-alt1-fill' : '&#xe262;',
			'icon-comment-stroke' : '&#xe263;',
			'icon-comment-fill' : '&#xe264;',
			'icon-comment-alt2-stroke' : '&#xe265;',
			'icon-comment-alt2-fill' : '&#xe266;',
			'icon-checkmark-4' : '&#xe267;',
			'icon-check-alt' : '&#xe268;',
			'icon-x' : '&#xe269;',
			'icon-x-altx-alt' : '&#xe26a;',
			'icon-denied' : '&#xe26b;',
			'icon-cursor' : '&#xe26c;',
			'icon-rss' : '&#xe26d;',
			'icon-rss-alt' : '&#xe26f;',
			'icon-dial' : '&#xe26e;',
			'icon-cog-4' : '&#xe270;',
			'icon-calendar-4' : '&#xe271;',
			'icon-calendar-alt-stroke' : '&#xe272;',
			'icon-calendar-alt-fill' : '&#xe273;',
			'icon-share-2' : '&#xe274;',
			'icon-mail-5' : '&#xe275;',
			'icon-heart-stroke' : '&#xe276;',
			'icon-heart-fill' : '&#xe277;',
			'icon-movie' : '&#xe278;',
			'icon-document-alt-stroke' : '&#xe279;',
			'icon-document-alt-fill' : '&#xe27a;',
			'icon-document-stroke' : '&#xe27b;',
			'icon-document-fill' : '&#xe27c;',
			'icon-plus-3' : '&#xe27d;',
			'icon-plus-alt' : '&#xe27e;',
			'icon-minus-3' : '&#xe27f;',
			'icon-pin' : '&#xe280;',
			'icon-link-2' : '&#xe281;',
			'icon-bolt-2' : '&#xe282;',
			'icon-move-2' : '&#xe283;',
			'icon-move-alt1' : '&#xe284;',
			'icon-move-alt2' : '&#xe285;',
			'icon-equalizer-2' : '&#xe286;',
			'icon-award-fill' : '&#xe287;',
			'icon-award-stroke' : '&#xe288;',
			'icon-magnifying-glass' : '&#xe289;',
			'icon-trash-stroke' : '&#xe28a;',
			'icon-trash-fill' : '&#xe28b;',
			'icon-beaker-alt' : '&#xe28c;',
			'icon-beaker' : '&#xe28d;',
			'icon-key-stroke' : '&#xe28e;',
			'icon-key-fill' : '&#xe28f;',
			'icon-new-window' : '&#xe290;',
			'icon-spin-alt' : '&#xe291;',
			'icon-spin' : '&#xe292;',
			'icon-curved-arrow' : '&#xe293;',
			'icon-undo-3' : '&#xe294;',
			'icon-reload' : '&#xe295;',
			'icon-reload-alt' : '&#xe296;',
			'icon-loop-4' : '&#xe297;',
			'icon-loop-alt1' : '&#xe298;',
			'icon-loop-alt2' : '&#xe299;',
			'icon-loop-alt3' : '&#xe29a;',
			'icon-loop-alt4' : '&#xe29b;',
			'icon-transfer' : '&#xe29c;',
			'icon-move-vertical' : '&#xe29d;',
			'icon-move-vertical-alt1' : '&#xe29e;',
			'icon-move-vertical-alt2' : '&#xe29f;',
			'icon-move-horizontal' : '&#xe2a0;',
			'icon-move-horizontal-alt1' : '&#xe2a1;',
			'icon-arrow-left-4' : '&#xe2a2;',
			'icon-arrow-left-alt1' : '&#xe2a3;',
			'icon-arrow-left-alt2' : '&#xe2a4;',
			'icon-arrow-right-4' : '&#xe2a5;',
			'icon-arrow-right-alt1' : '&#xe2a6;',
			'icon-arrow-right-alt2' : '&#xe2a7;',
			'icon-arrow-up-4' : '&#xe2a8;',
			'icon-arrow-up-alt1' : '&#xe2a9;',
			'icon-arrow-up-alt2' : '&#xe2aa;',
			'icon-arrow-down-4' : '&#xe2ab;',
			'icon-arrow-down-alt1' : '&#xe2ac;',
			'icon-arrow-down-alt2' : '&#xe2ad;',
			'icon-cd' : '&#xe2ae;',
			'icon-steering-wheel' : '&#xe2af;',
			'icon-microphone' : '&#xe2b0;',
			'icon-headphones-3' : '&#xe2b1;',
			'icon-volume-3' : '&#xe2b2;',
			'icon-play-5' : '&#xe2b3;',
			'icon-pause-4' : '&#xe2b4;',
			'icon-stop-4' : '&#xe2b5;',
			'icon-eject-2' : '&#xe2b6;',
			'icon-first-2' : '&#xe2b7;',
			'icon-last-2' : '&#xe2b8;',
			'icon-play-alt' : '&#xe2b9;',
			'icon-fullscreen-exit' : '&#xe2ba;',
			'icon-fullscreen-exit-alt' : '&#xe2bb;',
			'icon-fullscreen' : '&#xe2bc;',
			'icon-fullscreen-alt' : '&#xe2bd;',
			'icon-iphone' : '&#xe2be;',
			'icon-battery-empty' : '&#xe2bf;',
			'icon-battery-half' : '&#xe2c0;',
			'icon-battery-full' : '&#xe2c1;',
			'icon-battery-charging' : '&#xe2c2;',
			'icon-compass-4' : '&#xe2c3;',
			'icon-folder-stroke' : '&#xe2c4;',
			'icon-folder-fill' : '&#xe2c5;',
			'icon-at' : '&#xe2c6;',
			'icon-ampersand-2' : '&#xe2c7;',
			'icon-info-4' : '&#xe2c8;',
			'icon-question-mark' : '&#xe2c9;',
			'icon-pilcrow-2' : '&#xe2ca;',
			'icon-hash' : '&#xe2cb;',
			'icon-left-quote' : '&#xe2cc;',
			'icon-right-quote' : '&#xe2cd;',
			'icon-left-quote-alt' : '&#xe2ce;',
			'icon-right-quote-alt' : '&#xe2cf;',
			'icon-article' : '&#xe2d0;',
			'icon-read-more' : '&#xe2d1;',
			'icon-list-4' : '&#xe2d2;',
			'icon-list-nested' : '&#xe2d3;',
			'icon-book-2' : '&#xe2d4;',
			'icon-book-alt2' : '&#xe2d5;',
			'icon-pen-2' : '&#xe2d6;',
			'icon-pen-alt-stroke' : '&#xe2d7;',
			'icon-pen-alt-fill' : '&#xe2d8;',
			'icon-pen-alt2' : '&#xe2d9;',
			'icon-brush' : '&#xe2da;',
			'icon-brush-alt' : '&#xe2db;',
			'icon-eyedropper' : '&#xe2dc;',
			'icon-layers-alt' : '&#xe2dd;',
			'icon-layers' : '&#xe2de;',
			'icon-image-3' : '&#xe2df;',
			'icon-camera-5' : '&#xe2e0;',
			'icon-aperture' : '&#xe2e1;',
			'icon-aperture-alt' : '&#xe2e2;',
			'icon-chart-2' : '&#xe2e3;',
			'icon-chart-alt' : '&#xe2e4;',
			'icon-bars-3' : '&#xe2e5;',
			'icon-eye-4' : '&#xe2e6;',
			'icon-user-6' : '&#xe2e7;',
			'icon-home-5' : '&#xe2e8;',
			'icon-clock-4' : '&#xe2e9;',
			'icon-lock-stroke' : '&#xe2ea;',
			'icon-lock-fill' : '&#xe2eb;',
			'icon-unlock-stroke' : '&#xe2ec;',
			'icon-unlock-fill' : '&#xe2ed;',
			'icon-tag-stroke' : '&#xe2ee;',
			'icon-tag-fill' : '&#xe2ef;',
			'icon-sun-stroke' : '&#xe2f0;',
			'icon-sun-fill' : '&#xe2f1;',
			'icon-moon-stroke' : '&#xe2f2;',
			'icon-moon-fill' : '&#xe2f3;',
			'icon-cloud-8' : '&#xe2f4;',
			'icon-rain' : '&#xe2f5;',
			'icon-umbrella' : '&#xe2f6;',
			'icon-map-pin-stroke' : '&#xe2f7;',
			'icon-map-pin-fill' : '&#xe2f8;',
			'icon-map-pin-alt' : '&#xe2f9;',
			'icon-target-5' : '&#xe2fa;',
			'icon-download-4' : '&#xe2fb;',
			'icon-upload-4' : '&#xe2fc;',
			'icon-cloud-download-2' : '&#xe2fd;',
			'icon-cloud-upload-2' : '&#xe2fe;',
			'icon-fork' : '&#xe2ff;',
			'icon-paperclip-2' : '&#xe300;',
			'icon-wrench-3' : '&#xe301;',
			'icon-minus-alt' : '&#xe302;',
			'icon-lightbulb' : '&#xe303;',
			'icon-move-horizontal-alt2' : '&#xe304;',
			'icon-volume-mute-3' : '&#xe305;',
			'icon-box' : '&#xe306;',
			'icon-book-alt' : '&#xe307;',
			'icon-bars-alt' : '&#xe308;',
			'icon-star-6' : '&#xe309;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};