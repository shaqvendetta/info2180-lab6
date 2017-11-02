window.onload =function() {

	word =document.getElementsByTagName('input')[0];
	button =document.getElementsByTagName('input')[1];

	button.onclick =function() {
		ajaxFunction(); 
		searchRequest();
	}
};

function ajaxFunction() {

	if (window.XMLHttpRequest) 
		httpRequest =new XMLHttpRequest();
	else 
		httpRequest =new ActiveXObject('Microsoft.XMLHTTP');
}

function searchRequest() {

	var url = "request.php?q="+word.value;

	httpRequest.onreadystatechange = processRequest;
	httpRequest.open("GET", url);
	httpRequest.send();
}

function processRequest() {

	var output =document.getElementById('result');

	if (httpRequest.readyState === XMLHttpRequest.DONE) {
		if (httpRequest.status === 200) {
		 	response = httpRequest.responseText;
		 	if (response.length <500) {
		 		output.innerHTML ='<h3> Result </h3>'+response;
			}
			else {
				response ='no result found';
				output.innerHTML ='<h3> Result </h3>'+response;
			}
		}
	}
}
    
    