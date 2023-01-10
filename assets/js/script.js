//questions & arrays//
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
    question: "10 - Which of the following function of Array object reverses the order of the elements of an array?",
    options: ["A - reverse()", "B - push()", "C - reduce()", "D - reduceRight()"],
    answer: 3
  },

  {
    question: "Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?",
    options: ["A - anchor()", "B - big()", "C - blink()", "D - bold()"],
    answer: 3
  },
];

//start page//
var startButton = document.getElementById ("start-button");
  var quizStart = document.getElementById ("start-quiz");
  var quizQuestions = document.querySelector(".quiz-questions"); 

//first page change & questions//

  startButton.addEventListener ("click", startQuiz)
  function startQuiz() {
    quizStart.classList.add ("hide")
    quizQuestions.classList.remove ("hide")
    questionDisplay.textContent = questionOptions[0].question
    answerA.textContent = questionOptions[0].options[0]
    answerB.textContent = questionOptions[0].options[1]
    answerC.textContent = questionOptions[0].options[2]
    answerD.textContent = questionOptions[0].options[3]
  }

  var questionDisplay = document.getElementById ("question-display");
  var questionIdx = 0
  var answerA = document.getElementById("answerA");
  var answerB = document.getElementById("answerB");
  var answerC = document.getElementById("answerC");
  var answerD = document.getElementById("answerD");

  answerA.addEventListener ("click", displayQuestion)
  answerB.addEventListener ("click", displayQuestion)
  answerC.addEventListener ("click", displayQuestion)
  answerD.addEventListener ("click", displayQuestion)

  function displayQuestion() {
    const currentQuestion = questionOptions[questionIdx];

    //check correct answers before the index increments
    
    const answerOptions = currentQuestion.options;
    questionIdx ++
    questionDisplay.textContent = currentQuestion.question
      answerA.textContent = currentQuestion.options[0]
      answerB.textContent = currentQuestion.options[1]
      answerC.textContent = currentQuestion.options[2]
      answerD.textContent = currentQuestion.options[3]

}

//need to add eventlistener for quiz end. and for timer and local storage still needs to be fixed


function endQuiz() {
  clearInterval(timerInterval); 
  timerEl.textContent = 0; 
    if (secondsLeft < 0) {
      secondsLeft = 0;
  }

  finalScore.textContent = secondsLeft;
  

}


