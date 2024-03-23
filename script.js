const questions = [
    {
        question: "Qui detient le record du meilleur passeur de la ligue des champions?",
        Answers: [
            { text: "Lionel MESSI",correct: false},
            { text: "Cristiano RONALDO",correct: true},
            { text: "Kevin DE BRUYNE",correct: false},
            { text: "Andres INIESTA",correct: false},
        ]
    },
    {
        question: "Quel est la premiere equipe a avoir remporter la ligue des champions?",
        Answers: [
            { text: "REAL MADRID",correct: false},
            { text: "MILAN AC",correct: false},
            { text: "AJAX AMSTERDAM",correct: false},
            { text: "L'OLYMPIQUE DE MARSEILLE",correct: true},
        ]
    },
    {
        question: "En 2015, quel coatch a entraine l'equipe du CHELSEA FC?",
        Answers: [
            { text: "Jose MOURINHO",correct: true},
            { text: "Rafael BENITEZ",correct: false},
            { text: "Antonio CONTE",correct: false},
            { text: "Maurizio SARRI",correct: false},
        ]
    },
    {
        question: "Qui est le meilleur joueur de l'histoire de LIVERPOOL?",
        Answers: [
            { text: "John BARNES",correct: false},
            { text: "Ian RUSH",correct: false},
            { text: "Steven GERRARD",correct: false},
            { text: "Kenny DALGLISH",correct: true},
        ]
    },
    {
        question: "Quel equipe a remporrte le plus de titres en premier league?",
        Answers: [
            { text: "Liverpool",correct: false},
            { text: "Mancheter United",correct: true},
            { text: "Arsenal",correct: false},
            { text: "Manchester City",correct: false},
        ]
    },
    {
        question: "Quel est le club qui a plus de défaite en Ligue des Champions ?",
        Answers: [
            { text: "Real Madrid",correct: true},
            { text: "Juventus",correct: false},
            { text: "Bayern Munich",correct: false},
            { text: "Benfica",correct: false},
        ]
    },
    {
        question: "Qui est le plus jeune joueur a avoir remporte la league des champions?",
        Answers: [
            { text: "Patrick KLUIVERT",correct: false},
            { text: "Nwankwo KANU",correct: true},
            { text: "Iker CASILLAS",correct: false},
            { text: "Clarence SEEDORF",correct: false},
        ]
    },
    {
        question: "Quel club a le plus de titre en league des champions?",
        Answers: [
            { text: "PSV Eindhoven",correct: false},
            { text: "Nottingham Forest",correct: true},
            { text: "Celtic Glasgow",correct: false},
            { text: "Olympique De Marseille",correct: false},
        ]
    },
    {
        question: "Qui a remporté le titre de golden boy en 2018?",
        Answers: [
            { text: "João Félix",correct: false},
            { text: "Matthijs de Ligt",correct: true},
            { text: "Kylian Mbappé ",correct: false},
            { text: "Renato Sanches",correct: false},
        ]
    },
    {
        question: "Qui est le meilleur buteur du monde?",
        Answers: [
            { text: "Pele",correct: false},
            { text: "Lionel Messi",correct: false},
            { text: "Romario",correct: false},
            { text: "Cristiano Ronaldo",correct: true},
        ]
    },
    {
        question: "Qui est le plus jeune joueur a avoir discuter un match de Clasico?",
        Answers: [
            { text: "GAVI",correct: false},
            { text: "Ansu FATI",correct: false},
            { text: "Lamine YAMAL",correct: true},
            { text: "PEDRI",correct: false},
        ]
    },
    {
        question: "Quel est le nom du stade de OGC Nice?",
        Answers: [
            { text: "Saint-Isidore",correct: false},
            { text: "Saint-Maurice",correct: false},
            { text: "Léo-Lagrange",correct: false},
            { text: "Allianz Riviera ",correct: true},
        ]
    },
    {
        question: "Qui est le meilleur entraineur au monde?",
        Answers: [
            { text: "Pep Guardiola",correct: true},
            { text: "Jurgen Klopp",correct: false},
            { text: "Carlo Ancelotti",correct: false},
            { text: "Thomas Tuchel",correct: false},
        ]
    },
    {
        question: "Qui a ete le meilleur joueur de la coupe du monde 2018?",
        Answers: [
            { text: "Kylian Mbappé",correct: false},
            { text: "Luka Modrić",correct: true},
            { text: "Thibaut Courtois",correct: false},
            { text: "Harry Kane ",correct: false},
        ]
    },
    {
        question: "Qui a remporter la LIGA en 2016?",
        Answers: [
            { text: "Fc Barcelone",correct: false},
            { text: "Real Madrid",correct: true},
            { text: "Atletico Madrid",correct: false},
            { text: "Seville",correct: false},
        ]
    },
    {
        question: "Qui a remporter la Premier League en 2016?",
        Answers: [
            { text: "Leicester",correct: true},
            { text: "Tottenham",correct: false},
            { text: "Manchester Ciy",correct: false},
            { text: "Chelsea",correct: false},
        ]
    },
    {
        question: "Qui est le meilleur gardien de la saison 2023/2024?",
        Answers: [
            { text: "Mike Maignan",correct: false},
            { text: "Marc-André ter Stegen",correct: false},
            { text: "Alisson Becker",correct: false},
            { text: "Thibaut Courtois",correct: true},
        ]
    },
    {
        question: "Qui est le ballon Africain 2022?",
        Answers: [
            { text: "Mohamed Salah",correct: false},
            { text: "Sadio MANE",correct: true},
            { text: "Ashraf Hakimi",correct: false},
            { text: "Riyad Mahrez",correct: false},
        ]
    },
    {
        question: "Qui est le meilleur defenseur de la CAN 2022?",
        Answers: [
            { text: "Franck Kessié",correct: false},
            { text: "Kalidou koulibaly",correct: false},
            { text: "Ashraf Hakimi",correct: true},
            { text: "Wilfried Ndidi",correct: false},
        ]
    },
    {
        question: "Qui est le joueur le plus titre au monde?",
        Answers: [
            { text: "Kenny Dalglish",correct: false},
            { text: "Ryan Giggs",correct:false },
            { text: "Andres Iniesta",correct: false},
           { text: "Dani Alves",correct: true},
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons"); 
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Suivant";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.Answers.forEach(Answer => {
        const button = document.createElement("button");
        button.innerHTML = Answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(Answer.correct){
            button.dataset.correct = Answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstElementChild){
        answerButtons.removeChild(answerButtons.firstElementChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Vous avez eu ${score}/${questions.length}!`;
    nextButton.innerHTML = "Rejouer";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
