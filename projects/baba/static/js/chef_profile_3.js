var allowed = false;

$(function(){

	
	change_school_country();

	var current;
	$(".fixed").each(function(){
		$(this).focus(function(){
			if(this.val)
				current = this.val();
		}).change(function() {
				alert('You cannot change country, please delete this qualification, ' +
					'and add a new one by clicking Add Qualification below to ' +
					'change your country setting.');
				$(this).val(current);
			});
	});
	
	// Select first qualification form
	var qf = $("#qf-detail-0");

	// Select number of experience and qualifications from the server.
	var qf_count = $("#qf-count-server");
	var qf_num = parseInt(qf_count.val());

	// Clone form
	var b2 = qf.clone();

	function add_qf(){
		var b=b2.clone();

		b.attr("id", "qf-detail-" + qf_num);
		var c = b.find("input[type='text']");
		var d = b.find("select");
		var e = b.find("a");

		c.each(function(){
			var id = $(this).attr('id');
			var new_id_list = id.split('-');
			new_id_list[1] = qf_num;
			var new_id = new_id_list.join('-');
			var new_name = new_id;
			$(this).attr('id', new_id);
			$(this).attr('name', new_name);
			$(this).val('');
		});

		b.find("input[type='hidden']").each(function(){
			var id = $(this).attr('id');
			var new_id_list = id.split('-');

			new_id_list[1] = qf_num;
			var new_id = new_id_list.join('-');

			var new_name = new_id;
			$(this).attr('id', new_id);
			$(this).attr('name', new_name);
			$(this).val('');
		});

		d.each(function(){
			var id = $(this).attr('id');
			var new_id_list = id.split('-');
			new_id_list[1] = qf_num;
			var new_id = new_id_list.join('-');
			var new_name = new_id;
			//remove fixed class from country select
			if (new_id_list[2]=='country'){
				$(this).removeClass('fixed');
				$(this).removeAttr('disabled');
			}else{
				$(this).val('None');
			}

			$(this).attr('id', new_id);
			$(this).attr('name', new_name);

			if (id=='qualifications-0-school'){
				$(this).addClass('school-inputs');
			}

		});
        if(e.length == 0){
			var al = $("<a>").attr('href', '#').addClass('del-new-qf').attr('id', qf_num).text('Delete');
			b.append(al);
		}
		else{
			e.each(function(){
			$(this).attr('id', 	qf_num).removeClass('del-qf').addClass('del-new-qf').attr('href', '#');

			});
		}



		$("#new-qf-container").append(b);

		$(".del-new-qf").click(function(event){
			var current_id = $(this).attr('id');
			$("#qf-detail-" + current_id).remove();
			event.preventDefault();
		});

		qf_num = qf_num + 1;
		$(".chzn-select").chosen();
		activate_change();

		change_school_country();

		return false;
	}

	$("#add-qf").click(add_qf);

	// Get request to delete qualification.
	$(".del-qf").click(function(e) {
		var exp_id = $(this).attr('id');
		$.get($(this).attr('href'), function(data){
			alert(data);
		}).done(function(){
				$("#qf-detail-" + exp_id).remove();
			}).fail(function(){
				alert('Some Internal Error. Try Again!')
			});

		e.preventDefault();
	});

	/*
	$("#cancel").click(function(e){
			$(".modal").modal('hide');
			//failed = true;
		});

    $("#confirm").click(function(e){
    	console.log('confirm clicked');
		//failed = false;
		allowed = true;
		$('form').trigger('submit');
	});
	*/

	$('form').submit(function() {
		console.log('form submitted');
		var failed=false;

		//Check if certifications fields are present.
		$(".certi-sel").each(function(){

			var res = $(this).find(":selected").val();
			if(res!='__None'){
				var id  = $(this).attr('id');
				var index = id.split('-')[1];
				
				var subject = $("#qualifications-" + index + "-subject").val();
				var courseName = $("#qualifications-" + index + "-course_name").val();
				var level = $("#qualifications-" + index + "-level").val();
				var school = $("#qualifications-" + index + "-school").val();
				var ref = $("#qualifications-" + index + "-education_reference").val();

				console.log(courseName)
				if(subject=='__None'){
					alert("Subject cannot be none");
					failed = true;
					return;
				}
				else if(courseName=='__None'){
					alert("Course Name cannot be none");
					failed = true;
					return;
				}
				else if(level=='__None'){
					alert("Level cannot be none");
					failed = true;
					return;
				}
				else if(school=='__None'){
					alert("School cannot be none");
					failed = true;
					return;
				}
				else if(ref==''){
					alert("Education reference is required.");
					failed = true;
					return;
				}
			}
		});

		if(failed)
			{return false}

		$(".error").remove();

	    //failed = validate_ref_format();

		if(failed){
			alert('Format error');
			return false
		}

		/*
		if (!allowed) {
			$(".modal").modal({
				backdrop: 'static'
			});
			failed = true;
		}

		if(failed){
			return false;
		}
		*/

	});

	$(".chzn-select").chosen();

	activate_change();
});

function onCertificateChange(certiObj){
	var id = certiObj.attr('id');

	// Find out id of relevant subject , course_name and level dropdowns.
	var sub_id_list = id.split('-');
	sub_id_list[2] = 'subject';
	var sub_id = sub_id_list.join('-');
	var subject = $('#'+sub_id);

	var level_id_list = id.split('-');
	level_id_list[2] = 'level';
	var level_id = level_id_list.join('-');
	var level = $('#'+level_id);

	var name_id_list = id.split('-');
	name_id_list[2] = 'course_name';
	var name_id = name_id_list.join('-');
	var course_name = $('#' + name_id);


	var type_id = certiObj.find(":selected").val();

	$.get('/users/get_subject/' + type_id + '/', function(data){
		// Remove existing data of level.
		$("#"+level_id + " option").remove();
		level.prepend("<option value=__None>None</option>");
		data.levels.forEach(function(item){
			console.log(item);
			level.append("<option value=" + item[0] + ">" + item[1] + "</option>");
		});
		level.trigger("liszt:updated");


		// Remove existing data of subject.
		$("#"+sub_id + " option").remove();
		subject.prepend("<option value=__None>None</option>");
		data.subjects.forEach(function(item){
			subject.append("<option value=" + item[0] + ">" + item[1] + "</option>");
		});
		subject.trigger("liszt:updated");

		// Remove existing data of subject.
		$("#"+name_id + " option").remove();
		course_name.prepend("<option value=__None>None</option>");
		data.course_names.forEach(function(item){
			course_name.append("<option value=" + item[0] + ">" + item[1] + "</option>");
		});
		course_name.trigger("liszt:updated");

	});
}

function onSubjectChange(subObj){
	var id = subObj.attr('id');
	var type_id_list = id.split('-');
	type_id_list[2] = 'certificate_type';
	var type_id = type_id_list.join('-');

	var level_id_list = id.split('-');
	level_id_list[2] = 'level';
	var level_id = level_id_list.join('-');

	var type = $('#'+type_id);
	var level = $('#'+level_id);

	var name_id_list = id.split('-');
	name_id_list[2] = 'course_name';
	var name_id = name_id_list.join('-');
	var course_name = $('#' + name_id);

	var subject_id = subObj.find(":selected").val();
	var type_val = $("#"+type_id).find(":selected").val();

	if(subject_id != '__None'){
		$.get('/users/get_course_name/' + type_val + '/' + subject_id + '/', function(data){
				console.log(data);
				$("#"+level_id + " option").remove();
				level.prepend("<option value=__None>None</option>");
				data.levels.forEach(function(item){
					level.append("<option value=" + item[0] + ">" + item[1] + "</option>");
				});
				level.trigger("liszt:updated");

				// Remove existing data of subject.
				$("#"+name_id + " option").remove();
				course_name.prepend("<option value=__None>None</option>");
				data.course_names.forEach(function(item){
					course_name.append("<option value=" + item[0] + ">" + item[1] + "</option>");
				});
				course_name.trigger("liszt:updated");

		});
	}
	
}

function onCourseChange(courseObj){
	var id = courseObj.attr('id');
	var type_id_list = id.split('-');
	type_id_list[2] = 'certificate_type';
	var type_id = type_id_list.join('-');

	var level_id_list = id.split('-');
	level_id_list[2] = 'level';
	var level_id = level_id_list.join('-');

	var type = $('#'+type_id);
	var level = $('#'+level_id);

	var subject_id_list = id.split('-');
	subject_id_list[2] = 'subject';
	var subject_id_str = subject_id_list.join('-');

	var subject_id = $("#" + subject_id_str).find(":selected").val();
	var type_val = $("#"+type_id).find(":selected").val();
	var course_name_id = courseObj.find(":selected").val();

	if(subject_id != '__None' && course_name_id != '__None'){
		$.get('/users/get_level/' + type_val + '/' + subject_id + '/' + course_name_id + '/', function(data){
         console.log(data);
		// Remove existing data of levels.
		$("#"+level_id + " option").remove();
		level.prepend("<option value=__None>None</option>");
		data.levels.forEach(function(item){
			level.append("<option value=" + item[0] + ">" + item[1] + "</option>");
		});
		level.trigger("liszt:updated");


	});
	}
	
}

// Function to update certification subject and level on type selected
function activate_change(){

	$(".certi").change(function(){
		onCertificateChange($(this));

	});

	$(".subjects").change(function(){
		onSubjectChange($(this));
	});

	$(".course_names").change(function(){
		onCourseChange($(this));
	});
}

function hide_none_form(){

	$(".certi-sel").each(function(){
		var res = $(this).find(":selected").val();

		console.log(res);

		if(res=='__None'){
			var id  = $(this).attr('id');
			var index = id.split('-')[1];

			$("#qf-detail-" + index).hide();
		}
	});
	
}

function change_school(obj){
	if(obj.hasClass('fixed')){
		return;
	} 
	else {
		var id = obj.attr("id");
	    var arr = id.split("-");
		arr[2] = "school";
		var school_id = arr.join("-");
		var school = $("#" + school_id);

		$.get("/users/get_school/" + obj.val() + "/" ,function(data){
			$("#" + school_id + " option").remove();

			data.schools.forEach(function(item){
				school.append("<option value="+ item[0] + ">" + item[1] +
					"</option>");
			});
			school.trigger("liszt:updated");
		});

		// For certificate type
		var id1 = obj.attr("id");
	    var arr1 = id1.split("-");
		arr1[2] = "certificate_type";
		var ctype_id = arr1.join("-");

		var ctype = $("#" + ctype_id);

		$.get("/users/get_certificate_type/" + obj.val() + "/" , function(data) {
			$("#" + ctype_id + " option").remove();

            ctype.append("<option value=__None>None</option>");

			data.ctypes.forEach(function(item){
				ctype.append("<option value="+ item[0] + ">" + item[1] +
					"</option>");
			});
			ctype.trigger("liszt:updated");
		});
	}
}

function change_school_country(){


	$(".qf_country").change(function(){
		change_school($(this));
	});

}

function show_modal(){
	$(".modal").modal({
		backdrop: 'static'
    });
}



