var allowed = false;

$(function(){
	$("label[for='cuisine_choices-0']").text('First Choice');
	$("label[for='cuisine_choices-1']").text('Second Choice');
	$("label[for='cuisine_choices-2']").text('Third Choice');

	change_res_country();

    var current;
	$(".fixed").each(function(){
		$(this).focus(function(){
			if(this.val)
				current = this.val();
		}).change(function() {
				alert('You cannot change country, please delete this experience, ' +
					'and add a new one by clicking Add Experience below to ' +
					'change your country setting.');
				$(this).val(current);
			});
	});

	// Select first experience and qualification form
	var a = $('#experience-detail-0');
	//var qf = $("#qf-detail-0");

	// Select number of experience and qualifications from the server.
	var exp_count = $("#exp-count-server");
	//var qf_count = $("#qf-count-server");
	var num = parseInt(exp_count.val());
	//var qf_num = parseInt(qf_count.val());

	// Clone both forms
	var b1 = a.clone();
	//var b2 = qf.clone();


	function add_experience(){
		var b=b1.clone();

		b.attr("id", "experience-detail-" + num);
		var c = b.find("input[type='text']");
		var d = b.find("select");
		var e = b.find("a");

		c.each(function(){
			var id = $(this).attr('id');
			var new_id_list = id.split('-');


			new_id_list[1] = num;
			var new_id = new_id_list.join('-');

			var new_name = new_id;
			$(this).attr('id', new_id);
			$(this).attr('name', new_name);
			$(this).val('');
		});

		b.find("input[type='hidden']").each(function(){
			var id = $(this).attr('id');
			var new_id_list = id.split('-');


			new_id_list[1] = num;
			var new_id = new_id_list.join('-');

			var new_name = new_id;
			$(this).attr('id', new_id);
			$(this).attr('name', new_name);
			$(this).val('');
		});

		d.each(function(){
			var id = $(this).attr('id');
			var new_id_list = id.split('-');
			new_id_list[1] = num;
			var new_id = new_id_list.join('-');
			var new_name = new_id;
			//remove fixed class from country select
			if (new_id_list[2]=='country'){
				$(this).removeClass('fixed');
				$(this).removeAttr('disabled');
			}else{
				//$(this).val('None');
			}

			$(this).attr('id', new_id);
			$(this).attr('name', new_name);

			if (id=='work_experience-0-restaurant'){
				$(this).addClass('restaurant-inputs');
			}

		});

		if(e.length == 0){
			var al = $("<a>").attr('href', '#').addClass('del-new-exp').attr('id', num).text('Delete');
			b.append(al);
		}
		else{
		e.each(function(){
			$(this).attr('id', num).removeClass('del-exp').addClass('del-new-exp').attr('href', '#');

		});
		}


		$("#new-experience-container").append(b);

		$(".del-new-exp").click(function(event){
				var current_id = $(this).attr('id');
				$("#experience-detail-" + current_id).remove();
				event.preventDefault();
		});

		num = num + 1;
		$(".chzn-select").chosen();
		$("#exp-count-client").val(num);

		change_res_country();


		return false;
	}

	$("#add-experience").click(add_experience);

	// Get request to delete experience
	$(".del-exp").click(function(e){
		var exp_id = $(this).attr('id');


		$.get($(this).attr('href'), function(data){
			alert(data);
		}).done(function(){
				$("#experience-detail-" + exp_id).remove();
		}).fail(function(){alert('fail')});

		e.preventDefault();
	});


	$("#cancel").click(function(e){
			$(".modal").modal('hide');
			//failed = true;
		});

    $("#confirm").click(function(e){
			//failed = false;
			allowed = true;
		$('form').trigger('submit');
	});

	$('form').submit(function() {

		var failed=false;

		// Check if three differenct cuisine choices are chosen.
		$(".cuisine_choices").each(function(){
			var th = $(this);
			var e = $(this).find(":selected").text();

			$(".cuisine_choices").each(function(){
				if(th.attr('id')!=$(this).attr('id')){
					var t = $(this).find(":selected").text();

					if(t==e){
						alert("You have to enter 3 different cuisine choices.");
						failed = true;
						return false;
					}
				}

			});

			if(failed){
				return false
			}
		});

		if(failed)
			{return false}

		// Check if experience required fields are present.
		$(".sel").each(function(){

			var res = $(this).find(":selected").val();

			if(res!='__None'){
				var id  = $(this).attr('id');
				var index = id.split('-')[1];
				var name = $("#work_experience-" + index + "-reference_name").val();
				var contact = $("#work_experience-" + index + "-reference_contact").val();
				if(name=='' || contact==''){
					alert("Reference name and contact are required.");
					failed = true;
				}
			}
		});

		if(failed)
			{return false}

		$(".error").remove();

        //failed = validate_ref_format();

		if(failed)
			{
				alert('Format error');
				return false}

        //failed = validate_ref_qf_format();

		failed = validate_exp_time();


        if(failed)
			{return false}


		if (!allowed) {
			$(".modal").modal({
				backdrop: 'static'
			});
			failed = true;
		}
		if(failed){
			return false;
		}

	});

	$(".chzn-select").chosen();

});




function hide_none_form(){
	console.log('hide none form called');
	$(".sel").each(function(){
		var res = $(this).find(":selected").val();

		if(res=='__None'){
			var id  = $(this).attr('id');
			var index = id.split('-')[1];

			$("#experience-detail-" + index).hide();
		}
	});
}