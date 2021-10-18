const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-button')

let shuffledQuestions,currectQuestionIndex;
let quizScore =0;




startButton.addEventListener('click',startGame)

nextButton.addEventListener('click',() =>{
	currectQuestionIndex++
	setnextQuestion()
})


function startGame(){
	startButton.classList.add('hide')
	shuffledQuestions=question.sort(() =>Math.random() -0.5)
	currectQuestionIndex=0;
	questionContainerElement.classList.remove('hide')
	setnextQuestion()
	quizScore=0
}


function setnextQuestion(){
	restState();
	showQuestion(shuffledQuestions(currectQuestionIndex))
}

function showQuestion(question) {
	questionElement.innerText= question.question;
	question.answers.forEach((answer) =>{
		const button =document.createElement('button')
		button.innerText=answer.text;
		button.classList.add('btn')
		if(answer.correct) {
			button.dataset.correct =answer.correct
		}
		button.addEventListener('click',selectAnswer)
		answerButtonElement.appendChild(button)
	})
}


function restState(){
	clearStatusClass(document.body)
	nextButton.classList.add('hide')
	while(answerButtonElement.firstChild) {
		answerButtonElement.removeChild(answerButtonElement.firstChild)
	}
}


function selectAnswer(e){
	const slectedButton=e.target
	const correct =slectedButton.dataset.correct

	setStatusClass(document.body.correct)
	Array.from(answerButtonElement.children).forEach((button)=>{
		setStatusClass(button,button.dataset.correct)
	})
	if(shuffledQuestions.length > currectQuestionIndex +1){
		nextButton.classList.remove("hide")
	}else {
		startButton.innerText ="restart"
		startButton.classList.remove("hide")
	}
}


function setStatusClass(element,correct){
	clearStatusClass(element)
	if(correct){
		element.classList.add("correct")
	}else {
		element.classList.add("wrong")
	}
	if(selectedButton.dataset = correct) {
		quizScore++
	}
	document.getElementById('right-answers').innerText=quizScore
}




function clearStatusClass(element){
	element.classList.remove('correct')
	element.classList.remove('wrong')
}
const questions =[
	{
		question: 'which one of this a JavaScript Framework?',
		answers :[
			{text: 'Python', correct: false},
			{text: 'Django', correct: false},
			{text: 'React', correct: true},
			{text: 'Eclispse', correct: false},
		],
	},
	{
		question: 'which one of this a Python Framework?',
		answer :[
			{text: 'Python', correct: false},
			{text: 'Django', correct: true},
			{text: 'React', correct: false},
			{text: 'Eclispse', correct: false},
		],
	},
	{
		question: 'which one of this a Php Framework?',
		answer :[
			{text: 'Python', correct: false},
			{text: 'Django', correct: false},
			{text: 'React', correct: false},
			{text: 'Laravel', correct: true},
		],
	},
]