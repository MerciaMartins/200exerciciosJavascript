// Exercício 53: Escreva uma função que verifique se um número é primo.

function ehPrimo(n) {
    if (n <= 1) return false; // 0 e 1 não são primos

    for (let i = 2; i <= Math.sqrt(n); i++) { 
        if (n % i === 0) return false; 
    }
    
    return true;
}


console.log(ehPrimo(2));   
console.log(ehPrimo(17));  
console.log(ehPrimo(18));  
