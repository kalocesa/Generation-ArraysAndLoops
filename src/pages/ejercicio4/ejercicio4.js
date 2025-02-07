const thirdExcercise = () => {
  const result = document.getElementById("operacionTres");
  result.innerText = `
Tienes un array [ 1, 2, 3, 4] 

Suma = 10 

Multiplicación  = 24
      `;
};

thirdExcercise();

const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((sum, item) => sum + item, 0);
const multiply = numbers.reduce((multiply, item) => multiply * item, 1);

console.log(`Este es el resultado de la suma: ${sum}`);
console.log(`Este es el resultado de la multiplicación: ${multiply}`);
