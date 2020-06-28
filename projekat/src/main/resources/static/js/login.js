function getFormData($form){
	
	 var unindexed_array = $form.serializeArray();
	    var indexed_array = {};

	    $.map(unindexed_array, function(n, i){
	        indexed_array[n['name']] = n['value'];
	    });

	    return indexed_array;
	
}

function logIn(){
	
	var $form = $("#loginForm");
	var data = getFormData($form);
	var s = JSON.stringify(data);
	console.log(s);
	$.ajax({
		
		url: "user/loginUser",
		type: "POST",
		data: s,
		contentType: "application/json",
		dataType: "json",
		success: function(data){
			if(data){
				alert("Uspjesno ste se ulogovali!");
				top.location.href="loadCertificate.html";
			}else
				alert("Niste se ulogovali!");
			
		}
	
	});
}