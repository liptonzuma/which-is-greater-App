let name = document.querySelector('.name');
let begin = document.querySelector('.begin');
let game = document.querySelector('.game')
let optOne = document.querySelector(' .option-one');
let optTwo = document.querySelector(' .option-two');
let playerName = document.querySelector('.player-name');
let score = document.querySelector('.score');
let form = document.querySelector('.form');
let comment = document.querySelector('.comment');
let arr = ['Excellent', 'Awesome', 'give me more', 'Geek', 'Show me what you can do', 'full steam ahead']
let arrRandom = () => arr[Math.floor(Math.random() * arr.length)];

const start = () => {
    event.preventDefault();
    if (name.value !== "" && name.value.length > 3) {
        form.classList.add('move');
        game.classList.add('show');
        playerName.textContent = name.value += ': ';
    } else {
        alert('please enter a name')
    }

    name.value = ""

}
begin.addEventListener('click', start);

/*-------Generate random number for buttons--------- */
let num1;
let num2;

function randomNumbers() {
    num1 = Math.floor(Math.random() * 999);
    num2 = Math.floor(Math.random() * 999)
    if (num1 === num2) {
        num2 = Math.floor(Math.random() * 872)
    } else {
        optOne.innerHTML = num1;
        optTwo.innerHTML = num2;

    }

}
/*--------------change the textContent of the options buttons */
console.log(randomNumbers())

function Check(e) {
    let ans1 = num1
    let ans2 = num2
    if (parseInt(e.target.innerHTML) === ans1 && ans1 > ans2) {

        randomNumbers();
        score.innerHTML++;
        comment.innerHTML = arrRandom();
    } else if (parseInt(e.target.innerHTML) === ans1 && ans1 < ans2) {

        alert('You failed');
        score.innerHTML = 0
        comment.innerHTML = ' '
    } else if (parseInt(e.target.innerHTML) === ans2 && ans2 > ans1) {

        randomNumbers();
        score.innerHTML++;
        comment.innerHTML = arrRandom();
    } else if (parseInt(e.target.innerHTML) === ans2 && ans2 < ans1) {
        alert('You failed');
        score.innerHTML = 0;
        comment.innerHTML = ' '
    }

}
game.addEventListener('click', Check);