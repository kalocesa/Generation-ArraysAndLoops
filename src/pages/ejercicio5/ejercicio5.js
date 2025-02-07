const fifthExcercise = () => {
  const result = document.getElementById("operacionCinco");
  result.innerText = `


let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
      `;
};

fifthExcercise();

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(`La lista de invitados son: ${people.join(", ")}`);

const deletePerson = (name) => {
  const indexPerson = people.indexOf(name);
  if (indexPerson !== -1) {
    people.splice(indexPerson, 1);
  }
};

deletePerson("Dani");
deletePerson("Juan");

console.log(
  `Dani y Juan comentaron que no pueden asistir, entonces nos quedamos con ${people.join(
    ", "
  )}`
);

const movePerson = (name) => {
  const indexPerson = people.indexOf(name);
  if (indexPerson !== -1) {
    const [person] = people.splice(indexPerson, 1);
    people.unshift(person);
  }
};

movePerson("Luis");

console.log(
  `Luis es el cumpleañero, por lo cuál es el primer invitado de la lista: ${people.join(
    ", "
  )}`
);

people.push("Kati");

console.log(
  `Se agregó una invitada de último momento a la lista: ${people.join(", ")}`
);

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") {
    break;
  }
}

const findPerson = (name) => {
  let find = people.indexOf(name);
  return find;
};

console.log(findPerson("Maria"));
