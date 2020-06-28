$( document ).ready(function() {
	
	$.ajax({
		url : 'user/getUser',
		type : 'GET',
		dataType : 'json',
		success : function(data) {
			if (data.text == null) {
				$(".header").load("headerGuest.html");
			} else {
				$(".header").load("header.html");
			}
		},
		error: function(jqxhr,textStatus,errorThrown){
			alert(errorThrown);
		}
	});
});