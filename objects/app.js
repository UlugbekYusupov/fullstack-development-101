const students = [
  { name: "Alice", scores: [80, 90, 100] },
  { name: "Bob", scores: [50, 60, 70] },
  { name: "Charlie", scores: [30, 40, 20] }
];

let topStudent = "";
let highestAvg = 0;

for (let student of students) {

  let sum = 0;

  for (let score of student.scores) {
    sum += score;
  }

  let avg = sum / student.scores.length;

  if (avg >= 50) {
    console.log(student.name + " passed with avg " + avg);
  } else {
    console.log(student.name + " failed with avg " + avg);
  }

  if (avg > highestAvg) {
    highestAvg = avg;
    topStudent = student.name;
  }
}

console.log(topStudent + " has the highest average: " + highestAvg);