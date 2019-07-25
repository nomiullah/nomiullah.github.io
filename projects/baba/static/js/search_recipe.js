$(function(){  

    var cntrlr = this;
    cntrlr.pageSize = 5;



    var dishGallery = $('.ad-gallery').adGallery()[0]; 

    initTypeAhead(); 

    initFilterSliders();

    initFilterSlidersApplyButtons();

    fetchDefaultDishes();

    initAdditionFiltersBtns();
   
   //This is not production quality, its just demo code.
  function cookieList(cookieName) {
      var cookie = $.cookie(cookieName);
      //Load the items or a new array if null.
      var items
      if(cookie && cookie != "null"){
        items = cookie.split(/,/);
        for(var i = 0 ; i<items.length; i++){
            items[i] = parseInt(items[i]);
        }
      }else{
        items = new Array();
      }
      //var items = cookie ? cookie.split(/,/) : new Array();
      return {
          "add": function(val) {
              items.push(val);
              $.cookie(cookieName, items.join(','), { path:'/'});
          },
          "remove": function (val) { 
              indx = items.indexOf(val); 
              if(indx!=-1) items.splice(indx, 1); 
              $.cookie(cookieName, items.join(','), { path:'/'});        },
          "clear": function() {
              items = null;
              $.cookie(cookieName, null);
          },
          "items": function() {
              return items;
          }
        }
  }

	$('#mySwitch').on('switch-change', function (e, data) {
	    var $el = $(data.el)[0];
	    var value = data.value;

	    var ingredients = $('.ingredients');
	    var nutrients = $('.nutrients');

	    if($el.checked){
	    	ingredients.show();
	    	nutrients.hide();
	    }
	    else{
			ingredients.hide();
	    	nutrients.show();
	    }

	});

  


    function initAdditionFiltersBtns(){
        $('.additional-filters-btn1').on('click', function(ev){
          var addFilterBtn = this;
          var additionalFilters = $('.additional-filters1');
          
          if(addFilterBtn.filtersHidden){
            $(addFilterBtn).find("a").text('Additional Filters(-)');
            additionalFilters.show();
            addFilterBtn.filtersHidden = false;
          }
          else{
            $(addFilterBtn).find("a").text('Additional Filters(+)');
            additionalFilters.hide();
            addFilterBtn.filtersHidden = true;
          }
      });

      $('.additional-filters-btn2').on('click', function(ev){
          var addFilterBtn = this;
          var additionalFilters = $('.additional-filters2');
          
          if(addFilterBtn.filtersHidden){
            $(addFilterBtn).find("a").text('Additional Filters(-)');
            additionalFilters.show();
            addFilterBtn.filtersHidden = false;
          }
          else{
            $(addFilterBtn).find("a").text('Additional Filters(+)');
            additionalFilters.hide();
            addFilterBtn.filtersHidden = true;
          }
      });

      $('.additional-filters-btn3').on('click', function(ev){
          var addFilterBtn = this;
          var additionalFilters = $('.additional-filters3');
          
          if(addFilterBtn.filtersHidden){
            $(addFilterBtn).find("a").text('Additional Filters(-)');
            additionalFilters.show();
            addFilterBtn.filtersHidden = false;
          }
          else{
            $(addFilterBtn).find("a").text('Additional Filters(+)');
            additionalFilters.hide();
            addFilterBtn.filtersHidden = true;
          }
      });
    }


    var shuttleDishes = new cookieList("ShuttleDishes");
    ///shuttleDishes.clear();
    

  	$('.add-recipe-to-cart-btn').on('click', function(ev){
  		
  		var addRecipeToCartBtn = this;
      var selDishIdx = dishGallery.current_index
  		
  		if(dishGallery.images[selDishIdx].dishAddedInCart == true){
        console.log('removed');
  			$(addRecipeToCartBtn).html('Add cart');
        shuttleDishes.remove(dishGallery.images[selDishIdx].dish_data.dish_id);
  			dishGallery.images[selDishIdx].dishAddedInCart = false;
  		}
  		else{
        console.log('added');
  			$(addRecipeToCartBtn).html('Less cart');
        shuttleDishes.add(dishGallery.images[selDishIdx].dish_data.dish_id);
  			dishGallery.images[selDishIdx].dishAddedInCart = true;
  		}
      
      
      //console.log(shuttleDishes.items());

      //alert('Sorry, cart is not available yet')
  	});




    //Recipe Email Modal Listeneres
    $("#email-btn").click(function(e){

      var emailModal = $(".recipe-email-modal");
      emailModal.find('#email-title').text(dishGallery.dishTitle);

      var emailForm = $('form.email-recipe');

      var thumb_link = dishGallery.images[dishGallery.current_index].thumb_link;
      if (thumb_link.attr("id")) {
        emailForm.find('input[name="dish-id"]').val(window.location.href);
      } 
      
      var msgField = emailForm.find('textarea[name="message"]');
      msgField.text('Check out this dish on Neptune. Please let me know what you think.');

      emailModal.modal({
        backdrop: 'static'
      });
    });
    $("#cancel-recipe-email").click(function(e){
      $(".recipe-email-modal").modal('hide');
      //failed = true;
    });

    $("input#submit").click(function(){

      var emailForm = $('form.email-recipe');
      var emailField = emailForm.find('input[name="email"]');
      var subjectField = emailForm.find('input[name="subject"]');
      var msgField = emailForm.find('textarea[name="message"]');
      var showErrorMsg = emailForm.find('#show-email-error');
      if(!emailField.val()){
        showErrorMsg.html('Email field cannot be empty');
      }
      else if(!subjectField.val()){
        showErrorMsg.html('Subject field cannot be empty');
      }
      else if(!msgField.val()){
        showErrorMsg.html('Message field cannot be empty');
      }
      else{
         showErrorMsg.html('');
         $(".recipe-email-modal").modal('hide');
         var loadingMask = $('#pleaseWaitDialog');
         loadingMask.modal();

        $.ajax({
          type: "POST",
          url: "/users/email_dish/", //process to mail
          data: $('form.email-recipe').serialize(),
          success: function(response){
              loadingMask.modal('hide');
              //$("#thanks").html(msg) //hide button and show thank you
              
              alert(response.message)
          },
          error: function(){
              loadingMask.modal('hide');
              $(".recipe-email-modal").modal();
              alert("failure");
          }
      });
      }
      
    });
    ///////////////////

    //Social Sharing Buttons
    $('#social-sharing-btns').share({
        networks: ['facebook','pinterest','googleplus','twitter','linkedin','tumblr','in1','email','stumbleupon','digg']
    });

    //Fetch Cusines Menus
    $("#cuisine_choices").change(function(){
      /*
      var menu_choices = $("#menu_choices");
      var sel_cuisine = $(this).find(":selected").val();

        $.get("/users/get_menu/" + sel_cuisine + "/" ,function(data){
          $("#menu_choices option").remove();
          menu_choices.append("<option>All</option>");
          data.menu.forEach(function(item){
            menu_choices.append("<option value="+ item + ">" + item +"</option>");
          });
          menu_choices.trigger("liszt:updated");
        });
        */
    });

    $("#recipe-search-btn").click(function(){
        performSearch(getSearchObject(),1,createThumbnails);

    });



    function createThumbnails(data){

      $( ".ad-thumb-list" ).empty();
      var dishes = data.dishes;
      if(data.dishes && data.dishes.length > 0){
        $("#dish-empty-msg").hide();
        $('.recipe').show();

        for(i=0;i<dishes.length;i++){
            var dish_data = dishes[i]
            
            //"/static/gallery_images/thumbs/"+recipe_name+".jpg"
            //"/static/gallery_images/"+recipe_name+".jpg"
            //"/static/images/noimage.png"
            //"../../instance/dish-images/"+recipe_name+".png"

            dish_data.thumb_url = "/static/dish-images/"+dish_data.recipe_name+".png";
            dish_data.image_url = "/static/dish-images/"+dish_data.recipe_name+".png";
            dish_data.image_id = dish_data.dish_id;
            dish_data.title = dish_data.recipe_name;
            dish_data.description = dish_data.recipe_name;

            dishGallery.addDishRecord(dish_data);
        }
        
        if(dishes.length == 5){
          dishGallery.showImage(2,undefined,true);
        }
        else{
          dishGallery.showImage(0,undefined,true);
        }
      }else{
        $("#dish-empty-msg").show();
      }
      
        
        
    }

    function getSearchObject(){

      var dishTitle = $("#dishTitleToSearch").val();

      var sel_cuisine_id = $("#cuisine_choices").find(":selected").val();
      var sel_cuisine_val = $("#cuisine_choices").find(":selected").text();

      var sel_menu_id = $("#menu_choices").find(":selected").val();
      var sel_menu_val = $("#menu_choices").find(":selected").text();
      
      var applyTotalCaloriesFilter = $("#totalCaloriesSlider").data("apply");
      var totalCaloriesSlider_min_val = $("#totalCaloriesSlider").data('slider').getValue()[0];
      var totalCaloriesSlider_max_val =  $("#totalCaloriesSlider").data('slider').getValue()[1];

      var applyFatCaloriesFilter = $("#fatCaloriesSlider").data("apply");
      var fatCaloriesSlider_min_val = $("#fatCaloriesSlider").data('slider').getValue()[0];
      var fatCaloriesSlider_max_val =  $("#fatCaloriesSlider").data('slider').getValue()[1]

      var applyCholesterolFilter = $("#cholesterolSlider").data("apply");
      var cholesterolSlider_min_val = $("#cholesterolSlider").data('slider').getValue()[0];
      var cholesterolSlider_max_val =  $("#cholesterolSlider").data('slider').getValue()[1];

      /*
      var cholesterolSlider_min_val = cholesterolSlider_max_val - 24
      if(cholesterolSlider_min_val == 1 ){
        cholesterolSlider_min_val = 0
      }
      */

      var applyTotalCarbsFilter = $("#totalCarbsSlider").data("apply");
      var totalCarbsSlider_min_val = 0;
      var totalCarbsSlider_max_val = $("#totalCarbsSlider").data('slider').getValue()

      var applyTotalFatFilter = $("#totalFatSlider").data("apply");
      var totalFatSlider_min_val = 0;
      var totalFatSlider_max_val = $("#totalFatSlider").data('slider').getValue();

      var applyVitaminAFilter = $("#vitaminASlider").data("apply");
      var vitaminASlider_min_val = 0;
      var vitaminASlider_max_val = $("#vitaminASlider").data('slider').getValue();

      var applyVitaminCFilter = $("#vitaminCSlider").data("apply");
      var vitaminCSlider_min_val = 0;
      var vitaminCSlider_max_val = $("#vitaminCSlider").data('slider').getValue(); 

      var applyProteinsFilter = $("#proteinsSlider").data("apply");
      var proteinsSlider_min_val = 0;
      var proteinsSlider_max_val = $("#proteinsSlider").data('slider').getValue();

      var applySodiumFilter = $("#sodiumSlider").data("apply");
      var sodiumSlider_min_val = 0;
      var sodiumSlider_max_val = $("#sodiumSlider").data('slider').getValue();

      var applyDietaryFiberFilter = $("#dietaryFiberSlider").data("apply");
      var dietaryFiberSlider_min_val = 0;
      var dietaryFiberSlider_max_val = $("#dietaryFiberSlider").data('slider').getValue();

      var searchObj = {

             dishTitle: dishTitle,

             selCuisineId : sel_cuisine_id,
             selCuisineVal: sel_cuisine_val,
             selMenuId    : sel_menu_id,
             selMenuVal   : sel_menu_val,

             applyTotalCaloriesFilter : applyTotalCaloriesFilter,
             totalCaloriesSlider_min_val : totalCaloriesSlider_min_val,
             totalCaloriesSlider_max_val : totalCaloriesSlider_max_val,

             applyFatCaloriesFilter : applyFatCaloriesFilter,
             fatCaloriesSlider_min_val : fatCaloriesSlider_min_val,
             fatCaloriesSlider_max_val : fatCaloriesSlider_max_val,

             applyCholesterolFilter : applyCholesterolFilter,
             cholesterolSlider_min_val : cholesterolSlider_min_val,
             cholesterolSlider_max_val : cholesterolSlider_max_val,

             applyTotalCarbsFilter : applyTotalCarbsFilter,
             totalCarbsSlider_min_val : totalCarbsSlider_min_val,
             totalCarbsSlider_max_val : totalCarbsSlider_max_val,

             applyTotalFatFilter : applyTotalFatFilter,
             totalFatSlider_min_val : totalFatSlider_min_val,
             totalFatSlider_max_val : totalFatSlider_max_val,

             applyVitaminAFilter : applyVitaminAFilter,
             vitaminASlider_min_val : vitaminASlider_min_val,
             vitaminASlider_max_val : vitaminASlider_max_val,

             applyVitaminCFilter : applyVitaminCFilter,
             vitaminCSlider_min_val : vitaminCSlider_min_val,
             vitaminCSlider_max_val : vitaminCSlider_max_val,

             applyProteinsFilter : applyProteinsFilter,
             proteinsSlider_min_val : proteinsSlider_min_val,
             proteinsSlider_max_val : proteinsSlider_max_val,

             applySodiumFilter : applySodiumFilter,
             sodiumSlider_min_val : sodiumSlider_min_val,
             sodiumSlider_max_val : sodiumSlider_max_val,

             applyDietaryFiberFilter : applyDietaryFiberFilter,
             dietaryFiberSlider_min_val : dietaryFiberSlider_min_val,
             dietaryFiberSlider_max_val : dietaryFiberSlider_max_val
        }

        return searchObj;
    }
    function getURLParameter(name) {
        return decodeURI(
            (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
        );
    }

    function fetchDefaultDishes(){

      var url,searchObj;
      var dish_id = dishGallery.getIndexFromHash();
      var cuisineId = getURLParameter('cuisineId');
      var data;
      if(dish_id != undefined){
        data = {dishId:dish_id};
        url = "/users/get_dish_by_id";
        console.log(data);
      }
      else if(cuisineId != 'null'){
        url = "/users/get_cuisine_dishes/"+cuisineId;
        $('#cuisine_choices').val(cuisineId);
      }
      else{
        url = "/users/get_random_dishes/";
      }

      $.ajax({
              type: "GET",
              data: data,
              url: url,
              success: function(data){
                //Clear previous data
                if(data){
                  dishGallery.images = [];

                  createThumbnails(data);
                  if(data.total > cntrlr.pageSize){
                    createPagingbar(1,Math.ceil(data.total/cntrlr.pageSize));
                  }
                  else{
                    $('#pagingBar').hide();
                  }
                }
                
              }
              
            });
    }

    function performSearch(searchObj,pageNo,callback){
        clearPreviousGallery(); 
        $.ajax({
                type: "POST",
                url: "/users/get_recipes/"+pageNo,
                data: searchObj,
                dataType: "json",
                success: function(data){
                  //Clear previous data
                  callback(data);
                  if(data.total > cntrlr.pageSize){
                    createPagingbar(pageNo,Math.ceil(data.total/cntrlr.pageSize));
                  }
                  else{
                    $('#pagingBar').hide();
                  }
                  
                }
                
        });
    }

    function clearPreviousGallery(){
      dishGallery.images = [];
      $('.recipe').hide();
    }

    function createPagingbar(currentPage,TotalPages){
      var options = {
                    currentPage: currentPage,
                    totalPages: TotalPages,
                    alignment:"center",
                    onPageClicked: function(e,originalEvent,type,page){
                      performSearch(getSearchObject(),page,createThumbnails);
                    }
                }
      $('#pagingBar').bootstrapPaginator(options);
      $('#pagingBar').show();
    }

    function initFilterSliders(){

      $('#totalCaloriesSlider').slider({
        min: 0,
        max: 2500,
        value:[0,2500],
        step: 1,
        tooltip:'show',
        selection:'after',
        /*
        formater: function(value){
          console.log(value);
          if(value == 500){
            return "<= 500"
          }
          else if(value == 1000){
            return "<= 1000"
          }
          else if(value == 1500){
            return "<= 1500"
          }
          else if(value == 2000){
            return "<= 2000"
          }
          else if(value > 2000){
            return "> 2000"
          }
        }
        */
      });

      $('#fatCaloriesSlider').slider({
        min: 0,
        max: 2500,
        value:[0,2500],
        step: 1,
        tooltip:'show',
        selection:'after',
        /*
        formater: function(value){
          if(value == 500){
            return "<= 500"
          }
          else if(value == 1000){
            return "<= 1000"
          }
          else if(value == 1500){
            return "<= 1500"
          }
          else if(value == 2000){
            return "<= 2000"
          }
          else if(value > 2000){
            return "> 2000"
          }
        }
        */
      });

      $('#cholesterolSlider').slider({
        min: 0,
        max: 225,
        value:[0,225],
        step: 1,
        tooltip:'show',
        selection:'after',
        /*
        formater: function(value){

          if(value > 200){
            return "> 200%";
          }
          else{
            return (value-24)+" - "+value+"%";
          }
          

        }
        */
      });

      $('#totalCarbsSlider').slider({
        min: 0,
        max: 100,
        step: 5,
        selection:'after',
        tooltip:'show'
      });

      $('#totalFatSlider').slider({
        min: 0,
        max: 100,
        selection:'after',
        tooltip:'show'
      });

      $('#vitaminASlider').slider({
        min: 0,
        max: 100,
        selection:'after',
        tooltip:'show'
      });

      $('#vitaminCSlider').slider({
        min: 0,
        max: 100,
        selection:'after',
        tooltip:'show'
      });

      $('#proteinsSlider').slider({
        min: 0,
        max: 100,
        selection:'after',
        tooltip:'show'
      });

       $('#sodiumSlider').slider({
        min: 0,
        max: 100,
        selection:'after',
        tooltip:'show'
      });

      $('#dietaryFiberSlider').slider({
        min: 0,
        max: 100,
        selection:'after',
        tooltip:'show'
      });

       $(".slider").data("apply",false);
    } 

    function initTypeAhead(){
        var dishTitleToSearchDiv = $('#dishTitleToSearch')        
        dishTitleToSearchDiv.typeahead({
          remote: 
                {
                  url: '/users/get_dish_titles/?dish=%QUERY',
                  filter: function(data){
                         var dishTitles = data.dishTitles
                         return dishTitles;
                }
          },                                             
          limit: 10                                                                   
        });
        
        $('.tt-dropdown-menu').addClass('type-ahead-picker'); 
        




    }
    
    function initFilterSlidersApplyButtons(){

        var applyBtnsDivs = $('.add-filter-to-search-btn');

        /*
        //var applyBtns = applyBtnsDivs.find('a');
        var applyBtns = applyBtnsDivs.find('input[type="checkbox"]');
        console.log(applyBtns)
        applyBtns.each(function( index ) {

            var filterSlider = $(this).parent().find('.slider');
            var applyFilter = filterSlider.data("apply");
            if(applyFilter){
              //$( this ).text('+ Apply');
              console.log('checking')
              $( this ).prop('checked', "checked");
            }
            else{
              //$( this ).text('Do not Apply');
               console.log('not chcecking')
               console.log($( this ));
              $( this ).prop('checked', false);
            }

        });
        */

        applyBtnsDivs.on('click', function(ev){

            var addFilterToSearchBtn = this;
            var filterSlider = $(this).parent().find('.slider');
            var applyFilter = filterSlider.data("apply");

            if(applyFilter){
              console.log('not applied');
              filterSlider.data("apply",false);
            }
            else{
              console.log('applied');
              filterSlider.data("apply",true);
            }
          
        });

        
    }
    

})





