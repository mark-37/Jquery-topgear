(function(){
	
	var input = document.getElementById('autocomplete');
	console.log(input);

	obj = getCountries();
	console.log(obj);

	input.addEventListener("keyup",function(e){
		var val = input.value;

		

		if(val.length>=3){
			console.log(val);
			
		}

	});



})();

function getCountries() {
	
	var url = 'https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-capital-city.json';
	var rt="";

	var xhttp;
	if (window.XMLHttpRequest) {
	  // code for modern browsers
	  xhttp = new XMLHttpRequest();
	  } else {
	  // code for IE6, IE5
	  xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		  this.rt = this.responseText;
		  this.rt = JSON.parse(this.rt);
		  
		  return this.rt = "rt";
		  
		}
	};
	xhttp.open("GET", url, true);
	xhttp.send();

	

	return rt;
}
