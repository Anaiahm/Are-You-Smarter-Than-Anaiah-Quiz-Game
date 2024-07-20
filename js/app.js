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
        question: "Who's heart was stolen in Moana?",
        options: [
            { choice: "Hei Hei", correct: false },
            { choice: "Maoui", correct: false },
            { choice: "Moana", correct: false },
            { choice: "Te Fiti", correct: true },
        ]
    },
    {
        question: "Where was the abominable snowman banished in Monsters Inc?",
        options: [
            { choice: "Australia", correct: false },
            { choice: "The Himilayas", correct: true },
            { choice: "Hawaii", correct: false },
            { choice: "Alaska", correct: false },
        ]
    },
    {
        question: "What is the name of the cowboy in Toy Story?",
        options: [
            { choice: "Bo Peep", correct: false },
            { choice: "Andy", correct: false },
            { choice: "Woody", correct: true },
            { choice: "Jessie", correct: false },
        ]
    },
];
const questions2 = [
    {
        question: "Who is not a Kardashian?",
        options: [
            { choice: "Kylie", correct: true },
            { choice: "Khloe", correct: false },
            { choice: "Kim", correct: false },
            { choice: "Kourtney", correct: false },
        ]
    },
    {
        question: "Who is not a pop artist?",
        options: [
            { choice: "Taylor Swift", correct: false },
            { choice: "Sabrina Carpenter", correct: false },
            { choice: "Katy Perry", correct: false },
            { choice: "Tanner Adell", correct: true },
        ]
    },
    {
        question: "When is Star Wars Day?",
        options: [
            { choice: "July 8th", correct: false },
            { choice: "November 23rd", correct: false },
            { choice: "May 4th", correct: true },
            { choice: "June 2nd", correct: false },
        ]
    },
    {
        question: "How many Harry Potter books are there?",
        options: [
            { choice: "8", correct: false },
            { choice: "7", correct: true },
            { choice: "9", correct: false },
            { choice: "5", correct: false },
        ]
    },
    {
        question: "What Avenger can pick up Mjolnir?",
        options: [
            { choice: "Iron Man", correct: false },
            { choice: "Vision", correct: true },
            { choice: "Black Widow", correct: false },
            { choice: "Hulk", correct: false },
        ]
    },
];
const questions3 = [
    {
        question: "What is the smallest country in the world?",
        options: [
            { choice: "USA", correct: false },
            { choice: "Vatican City", correct: true },
            { choice: "France", correct: false },
            { choice: "Austria", correct: false },
        ]
    },
    {
        question: "Who was the first President?",
        options: [
            { choice: "Benjamin Franklin", correct: false },
            { choice: "John F Kennedy", correct: false },
            { choice: "Barack Obama", correct: false },
            { choice: "George Washington", correct: true },
        ]
    },
    {
        question: "What is the chemical symbol for Gold?",
        options: [
            { choice: "O", correct: false },
            { choice: "K", correct: false },
            { choice: "Ag", correct: false },
            { choice: "Au", correct: true },
        ]
    },
    {
        question: "What is the name of the Galaxy that controls our solar system?",
        options: [
            { choice: "The KitKat Galaxy", correct: false },
            { choice: "The Milky Way Galaxy", correct: true },
            { choice: "Earth", correct: false },
            { choice: "IDK", correct: false },
        ]
    },
    {
        question: "What is the most abumndant gas in Earth's atmosphere?",
        options: [
            { choice: "Helium", correct: false },
            { choice: "Oxygen", correct: false },
            { choice: "Nitrogen", correct: true },
            { choice: "Carbon", correct: false },
        ]
    },
];
// const rules = [
// "There are 10 questions in each Category", "You must answer at least 7 questions correctly to win",
// "If you answer three questions incorrectly, YOU LOSE!", "You may retry as many times as you'd like",
// "There is a <i> suggested</i> 15 second timer per quesion"
// ];

/*---------- Variables (state) ---------*/
let score = 0;
let currentQuestionIDX = 0;
let winner = null;



/*----- Cached Element References  -----*/
const startContainerElement = document.getElementById("startContainer");
const QuizContainer1Element = document.getElementById("quizContainer1");
const QuizContainer2Element = document.getElementById("quizContainer2");
const QuizContainer3Element = document.getElementById("quizContainer3");
const startGameButton = document.getElementById("start");
const questionElement = document.querySelector(".question");
const rulesButton = document.getElementById('rules');
const backButton = document.querySelector(".back")
const kmButton = document.querySelector(".kids")
const pcButton = document.querySelector(".pop")
const rfButton = document.querySelector(".random")
const option1 = document.querySelector(".o-0")
const option2 = document.querySelector(".o-1")
const option3 = document.querySelector(".o-2")
const option4 = document.querySelector(".o-3")
const gameStatusElement = document.querySelector(".gameStatus")
const winStatusMessage = document.querySelector(".win")
const loseStatusMessage = document.querySelector(".lose")
const gameRules = document.querySelector(".gRules")
const categoryContainerElement = document.querySelector(".categories")
const kidMovies = document.querySelector("km")
const popCulture = document.querySelector("pc")
const randomFacts = document.querySelector("rf")
// cache h2 element to display message gameStatusMessage


/*-------------- Functions -------------*/
const init = () => {
    score = 0;
    currentQuestionIDX = 0;
    winner = null;
    QuizContainer1Element.style.display = "none"
    QuizContainer2Element.style.display = "none"
    QuizContainer3Element.style.display = "none"
    winStatusMessage.style.display = "none"
    loseStatusMessage.style.display = "none"
    gameRules.style.display = "none"
    backButton.style.display = "none"
    categoryContainerElement.style.display = 'none'
}

const startQuiz1 = () => {
    QuizContainer1Element.style.display = "block"
    startContainerElement.style.display = "none"
    backButton.style.display = "block"
    categoryContainerElement.style.display = 'none'
    render()
}
const startQuiz2 = () => {
    QuizContainer2Element.style.display = "block"
    startContainerElement.style.display = "none"
    backButton.style.display = "block"
    categoryContainerElement.style.display = 'none'
    render()
}
const startQuiz3 = () => {
    QuizContainer3Element.style.display = "block"
    startContainerElement.style.display = "none"
    backButton.style.display = "block"
    categoryContainerElement.style.display = 'none'
    render()
}
const renderWinOrLoseMessage = () => {
    // make an IF condiitonal that if score is 5 its a winner else loser

    if (score >= 5) {
        winStatusMessage.style.display = "block"
        QuizContainer1Element.style.display = "none"
        QuizContainer2Element.style.display = "none"
        QuizContainer3Element.style.display = "none"
        backButton.style.display = "block"
        console.log("You Win! You ARE Smarter Than Anaiah!")
    }
    else {
        loseStatusMessage.style.display = "block"
        QuizContainer1Element.style.display = "none"
        QuizContainer2Element.style.display = "none"
        QuizContainer3Element.style.display = "none"
        backButton.style.display = "block"
        console.log("You lose! You ARE NOT Smarter Than Anaiah!")
    }
}
const render = () => {
    if (currentQuestionIDX < 5) {
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
const renderQuestion2 = () => {
    questionElement.textContent = questions1[currentQuestionIDX].question
    option1.textContent = questions2[currentQuestionIDX].options[0].choice
    option2.textContent = questions2[currentQuestionIDX].options[1].choice
    option3.textContent = questions2[currentQuestionIDX].options[2].choice
    option4.textContent = questions2[currentQuestionIDX].options[3].choice
}
const renderQuestion3 = () => {
    questionElement.textContent = questions2[currentQuestionIDX].question
    option1.textContent = questions3[currentQuestionIDX].options[0].choice
    option2.textContent = questions3[currentQuestionIDX].options[1].choice
    option3.textContent = questions3[currentQuestionIDX].options[2].choice
    option4.textContent = questions3[currentQuestionIDX].options[3].choice
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
const handleAnswerClick2 = (event) => {
    const className = event.target.className
    let index = className.replace('o-', '')
    index = Number(index)
    console.log(typeof index)
    if (event.target.textContent === questions2[currentQuestionIDX].options[index].choice && questions2[currentQuestionIDX].options[index].correct === true) {
        score = score + 1
    }
    currentQuestionIDX = currentQuestionIDX + 1
    render()

}
const handleAnswerClick3 = (event) => {
    const className = event.target.className
    let index = className.replace('o-', '')
    index = Number(index)
    console.log(typeof index)
    if (event.target.textContent === questions3[currentQuestionIDX].options[index].choice && questions3[currentQuestionIDX].options[index].correct === true) {
        score = score + 1
    }
    currentQuestionIDX = currentQuestionIDX + 1
    render()

}

const showRules = () => {
gameRules.style.display = "block"
startContainerElement.style.display = "none"
backButton.style.display = "block"
}

const goBack = () => {
    score = 0;
    currentQuestionIDX = 0;
    winner = null;
    QuizContainer1Element.style.display = "none"
    QuizContainer2Element.style.display = "none"
    QuizContainer3Element.style.display = "none"
    winStatusMessage.style.display = "none"
    loseStatusMessage.style.display = "none"
    gameRules.style.display = "none"
    backButton.style.display = "none"
    startContainerElement.style.display = "block"
    categoryContainerElement.style.display = 'none'
}

const showCategories = () => {
    categoryContainerElement.style.display = 'block'
    backButton.style.display = "block"
    gameRules.style.display = "none"
    startContainerElement.style.display = "none"
}

init()
/*----------- Event Listeners ----------*/
startGameButton.addEventListener("click", showCategories);
// startGameButton.addEventListener("click", startQuiz);
kmButton.addEventListener('click',startQuiz1)
pcButton.addEventListener('click',startQuiz2)
rfButton.addEventListener('click',startQuiz3)
rulesButton.addEventListener('click',showRules)
backButton.addEventListener('click',goBack)
option1.addEventListener("click", handleAnswerClick);
option2.addEventListener("click", handleAnswerClick);
option3.addEventListener("click", handleAnswerClick);
option4.addEventListener("click", handleAnswerClick);

