// Sistema de login  
let idadeUsuario = 17;

let acompanhadoPelosPais = true;

let possuiAutorizacao = false;  

// Complete a condição para verificar se o usuário pode entrar no site:  

// (Usuários com 18+ OU menores acompanhados pelos pais OU com autorização)
let podeAcessar = (idadeUsuario > 18 || acompanhadoPelosPais || possuiAutorizacao); 
console.log("Pode acessar? " + podeAcessar);

// Sistema de desconto  
let clientePremium = false;

let totalCompra = 280;  

let aniversariante = true;  

// Complete a condição para verificar se o cliente recebe desconto:  

// (Clientes premium OU compras acima de R$300 E não for aniversariante)  
let recebeDesconto = (clientePremium || (totalCompra > 300 && !aniversariante));
console.log("Recebe desconto? " + recebeDesconto);