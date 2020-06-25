
//Set attributes for time slots with moment()method to format time

$("#9amrow").attr("time", moment("9:00 am", "h:mm a").format("HH"));
$("#10amrow").attr("time", moment("10:00 am", "h:mm a").format("HH"));
$("#11amrow").attr("time", moment("11:00 am", "h:mm a").format("HH"));
$("#12pmrow").attr("time", moment("12:00 pm", "h:mm a").format("HH"));
$("#1pmrow").attr("time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2pmrow").attr("time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3pmrow").attr("time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4pmrow").attr("time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5pmrow").attr("time", moment("5:00 pm", "h:mm a").format("HH"));


//Create variable with currenttime using the moment method from the momentjs-example
var currentTime = moment().format("HH");
var currentTimeInt = parseInt(currentTime);
var saveBtn = $(".saveBtn");
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay)

console.log(moment());

    console.log(moment().format());


//Create a .ready function/method to execute the function after the DOM is ready  
$(document).ready(function (){


// Create a variable for loop to represent the text-block's corresponding time
  for (var j = 1; j <= 12; j++) {
    var timeSlot = $("#" + j + "Row").attr("time");
    var UserTimeSlotInput = parseInt(timeSlot);
    console.log(UserTimeSlotInput);

//Create if statement tha assigns time slots to past, present, or future

    if (currentTimeInt > UserTimeSlotInput){
        $("#" + j + "Row").addClass("past");
}
   
    if (timeSlot === UserTimeSlotInput){
        $("#" + j + "Row").addClass("present");
        
    }
    if (currentTimeInt < UserTimeSlotInput){
        $("#" + j + "Row").addClass("future");
    }

}})
