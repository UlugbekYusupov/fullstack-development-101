// Challenge 1

// let students = [
//     {
//         name: "Alice",
//         scores: [80, 90, 100]
//     },
//     {
//         name: "Bob",
//         scores: [70, 85, 95]
//     },
//     {
//         name: "Charlie",
//         scores: [60, 75, 85]
//     }
// ]

// function calculateAverageScores(students) {
//     let averageScores = [];
//     for (let i = 0; i < students.length; i ++) {
//         let student = students[i];
//         let totalScore = 0;
//         for (let j = 0; j < student.scores.length; j++) {
//             totalScore += student.scores[j];
//         }
//         let averageScore = totalScore / student.scores.length;
//         averageScores.push({ name: student.name, average: averageScore });
        

//         console.log(`${student.name}'s average score is: ${averageScore}`);

    
//         if (averageScore >= 50) {
//             console.log(`${student.name} passed!`);
//         }
//         else {
//             console.log(`${student.name} failed!`);
//         }

//         let topStudent = averageScores[0];
//         if (averageScore > topStudent.average) {
//             topStudent = { name: student.name, average: averageScore };
//         }


//         console.log(`The top student is ${topStudent.name} with an average score of ${topStudent.average}`);

//     }
// }

// calculateAverageScores(students)


//Challenge 3

