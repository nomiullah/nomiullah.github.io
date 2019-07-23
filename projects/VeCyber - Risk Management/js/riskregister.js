 
$(".content .risk-management-content .table-data").mCustomScrollbar({
	theme: "rounded",
	mouseWheelPixels: 100
});
$( function() {
$( "#datepicker" ).datepicker();
	$(".date-pick").datepicker('setDate', new Date());
} );