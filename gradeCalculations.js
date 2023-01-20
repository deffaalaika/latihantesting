// const averageExams = (valuesExam) => {
//   const numberValidation = valuesExam.every((exam) => typeof exam === "number");
//   if (!numberValidation) throw Error("please input number");

//   const sumValues = valuesExam.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
//   );
//   return sumValues / valuesExam.length;
// };

// const isStudentPassExam = (valuesExam, name) => {
//   const minValues = 75;
//   const average = averageExams(valuesExam);

//   if (average > minValues) {
//     console.log(`${name} pass the exams`);
//     return true;
//   } else {
//     console.log(`${name} fail the exams`);
//     return false;
//   }
// };

// module.exports = { averageExams, isStudentPassExam };

// function findMin(a, b, c) {
//   let minValue = 0;

//   if (a < b) {
//       minValue = a;
//   } else if (b < c) {
//       minValue = b;
//   } else {
//       minValue = c;
//   }

//   return minValue;
// }
// module.exports = { findMin};


let myString = "";

try {
    myString += "a";
    throw Error();
} catch(e) {
    myString += "b";
} finally {
    myString += "c";
    throw Error();
    myString += "d";
}

console.log(myString);

