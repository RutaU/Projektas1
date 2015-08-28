$(document).ready(function(){
	$(".button").on("click", function(){
	var username = $("#username").val();
		var password = $("#psw").val();
		var email = $("#email").val();
			if (username.length == 0 || 
				password.length == 0 || 
				email.length == 0) {
				alert ("Something missing here...");
			}	else {
				$(".success").show();
					} 
});
});