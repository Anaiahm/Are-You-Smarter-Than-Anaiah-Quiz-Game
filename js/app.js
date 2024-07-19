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



/*----- Cached Element References  -----*/
const startContainerElement = document.getElementById("startContainer");
const QuizContainerElement = document.getElementById("quizContainer");
const startGameButton = document.getElementById("start");
const questionElement = document.querySelector(".question");
const rulesButton = document.getElementById('rules');
const option1 = document.querySelector(".option1")
const option2 = document.querySelector(".option2")
const option3 = document.querySelector(".option3")
const option4 = document.querySelector(".option4")


/*-------------- Functions -------------*/
const init = () => {
    QuizContainerElement.style.display = "none"
}

const startQuiz = () => {
    QuizContainerElement.style.display = "block"
    startContainerElement.style.display = "none"
    render()
}

const render = () => {
    renderQuestion()
}
const renderQuestion = () => {
    questionElement.textContent = questions[currentQuestionIDX].question
    option1.textContent = questions[currentQuestionIDX].option[0]
    option2.textContent = questions[currentQuestionIDX].option[1]
    option3.textContent = questions[currentQuestionIDX].option[2]
    option4.textContent = questions[currentQuestionIDX].option[3]
}


init()
/*----------- Event Listeners ----------*/
startGameButton.addEventListener("click", startQuiz)
