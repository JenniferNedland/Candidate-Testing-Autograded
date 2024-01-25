const input = require('readline-sync');

let candidateName = "";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  candidateName = input.question("Please enter your name: \n" );
  console.log(`\nHello, ${candidateName}. Please answer these ${questions.length} questions.`);
}

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question("\n" + [i + 1] + ". " + questions[i] + "\n"));
  }
}

function gradeQuiz(candidateAnswers) {

  let numCorrectAnswers = 0;

  console.log("\nQUIZ RESULTS:\n");
  
  for (let i = 0; i < correctAnswers.length; i++) {
    let isCorrect = candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase();
    numCorrectAnswers += isCorrect;
    console.log(`${i + 1}. ${(isCorrect ? ("") : ("IN"))}CORRECT. You answered ${candidateAnswers[i]}. The correct answer is ${correctAnswers[i]}.\n`);
  }
  
  let grade = Math.trunc((numCorrectAnswers/questions.length) * 100);
  let didPass = grade >= 80;  

  console.log(`${(didPass ? "Congratulations," : "Unfortunately,")} ${candidateName}, you ${(didPass ? ("PASSED") : ("FAILED"))}. You scored ${grade}% and needed a minimum of 80% to pass.`);
  return grade;
}

function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};