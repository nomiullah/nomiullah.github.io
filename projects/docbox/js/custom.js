$( document ).ready(function() {
	  $('.modal').modal();
	  $('.modal').modal('open'); 
	  $('#modal2').modal('close'); 
  	/*Slim Scroll*/
	 $(function(){
		$('.latest-files').slimScroll({
			height: '543px',
			alwaysVisible: true
		});
		$('.content .year .drop-down ul').slimScroll({
			height: '192px',
			alwaysVisible: true
		}); 
		$('.content .party .drop-down ul').slimScroll({
			height: '208px',
			alwaysVisible: true
		}); 
		$('.content .category .drop-down ul').slimScroll({
			height: '208px',
			alwaysVisible: true
		}); 
	}); 
	/*Show Menu*/
	$('.menu-icon').click(function(event) {
		$('.menu ul').toggleClass('showdropdown');
		event.stopPropagation();
	});
	/*Hide Menu*/
	$(document).click(function(evt){
		if (evt.target != $('.menu-icon')) {
			$('.menu ul').removeClass('showdropdown');
		}
	});  
	
	/*Search Field Focus*/
	$( "#search" ).focusin(function() {
		$('.header-search').addClass('search-focus');
	});
	$( "#search" ).focusout(function() {
    	$('.header-search').removeClass('search-focus');	 
 	});
	/*Suggestions Key up event*/
	$( "#search" ).keyup(function() {
		$('.header-search').removeClass('search-focus');
		$('.header-search').addClass('filter-focus');
		$('header .search-categories.search-filter').hide();
		$('header .header-search button.close').show();
	}); 
	
	/*Search Field Focus*/
	$('#search').click(function(evt){
    	var text_value=$(this).val();
    	if(text_value!=''){
       		$('.header-search').removeClass('search-focus');	
       	}else{
			$('.header-search').addClass('search-focus');
		}
	}); 
	 
	$('#filters').click(function(evt){
		$('header .search-categories.search-filter').toggle();
	}); 
	 
	$('header .header-search button.close').click(function(evt){
		$('#search').val(''); 
		$(this).hide(); 
		$('.header-search').removeClass('filter-focus');
	}); 
	/*Custom Material Select initilization*/
	$('select').material_select();
	 
	 /*Selected Table Row*/
	 $('td .filled-in').change(function(){
     	$(this).closest('tr').toggleClass('checked');
	});
	$('.content .drop-down ul li .filled-in').change(function(){
     	$(this).closest('li').toggleClass('checked');
	});
	
	
	/*Accordian Table*/
	$('.show-accordian').click(function(evt){
		evt.preventDefault();
		$(this).toggleClass('active'); 
		$(this).closest('tr').next('tr').children('td').toggle();
	});
	/*Filters Dropdown*/
	$('a.arrow-drop_down').click(function(evt){
		evt.preventDefault();
		$(this).siblings('.drop-down').addClass('visible'); 
		$(this).closest('tr').next('tr').children('td').toggle();
	});
	$('.date-picker-btn').click(function(evt){
		evt.preventDefault();
		$(this).siblings().addClass('visible');  
	});
	$('.switch .lever').click(function(){ 
		$(this).closest('li').addClass('active');  
	});
});


/*Search Field Auto Complete*/
var options = {
    data:[
	{
		"name": "Suggested party",
		"html": '<i class="material-icons">supervisor_account</i>'
	},
	{
		"name": "Suggested category",
		"html": '<i class="material-icons">insert_drive_file</i>'
	},
	{
		"name": "Suggested keyword",
		"html": '<i class="material-icons">find_in_page</i>'
	},
	{
		"name": "Suggested Video Name.ext",
		"html": '<i class="material-icons">videocam</i>'
	},
	{
		"name": "Suggested Audio Name.ext",
		"html": '<i class="material-icons">volume_down</i>'
	},
	{
		"name": "Suggested Document Name.ext",
		"html": '<i class="material-icons">description</i>'
	}],

   

    template: {
        type: "description",
        fields: {
            description: "html"
        }
    },
	 getValue: "name",

    list: {
        match: {
            enabled: true
        }
    } 
};

$("#search").easyAutocomplete(options);


     $(function () { 'use strict';
     
        var availableTags = [
            "ActionScript",
            "AppleScript",
            "Asp",
            "BASIC",
            "C",
            "C++",
            "Clojure",
            "COBOL",
            "ColdFusion",
            "Erlang",
            "Fortran",
            "Groovy",
            "Haskell",
            "Java",
            "JavaScript",
            "Lisp",
            "Perl",
            "PHP",
            "Python",
            "Ruby",
            "Scala",
            "Scheme"
        ];

         $('#categories,#keyword,#parties').tagit({tagSource:availableTags, placeholder: "Enter Tag"});
       
        $('#demo2GetTags').click(function () {
            showTags($('#categories,#keyword,#parties').tagit('tags'));
        }); 

    });