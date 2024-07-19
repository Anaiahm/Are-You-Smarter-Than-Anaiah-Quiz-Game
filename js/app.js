/*-------------- Constants -------------*/
const questions = [
    {
        question: "What is the name of the main villian in Frozen?",
        options: [
            { choice: "Hans", correct: true },
            { choice: "Elsa", correct: false },
            { choice: "Olaf", correct: false },
            { choice: "Anna", correct: false },
        ]
    },
    {
        question: "How many Dalmations did Cruella De Vil Steal?",
        options: [
            { choice: "100", correct: false },
            { choice: "101", correct: false },
            { choice: "84", correct: false },
            { choice: "15", correct: true },
        ]
    },
    {
        question: "What is the name of the main villian in Frozen?",
        options: [
            { choice: "Hans", correct: true },
            { choice: "Elsa", correct: false },
            { choice: "Olaf", correct: false },
            { choice: "Anna", correct: false },
        ]
    },
    {
        question: "What is the name of the main villian in Frozen?",
        options: [
            { choice: "Hans", correct: true },
            { choice: "Elsa", correct: false },
            { choice: "Olaf", correct: false },
            { choice: "Anna", correct: false },
        ]
    },
    {
        question: "What is the name of the main villian in Frozen?",
        options: [
            { choice: "Hans", correct: true },
            { choice: "Elsa", correct: false },
            { choice: "Olaf", correct: false },
            { choice: "Anna", correct: false },
        ]
    },
];

/*---------- Variables (state) ---------*/
let score = 0;
let currentQuestionIDX = 0;
let winner = null;



/*----- Cached Element References  -----*/
const startContainerElement = document.getElementById("startContainer");
const QuizContainerElement = document.getElementById("quizContainer");
const startGameButton = document.getElementById("start");
const questionElement = document.querySelector(".question");
const rulesButton = document.getElementById('rules');
const option1 = document.querySelector(".o-0")
const option2 = document.querySelector(".o-1")
const option3 = document.querySelector(".o-2")
const option4 = document.querySelector(".o-3")
// cache h2 element to display message gameStatusMessage


/*-------------- Functions -------------*/
const init = () => {
    score = 0;
    currentQuestionIDX = 0;
    winner = null;
    QuizContainerElement.style.display = "none"
}

const startQuiz = () => {
    QuizContainerElement.style.display = "block"
    startContainerElement.style.display = "none"
    render()
}
const renderWinOrLoseMessage = () => {
  // make an IF condiitonal that if score is 5 its a winner else loser
}
const render = () => {
    if (currentQuestionIDX < 5 ){
        renderQuestion() 
        
    } else {
        renderWinOrLoseMessage()
    }
    console.log(score)
}
const renderQuestion = () => {
    questionElement.textContent = questions[currentQuestionIDX].question
    option1.textContent = questions[currentQuestionIDX].options[0].choice
    option2.textContent = questions[currentQuestionIDX].options[1].choice
    option3.textContent = questions[currentQuestionIDX].options[2].choice
    option4.textContent = questions[currentQuestionIDX].options[3].choice
}

const handleAnswerClick = (event) => {
    const className = event.target.className
    let index = className.replace('o-', '')
    index = Number(index)
    console.log(typeof index)
    if (event.target.textContent === questions[currentQuestionIDX].options[index].choice && questions[currentQuestionIDX].options[index].correct === true) {
        score = score + 1
    }
    currentQuestionIDX = currentQuestionIDX + 1
    render()

}

init()
/*----------- Event Listeners ----------*/
startGameButton.addEventListener("click", startQuiz);
option1.addEventListener("click", handleAnswerClick);
option2.addEventListener("click", handleAnswerClick);
option3.addEventListener("click", handleAnswerClick);
option4.addEventListener("click", handleAnswerClick);

