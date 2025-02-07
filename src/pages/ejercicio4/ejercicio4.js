const fourthExcercise = () => {
  const result = document.getElementById("operacionCuatro");
  result.innerText = `
let student1Courses = ['Math', 'English', 'Programming'];

let student2Courses = ['Geography', 'Spanish', 'Programming'];
      `;
};

fourthExcercise();

let student1Courses = ["Math", "English", "Programming"];

let student2Courses = ["Geography", "Spanish", "Programming"];

const courses = student1Courses.filter((course) =>
  student2Courses.includes(course)
);

console.log(`Los estudiantes toman juntos el curso de: ${courses}`);
