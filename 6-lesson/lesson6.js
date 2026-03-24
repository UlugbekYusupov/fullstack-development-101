// 1

const students = [
  { name: "Alice", scores: [80, 90, 70] },
  { name: "Bob", scores: [50, 60, 70] },
  { name: "Charlie", scores: [50, 40, 50] }
];

let topScore = 0;
let topStudentName = "";

for (let i = 0; i < students.length; i++) {
  let currentStudent = students[i];
  let sum = 0;

  for (let j = 0; j < currentStudent.scores.length; j++) {
    sum += currentStudent.scores[j];
  }

  let average = sum / currentStudent.scores.length;
  
  let status = "";
  if (average >= 50) {
    status = "Passed";
  } else {
    status = "Failed";
  }

  console.log(currentStudent.name + ": Average score - " + average.toFixed(1) + " (" + status + ")");

  if (average > topScore) {
    topScore = average;
    topStudentName = currentStudent.name;
  }
}

console.log("---------------------------");
console.log("Beest score: " + topStudentName + " (" + topScore.toFixed(1) + ")");

// 2