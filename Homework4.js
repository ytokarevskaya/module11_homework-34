var num1 = 5;
var num2 = 9;
var num3 = num1-1;

var s = setInterval(function(){
  num3++; console.log(num3);
  if (num3 > num2-1) {
    clearInterval(s)
  }
}, 1000) 