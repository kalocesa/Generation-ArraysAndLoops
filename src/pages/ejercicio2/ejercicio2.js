const secondExcercise = () => {
  const result = document.getElementById("operacionDos");
  result.innerText = `
      Ejemplo:

      El array de entrada [ 1, 2, 4, 5 ]

      El array de salida [ 2, 4, 8, 10 ]`;
};

secondExcercise();

const numbers = [1, 2, 4, 5];

const multiplyNumbers = numbers.map((numero) => numero * 2);

console.log(numbers);
console.log(multiplyNumbers);
