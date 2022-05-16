let número1: number = Number(prompt("Ingrese el primer número entero"));
let número2: number = Number(prompt("Ingrese el segundo número entero"));
let resultado: number = 0;

for (let i = número1; i <= número2; i++) {
  resultado += i;
}
console.log("El resultado de la suma es: ", resultado);
