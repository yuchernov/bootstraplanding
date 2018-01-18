$(document).ready(function(){
	
	$('#name').change(function(){
		$('#user').text(', '+$(this).val());
	});

});