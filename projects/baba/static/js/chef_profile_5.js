
$(function(){


	var attachDiv = $(".attach-div");
	var fileUrls = attachDiv.find(".file-uploader-div")
	fileUrls.each(function(){
		if($(this).value){
			$(this).hide()
		}
		
	})	

	// Select first qualification form
	var qf = $("#attachement-detail-0");

	// Select number of experience and qualifications from the server.
	var qf_count = $("#attachement-count-server");
	console.log(qf_count);

	var qf_num = parseInt(qf_count.val());
	console.log(qf_num);

	// Clone form
	var b2 = qf.clone();

	function add_attachement(){

		console.log('add attachement');

		var b=b2.clone();

		b.attr("id", "attachement-detail-" + qf_num);
		var c = b.find("input[type='file']");
		var d = b.find("select");
		var e = b.find("a.del-link");

		console.log(c);
		c.each(function(){
			var id = $(this).attr('id');
			var new_id_list = id.split('-');
			new_id_list[1] = qf_num;
			var new_id = new_id_list.join('-');
			var new_name = new_id;
			$(this).attr('id', new_id);
			$(this).attr('name', new_name);
			$(this).attr('value', '');
			console.log('changing value');
			$(this).val('');
			console.log($(this).val());
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

		b.find(".file-url-div").hide();
		//b.find(".file-uploader-div").removeClass('hide');

        if(e.length == 0){
			var al = $("<a>").attr('href', '#').addClass('del-new-attachement').attr('id', qf_num).text('Delete');
			b.append(al);
		}
		else{
			e.each(function(){
			$(this).attr('id', 	qf_num).removeClass('del-attachement').addClass('del-new-attachement').attr('href', '#');

			});
		}

		$("#new-attachement-container").append(b);
		
		$(".del-new-attachement").click(function(event){
			var current_id = $(this).attr('id');
			$("#attachement-detail-" + current_id).remove();

			//Reset uploader input ids
			qf_num = qf_num - 1;
			resetInputIds();

			event.preventDefault();
		});

		qf_num = qf_num + 1;

		return false;
	}

	$("#add-attachement").click(add_attachement);

	// Get request to delete save in database attachement.
	$(".del-attachement").click(function(e) {
		var attach_id = $(this).attr('id');
		$.get($(this).attr('href'), function(data){
			alert(data);
		}).done(function(){
			$("#attachement-detail-" + attach_id).remove();

			//Reset uploader input ids
			qf_num = qf_num - 1;
			resetInputIds();

		}).fail(function(){
			alert('Some Internal Error. Try Again!')
		});

		e.preventDefault();
	});

	function resetInputIds(){

		var form = $("form");

		var attachDiv = form.find(".attach-div");
		var counter = 0;
		attachDiv.each(function(){
			var id = $(this).attr('id');
			var new_id_list = id.split('-');
			new_id_list[2] = counter;
			var new_id = new_id_list.join('-');
			$(this).attr('id', new_id);
			counter += 1;
		})

		var c = form.find("input[type='file']");
		var counter = 0;
		c.each(function(){
			console.log('changing ids');
			var id = $(this).attr('id');
			var new_id_list = id.split('-');
			new_id_list[1] = counter;
			var new_id = new_id_list.join('-');
			var new_name = new_id;
			console.log(new_name);
			$(this).attr('id', new_id);
			$(this).attr('name', new_name);
			//$(this).val('');
			counter += 1;
		});

		var d = form.find("select");
		
		counter = 0;
		d.each(function(){
			var id = $(this).attr('id');
			var new_id_list = id.split('-');
			new_id_list[1] = counter;
			var new_id = new_id_list.join('-');
			var new_name = new_id;
			$(this).attr('id', new_id);
			$(this).attr('name', new_name);
			counter += 1;
		});

		var delLinks = form.find("a.del-link");
		counter = 0;
		delLinks.each(function(){
			$(this).attr('id', 	counter)
			counter += 1;
		});
		


	}

});





