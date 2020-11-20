var myArray = [1111, 5, 3, 4, null, undefined, 4, 5, null, 5, false, "aaa", 0];

const zero = myArray.includes(0)

if (zero === true) {
  console.log("В массиве имеется 0")
  
}


myArray = myArray.filter(function(x) {
    if (typeof x == 'number') return x
    
});

  
for(var i=0, k=0, m=0; i<myArray.length; i++){
    if(Even(myArray[i])) {k++;}
    if(!Even(myArray[i])) {m++;}
   
}

function Even(l){
    return l % 2 == 0;
}

console.log("кол-во четный чисел - " + k)
console.log("кол-во нечетный чисел - " + m)