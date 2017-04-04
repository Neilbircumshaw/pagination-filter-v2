


// selecting elements and creating elements

var ul = document.querySelector(".student-list");
var li = ul.children;
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");
var button5 = document.createElement("button");
var button6 = document.createElement("button");
var page = document.querySelector(".page");
var header = document.querySelector(".page-header");
var searchButton = document.createElement("button");
var input = document.createElement("input");
var message = document.createElement("div");
var message2 = document.createElement("div");
var studentList = document.querySelector(".student-list")





//giving the varibles of the selected items from the HTML properties.

button1.textContent = "1";
button1.className = "buttons highlighted"

button2.textContent = "2";
button2.className = "buttons"

button3.textContent = "3";
button3.className = "buttons"

button4.textContent = "4";
button4.className = "buttons"

button5.textContent = "5";
button5.className = "buttons"

button6.textContent = "6";
button6.className = "buttons"

searchButton.textContent = "Search";
searchButton.className = "searchButton";

input.type = "text";
input.name = "searchBar";
input.className = "searchBar";
input.value = "Search for students...";

message.textContent = "Sorry, there was no one by that name in our system!";
message.className = "message";
message.style.display = "none";

message2.textContent = "Try typing";
message2.className = "message";
message2.style.display = "none";




//appending the selected HTML elements to a parent.

page.appendChild(button1);
page.appendChild(button2);
page.appendChild(button3);
page.appendChild(button4);
page.appendChild(button5);
page.appendChild(button6);
header.appendChild(searchButton);
header.appendChild(input);
studentList.appendChild(message)
studentList.appendChild(message2)



//when the page loads only 10 items from the list of items will be displayed, the rest will be hidden.

window.addEventListener("load", function(){
	for (var i = 0; i < li.length; i++){
		if (i >= 10){
			li[i].style.display = "none"
		}
		
		else {li[i].style.display = "block"
		}
		
		}})


/*this button will only show the first 10 items, the rest will be hidden. 
It will also have the "highlighed" class attached to it when it is clicked. Futhermore it
will scroll to the top of the page when clicked, just for user convenience. This will also hide the 
message that will pop up when no users are found in the list which will be triggered in a 
later function. 


*/

button1.addEventListener("click", function(){
	for (var i = 0; i < li.length; i++){
		if (i >= 10){
			li[i].style.display = "none"
		}
		
		else {li[i].style.display = "block"
		}
	    }
	
	button1.className = "buttons highlighted";
	button2.className = "buttons ";
	button3.className = "buttons";
	button4.className = "buttons";
	button5.className = "buttons";
	button6.className = "buttons";
	
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	
	message.style.display = "none"
	
        })


/*this button will only show the next set of 10 items, the rest will be hidden. 
It will also have the "highlighed" class attached to it when it is clicked. Futhermore it
will scroll to the top of the page when clicked, just for user convenience. This will also hide the 
message that will pop up when no users are found in the list which will be triggered in a 
later function. 


*/



button2.addEventListener("click", function(){
	for (var i = 0; i < li.length; i++){
		if (i < 11 ){
			li[i].style.display = "none"
	
		}
		else if (i >20){li[i].style.display = "none"}
		
		else {li[i].style.display = "block"
		}
	    }
	button1.className = "buttons";
	button2.className = "buttons highlighted";
	button3.className = "buttons";
	button4.className = "buttons";
	button5.className = "buttons";
	button6.className = "buttons";
	
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	
	message.style.display = "none"
        })

/*this button will only show the next set of 10 items, the rest will be hidden. 
It will also have the "highlighed" class attached to it when it is clicked. Futhermore it
will scroll to the top of the page when clicked, just for user convenience. This will also hide the 
message that will pop up when no users are found in the list which will be triggered in a 
later function. 


*/

button3.addEventListener("click", function(){
	for (var i = 0; i < li.length; i++){
		if (i < 21 ){
			li[i].style.display = "none"
	
		}
		else if (i > 30){li[i].style.display = "none"}
		
		else {li[i].style.display = "block"
		}
	    }
	
	button1.className = "buttons";
	button2.className = "buttons";
	button3.className = "buttons highlighted";
	button4.className = "buttons";
	button5.className = "buttons";
	button6.className = "buttons";
	
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	
	message.style.display = "none"
	
       })

/*this button will only show the next set of 10 items, the rest will be hidden. 
It will also have the "highlighed" class attached to it when it is clicked. Futhermore it
will scroll to the top of the page when clicked, just for user convenience. This will also hide the 
message that will pop up when no users are found in the list which will be triggered in a 
later function. 


*/

button4.addEventListener("click", function(){
	for (var i = 0; i < li.length; i++){
		if (i < 31 ){
			li[i].style.display = "none"
	
		}
		else if (i > 40){li[i].style.display = "none"}
		
		else {li[i].style.display = "block"
		}
	    }
	
	button1.className = "buttons";
	button2.className = "buttons";
	button3.className = "buttons";
	button4.className = "buttons highlighted";
	button5.className = "buttons";
	button6.className = "buttons";
	
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	
	message.style.display = "none"
	
        })

/*this button will only show the next set of 10 items, the rest will be hidden. 
It will also have the "highlighed" class attached to it when it is clicked. Futhermore it
will scroll to the top of the page when clicked, just for user convenience. This will also hide the 
message that will pop up when no users are found in the list which will be triggered in a 
later function.


*/

button5.addEventListener("click", function(){
	for (var i = 0; i < li.length; i++){
		if (i < 41 ){
			li[i].style.display = "none"
	
		}
		else if (i > 50){li[i].style.display = "none"}
		
		else {li[i].style.display = "block"
		}
	    }
	
	button1.className = "buttons";
	button2.className = "buttons";
	button3.className = "buttons";
	button4.className = "buttons";
	button5.className = "buttons highlighted";
	button6.className = "buttons";
	
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	
	message.style.display = "none"
	
        })

/*this button will only show the next set of 10 items, the rest will be hidden. 
It will also have the "highlighed" class attached to it when it is clicked. Futhermore it
will scroll to the top of the page when clicked, just for user convenience. This will also hide the 
message that will pop up when no users are found in the list which will be triggered in a 
later function. 


*/

button6.addEventListener("click", function(){
	for (var i = 0; i < li.length; i++){
		if (i < 51 ){
			li[i].style.display = "none"
	
		}
		else if (i > 60){li[i].style.display = "none"}
		
		else {li[i].style.display = "block"
		}
	    }
	
	button1.className = "buttons";
	button2.className = "buttons";
	button3.className = "buttons";
	button4.className = "buttons";
	button5.className = "buttons";
	button6.className = "buttons highlighted";
	
	
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	
	message.style.display = "none"
	
       })

// this will make the searchbar called "input" become an empty string when clicked.

input.addEventListener("click", function (){
	input.value = "";
	
       })

/* this will only show list items when they match with what is written by the user in the 
search bar by looking at the list items innerHTML. By assigning the varible visible the boolean value of false
when it will change to true when and only when the list item's innerHTML matches with what is put in the searchBar.
I can then use this to say, if visable is not true (so the items don't match and there are no results found) then display 
the message as a block instead of it being hidden*/

searchButton.addEventListener("click", function(){
	let visible = false;
	for (var i = 0; i < li.length; i++){
		 
			
		if (li[i].innerHTML.toUpperCase().includes(input.value.toUpperCase())){
			li[i].style.display = "block"
			visible = true;
		}
		
		
				
		else {li[i].style.display = "none"
		}    

        if (!visible) {
    message.style.display = "block"
        }		
   		
        }})


		







	

