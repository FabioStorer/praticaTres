let numeros = [3, 3, 4, 7, 8, 9, 1, 5, 2, 10, 2, 6];

for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++){
        if (numeros[i] > numeros[j]) {
            let aux = numeros[i];
            numeros[i] = numeros[j];
            numeros[j] = aux;
        }
    }
}

console.log(numeros);