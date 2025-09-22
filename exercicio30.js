// Exercício 30: Usando um laço for, imprima todos os números primos de 1 a 100.


for (let num = 2; num <= 100; num++) {
  let ehPrimo = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      ehPrimo = false;
      break;
    }
  }

  if (ehPrimo) {
    console.log(num);
  }
}
