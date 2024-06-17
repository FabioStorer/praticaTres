let numeros = [3, 3, 4, 7, 8, 9, 1, 5, 2, 10, 2, 6];
let numerosOrdem = [];
let j = 1;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] == numeros[j]) {
        numeros.splice(numeros[i]);
        console.log(numeros);
    }
  //  for (let c = 1; c < numeros.length; c++) {
   //     if (numeros[i] < numeros[c]) {
       //     numerosOrdem.push(numeros);
   //     }
   // }
}
console.log(numerosOrdem);