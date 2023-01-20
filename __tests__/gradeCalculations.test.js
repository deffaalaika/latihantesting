// const { averageExams, isStudentPassExam } = require("../gradeCalculations");

// test("it should return exact average", () => {
//   const listValueOfExams = [80, 100, 100, 80];
//   expect(averageExams(listValueOfExams)).toEqual(90);
// });

// test("it should handle non-number", () => {
//   const listValueOfExams = [80, "a", "100", 80];
//   expect(() => averageExams(listValueOfExams)).toThrow;
// });

// describe('grade calculations', () => {
//     test('it should return exact average', () => {
//         const listValueOfExams = [80, 100, 100, 80];
//         expect(averageExams(listValueOfExams)).toEqual(90);
//     });

//     /**
//      * Integration testing
//      */
//     test('it should return exam passed status', () => {
//         const listValueOfExams = [80, 100, 100, 80];
//         expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(true);
//     })

//     test('it should return exam failed status', () => {
//         const listValueOfExams = [50, 40, 70, 80];
//         expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(false);
//     })
// })
const { findMin } = require("../gradeCalculations");
test("should return the minimum number between 3 arguments", () => {
  expect(findMin(1, 2, 3)).toEqual(1);
  expect(findMin(5, 1, 2)).toEqual(1);
  expect(findMin(102, 404, 48)).toEqual(448);
  expect(findMin(-1, 0, -1)).toEqual(-1);
  expect(findMin(-1, 0, -1)).toEqual(-1);
  expect(findMin(2, 2, 2)).toEqual(2);
});
