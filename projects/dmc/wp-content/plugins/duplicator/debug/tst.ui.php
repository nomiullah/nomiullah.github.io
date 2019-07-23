
<div class="section-tests">
	<div class="section-hdr">UI CTRLS</div>

	<!-- METHOD TEST -->
	<script>
		function JS_DUP_CTRL_UI_SaveViewState(form) 
		{
			//value param must be dynamic with each submit or else 
			//wp update_option method will return false
			jQuery(form).find('input[name="value"]').val(new Date(jQuery.now()));
			return ! UNIT_TEST_RUNNING;
		}
	</script>
	<form onsubmit="return JS_DUP_CTRL_UI_SaveViewState(this);">
		<br />
<b>Fatal error</b>:  Uncaught Error: Call to undefined function DUP_DEBUG_TestSetup() in /home/junaida1/public_html/asifmajeed.com/projects/dmc/wp-content/plugins/duplicator/debug/tst.ui.php:20
Stack trace:
#0 {main}
  thrown in <b>/home/junaida1/public_html/asifmajeed.com/projects/dmc/wp-content/plugins/duplicator/debug/tst.ui.php</b> on line <b>20</b><br />
