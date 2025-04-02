function jogar() {
  nome = prompt("Oi! Como você se chama?");
  idade = prompt("E quantos anos você tem?");
  if (idade < 18) {
    alert(
      "Poxa, " +
        nome +
        ", infelizmente, você não poderá jogar. Mas não fique triste, volte daqui alguns anos ;)"
    );
  }
  if (idade >= 18) {
    escolhaJogador = prompt(
      "Digite o número de acordo com sua escolha: 1-Pedra | 2-Papel | 3-Tesoura"
    );
    escolhaLuigi = Math.floor(Math.random() * 3) + 1;

    // Jogador Pedra, Luigi Pedra ---> empate
    // Jogador Papel, Luigi Papel ---> empate
    // Jogador Tesoura, Luigi Tesoura ---> empate
    if (escolhaJogador == escolhaLuigi) {
      alert("Vish, deu empate XD");
    }
    if (escolhaJogador == 1) {
      // Jogador Pedra, Luigi Papel ---> Luigi vence
      if (escolhaLuigi == 2) {
        alert("Luigi VENCEU, ele escolheu papel!");
      }
      // Jogador Pedra, Luigi Tesoura ---> Jogador vence
      if (escolhaLuigi == 3) {
        alert(
          "Parabéns " + nome + ", você VENCEU! O Luigi escolheu tesoura."
        );
      }
    }
    if (escolhaJogador == 2) {
      // Jogador Papel, Luigi Pedra ---> Jogador vence
      if (escolhaLuigi == 1) {
        alert(
          "Parabéns " + nome + ", você VENCEU! O Luigi escolheu pedra."
        );
      }
      // Jogador Papel, Luigi Tesoura ---> Luigi vence
      if (escolhaLuigi == 3) {
        alert("Luigi VENCEU, ele escolheu tesoura!");
      }
    }
    if (escolhaJogador == 3) {
      // Jogador Tesoura, Luigi Papel ---> Jogador vence
      if (escolhaLuigi == 1) {
        alert(
          "Parabéns" + nome + ", você VENCEU! O Luigi escolheu papel."
        );
      }
      // Jogador Tesoura, Luigi Pedra ---> Luigi vence
      if (escolhaLuigi == 2) {
        alert("Luigi VENCEU, ele escolheu pedra!");
      }
    }
  }
}
