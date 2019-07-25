$(function () {
	
// Validation
	
	$("#updateForm").validate({
							
/*	    invalidHandler: function(form, validator) {
									$('label.error').html('');
		},*/
		rules: {
				  name: {
						  required: true
				  },
				  email: {
						  required: true,
						  email: true
				  },
				  subject: {
						  required: true
				  },
				  message: {
						  required: true
				  }
				  
		},// rules

		messages: {
				  name: {
						  required: 'Please enter name'
				  },
				  email: {
						  required: 'Please enter email',
						  email: 'Please enter valid email'
				  },
				  subject: {
						  required: 'Please enter subject'
				  },
				  message: {
						  required: 'Please enter your message'
				  }
		},// messages
		submitHandler: function(form) {
		   	
			var formData = $(form).serialize();
			
			$.get("email/email.php", formData, function(data){
				
			   if(data == 'success'){
				   
			   		$('#contact-wrap').fadeOut();
					$('#success-wrap').fadeIn(300, function(){
											$(this).delay(15000).fadeOut(300, function(){
//															$('#main-wrap').show();
													   });
										});
			   }else{
				   
				    $('#contact-wrap').fadeOut();
					$('#error-wrap').fadeIn(300, function(){
											$(this).delay(15000).fadeOut(300, function(){
//															$('#main-wrap').show();
													   });
										});
				   
			   }
			 });
		}

	});// validate
	
	$('#email').focus(function(){
							  		var cur_val = $(this).val();
									if (cur_val != ''){
										
										$(this).val('');	
									}
							  });

	$('#email').blur(function(){
							  		var cur_val = $(this).val();
									if (cur_val == ''){
										
										$(this).val('Enter your e-mail address');	
									}
							  });
});