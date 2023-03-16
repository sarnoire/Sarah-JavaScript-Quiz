//questions array//
const questionOptions = [
  {
    question: "How can you get the total number of arguments passed to a function?",
    options: ["A - Using args.length property", "B - Using arguments.length property", "C - Both of the above.", "D - None of the above."],
    answer: 1
  },

  {
    question: "Which built-in method calls a function for each element in the array?",
    options: ["A - while()", "B - loop()", "C - forEach()", "D - None of the above."],
    answer: 2
  },
  
  {
    question: "Which of the following function of String object returns the index within the calling String object of the first occurrence of the specified value?",
    options: ["A - substr()", "B - search()", "C - lastIndexOf()", "D - indexOf()"],
    answer: 3
  },

  {
    question: "Which of the following function of Array object reverses the order of the elements of an array?",
    options: ["A - reverse()", "B - push()", "C - reduce()", "D - reduceRight()"],
    answer: 1
  },

  {
    question: "Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?",
    options: ["A - anchor()", "B - big()", "C - blink()", "D - bold()"],
    answer: 3
  },
];

var startButton = document.getElementById("start-button");
var quizStart = document.getElementById("start-quiz");
var quizQuestions = document.querySelector(".quiz-questions"); 
var timeEl = document.querySelector("#time");
var time = 60;
var endscreen = document.querySelector(".endscreen");
var score = 0;
var scoreSpan = document.getElementById("score")
var submitButton = document.getElementById("submit");

//start page first page change & questions//
var questionIndex = 0;
var questionDisplay = document.getElementById("question-display");

function startQuiz() {
  var answerA = document.getElementById("answerA");
  var answerB = document.getElementById("answerB");
  var answerC = document.getElementById("answerC");
  var answerD = document.getElementById("answerD");

  // Added if statement to heck if variable "questionIndex" is being used as an index to access the "questionOptions" array. 
  if (questionIndex >= questionOptions.length) {
    return;
  }

  questionDisplay.innerHTML = "";
  quizStart.classList.add("hide");
  quizQuestions.classList.remove("hide");
  questionDisplay.textContent = questionOptions[questionIndex].question;
  answerA.textContent = questionOptions[questionIndex].options[0];
  answerB.textContent = questionOptions[questionIndex].options[1];
  answerC.textContent = questionOptions[questionIndex].options[2];
  answerD.textContent = questionOptions[questionIndex].options[3];

  answerA.addEventListener("click", displayQuestion);
  answerB.addEventListener("click", displayQuestion);
  answerC.addEventListener("click", displayQuestion);
  answerD.addEventListener("click", displayQuestion);
}

function displayQuestion(event) {
  event.preventDefault();
  let currentQuestion = questionOptions[questionIndex];
  let answerOptions = currentQuestion.options;
  let correctAnswer = answerOptions[currentQuestion.answer - 1];
  
  if (event.target.innerHTML === correctAnswer) {
    questionIndex++;
    score++;
    startQuiz();
  } else {
    time -= 10;
    questionIndex++;
    startQuiz();
  }
  
  if (questionIndex === questionOptions.length) {
    goToEndScreen();
  }
}

function goToEndScreen() {
  quizQuestions.classList.add("hide");
  endscreen.classList.remove("hide");
  scoreSpan.innerText = score
}

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  var initials = document.getElementById("initials").value;
  console.log(initials);
  
  // Get existing data from localStorage, or initialize an empty array
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Add new score to the array
  highScores.push({ initials: initials, score: score });

  // Sort the array in descending order based on score
  highScores.sort(function(a, b) {
    return b.score - a.score;
  });

  // Store the updated array in localStorage
  localStorage.setItem("highScores", JSON.stringify(highScores));

  // Redirect to the high scores page
  window.location.href = "high-scores.html";
});

function init() {
  //quizTime();
  startQuiz();
}

startButton.addEventListener("click", init);
