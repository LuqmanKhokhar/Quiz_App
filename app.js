const questions = [
  {
    question: "Which is the largest animal in the world?",
    answer: [
      {  text: "Shark", correct: "false"},
      {  text: "Blue whale", correct: "true"},
      {  text: "Elephant", correct: "false"},
      {  text: "Giraffe", correct: "false"},
    ]
  },

  {
    question: "Which is the smallest country in the world?",
    answer: [
      {  text: "Pakistan", correct: "false"},
      {  text: "India", correct: "false"},
      {  text: "Australia", correct: "false"},
      {  text: "Vatican city", correct: "true"},
    ]
  },

  {
    question: "Which is the largest desert in the world?",
    answer: [
      {  text: "Kalahari", correct: "false"},
      {  text: "Gobi", correct: "false"},
      {  text: "Sahara", correct: "false"},
      {  text: "Antarctica", correct: "true"},
    ]
  },

  {
    question: "Which is the smallest continent in the world?",
    answer: [
      {  text: "Arctica", correct: "false"},
      {  text: "Africa", correct: "false"},
      {  text: "Asia", correct: "false"},
      {  text: "Australia", correct: "true"},
    ]
  }
];



const questionElement = document.querySelector(".question");
const answerButton = document.querySelector(".answers");
const nextbtn = document.querySelector(".next-btn");


let currQuesIdx = 0;
let score = 0;

function startQuiz() {
  currQuesIdx = 0;
  score = 0;
  nextbtn.innerHTML = "Next";
  showQues();

} 


function showQues() {

  resetState();
  let currQues = questions[currQuesIdx];
  let quesNo = currQuesIdx + 1;
  questionElement.innerHTML = quesNo + ". " + currQues.question; 

  currQues.answer.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerHTML = answer.text;
    btn.classList.add("btn");
    answerButton.appendChild(btn);  
    if(answer.correct){
      btn.dataset.correct = answer.correct;
    }
    btn.addEventListener("click", selectAnswer);
  });
};

const selectAnswer =(e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach(btn => {
    if(btn.dataset.correct === "true"){
      btn.classList.add("correct");
    }
    btn.disabled = true;
  }) ;
  nextbtn.style.display = "block";
};

const resetState = () => {
  nextbtn.style.display = "none";
  while(answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
};


nextbtn.addEventListener("click", ()=> {
  if(currQuesIdx < questions.length){
    handleNextBtn();
  }else{
    startQuiz();
  }
})


const handleNextBtn = () => {
  currQuesIdx++;
  if(currQuesIdx < questions.length){
    showQues();
  }else{
    showScore();
  }
};

const showScore = () => {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`
    nextbtn.innerHTML = "Play Again";
    nextbtn.style.display = "block";
}

startQuiz();