const question = document.querySelector('#question')
const answer1 = document.querySelector('p1')
const answer2 = document.querySelector('p2')
const correctAnswer = document.querySelector('#correct-answer')
const incorrectAnswer1 = document.querySelector('#incorrect-answer1')
const incorrectAnswer2 = document.querySelector('#incorrect-answer2')
const result = document.querySelector('#result')
const resetBtn = document.querySelector('#reset')
let playerScore = document.querySelector('#score')
let scoreCount = 0;
const answerBoxes = document.querySelectorAll('.answer-boxes')
const nextQuestion = document.querySelector('#next-question')

playerScore.innerText = `PLAYER SCORE: ${scoreCount} / 3`



data = [
    question1 = {
        question: "What was the real name of Neo in the movie The Matrix?", 
        incorrect1: 'Mr. Smith',
        incorrect2: 'Captain Kangaroo',
        correctanswer: "Mr. Anderson"
    },

    question2 = {
        question: "What was the name of the little workers in Charlie and the Chocolate Factory?", 
        incorrect1: 'Minions',
        incorrect2: 'Smurfs',
        correctanswer: "Oompa Loompas"
    },

    question3 = {
        question: "What was Jordan Belfort's favorite drug in the Wolf of Wall Street?", 
        incorrect1: 'Cocaine',
        incorrect2: 'MDMA',
        correctanswer: "Quaaludes"
    },

    question4 = {
        question: 'To what year was Marty McFly sent in the first "Back to the Future" movie?', 
        incorrect1: '1992',
        incorrect2: '1989',
        correctanswer: "1985"
    },

]

let counter = 0


question.innerText = data[0].question
answer1.innerText = data[0].incorrect1
answer2.innerText = data[0].incorrect2
correctAnswer.innerText = data[0].correctanswer


function correct() {
    correctAnswer.style.backgroundColor = 'green'
    result.innerText = 'Correct answer!'
    scoreCount++
    playerScore.innerText = `PLAYER SCORE: ${scoreCount} / 3`
    incorrectAnswer1.removeEventListener('click', incorrect1);
    incorrectAnswer2.removeEventListener('click', incorrect2);
    ;
}

function incorrect1() {
    incorrectAnswer1.style.backgroundColor = 'red'
    result.innerText = 'Incorrect answer!'
    incorrectAnswer2.removeEventListener('click', incorrect2);
    correctAnswer.removeEventListener('click', correct);
}

function incorrect2() {
    incorrectAnswer2.style.backgroundColor = 'red'
    result.innerText = 'Incorrect answer!'
    correctAnswer.removeEventListener('click', correct);
    incorrectAnswer1.removeEventListener('click', incorrect1);
}


incorrectAnswer1.addEventListener('click', incorrect1);
incorrectAnswer2.addEventListener('click', incorrect2);
correctAnswer.addEventListener('click', correct);






nextQuestion.addEventListener('click', () => {
    counter++
    question.innerText = data[counter].question
    answer1.innerText = data[counter].incorrect1
    answer2.innerText = data[counter].incorrect2
    correctAnswer.innerText = data[counter].correctanswer

    for (let i = 0; i < answerBoxes.length; i++) {
        answerBoxes[i] = answerBoxes[i].style.backgroundColor = 'white'

        incorrectAnswer1.addEventListener('click', incorrect1);
        incorrectAnswer2.addEventListener('click', incorrect2);
        correctAnswer.addEventListener('click', correct);

        result.innerText = ''
    }

})

resetBtn.addEventListener('click', () => {
    window.location.reload();
})




