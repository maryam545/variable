// let age = 17;
// if (age >= 18) {
//   console.log(`18`);
// } else if (13 < age && 17 > age) {
//   console.log(`17`);
// } else if (age < 13) {
//   console.log(`13`);
// }

//convert score to grade letters
// let score = 99;
// if (score >= 90 && score <= 100) {
//   console.log(`A+`);
// } else if (score >= 80 && score <= 89) {
//   console.log(`A`);
// } else if (score >= 70 && score <= 79) {
//   console.log(`B+`);
// } else if (score >= 60 && score <= 69) {
//   console.log(`B`);
// } else if (score >= 50 && score <= 59) {
//   console.log(`C`);
// } else if (score < 50) {
//   console.log(`D`);
// }

let weightUser = 90;
let heightUser = 1.59;
let bmi = weightUser / (heightUser * heightUser);
if (bmi < 18.5) {
  console.log(`under weifht`);
} else if (bmi >= 18.5 && bmi < 25) {
  console.log(`normal weight`);
} else if (bmi >= 25 && bmi < 30) {
  console.log(`over weight`);
} else {
  console.log(`obese`);
}
