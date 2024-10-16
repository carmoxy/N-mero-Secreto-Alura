let numerossorteados = [];
let Limite = 10
let numeroSecreto = randomNumber();
let tentativas = 1;


function exibirNaTela(tag, texto){
let elementoh1p = document.querySelector(tag);
elementoh1p.innerHTML = texto;
}
function mensagemBoasVindas()
    {
        exibirNaTela('h1', 'Número Secreto');
        exibirNaTela('p', 'Escolha um número de 1 a 10');
        
    }
    mensagemBoasVindas();



//apertar botao de verificar chute
function verificarChute(){
    let chute = document.querySelector('input').value
if (chute == numeroSecreto){
    exibirNaTela('h1', 'Você Acertou!');
    


    let palavraTentativa = tentativas > 1? 'tentativas': '  tentativa';
    let mensagemTentaiva = `Parabéns você acertou com ${tentativas} ${palavraTentativa}!`;
    
    exibirNaTela('p', `${mensagemTentaiva}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
}else{
    if(chute>numeroSecreto){

         exibirNaTela('h1', 'Você Errou!');
         
         exibirNaTela('p', 'Seu número secreto é menor');
    }else{
        exibirNaTela('p', 'Seu número secreto é maior');
    }
    tentativas ++;
    limparCampo()
}


}


//numerosaleatorios

function randomNumber() {
   let numeroEscolhido = parseInt(Math.random() *Limite + 1);
   let quantidadeDeElementosNaLista = numerossorteados.length;

   if (quantidadeDeElementosNaLista == Limite){
    numerossorteados = [];
   }
   if (numerossorteados.includes(numeroEscolhido)){
    return randomNumber();
   }else{
    numerossorteados.push(numeroEscolhido);
    console.log(numerossorteados)
    return numeroEscolhido;
   }
   
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarGame(){
numeroSecreto = randomNumber();
limparCampo();
tentativas = 1;
mensagemBoasVindas();
document.getElementById('reiniciar').setAttribute('disabled',true);
}
// Associa o evento ao botão de reiniciar
document.getElementById('reiniciar').addEventListener('click', reiniciarGame);