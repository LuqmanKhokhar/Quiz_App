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


const questionElement = document.getElementsByClassName(".question");
const answerElement = document.getElementsByClassName(".answers");
const nextbtn = document.getElementsByClassName(".next-btn");