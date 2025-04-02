function conversorG(){
  let galeoes = prompt("Digite quantos Galeões você possui:");
  let taxaConversao = 125;
  let reais = galeoes * taxaConversao;
  alert("O valor em dinheiro de trouxa é de " + reais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
};

function conversorS(){
  let sicles = prompt("Digite quantos Sicles você possui:");
  let taxaConversao = 7.5;
  let reais = sicles * taxaConversao;
  alert("O valor em dinheiro de trouxa é de " + reais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
};

function conversorN(){
  let nuques = prompt("Digite quantos Nuques você possui:");
  let taxaConversao = 0.25;
  let reais = nuques * taxaConversao;
  alert("O valor em dinheiro de trouxa é de " + reais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
}
//valor = prompt("Digite um valor em won")
//umwon = 0.0040
//valorFinal = valor * umwon
//alert("O seu valor convertido em reais equivale a " + valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))