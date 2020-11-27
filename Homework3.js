// не разобрался как сделать это задание

// Ниже написала правильное решение

function sum(num1) {
    return function(num2) {
        return num1 + num2;
    }
}

console.log(sum(2)(4)); // 6