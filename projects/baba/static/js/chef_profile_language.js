$(function(){
	var cntrlr = this;
    for(var i=1; i<26;i++){

		// Hide the labels
        $("label[for='speaking_preference_" + i +"']").css("visibility","hidden");

		$("#speaking_preference_" + i + " input[type='checkbox']").each(function() {
			$(this).addClass("time_checkbox_" + i);
		});

	}

	$("#day_preferences input[type='checkbox']").each(function() {
		activate_time_checkbox($(this));
		activate_checkall($(this));
	});


    $("#day_preferences input[type='checkbox']").change(function() {
    	console.log('boom boom');
        activate_time_checkbox($(this));
    });

    cntrlr.all_days_selected = false;
	$("#select_all_day").click(function(){
		
		//$('#day_preferences input').prop('checked', 'checked');
		if(cntrlr.all_days_selected){
			$('#day_preferences input').prop('checked', false);
			cntrlr.all_days_selected = false;
		}else{
			$('#day_preferences input').prop('checked', 'checked');
			cntrlr.all_days_selected = true;
		}
		$('#day_preferences input').each(function(){

			activate_time_checkbox($(this));
		});
    });

	$("#select_all_payment").click(function(){
		$('#payment_pref option').prop('selected', 'selected');
	});

	cntrlr.all_days_times_selected = false;
	$("#select_all_time").click(function(){

        if(cntrlr.all_days_selected){
			$('#day_preferences input').prop('checked', false);
        	$('.speaking_proficiency input').prop('checked', false);
			cntrlr.all_days_selected = false;
		}else{
			$('#day_preferences input').prop('checked', 'checked');
        	$('.speaking_proficiency input').prop('checked', 'checked');
			cntrlr.all_days_selected = true;
		}


		$('#day_preferences input').each(function(){
			activate_time_checkbox($(this));
			activate_checkall($(this));
		});
    });

	$("form").submit(function(){
        var checked_value = 0 ;
		var failed = false;
        var arr = [];
        $('#day_preferences input[type = "checkbox"]:checked ').each(function(){

            var checked_field = $(this).val();
            var label = $("label[for='" + $(this).attr('id') + "']");
            var id = "speaking_preference_" + checked_field;
            $('#'+id +' input[type = "checkbox"]:checked' ).each(function(){

                checked_value = $(this).val();

            });
            if(checked_value == 0)
            {
                // alert("Please select time preference for " + label.text());
                arr.push(label.text());
            }
            else{
                checked_value = 0;
            }
        });
        if(arr.length > 0)
        {
            alert("Please select proficiency level for " + arr.join(", "));
			failed = true;

        }
		if(failed){
			return false;
		}

    });
});


function activate_time_checkbox(obj) {

	// Get selected checkbox value
		var id = obj.val();
		// Choose corresponding time preference id.
        var id_time = "speaking_preference_"+ id ;
		var time_obj = $("#" + id_time);

        var visible = "";



        if(obj.is(":checked")){
            visible = "visible";

			if (!time_obj.find(".checkall").length) {
				var checkall = $("<span>").addClass("checkall");
				var select_all = $("<input>").attr('type', 'checkbox').
					attr('id', 'checkall_' + id_time);

				//checkall.append(select_all).append(' Check all time box');
				//time_obj.append(checkall);
			}


            // Onclick select all the check of class time_checkbox_id
            $("#checkall_"+ id_time).change(function(){
				if ($(this).is(":checked")) {
					 $(".time_checkbox_" + id).each(function() {

                    	 $(this).prop('checked',true);
						 // if one check box gets unchecked then uncheck the checkall box
						 $(this).change(function() {
							 if (!$(this).is(":checked")) {
								 $("#checkall_"+ id_time).prop('checked', false);
							 }

						 });
                	  });
				} else {
					 $(".time_checkbox_" + id).each(function() {
                    	$(this).prop('checked',false);
                	 });
				}

            });

			var class_length = $(".time_checkbox_" + id).length;

			// if all checkboxes of time are selected then check all should be automatically selected.
			$(".time_checkbox_" + id).change(function() {

				console.log('changing checkbox');
				var changedCheckBox = this;
				var checked_counter = 0;
				$(".time_checkbox_" + id).each(function(){
					if ($(this).is(":checked") && changedCheckBox != $(this)[0]) {
						$(this).prop('checked', false);
					}
				});

			});

        } else {
            visible = "hidden";
            $('#'+ id_time +' input[type="checkbox"]').each(function() {
                 $(this).prop('checked',false);
            });
        }




        $("#"+ id_time).css("visibility",visible);

}

function activate_checkall(obj){
	if (obj.is(":checked")) {
			var id = obj.val();
			var checked_counter_initial = 0;
			var class_length = $(".time_checkbox_" + id).length;
			var id_time = "speaking_preference_" + id;

			$(".time_checkbox_" + id).each(function () {
					if ($(this).is(":checked")) {
						checked_counter_initial += 1;
					}
			});

			if (checked_counter_initial == class_length) {
					$("#checkall_" + id_time).prop('checked', true);
			}

			// if one check box gets unchecked then uncheck the checkall box
			$(".time_checkbox_" + id).change(function() {
				if (!$(this).is(":checked")) {
					$("#checkall_"+ id_time).prop('checked', false);
				}

			});
		}
}