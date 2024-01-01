let button = document.getElementById('button');
let resetButton = document.getElementById('resetGame');
document.getElementById('lowHigh').innerHTML = `Try Guess 🤔`
let counter = 3
let score= document.getElementById('scores');

// Random Number Gernator
let secretNumber = Math.trunc(Math.random() * 15) + 1
console.log(secretNumber);

// game button work
button.addEventListener('click',()=>{
    let input = document.getElementById('input').value
    document.getElementById('guessNumberAre').innerHTML = `Guessed number are: ${input}`;

// input in Empty
    if (!input) {
        document.getElementById('lowHigh').innerHTML = 'Input Empty 😡'

// correct Guess & reset
    }else if (input == secretNumber){
            document.getElementById('lowHigh').innerHTML = 'Congratulations 🥳'
            counter = 3;
            score.textContent = counter;
            reset()

// input grater to secret number
    }else if (parseInt(input) > secretNumber){
        document.getElementById('lowHigh').innerHTML ='You guess is too High 👆';
        counter--; 
           let count = score.textContent = counter;
           if (count === 0) {
            document.getElementById('lowHigh').innerHTML ='Game Over 🤙'
            reset()
           }
// Input lower to secret number
    }else if (parseInt(input) < secretNumber){
        document.getElementById('lowHigh').innerHTML ='You guess is too Low 👇'
        counter--; 
           let count = score.textContent = counter;
           if (count === 0) {
            document.getElementById('lowHigh').innerHTML ='Game Over 🤙'
            reset()
           }
}})
let reset  = ()=>{ setTimeout(() => {
    document.getElementById('input').value = '';
    document.getElementById('guessNumberAre').innerHTML = `Guessed number are: 0`;
    secretNumber = Math.trunc(Math.random() * 15) + 1
    counter = 3;
    document.getElementById('scores').innerHTML = 3;

    console.log(secretNumber);
    document.getElementById('lowHigh').innerHTML = `Try Guess 🤔`
}, 2000)};
