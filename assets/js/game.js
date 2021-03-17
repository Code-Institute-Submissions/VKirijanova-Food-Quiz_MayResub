const question = document.querySelector("#question");
const options = Array.from(document.querySelectorAll(".option-body"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
  {
    question:
      "If you are diagnosed with Coeliac disease, which protein are you unable to eat?",
    option1: "Soy",
    option2: "Gluten",
    option3: "Lactose",
    option4: "Pollen",
    answer: 2,
  },
  {
    question: "What type of pasta has a name meaning 'Little Worms'?",
    option1: "Vermicelli",
    option2: "Orecchiette",
    option3: "Calamarata",
    option4: "Rigatoni",
    answer: 1,
  },
  {
    question: "What type of pastry are profitroles made out of?",
    option1: "Shortcrust pastry",
    option2: "Fillo pastry",
    option3: "Choux pastry",
    option4: "Puff pastry",
    answer: 3,
  },
  {
    question: "From which flower does a vanilla pod come?",
    option1: "Orchid",
    option2: "Calendula",
    option3: "Rose",
    option4: "Honeysuckle",
    answer: 1,
  },
  {
    question: "Which nuts are used in marzipan?",
    option1: "Pistachios",
    option2: "Walnuts",
    option3: "Almonds",
    option4: "Cashews",
    answer: 3,
  },
  {
    question: "What is the best selling flavour of soup in the UK?",
    option1: "Chicken",
    option2: "Tomato",
    option3: "Leek",
    option4: "Carrot & coriander",
    answer: 2,
  },
  {
    question: "Calamari is a dish made from which animal?",
    option1: "Octopus",
    option2: "Prawns",
    option3: "Chicken",
    option4: "Squid",
    answer: 4,
  },
  {
    question: "What is the most expensive spice in the world by weight?",
    option1: "Saffron",
    option2: "Cumin",
    option3: "Turmeric",
    option4: "Cinamon",
    answer: 1,
  },
  {
    question: "How many calories does a glass of water contain?",
    option1: "25",
    option2: "0",
    option3: "400",
    option4: "5",
    answer: 2,
  },
  {
    question:
      "Which fast-food franchise has the largest number of restaurants in the world?",
    option1: "Domino's Pizza",
    option2: "McDonald's",
    option3: "KFC",
    option4: "Subway",
    answer: 4,
  },
];

const SCORE_POINT = 1;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("final.html");
  }

  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  options.forEach((option) => {
    const number = option.dataset["number"];
    option.innerText = currentQuestion["option" + number];
  });

  availableQuestions.splice(questionsIndex, 1);

  acceptingAnswer = true;
};

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    if (!acceptingAnswer) return;

    acceptingAnswer = false;
    const selectedoption = e.target;
    const selectedAnswer = selectedoption.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(SCORE_POINT);
    }

    selectedoption.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedoption.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
};

startGame();
