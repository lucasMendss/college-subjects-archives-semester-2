// a. Declare uma variável com um número decimal
let varDecimal1 = 8.2;

// b. Declare uma string com seu nome completo
let nomeCompleto = "Lucas Rafael Silva Mendes";

// c. Extraia apenas o primeiro nome usando substring
let primeiroNome = nomeCompleto.substring(0, 5);
console.log(primeiroNome);

// d. Converta o nome para maiúsculas
let primeiroNomeTudoMaiusculo = primeiroNome.toUpperCase();
console.log(primeiroNomeTudoMaiusculo);

// e. Crie uma frase usando template literals que inclua seu nome e idade
let idade = 19;
let frase = `Nome: ${nomeCompleto} | idade: ${idade} | data de nascimento: ${2025 - idade}`;
console.log(frase);

// f. Divida seu nome completo em um array usando o espaço como separador
let nomesSeparados = nomeCompleto.split(" ");
console.log(nomesSeparados); 