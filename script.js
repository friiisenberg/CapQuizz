
/*Question Array*/
const questions= [
    {
        question: "What is the capital of Senegal?" ,
        answers: [
            {text: "Dakar" , correct: true},
            {text: "Thies" , correct: false},
            {text: "Ziguinchor" , correct: false},
            {text:"Saint-Louis", correct: false},
        ]
    },    
    {
        question: "What is the capital of France? ",
         answers: [
            {text: " Bordeaux", correct: false},
            {text: "Lyon" , correct: false},
            {text: "Paris" , correct: true},
            {text: "Marseille" , correct: false},
         ] 
    },
    {
        question: "What is the capital of the United States of America? ",
         answers: [
            {text: "Las Vegas", correct: false},
            {text: "New York" , correct: false},
            {text: "Washington" , correct: true},
            {text: "Los Angeles" , correct: false},
         ] 
    },
    {
        question: "What is the capital of Brazil?",
         answers: [
            {text: "Brasilia", correct: true},
            {text: "Rio de Janeiro" , correct: false},
            {text: "Belo Horizonte" , correct: false},
            {text: "Sao Paulo" , correct: false},
         ] 
    },
    {
        question: "What is the capital of Australia?",
         answers: [
            {text: "Wellington", correct: false},
            {text: "Cook" , correct: false},
            {text: "Sydney" , correct: false},
            {text: "Canberra" , correct: true},
         ] 
    },
    {
        question: "What is the capital of Saudi Arabia?",
         answers: [
            {text: "Saud", correct: false},
            {text: "Makkah" , correct: false},
            {text: "Medina" , correct: false},
            {text: "Riyadh" , correct: true},
         ] 
    },
    {
        question: "What is the capital of Japan?",
         answers: [
            {text: "Nagasaki", correct: false},
            {text: "Osaka" , correct: false},
            {text: "Tokyo" , correct: true},
            {text: "Hiroshima" , correct: false},
         ] 
    },
    {
        question: "What is the capital of Sweden?",
         answers: [
            {text: "Stockholm", correct: true},
            {text: "Oslo" , correct: false},
            {text: "Malmo" , correct: false},
            {text: "Copenhagen" , correct: false},
         ] 
    },
    {
        question: ".What is the capital of Morocco?",
         answers: [
            {text: "Rabat", correct: true},
            {text: "Fes" , correct: false},
            {text: "Casablanca" , correct: false},
            {text: "Marakkesh" , correct: false},
         ] 
    },
    {
        question: "What is the capital of Dubai?",
         answers: [
            {text: "Dubai", correct: false},
            {text: "Abu Dhabi" , correct: false},
            {text: "Dubai is not a country!" , correct: true},
            {text: "Emirats" , correct: false},
         ] 
    },
    {
        question: "What is the capital of Finland?",
         answers: [
            {text: "Viking", correct: false},
            {text: "Greenland" , correct: false},
            {text: "Helsinki" , correct: true},
            {text: "Denmark" , correct: false},
         ] 
    },
    {
        question: "What is the capital of Bahamas?",
         answers: [
            {text: "Bahamas City", correct: false},
            {text: "Nassau" , correct: true},
            {text: "San Jose" , correct: false},
            {text: "Belmopan" , correct: false},
         ] 
    },
    {
        question: "What is the capital of Spain?",
         answers: [
            {text: "Madrid", correct: true},
            {text: "Barcelona" , correct: false},
            {text: "Andorra" , correct: false},
            {text: "Sevilla" , correct: false},
         ] 
    },
    {
        question: "What is the capital of Ukraine?",
         answers: [
            {text: "Ukraine", correct: false},
            {text: "Odessa" , correct: false},
            {text: "Moscou" , correct: false},
            {text: "Kyiv" , correct: true},
         ] 
    },
    {
        question: "What is the capital of Nigeria?",
         answers: [
            {text: "Abuja", correct: true},
            {text: "Port Harcourt" , correct: false},
            {text: "Nollywood" , correct: false},
            {text: "Lagos" , correct: false},
         ] 
    },
];
/*2nd Phase*/
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;
//function to start the Quiz
function startQuiz(){
   currentQuestionIndex = 0;
   score = 0;
   nextButton.innerHTML = "Next";
   showQuestion();
}
//function to show the questions//

function showQuestion(){
   resetState()


   let currentQuestion = questions[currentQuestionIndex];
   let questionNo = currentQuestionIndex + 1;
   questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

   currentQuestion.answers.forEach(answer=> {
      const button = document.createElement("button");
      button.innerHTML= answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if(answer.correct){
         button.dataset.correct = answer.correct;

      }
      button.addEventListener("click", selectAnswer);
   });
}
//function to set the timer
var timer;
var ele = document.getElementById('timer');

(function (){
  var sec = 0;
  timer = setInterval(()=>{
    ele.innerHTML = '00:'+sec;
    sec ++;
  }, 1000) // each 1 second
})() 

function pause(){
  clearInterval(timer);
}
//function to reset the App state
function resetState(){
   nextButton.style.display = "none";
   while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild);
   }
}

function selectAnswer(e){
   const selectedBtn = e.target;
   const isCorrect = selectedBtn.dataset.correct === "true";
   if(isCorrect){
      selectedBtn.classList.add("correct");
      score++
   }else{
      selectedBtn.classList.add("incorrect");
   }
   Array.from(answerButtons.children).forEach(button => {
      if(button.dataset.correct === "true"){
         button.classList.add("correct");
 
 
      }
      button.disabled = true;
   });
   nextButton.style.display = "block"
}
//function score//
function showScore(){
   resetState();
   questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
   nextButton.innerHTML = `<a href= "sec.html" class="link">Play again</a>`;
   nextButton.style.display = "block"
}
function handleNextButton(){
   currentQuestionIndex++;
   if(currentQuestionIndex < questions.length) {
      showQuestion();
   }else{
      showScore();
   }
}

nextButton.addEventListener("click", ()=>{
   if(currentQuestionIndex < questions.length) {
      handleNextButton();
   }else{
      startQuiz();
   }

});

startQuiz();