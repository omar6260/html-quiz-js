const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-button')

let shuffledQuestions,currectQuestionIndex;
let quizScore =0;





const questions =[
	{
		question: 'which one of this a JavaScript Framework?'
		answer :[
			{text: 'Python', correct: false},
			{text: 'Django', correct: false},
			{text: 'Python', correct: false},
			{text: 'Python', correct: false},.
		]
	}
]