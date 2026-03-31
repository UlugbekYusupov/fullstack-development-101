// Challenge 1

const students = [
  {name:"Alice", score: [90,238,94]},
  {name:"Bob", score: [85,92,88]},
  {name:"Charlie", score: [78,85,80]}
]

function getAvergeScores(students) {
  for (let student of students) {
    const average = student.score.reduce((a,b) => a+b, 0) / student.score.length;
    console.log(`${student.name}'s average score is ${average}`);
  } 
  
}

console.log(getAvergeScores(students));