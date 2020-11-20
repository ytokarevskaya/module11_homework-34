let num = 7;

var flag = "простое число";

if (num == 0 || num == 1 || num > 1000) {
  console.log('данные не верны');
}
else {

for (let i = 2; i < num; i++) {
	if (num % i == 0) {
		flag = "cоставное число";
		break; // выйдем из цикла
	}
}

 
console.log(flag);

}