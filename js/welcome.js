var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow> 18){
    greeting = 'Good evening!';
} else if(hourNow > 10){
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h1>' + greeting.fontcolor('#C77E00') + '<h1>');
//#ADAB0B