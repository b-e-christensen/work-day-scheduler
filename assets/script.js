var calendarDay = moment().format("dddd, MMM Do YYYY");

if (localStorage.getItem('day') != calendarDay) {
    localStorage.clear();
}
localStorage.setItem('day', calendarDay);

$('#currentDay').text(calendarDay);

var currentHour = moment().hour();

var nine = $('#t9');
var ten = $('#t10');
var eleven = $('#t11');
var twelve = $('#t12');
var thirteen = $('#t13');
var fourteen = $('#t14');
var fifteen = $('#t15');
var sixteen = $('#t16');
var seventeen = $('#t17');
var timeArr = [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen];


nine.val(localStorage.getItem('9'));
ten.val(localStorage.getItem('10'));
eleven.val(localStorage.getItem('11'));
twelve.val(localStorage.getItem('12'));
thirteen.val(localStorage.getItem('13'));
fourteen.val(localStorage.getItem('14'));
fifteen.val(localStorage.getItem('15'));
sixteen.val(localStorage.getItem('16'));
seventeen.val(localStorage.getItem('17'));


$('#btn-9').on('click', function(){
    localStorage.setItem('9', nine.val())
})
$('#btn-10').on('click', function(){
    localStorage.setItem('10', ten.val())
})
$('#btn-11').on('click', function(){
    localStorage.setItem('11', eleven.val())
})
$('#btn-12').on('click', function(){
    localStorage.setItem('12', twelve.val())
})
$('#btn-13').on('click', function(){
    localStorage.setItem('13', thirteen.val())
})
$('#btn-14').on('click', function(){
    localStorage.setItem('14', fourteen.val())
})
$('#btn-15').on('click', function(){
    localStorage.setItem('15', fifteen.val())
})
$('#btn-16').on('click', function(){
    localStorage.setItem('16', sixteen.val())
})
$('#btn-17').on('click', function(){
    localStorage.setItem('17', seventeen.val())
})

$('#clear-9').on('click', function(){
    nine.val('');
    localStorage.setItem('9', nine.val())
})
$('#clear-10').on('click', function(){
    ten.val('');
    localStorage.setItem('10', ten.val())
})
$('#clear-11').on('click', function(){
    eleven.val('');
    localStorage.setItem('11', eleven.val())
})
$('#clear-12').on('click', function(){
    twelve.val('');
    localStorage.setItem('12', twelve.val())
})
$('#clear-13').on('click', function(){
    thirteen.val('');
    localStorage.setItem('13', thirteen.val())
})
$('#clear-14').on('click', function(){
    fourteen.val('');
    localStorage.setItem('14', fourteen.val())
})
$('#clear-15').on('click', function(){
    fifteen.val('');
    localStorage.setItem('15', fifteen.val())
})
$('#clear-16').on('click', function(){
    sixteen.val('');
    localStorage.setItem('16', sixteen.val())
})
$('#clear-17').on('click', function(){
    seventeen.val('');
    localStorage.setItem('17', seventeen.val())
})

function colorFunction() {
    var colorHour = currentHour - 9;

if (colorHour < 0) {
    for (let i = 0; i < timeArr.length; i++) {
    const element = timeArr[i];
    (element).addClass('light-green')
    }
} else if (timeArr[colorHour] === undefined){
    return;
} else {
    timeArr[colorHour].addClass('red');
    for (let i = colorHour + 1; i < timeArr.length; i++) {
    const element = timeArr[i];
    console.log(timeArr[i]);
    (element).addClass('light-green')
    }
}
}

colorFunction();