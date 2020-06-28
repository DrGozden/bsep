window.onload = function(){
	
	$.ajax({
		url: "user/init",
		type:"GET",
	
		contentType:"application/json",
		dataType:"json",
		success : function(data){
			if (data == false) {
				alert("Poslo je po zlu!");
			}else{
				
				
			}
		},
		error: function(jqxhr,textStatus,errorThrown){
			alert(errorThrown);
		}
	});
	
}

