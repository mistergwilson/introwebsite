window.onload = function() {
	var today = new Date();
	var hourNow = today.getHours();
	var greeting;
	var element = document.getElementById("intro");
	
	var button = document.querySelector("button");
	button.addEventListener("click", addText);

	//Depending on the time, display appropriate greeting.
	if (hourNow > 18) {
	    greeting = 'Good evening!';
	} else if (hourNow > 12) {
	    greeting = 'Good afternoon!';
	} else if (hourNow > 0) {
	    greeting = 'Good morning!';
	} else {
	    greeting = 'Welcome!';
	}

	//document.write('<h1>' + greeting + '</h1>');
	element.insertAdjacentHTML("afterbegin", "<h1>" + greeting + "</h1>" );
	
    function addText() {
		var textField = document.getElementById("textfield");
		var msg = "<h1> This text was added!</h1>";
		textField.innerHTML = msg;
	}
	
	}