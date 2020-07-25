var questions = [
  {
    number: 1,
    question: "Is used to perform repetitive tasks",
    options: [
      { name: "q1", content: "Function", id: "function" },
      { name: "q1", content: "Object", id: "object" },
      { name: "q1", content: "Break statement", id: "break" },
      { name: "q1", content: "Expression", id: "expression" },
    ],
    correctAnswer: "function",
  },
  {
    number: 2,
    question: "Is JavaScript a case-sensitive language?",
    options: [
      { name: "q2", content: "True", id: "true" },
      { name: "q2", content: "False", id: "false" },
    ],
    correctAnswer: "true",
  },
  {
    number: 3,
    question:
      "Which of the following is a valid type of function javascript supports?",
    options: [
      { name: "q4", content: "Named function", id: "named" },
      { name: "q4", content: "Anonymous function", id: "anonymous" },
      { name: "q4", content: "Both of the above", id: "both" },
      { name: "q4", content: "None of the above.", id: "none" },
    ],
    correctAnswer: "both",
  },
  {
    number: 4,
    question:
      "Which built-in method combines the text of two strings and returns a new string?",
    options: [
      { name: "q5", content: "append()", id: "append" },
      { name: "q5", content: "concat()", id: "concat" },
      { name: "q5", content: "attach()", id: "attach" },
      { name: "q5", content: "None of the above..", id: "none" },
    ],
    correctAnswer: "concat",
  },
  {
    number: 5,
    question:
      "All user-defined objects and built-in objects are descendants of an object called Object?",
    options: [
      { name: "q5", content: "True", id: "true" },
      { name: "q5", content: "False", id: "false" },
    ],
    correctAnswer: "true",
  },
  {
    number: 6,
    question:
      "Which of the following function of Number object returns the number's value?",
    options: [
      { name: "q6", content: "toString()", id: "toString" },
      { name: "q6", content: "valueOf()", id: "valueOf" },
      { name: "q6", content: "toLocaleString()", id: "toLocaleString" },
      { name: "q6", content: "toPrecision()", id: "toPrecision" },
    ],
    correctAnswer: "valueOf",
  },
  {
    number: 7,
    question:
      "Which of the following function of String object extracts a section of a string and returns a new string?",
    options: [
      { name: "q7", content: "slice()", id: "slice" },
      { name: "q7", content: "split()", id: "split" },
      { name: "q7", content: "replace()", id: "replace" },
      { name: "q7", content: "search().", id: "search" },
    ],
    correctAnswer: "slice",
  },
  {
    number: 8,
    question:
      "Which of the following function of String object returns the calling string value converted to lower case?",
    options: [
      { name: "q8", content: "toLocaleLowerCase()", id: "toLocaleLowerCase" },
      { name: "q8", content: "toLowerCase()", id: "toLowerCase" },
      { name: "q8", content: "toString()", id: "toString" },
      { name: "q8", content: "substring()", id: "substring" },
    ],
    correctAnswer: "toLowerCase",
  },
  {
    number: 9,
    question:
      "Which of the following function of Array object returns true if every element in this array satisfies the provided testing function?",
    options: [
      { name: "q9", content: "concat()", id: "concat" },
      { name: "q9", content: "every()", id: "every" },
      { name: "q9", content: "push()", id: "push" },
      { name: "q9", content: "some().", id: "some" },
    ],
    correctAnswer: "every",
  },
  {
    number: 10,
    question:
      "Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?",
    options: [
      { name: "q10", content: "unshift()", id: "unshift" },
      { name: "q10", content: "sort()", id: "sort" },
      { name: "q10", content: "splice()", id: "splice" },
      { name: "q10", content: "toString()", id: "toString" },
    ],
    correctAnswer: "unshift",
  },
];

var marks = 0;
var currentQuestionNumber = 0;

var quizSlider = document.querySelector(".quiz-slider");

for (var question of questions) {
  // create question div
  var questionContainer = document.createElement("div");
  // add class to the question div
  questionContainer.classList.add("quiz-question");
  // create div for the heading(question number & content)
  var questionHeading = document.createElement("div");
  // add class to the question heading div
  questionHeading.classList.add("question-heading");
  // create h2 for displaying the question number
  var questionNumber = document.createElement("h2");
  // add the HTML to the h2
  questionNumber.innerHTML = `Question ${question.number} / 10`;
  // create p element for displaying the question content
  var questionContent = document.createElement("p");
  // add content to the question
  questionContent.innerHTML = question.question;
  // kick off the h2 and p to "div.question-heading"
  questionHeading.appendChild(questionNumber);
  questionHeading.appendChild(questionContent);
  // create ul for containing the options
  var questionOptions = document.createElement("ul");
  // add class to the options ul
  questionOptions.classList.add("options");
  // Loop through the options for creating each option
  for (var option of question.options) {
    console.log();
    // create li for the option
    var optionItem = document.createElement("li");
    // create label
    var optionLabel = document.createElement("label");
    // add class to label
    optionLabel.setAttribute("for", option.id);
    // create radio input
    var radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.id = option.id;
    radioButton.name = option.name;
    // create span for option content
    var optionContent = document.createElement("span");
    optionContent.innerHTML = option.content;
    // kick off the input & span into label
    optionLabel.appendChild(radioButton);
    optionLabel.appendChild(optionContent);
    // kick off the label in li
    optionItem.appendChild(optionLabel);
    // kick of the option li into the ul
    questionOptions.appendChild(optionItem);
  }
  // kick off the heading and options in the div
  questionContainer.appendChild(questionHeading);
  questionContainer.appendChild(questionOptions);
  // kick off the div into the slider
  quizSlider.appendChild(questionContainer);
}

$("#next").click(function () {
  if (
    $(".quiz-question:first").find("input:checked").attr("id") ===
    questions[currentQuestionNumber].correctAnswer
  ) {
    marks += 1;
  } else {
    console.log(
      $(".quiz-question:first").find("input:checked").attr("id"),
      questions[currentQuestionNumber].correctAnswer
    );
  }
  currentQuestionNumber += 1;
  calculateResult();
  setTimeout(function () {
    $(".quiz-slider").animate({ left: "-101%" }, 500, function () {
      $(this).children(".quiz-question:first").remove();
      $(this).css("left", 0);
    });
  }, 250);
});

$(".btn-red").click(endTest);

function endTest() {
  currentQuestionNumber = 10;
  calculateResult();
}

function calculateResult() {
  if (currentQuestionNumber === questions.length) {
    $(".quiz-body").remove();
    $(".quiz-footer").remove();
    var str = "";
    var clr = "";
    if (marks > 8) {
      str = "Well done! You did a very great job";
      clr = "#28a745";
    } else if (marks > 5) {
      str = "Good Job. But Try to improve yourself";
      clr = "#17a2b8";
    } else if (marks > 3) {
      str = "Satisfactory";
      clr = "#ffc107";
    } else {
      str = "You need a lot of improvement";
      clr = "#dc3545";
    }
    $(".quiz-app").append(
      $(
        `<div class="result">
          <h2 style='color: ${clr}'>${str}</h2>
          <h3>Score: <span style='font-weight:700;'> ${marks} / 10</span></h3>
          <h3>Percentage: <span style='font-weight:700;'>${
            (marks * 100) / 10
          }%</span></h3>
        </div>`
      )
    );
  }
}
