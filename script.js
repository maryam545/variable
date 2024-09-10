let age = 10.5;
if (age >= 18) {
  console.log(`you are an adult`);
} else if (13 <= age && 18 > age) {
  console.log(`you are a teenager`);
} else if (age <= 13) {
  console.log(`you are a child`);
}

// convert score to grade letters
let score = 99;
if (score >= 90 && score <= 100) {
  console.log(`A+`);
} else if (score >= 80 && score <= 89) {
  console.log(`A`);
} else if (score >= 70 && score <= 79) {
  console.log(`B+`);
} else if (score >= 60 && score <= 69) {
  console.log(`B`);
} else if (score >= 50 && score <= 59) {
  console.log(`C`);
} else if (score < 50) {
  console.log(`D`);
}
// BMI
let weightUser = 70;
let heightUser = 1.59;
let ifClass;
let bmi = weightUser / (heightUser * heightUser);
if (bmi < 18.5) {
  ifClass = "under weifht";
} else if (bmi >= 18.5 && bmi < 25) {
  ifClass = "normal weight";
} else if (bmi >= 25 && bmi < 30) {
  ifClass = " over weight";
} else {
  ifClass = "obese";
}
console.log(`your bmi =  ${ifClass}`);
