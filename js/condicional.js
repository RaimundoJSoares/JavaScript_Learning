var num = 19
if (num === 11) {
  console.log('num is equal to 11');
}
else{
  console.log('num is equal to ' + num)
}

var month = 5;
switch (month) {
case 1:
console.log('January');
break;
case 2:
console.log('February');
break;
case 3:
console.log('March');
break;
default:
console.log('Month is not January, February or March');
}

var weekends;
switch(new Date().getDay()) {
  case 0:
weekdays = "the restful Sunday";
break;
case 1:
weekdays = "the blue blue Monday";
break;
case 2:
weekdays = "the superstitious Tuesday";
break;
case 3:
weekdays = "the hectic Wednesday";
break;
case 4:
weekdays = "the overwhelming Thursday";
break;
case 5:
weekdays = "the joyful Friday";
break;
case 6 :
weekdays = "the sleepy Saturday";
}

document.getElementById("switch-demo").innerHTML = "Today is " + weekdays + "." + " Have a great and productive day!";
