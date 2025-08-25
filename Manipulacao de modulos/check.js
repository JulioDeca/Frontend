export function checkGuess(secret, guess) {
  if (guess === secret) return "acertou";
  if (guess < secret) return "maior";
  return "menor";
}
    