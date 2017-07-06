 
// Update the count down every 1 second
var x = setInterval(function(){
		   
		   // Set the date we're counting down to
	var countDownDate = new Date("Oct 28, 2017 02:00:00").getTime();

	// Get todays date and time
	var now = new Date().getTime();
	// Find the distance between now an the count down date
	var distance = countDownDate - now;

	  // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  doDisplay(days, hours, minutes, seconds, distance);
		   
		   
		 		   
}  , 1000);

/*function getTime(){
	

}*/

function doDisplay(days, hours, minutes, seconds, distance) {

	alert( 'Hello, world! the days is: ' + days ); 

	document.getElementById("demoDays").innerHTML = days;
  	document.getElementById("demoHours").innerHTML = hours;
  	document.getElementById("demoMinutes").innerHTML = minutes;
  	document.getElementById("demoSeconds").innerHTML = seconds;

if(distance < 0){ // If the count down is finished, write some text 
		clearInterval(x);
    	document.getElementById("demo").innerHTML = "EXPIRED";
}else{
		  // Display the result in the element with id="demo"
		  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
		  + minutes + "m " + seconds + "s ";
	 }

}
