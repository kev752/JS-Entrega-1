// 1) Crear una función que reciba un número por parámetro
// e indique en consola si el número es par o impar.

function par_o_impar(num) {
  if (num % 2 == 0) {
    console.log("Es par");
  } else {
    console.log("Es impar");
  }
}

par_o_impar(1);

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

menor_o_mayor(2, 3);

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

multiplo5(4);

console.log("------------------------------");

//  4- Crear una función que reciba un número por parámetro
// e imprima por consola todos los números desde el 0 hasta
// llegar a ese número.

function imprimir(n) {
  for (i = 0; i <= n; i++) {
    console.log(i);
  }
}

imprimir(5);

console.log("------------------------------");

// 5 - Crear una función que reciba una palabra y un número
// por parámetro e imprima por consola esa palabra la cantidad
// correspondiente al número indicado.

const print = (palabra, veces) => {
  for (i = 1; i <= veces; i++) {
    console.log(palabra);
  }
};

print("Messi", 10);

console.log("------------------------------");

// 6 - Crear una función que reciba un array por parámetro
// e imprima por consola todos los valores de ese array.

const printArray = (miArray) => {
  for (i = 0; i <= miArray.length - 1; i++) {
    console.log(miArray[i]);
  }
};

let miArray = [6, 7, 8, 9, 10];

printArray(miArray);

console.log("------------------------------");

// 7 - Crear una función que reciba un array con 10 números
// e imprima por consola todos los valores de ese array, menos
// el que se encuentre en la 5ta posición del mismo.
// Ayuda: Recuerden que el primer índice de un array es "0".

const printContinue = (array) => {
  for (i = 0; i < array.length; i++) {
    if (i === 4) {
      console.log("El valor de la 5ta posición del array fue saltado.");
      continue;
    }
    console.log(array[i]);
  }
};

let arrayContinue = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

printContinue(arrayContinue);

console.log("------------------------------");

//   8 - Crea una función que reciba un array de números
// y un número por parámetro e imprima por consola cada número
// del array multiplicado por el número pasado por parámetro.

const multiplicar = (array, numero) => {
  for (i = 0; i < array.length; i++) {
    console.log(
      `${array[i]} multiplicado por ${numero} es ${array[i] * numero}`
    );
  }
};

let otroArray = [21, 22, 23, 24, 25];

multiplicar(otroArray, 2);
