let button = document.getElementById('button');
let resetButton = document.getElementById('resetGame');
document.getElementById('lowHigh').innerHTML = `Try Guess 🤔`
let counter = 0
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
            document.getElementById('lowHigh').innerHTML = 'You guess is Correct 🥳'
            counter = 0;
            score.textContent = counter;
            setTimeout(() => {
                    document.getElementById('input').value = '';
                    document.getElementById('guessNumberAre').innerHTML = `Guessed number are: 0`;
                    secretNumber = Math.trunc(Math.random() * 15) + 1
                    console.log(secretNumber);
                    document.getElementById('lowHigh').innerHTML = `Try Guess 🤔`
            }, 1000);
// input grater to secret number
    }else if (parseInt(input) > secretNumber){
        document.getElementById('lowHigh').innerHTML ='You guess is too High 👆';
        counter++;
            score.textContent = counter;
// Input lower to secret number
    }else if (parseInt(input) < secretNumber){
        document.getElementById('lowHigh').innerHTML ='You guess is too Low 👇'
        counter++;
        score.textContent = counter;
    }
})

