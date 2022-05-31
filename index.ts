const gameBoard = <HTMLCanvasElement>document.querySelector('#gameBoard')
const ctx = gameBoard.getContext('2d')
const scoreText = document.querySelector('#scoreText')
const resetBtn = document.querySelector('#resetBtn')
const gameWidth = gameBoard.width
const gameHeight = gameBoard.height
const boardBackground = 'white'
const snakeColor = 'lightgreen'
const snakeBorder = 'black'
const foodColor = 'red'
const unitSize = 25
let running = false
let xVelocity = unitSize
let yVelocity = 0
let foodX: number;
let foodY: number;
let score = 0
let snake = [
    {x: unitSize * 4, y: 0},
    {x: unitSize * 3, y: 0},
    {x: unitSize * 2, y: 0},
    {x: unitSize, y: 0},
    {x: 0, y: 0}
]

window.addEventListener('keydown', changeDirection)
resetBtn.addEventListener('click', resetGame)
gameStart()
createFood()

function gameStart() {
}

function nextTick() {
}

function clearBoard() {
}

function createFood() {
    function randomFood(min, max) {
        return Math.round((Math.random() * (max - min)) / unitSize)
    }

    foodX = randomFood(0, gameWidth - unitSize)
    console.log(foodX)
}

function drawFood() {
}

function moveSnake() {
}

function changeDirection() {
}

function checkGameOver() {
}

function displayGameOver() {
}

function resetGame() {
}

console.log(111)