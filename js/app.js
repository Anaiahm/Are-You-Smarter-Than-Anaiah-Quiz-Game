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
        question: "Where was the abominable snowman banished to in Monsters Inc?",
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
    {
        question: "What dessert does Princess Tiana make?",
        options: [
            { choice: "Pie", correct: false },
            { choice: "Cupcakes", correct: false },
            { choice: "Beignets", correct: true },
            { choice: "Peach Cobbler", correct: false },
        ]
    },
    {
        question: "What movie is the character Captain Hook from?",
        options: [
            { choice: "Peter's flight", correct: false },
            { choice: "Hocus Pocus", correct: false },
            { choice: "Peter pan", correct: true },
            { choice: "Tangled", correct: false },
        ]
    },
    {
        question: "What Princess lost her glass slipper?",
        options: [
            { choice: "Rapunzel", correct: false },
            { choice: "Snow White", correct: false },
            { choice: "Cinderella", correct: true },
            { choice: "Jasmine", correct: false },
        ]
    },
    {
        question: "What colors do the fairies make Aurora's dress?",
        options: [
            { choice: "Pink & Blue", correct: true },
            { choice: "Pink & Purple", correct: false },
            { choice: "Yellow & Green", correct: false },
            { choice: "Yellow & Pink", correct: false },
        ]
    },
    {
        question: "Ohana means family. Family means nobody gets left behind...?",
        options: [
            { choice: "Or eaten", correct: false },
            { choice: "Or goes hungry ", correct: false },
            { choice: "Or forgotten", correct: true },
            { choice: "Or lost", correct: false },
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
    {
        question: "What movie premiered at the same time as Barbie?",
        options: [
            { choice: "Oppenheimer", correct: true },
            { choice: "Wish", correct: false },
            { choice: "Sing 2", correct: false },
            { choice: "Frozen", correct: false },
        ]
    },
    {
        question: "H-O-T-T-O-G-O, You can take me ...?",
        options: [
            { choice: "to the rodeooo", correct: false },
            { choice: "i got to gooo", correct: false },
            { choice: "in the snowww", correct: false },
            { choice: "hot to gooo", correct: true },
        ]
    },
    {
        question: "How many claps are in the Friends theme song?",
        options: [
            { choice: "5", correct: false },
            { choice: "3", correct: false },
            { choice: "4", correct: true },
            { choice: "2", correct: false },
        ]
    },
    {
        question: "Who was the first Black Woman to be on the ballot for President of the USA?",
        options: [
            { choice: "Kamala Harris", correct: false },
            { choice: "Shirley Chisholm", correct: true },
            { choice: "Beyonce", correct: false },
            { choice: "Hillary Clinton", correct: false },
        ]
    },
    {
        question: "How many licks does it take to get to the center of a tootsie pop?",
        options: [
            { choice: "328", correct: false },
            { choice: "The world may never know", correct: true },
            { choice: "Sixteen", correct: false },
            { choice: "The world already knows", correct: false },
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
    {
        question: "Which is not a berry?",
        options: [
            { choice: "Grapees", correct: false },
            { choice: "Strawberry", correct: true },
            { choice: "Banana", correct: false },
            { choice: "Tomatoes", correct: false },
        ]
    },
    {
        question: "How many hearts do octopuses have?",
        options: [
            { choice: "1", correct: false },
            { choice: "6", correct: false },
            { choice: "2", correct: false },
            { choice: "3", correct: true },
        ]
    },
    {
        question: "What never spoils?",
        options: [
            { choice: "Canned Beans", correct: false },
            { choice: "Pickles", correct: false },
            { choice: "Oats", correct: false },
            { choice: "Honey", correct: true },
        ]
    },
    {
        question: "A day on which planet lasts longer than a year?",
        options: [
            { choice: "Mars", correct: false },
            { choice: "Venus", correct: true },
            { choice: "Earth", correct: false },
            { choice: "Jupiter", correct: false },
        ]
    },
    {
        question: "What did Sharks exist before?",
        options: [
            { choice: "Algae", correct: false },
            { choice: "The earth", correct: false },
            { choice: "Trees", correct: true },
            { choice: "Jawless Fish", correct: false },
        ]
    },
];




/*---------- Variables (state) ---------*/
let score = 0;
let currentQuestionIDX = 0;
let winner = null;
let quiz 



/*----- Cached Element References  -----*/
const startContainerElement = document.getElementById("startContainer");
const QuizContainer1Element = document.getElementById("quizContainer1");
const QuizContainer2Element = document.getElementById("quizContainer2");
const QuizContainer3Element = document.getElementById("quizContainer3");
const startGameButton = document.getElementById("start");
const questionElement = document.querySelector(".question");
const questionElement2 = document.querySelector(".question2");
const questionElement3 = document.querySelector(".question3");
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
const audio = document.getElementById('background-music')
const musicButton = document.getElementById("music")
const questionNumber = document.getElementById("questionNumberDisplay").textContent;




/*-------------- Functions -------------*/
const init = () => {
    score = 0;
    currentQuestionIDX = 0;
    winner = null;
    QuizContainer1Element.style.display = "none"
    winStatusMessage.style.display = "none"
    loseStatusMessage.style.display = "none"
    gameRules.style.display = "none"
    backButton.style.display = "none"
    categoryContainerElement.style.display = 'none'
}

const startQuiz1 = () => {
    document.getElementById("mainTitle").style.display = "none";
    quiz = questions;
    QuizContainer1Element.style.display = "block"
    startContainerElement.style.display = "none"
    backButton.style.display = "block"
    categoryContainerElement.style.display = 'none'
    render()
}
const startQuiz2 = () => {
    document.getElementById("mainTitle").style.display = "none";
    quiz = questions2;
    QuizContainer1Element.style.display = "block"
    startContainerElement.style.display = "none"
    backButton.style.display = "block"
    categoryContainerElement.style.display = 'none'
    render()
}
const startQuiz3 = () => {
    document.getElementById("mainTitle").style.display = "none";
    quiz = questions3;
    QuizContainer1Element.style.display = "block"
    startContainerElement.style.display = "none"
    backButton.style.display = "block"
    categoryContainerElement.style.display = 'none'
    render()
}
const renderWinOrLoseMessage = () => {

    if (score >= 7) {
        document.getElementById("winScore").textContent = score;
        winStatusMessage.style.display = "block"
        QuizContainer1Element.style.display = "none"
        backButton.style.display = "block"
        score.style.display = "block"
    }
    else {
        document.getElementById("loseScore").textContent = score;
        loseStatusMessage.style.display = "block"
        QuizContainer1Element.style.display = "none"
        backButton.style.display = "block"
    }
}
const render = () => {
    let questionNumber = `Question ${currentQuestionIDX + 1}/10`
    if (currentQuestionIDX < 10) {
        renderQuestion(quiz)
        console.log(questionNumber)
        console.log(currentQuestionIDX)
        document.getElementById("questionNumberDisplay").classList.remove("hidden");
        document.getElementById("questionNumberDisplay").textContent = questionNumber;
    } else {
        renderWinOrLoseMessage()
        document.getElementById("questionNumberDisplay").classList.add("hidden");
    }
   
}
const renderQuestion = (quiz) => {
console.log(quiz[currentQuestionIDX].options[1].choice)
    questionElement.textContent = quiz[currentQuestionIDX].question
    option1.textContent = quiz[currentQuestionIDX].options[0].choice
    option2.textContent = quiz[currentQuestionIDX].options[1].choice
    option3.textContent = quiz[currentQuestionIDX].options[2].choice
    option4.textContent = quiz[currentQuestionIDX].options[3].choice
}


const handleAnswerClick = (event) => {
    const className = event.target.className
    let index = className.replace('o-', '')
    index = Number(index)
    if (event.target.textContent === quiz[currentQuestionIDX].options[index].choice && quiz[currentQuestionIDX].options[index].correct === true) {
        score = score + 1
    }
    currentQuestionIDX = currentQuestionIDX + 1
    render()
    
}

const showRules = () => {
    gameRules.style.display = "block"
    startContainerElement.style.display = "none"
    backButton.style.display = "block"
    document.getElementById("mainTitle").style.display = "none";
    
}

const goBack = () => {
    score = 0;
    currentQuestionIDX = 0;
    winner = null;
    QuizContainer1Element.style.display = "none"
    winStatusMessage.style.display = "none"
    loseStatusMessage.style.display = "none"
    gameRules.style.display = "none"
    backButton.style.display = "none"
    startContainerElement.style.display = "block"
    categoryContainerElement.style.display = 'none'
    document.getElementById("mainTitle").style.display = "block";
    document.getElementById("questionNumberDisplay").classList.add("hidden");
}

const showCategories = () => {
    categoryContainerElement.style.display = 'block'
    backButton.style.display = "block"
    gameRules.style.display = "none"
    startContainerElement.style.display = "none"
    document.getElementById("mainTitle").style.display = "none";
}


const playPauseMusic = () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    
}

init()
/*----------- Event Listeners ----------*/
startGameButton.addEventListener("click", showCategories);
kmButton.addEventListener('click',startQuiz1)
pcButton.addEventListener('click',startQuiz2)
rfButton.addEventListener('click',startQuiz3)
rulesButton.addEventListener('click',showRules)
backButton.addEventListener('click',goBack)
option1.addEventListener("click", handleAnswerClick);
option2.addEventListener("click", handleAnswerClick);
option3.addEventListener("click", handleAnswerClick);
option4.addEventListener("click", handleAnswerClick);
musicButton.addEventListener('click', playPauseMusic);
