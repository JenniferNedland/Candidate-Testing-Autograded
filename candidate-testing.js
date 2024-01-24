const input = require('readline-sync');

let candidateName = "";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  candidateName = input.question("Please enter your name. ");
}

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question("\n" + [i + 1] + "." + questions[i] + "\n"));
  }
}

function gradeQuiz(candidateAnswers) {

  let grade = 0;
  let numCorrectAnswers = 0;
  let isCorrect = false;
  let didPass = false;
  
  console.log("\nQUIZ RESULTS:\n");
  
  for (let i = 0; i < correctAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      isCorrect = true;
    }
    numCorrectAnswers += isCorrect;
    console.log(`${i + 1}. ${(isCorrect ? ("CORRECT") : ("INCORRECT"))}. You answered ${candidateAnswers[i]}. The correct answer is ${correctAnswers[i]}.\n`);
    isCorrect = false;
  }
  
  grade = (numCorrectAnswers/questions.length) * 100;
  console.log(grade);
    if (grade >= 80) {
      didPass = true; 
      console.log(`${candidateName}, you ${(didPass ? ("PASSED") : ("FAILED"))}. You scored ${grade}%. You needed a minimum of 80% to pass.`)
  }

  return grade;
}

function runProgram() {
  askForName();
  console.log("Hello, " + candidateName + "!\n");
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