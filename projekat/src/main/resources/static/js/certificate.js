var generate_url = "../Certificate/generate"

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
				loadKS();
				loadCAes();
			}
		},
		error: function(jqxhr,textStatus,errorThrown,data){
		}
	});
}


function loadCAes() {
	$.ajax({
		type : 'GET',
		url : "/Certificate/getCAes",
		contentType : 'application/json',
		dataType : "json",
		success : function(data) {
			$("#issuer").empty();
			var list = data == null ? [] : (data instanceof Array ? data : [ data ]);
			var keystores = $("#issuer");
			$.each(list, function(index, aliases) {
				var li = $('<option value="'+aliases+'">' + aliases + ' </option>');
				$(keystores).append(li);
				
			});

		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			alert("AJAX ERROR: " + errorThrown);
		}
	});
}

function loadKS() {
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
}

function formToJSON(isCA) {
	var fileName = $('#fileName').find(":selected").val();
	var password = $("#password").val();
	var issuer = $('#issuer').find(":selected").val();
	var passwordIKS = $("#passwordIKS").val();
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
	
	
	return JSON.stringify({
		"fileName" : fileName,
		"password" : password,
		"issuer" : issuer,
		"passwordIKS" : passwordIKS,
		"alias" : aliasGC,
		"serialNumber" : serialNumberGC,
		"commonName" : commonNameGC,
		"organisationUnit" : organisationUnitGC,
		"organisationName" : organisationNameGC,
		"localityName" : localityNameGC,
		"stateName" : stateNameGC,
		"country" : countryGC,
		"validityTime" : validityTimeGC,
		"email" : emailGC,
		"purpose" : purposeGC,
		"isCA" : isCA
	});
}

function generateCA(){

	$.ajax({
		type : 'POST',
		url : generate_url,
		contentType : 'application/json',
		dataType : "json",
		data : formToJSON(true),
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

function generateCFU(){

	$.ajax({
		type : 'POST',
		url : generate_url,
		contentType : 'application/json',
		dataType : "json",
		data : formToJSON(false),
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