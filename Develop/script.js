
//Set attributes for time slots with moment()method to format time
 

$("#9").attr("time", moment("9:00 am", "h:mm a").format("HH"));
$("#10").attr("time", moment("10:00 am", "h:mm a").format("HH"));
$("#11").attr("time", moment("11:00 am", "h:mm a").format("HH"));
$("#12").attr("time", moment("12:00 pm", "h:mm a").format("HH"));
$("#13").attr("time", moment("1:00 pm", "h:mm a").format("HH"));
$("#14").attr("time", moment("2:00 pm", "h:mm a").format("HH"));
$("#15").attr("time", moment("3:00 pm", "h:mm a").format("HH"));
$("#16").attr("time", moment("4:00 pm", "h:mm a").format("HH"));
$("#17").attr("time", moment("5:00 pm", "h:mm a").format("HH"));


//Create variable with currenttime using the moment method from the momentjs-example
var currentTime = moment().format("HH");
var currentTimeParseInt = parseInt(currentTime);
var saveBtn = $(".saveBtn");
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay)

console.log(moment());

console.log(moment().format());

   


    $(".row").each(function () {
    
        if (parseInt($(this).attr("id")) < currentTimeParseInt) {
          $(this).addClass("past");
        }
        else if (parseInt($(this).attr("id")) === currentTimeParseInt) {
          $(this).addClass("present");
        }
        else {
          $(this).addClass("future");
        };
console.log(currentTimeParseInt)

$(".saveBtn").on("click", function() {
  
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    
    localStorage.setItem(time, value);
  });
  
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13.description").val(localStorage.getItem("13"));
  $("#14.description").val(localStorage.getItem("14"));
  $("#15.description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

    })