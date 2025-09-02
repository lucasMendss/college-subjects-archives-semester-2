function saudacao(){
    console.log("ola mundo");
} 

const quadrado = function(num){return num*num};

let calculadora = [
    function soma(a, b){ return a+b; },
    function sub(a , b){ return a - b; },
    function mult(a, b){ return a*b; },
    function div(a, b){ return a/b; }
];

function executaOperacao(a, b, func)
{
    return func(a,b);
}

console.log(executaOperacao(2,2,calculadora[0]));
console.log(executaOperacao(2,2,calculadora[1]));
console.log(executaOperacao(2,2,calculadora[2]));
console.log(executaOperacao(2,2,calculadora[3]));

function aula(...texto)
{
    console.log(...texto);
}

aula('a', 'b', 'c', 'd');

function aula2(...textos)
{
    for(let texto of textos){
        console.log(texto);
    }
}
aula2("oi", "tchau", "tagst");

function juntaNomes(){

    let nomeCompleto = "";
    for(let nome of arguments)
    {
        nomeCompleto += nome + " "; 
    }
    return nomeCompleto;
}

console.log(juntaNomes("Lucas ", "Barretto", "Nunes"));
console.log(juntaNomes("Lucas ", "Barretto", "Nunes", "Oi"));

//arrow function
let exemplin = (a,b) => a+b;
console.log(exemplin(7,8));