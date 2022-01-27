// GIVEN I am using a daily planner to create a schedule


// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// (moment() function attached to an html element will take care of this. To get it updated continuously we could put it in an interval function that executes every one second -- that is of course if moment.js does not have something built in for this)

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
/* still wondering what is the best way to go about this. How do we want to lay out the grid. would it be a grid?  would it make the most sense to create it dynamically through js? That'd probably be the 'cleanest' way to do it, but I feel like I would have more control if i made a large div, and each row was a div within that larger div. Section that displays the hour would be its own column (with class col-2 probably). Submit area would be its own column (col-8 probably). And 'save' button would be its own column (col-2) probably.*/


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
/* the links below (isAfter, isBefore) I think will be able to take care of this pretty easily. The only concern would be how to have the corresponding divs have a 'time value.' I think the moment.js activities from monday's class might be informative on this. Would it be something along the lines of setting the div element equal to a specific moment value? Will need to dig further into the syntax of moment to figure this out. */

// WHEN I click into a timeblock
// THEN I can enter an event
// using <textarea> for this (for now) -- seems to be working as it ought to?? 

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist

// built in functionality of moment.js to tell is something is before another thing. Will most likely be the way we get color differentiation in the rows
// https://momentjscom.readthedocs.io/en/latest/moment/05-query/01-is-before/
// https://momentjscom.readthedocs.io/en/latest/moment/05-query/03-is-after/


$('#a9').val(localStorage.getItem('9am'));
$('#currentDay').text(moment().format("h:mm a"));

var currentTime = moment();
var currentHour = currentTime.hour();

var nine = $('#t9');
// nine = 9;
var ten = $('#t10');
// ten = 10;
var eleven = $('#t11');
// eleven = 11;
var twelve = $('#t12');
// twelve = 12;
var thirteen = $('#t13');
// thirteen = 13;
var fourteen = $('#t14');
// fourteen = 14;
var fifteen = $('#t15');
// fifteen = 15;
var sixteen = $('#t16');
// sixteen = 16;
var seventeen = $('#a17');
// seventeen = 17;
var timeArr = [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen];

// can just use array. Take current hour and subtract 9 from it. if negative number do nothing. If zero or postive, take that number and use it as the index number to turn add class 'red.' then we make a for loop that starts just after that number and turns the rest of them green.

console.log(jQuery(seventeen))
jQuery(seventeen).addClass('red')
// $('textarea').addClass('light-green')
// jQuery('textarea').addClass('red')

for (let i = 0; i < timeArr.length; i++) {
    const element = timeArr[i];
    if (element === currentHour) {
        console.log(element + ' element should turn red');
        jQuery(element).addClass('red')
    } else if (element < currentHour){
        console.log(element + ' element should turn grey');
    } else {
        console.log(element + ' element should turn green');
    }
}




// will have to change id for these and do one for every button i suppose... 
$('#btn-9').on('click', function(){
    var textArea = $('#a9').val();
    localStorage.setItem('9am', textArea)
})




// function beforeOrAfter(element) {
//     if (element > currentTime.hour()) {
//         element.addClass('lightGreen');
//     } else if (element === currentTime.hour()) {
//         element.addClass('red')
//     } else {
//         element.addClass('grey')
//     }
// }
