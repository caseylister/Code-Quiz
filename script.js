var quiz = document.getElementById("quiz");
var prequiz = document.getElementById("prequiz");
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");
var finalScoreEl = document.getElementById("finalScore");
var endQuiz = document.getElementById("endQuiz");
var questionsEl = document.getElementById("questions");
var timer = document.getElementById("timer");
var startBtn = document.getElementById("startbutton");
var highscoreContainer = document.getElementById("container");
var highscorePage = document.getElementById("score-page");
var scoreName = document.getElementById("name");
var highscoreName = document.getElementById("score-name");
var finishQuizEl = document.getElementById("finishQuiz");
var submit = document.getElementById("submit-score");
var showScoreEl = document.getElementById("score-score");


var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        optionA: "strings",
        optionB: "booleans",
        optionC: "alerts",
        optionD: "numbers",
        rightAnswer: "c"
    },
    {
        question: "Arrays in Javascript can be used to store",
        optionA: "numbers and strings",
        optionB: "other arrays",
        optionC: "booleans",
        optionD: "all of the above",
        rightAnswer: "d"   
    },
    {
        question: "What does DOM stand for?",
        optionA: "Document Object Model",
        optionB: "Document Orbit Model",
        optionC: "Desktop Object Model",
        optionD: "Debug Object Mode",
        rightAnswer: "a"   
    }, 
    {
        question: "The condition in an if/else statement is enclosed with",
        optionA: "curly brackets",
        optionB: "quotations",
        optionC: "parenthesis",
        optionD: "square brackets",
        rightAnswer: "c"   
    }, 
    {
        question: "String values must be enclosed within _________ when being assigned variables.",
        optionA: "square brackets",
        optionB: "curly brackets",
        optionC: "parenthesis",
        optionD: "quotations",
        rightAnswer: "d"   
    }, 
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        optionA: "Javascript",
        optionB: "termina/bash",
        optionC: "for loops",
        optionD: "console.log",
        rightAnswer: "c"   
    },
    ];

var finalQuestion = quizQuestions.length;
var currentQuestionSpot = 0;
var timeLeft = 76;
var timeInterval;
var score = 0;
var correct;
