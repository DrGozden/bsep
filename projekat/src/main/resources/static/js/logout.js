function logout() {
	
	$.ajax({
		url: "user/logout",
		type:"GET",
		contentType:"application/json",
		dataType:"json",
		success : function(data){
			if (data == true) {
				alert("Uspjesno ste se odjavili sa sistema.");
				top.location.href = "login.html";
			}else{
				
				
			}
		},
		error: function(jqxhr,textStatus,errorThrown){
			alert(errorThrown);
		}
	});
	
}