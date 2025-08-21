// a. Declare uma variável com um número decimal
let varDecimal2 = 8.2;

// b. Crie um array com 5 nomes de frutas
let frutas = ["maçã", "banana", "uva", "melancia", "abacaxi"];
console.log(frutas);

// c. Adicione uma fruta ao final do array
frutas.push("morango");
console.log(frutas);

// d. Remova a primeira fruta do array
frutas.shift();
console.log(frutas);

// e. Verifique se o array contém mais de 3 elementos e armazene o resultado em uma variável booleana
let tamanhoMaiorQueTres = frutas.length > 3;
console.log("Tem mais que três elementos: " + tamanhoMaiorQueTres);

// f. Crie uma condição que verifica se o array está vazio e exiba uma mensagem apropriada
if(frutas.length == 0){
    console.log("O array 'frutas' está vazio")
}
else {
    console.log("O array 'frutas' não está vazio")
}