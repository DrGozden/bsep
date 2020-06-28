var generate_url = "../ssccontroller/generateSSC"
	
window.onload = function(){
	$.ajax({
		type : 'GET',
		url : "/ssccontroller/getKeystores",
		contentType : 'application/json',
		dataType : "json",
		success : function(data) {
			$("#fileName").empty();
			var list = data == null ? [] : (data instanceof Array ? data : [ data ]);
			var keystores = $("#fileName");
			$.each(list, function(index, aliases) {
				var li = $('<option value="'+aliases+'">' + aliases + ' </option>');
				$(keystores).append(li);
				
			});

		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			alert("AJAX ERROR: " + errorThrown);
		}
	});
	
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

	
function generateSSC(){

	var fileName = $('#fileName').find(":selected").val();
	var password = $("#password").val();
	var aliasGC = $("#aliasGC").val();
	
	var serialNumberGC = $("#serialNumberGC").val();
	var commonNameGC = $("#commonNameGC").val();
	var organisationUnitGC = $("#organisationUnitGC").val();
	var organisationNameGC = $("#organisationNameGC").val();
	var localityNameGC = $("#localityNameGC").val();
	var stateNameGC = $("#stateNameGC").val();
	var countryGC = $("#countryGC").val();
	var validityTimeGC = $("#validityTimeGC").val();
	var emailGC = $("#emailGC").val();
	var purposeGC = $("#purposeGC").val();
	
	dzejson = JSON.stringify({
		"fileName" : fileName,
		"password" : password,
		"aliasGC" : aliasGC,
		"serialNumberGC" : serialNumberGC,
		"commonNameGC" : commonNameGC,
		"organisationUnitGC" : organisationUnitGC,
		"organisationNameGC" : organisationNameGC,
		"localityNameGC" : localityNameGC,
		"stateNameGC" : stateNameGC,
		"countryGC" : countryGC,
		"validityTimeGC" : validityTimeGC,
		"emailGC" : emailGC,
		"purposeGC" : purposeGC
		
	});
	
	console.log(dzejson)
	$.ajax({
		type : 'POST',
		url : generate_url,
		contentType : 'application/json',
		dataType : "json",
		data : dzejson,
		success : function(data) {
			if(data == "OK")
			alert("nesto")
		},
		error : function(XMLHttpRequest, textStatus, errorThrown,data) {
			alert("AJAX ERROR: " + errorThrown);
			console.log(data);
		}
	});
}


