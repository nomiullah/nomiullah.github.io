function change_res(obj){
	if(obj.hasClass('fixed')){
		return;
	} else {
		var id = obj.attr("id");
		var arr = id.split("-");
		arr[2] = "restaurant";
		var res_id = arr.join("-");
		var res = $("#" + res_id);

		var country = obj.val();

		$.get("/users/get_restaurant/" + country + "/", function(data) {

			$("#" + res_id + " option").remove();
			res.append("<option value=__None>None</option>");

			data.restaurants.forEach(function(item){
				res.append("<option value="+ item[0] +">" + item[1] +"</option>")

			});
			res.trigger("liszt:updated");
		});
	}
}


function change_res_country(){
	$(".exp_country").change(function(){
		change_res($(this));
	});
}

function validate_exp_time(){
    var failed = false;
    var total_exp_years = parseInt($("#experience_years").val())*12;
    var total_exp = total_exp_years + parseInt($("#experience_months").val());

    var total_years= 0;
    var total_months= 0 ;
    var breakdown_exp="";

	$(".breakdown_exp_year").each(function(){
		var res = get_restaurant_obj($(this));
		if(res.val()!='__None'){
    		var breakdown_exp_year = parseInt($(this).val())*12;
    		total_years = total_years + breakdown_exp_year;
		}

	});

    $(".breakdown_exp_month").each(function(){
		var res = get_restaurant_obj($(this));
		if(res.val()!='__None'){
    	var breakdown_exp_month = parseInt($(this).val());
    	total_months = total_months + breakdown_exp_month;}
    });

    breakdown_exp = total_years + total_months;

    if(total_exp != breakdown_exp)
    {
        alert("Total Experience and Breakdown Experience does not match");
    failed = true;
    }

    return failed;
}

function get_restaurant_obj(obj){
	var id = obj.attr('id');
	var arr = id.split("-");
	arr[2] = 'restaurant';
	var restaurant_id = arr.join("-");

	return $("#" + restaurant_id);

}

function show_modal(){
	$(".modal").modal({
		backdrop: 'static'
    });
}

