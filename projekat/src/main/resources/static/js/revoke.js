window.onload = function(){
	$.ajax({
		url: "/user/getUser" ,
		type:"GET",
		
		contentType:"application/json",
		dataType:"json",
		success : function(data){
			if (data.text == "KORISNIK" || data.text == null) {
				alert("Samo administratori sistema imaju pristup ovoj stranici.");
				top.location.href = "loadCertificate.html";
			}else{	
			}
		},
		error: function(jqxhr,textStatus,errorThrown,data){
		}
	});
}

function revokeCert() {
	
	var $form = $("#revokeCertificate");
	var data = getFormData($form);
	var s = JSON.stringify(data);
	console.log(s);

	$.ajax({
		type : 'POST',
		url : "revokecontroller/revokeCertificate",
		contentType : 'application/json',
		dataType : "json",
		data : s,
		success : function(data) {
			alert("Uradjen je revoke");
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			alert("AJAX ERROR: " + errorThrown);
		}
	});
	
}
function getFormData($form){
	
	 var unindexed_array = $form.serializeArray();
	    var indexed_array = {};

	    $.map(unindexed_array, function(n, i){
	        indexed_array[n['name']] = n['value'];
	    });

	    return indexed_array;
	
}