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

function beginQuiz(){
    endQuiz.style.display = "none";
    if (currentQuestionSpot === finalQuestion){
        return finalScore();
    } 
    var currentQuestion = quizQuestions[currentQuestionSpot];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    choiceA.innerHTML = currentQuestion.optionA;
    choiceB.innerHTML = currentQuestion.optionB;
    choiceC.innerHTML = currentQuestion.optionC;
    choiceD.innerHTML = currentQuestion.optionD;
};


function startQuiz(){
   endQuiz.style.display = "none";
   prequiz.style.display = "none";
   beginQuiz();


    timeInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = "Time left: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timeInterval);
          finalScore();
        }
      }, 1000);
    quiz.style.display = "block";
}

function finalScore(){
    quiz.style.display = "none"
    endQuiz.style.display = "flex";
    clearInterval(timeInterval);
    scoreName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}


submit.addEventListener("click", function highscore(){
    
    
    if(scoreName.value === "") {
        alert("Name cannot be blank");
        return false;
    }else{
        var storeHighscore = JSON.parse(localStorage.getItem("storeHighscore")) || [];
        var currentUser = scoreName.value.trim();
        var currentHighscore = {
            name : currentUser,
            score : score
        };
    
        endQuiz.style.display = "none";
        highscoreContainer.style.display = "flex";
        highscorePage.style.display = "block";
        finishQuizEl.style.display = "flex";
        
        storeHighscore.push(currentHighscore);
        localStorage.setItem("storeHighscore", JSON.stringify(storeHighscore));
        createHighscores();

    }
});

function createHighscores(){
    highscoreName.innerHTML = "";
    showScoreEl.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("storeHighscore")) || [];
    for (i=0; i<highscores.length; i++){
        var newName = document.createElement("li");
        var newScore = document.createElement("li");
        newName.textContent = highscores[i].name;
        newScore.textContent = highscores[i].score;
        highscoreName.appendChild(newName);
        showScoreEl.appendChild(newScore);
    }
}
 
function displayHighScore(){
    endQuiz.style.display = "none";
    highscoreContainer.style.display = "flex";
    highscorePage.style.display = "block";
    finishQuizEl.style.display = "flex";
    prequiz.style.display = "none";

    createHighscores();
}


function clearScore(){
    window.localStorage.clear();
    highscoreName.textContent = "";
    showScoreEl.textContent = "";
}


function retakeQuiz(){
    highscoreContainer.style.display = "none";
    endQuiz.style.display = "none";
    timeLeft = 76;
    score = 0;
    currentQuestionSpot = 0;
    startQuiz();
}

startBtn.addEventListener("click",startQuiz);
