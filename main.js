/**
var giftCard = 100;

while (giftCard >= 0) {
	console.log("You have a balance of: $" + giftCard );
	if (giftCard == 50) {
		console.log("You should consider saving the rest!");
	}
	giftCard = giftCard - 10;


}
*/

for (var giftCard = 0; giftCard<=100; giftCard++) {
	console.log(giftCard);
	if (giftCard == 50) {
		console.log("You now have enough to buy a bike");
	}
}



/*
var potatoes = 3;
var haveMilk = true;
var message = "Welcome to my shop!";
var name = "Gregory"
var apples = 2+2;


var notes = true;

var dayofWeek = prompt("What is today?");
//console.log("Your password is: " + password);

if (dayofWeek == "Monday") {
	alert("Go to Design!");
	if (!notes) {
		console("Bring your notes to class");
	}
}
else if (dayofWeek == "Tuesday"){
	alert("Go to Math!");
}

else if (dayofWeek == "Wednesday") {
	alert("Go to Programming");
}

else {
	alert("Go Home!");
}


//console.log(message + name);
//console.log("Total number of items: " + (potatoes+apples));

//var potatoes = potatoes + 2;

//console.log(potatoes);
//console.log(message);




/**
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h1>' + greeting + '</h1>');
*/
