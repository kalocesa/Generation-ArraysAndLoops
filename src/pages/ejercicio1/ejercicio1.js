const firstExcercise = () => {
  const result = document.getElementById("operacionUno");
  result.innerText = `
    let arr = ["This", "is", "a", "sentence."];

function printOutString() {

}

printOutString();
    `;
};

firstExcercise();

let arr = ["This", "is", "a", "sentence."];

function printOutString() {
  return arr.join(" ");
}

console.log(printOutString());
