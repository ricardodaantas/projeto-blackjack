console.log("Bem-vindo(a) ao jogo de blackjack");

let partida;

do {
  partida = confirm("Quer iniciar uma nova rodada?");

  if (partida === true) {
    const cartaUserUm = comprarCarta();
    const cartaUserDois = comprarCarta();
    const cartaPcUm = comprarCarta();
    const cartaPcDois = comprarCarta();

    const resulCartasric = cartaUserUm.valor + cartaUserDois.valor;
    const resultadoCartasnot = cartaPcUm.valor + cartaPcDois.valor;

    console.log(`Usuário - cartas: ${cartaUserUm.texto} ${cartaUserDois.texto} - pontuação é ${resulCartasric}`);
    console.log(`Computador - cartas: ${cartaPcUm.texto} ${cartaPcDois.texto} - pontuação é ${resultadoCartasnot}`);

    if (resulCartasric > resultadoCartasnot) {
      console.log("O usuário ganhou!");
    } else if (resultadoCartasnot > resulCartasric) {
      console.log("O computador ganhou!");
    } else {
      console.log("Empate!");
    }
  } else {
    console.log("Fim do jogo");
  }
} while (partida === true);
