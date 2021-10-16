const quizData = [
  {
    question: "What is the scientific name of a butterfly?",
    answers: ["Apis", "Coleoptera", "Formicidae", "Rhopalocera"],
    ans: "ans4",
  },
  {
    question: "How hot is the surface of the sun?",
    answers: ["1,233 K", "5,778 K", "12,130 K", "101,300 K"],
    ans: "ans2",
  },
  {
    question: "Who are the actors in The Internship?",
    answers: [
      "Ben Stiller, Jonah Hill",
      "Courteney Cox, Matt LeBlanc",
      "Kaley Cuoco, Jim Parsons",
      "Vince Vaughn, Owen Wilson",
    ],
    ans: "ans4",
  },
  {
    question: "What is the capital of Spain?",
    answers: ["Berlin", "Buenos Aires", "Madrid", "San Juan"],
    ans: "ans3",
  },
  {
    question:
      "What are the school colors of the University of Texas at Austin?",
    answers: [
      "Black, Red",
      "Blue, Orange",
      "White, Burnt Orange",
      "White, Old gold, Gold",
    ],
    ans: "ans3",
  },
  {
    question: "What is 70 degrees Fahrenheit in Celsius?",
    answers: ["18.8889", "20", "21.1111", "158"],
    ans: "ans3",
  },
  {
    question: "When was Mahatma Gandhi born?",
    answers: [
      "October 2, 1869",
      "December 15, 1872",
      "July 18, 1918",
      "January 15, 1929",
    ],
    ans: "ans1",
  },
  {
    question: "How far is the moon from Earth?",
    answers: [
      "7,918 miles (12,742 km)",
      "86,881 miles (139,822 km)",
      "238,400 miles (384,400 km)",
      "35,980,000 miles (57,910,000 km)",
    ],
    ans: "ans3",
  },
  {
    question: "What is 65 times 52?",
    answers: ["117", "3120", "3380", "3520"],
    ans: "ans3",
  },
  {
    question: "How tall is Mount Everest?",
    answers: [
      "6,683 ft (2,037 m)",
      "7,918 ft (2,413 m)",
      "19,341 ft (5,895 m)",
      "29,029 ft (8,847 m)",
    ],
    ans: "ans4",
  },
  {
    question: "When did The Avengers come out?",
    answers: ["May 2, 2008", "May 4, 2012", "May 3, 2013", "April 4, 2014"],
    ans: "ans2",
  },
  {
    question: "What is 48,879 in hexidecimal?",
    answers: ["0x18C1", "0xBEEF", "0xDEAD", "0x12D591"],
    ans: "ans2",
  },
];

const ques = document.querySelector(".ques");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submitBtn = document.querySelector("#submit");
const inputAns = document.querySelectorAll(".answer");
const scorePlace = document.querySelector('.scorePlace')
let quesCount = 0;
let score = 0;
function loadQuestion() {
  let index = quizData[quesCount];
  ques.innerText = (quesCount+1) + ".  "+index.question;

  option1.innerText = index.answers[0];
  option2.innerText = index.answers[1];
  option3.innerText = index.answers[2];
  option4.innerText = index.answers[3];
}
loadQuestion();

function getCheckedAnswer() {
  var answ;
  inputAns.forEach((currEle) => {
    if (currEle.checked) {
      answ = currEle.id;
    }
  });
  return answ;
}

function deSelectAll(){
  inputAns.forEach((curEle)=>{
    curEle.checked = false
  })
}
submitBtn.addEventListener("click", () => {
  const checkedAnswer = getCheckedAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quizData[quesCount].ans) {
    score++;
  }
  quesCount++
  deSelectAll()
  if(quesCount < quizData.length)
  {
    loadQuestion()
  }
  else{
    scorePlace.innerHTML = `
    <h3> You Scored ${score}/${quizData.length} </h3>
    <button class="btn" onClick="location.reload()">Reload</button>
    `
  }
  console.log(score);
});
