/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   console.log("Bem-vindo(a) ao jogo de blackjack");

    let jogo = confirm("Quer iniciar uma nova rodada?");

    if (jogo) {
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
      console.log("O jogo acabou");
    }
