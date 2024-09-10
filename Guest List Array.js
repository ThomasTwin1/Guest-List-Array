//make variable that holds list of guest names
var guestList = ["Rod", "Tiera", "Kai"];



//make prompt that ask user their name
var guestName = prompt("what is your name?");


//make a function that checks the prompt
function invited(){
    if (guestList.includes(guestName)) {
        alert("You are invited");
    }   else {
        alert("You are not invited");
    }
}

invited();
console.log(guestList);