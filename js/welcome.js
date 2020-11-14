var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow> 18){
    greeting = 'Dobry Wieczór';
} else if(hourNow > 10){
    greeting = 'Dzień dobry';
} else {
    greeting = 'Witamy!';
}

document.write('<h3>' + greeting + '<h3>');