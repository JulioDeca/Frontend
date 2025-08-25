import { gerarNumeroAleatorio } from "./random.js";
import { verificarTentativa } from "./check.js";

// Função para iniciar o jogo
export function iniciarJogo() {
  const numeroSecreto = gerarNumeroAleatorio(1, 100);
  const maxTentativas = 99;

  console.log("🎮 Bem-vindo ao Jogo de Adivinhação de Sesa!");
  console.log("Tente adivinhar o número entre 1 e 99");
  console.log(`Você tem ${maxTentativas} tentativas.`);

  let tentativas = 0;
  let acertou = false;

  while (tentativas < maxTentativas && !acertou) {
    const tentativa = parseInt(prompt(`Tentativa ${tentativas + 1}: Digite um número:`));
    tentativas++;

    const resultado = verificarTentativa(tentativa, numeroSecreto);
    console.log(resultado);

    if (tentativa === numeroSecreto) {
      acertou = true;
    }
  }

  if (!acertou) {
    console.log(`💀 Fim de jogo! O número era ${numeroSecreto}.`);
  }
}
