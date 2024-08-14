// 1) Crear una función que reciba un número por parámetro
// e indique en consola si el número es par o impar.

function par_o_impar(num) {
  if (num % 2 == 0) {
    console.log("Es par");
  } else {
    console.log("Es impar");
  }
}

let numero = prompt("Ingrese un número para verificar si es par o impar");
par_o_impar(numero);

console.log("------------------------------");

//  2- Crear una función que reciba dos números por parámetro
//  e indique en consola que número es mayor, y si ninguno lo
//  es, indicar por consola que son iguales.

function menor_o_mayor(num1, num2) {
  if (num1 > num2) {
    console.log(
      `El primer número ingresado, ${num1}, es mayor que el segundo número, ${num2}`
    );
  } else if (num2 > num1) {
    console.log(
      `El segundo número ingresado, ${num2}, es mayor que el primer número, ${num1}`
    );
  } else {
    console.log(
      `Tanto el primer número como el segundo son iguales, por lo que ninguno es menor o mayor que el otro`
    );
  }
}

let numero1 = prompt("Ingrese un número");
let numero2 = prompt("Ingrese un numero para comparar con el primero");
menor_o_mayor(numero1, numero2);

console.log("------------------------------");

// 3) Crear una función que reciba un número por parámetro
// e indique en consola si ese número es múltiplo de 5.

function multiplo5(num5) {
  if (num5 % 5 == 0) {
    console.log(`${num5} es multiplo de 5`);
  } else {
    console.log(`${num5} no es multiplo de 5`);
  }
}

let numero5 = prompt("Ingrese numero para verificar si es multiplo de 5");
multiplo5(numero5);

console.log("------------------------------");

//  4- Crear una función que reciba un número por parámetro
// e imprima por consola todos los números desde el 0 hasta
// llegar a ese número.

function imprimir(n) {
  for (i = 0; i <= n; i++) {
    console.log(i);
  }
}

let n = prompt("Ingresá hasta qué número querés imprimir");
imprimir(n);
