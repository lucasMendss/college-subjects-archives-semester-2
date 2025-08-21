console.log("oi");

{
    let notGlobal = "notGlobal is not a global variable";
    console.log(notGlobal);
}

var globalVar = "globalVar is a global variable"

{
    console.log(globalVar);
}

const [a, b, c] = [10, 4, true];
console.log(a + ", " + b + ", " + c);
console.log(typeof c);

myObj = [dado1 = "oi", dado2 = "1"];
myArray = [1, 2, "three"];
console.log(typeof myObj);
console.log(myArray[2]);

const valor = Number("23.45");
console.log(valor.toFixed(1));

