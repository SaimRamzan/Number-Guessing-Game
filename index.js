let button = document.getElementById('button');
let resetButton = document.getElementById('resetGame');
document.getElementById('lowHigh').innerHTML = `Try Guess 🤔`
counter = 0
let score= document.getElementById('scores');
let secretNumber = Math.trunc(Math.random() * 15) + 1
console.log(secretNumber);

button.addEventListener('click',()=>{
    let input = document.getElementById('input').value
    document.getElementById('guessNumberAre').innerHTML = `Guessed number are: ${input}`;
    if (!input) {
        document.getElementById('lowHigh').innerHTML = 'Input Empty 😡'
    }else if (input == secretNumber){
            document.getElementById('lowHigh').innerHTML = 'You guess is Correct 🥳'
            // resetButton()
            
    }else if (parseInt(input) > secretNumber){
        document.getElementById('lowHigh').innerHTML ='You guess is too High 👆';
        counter++;
            score.textContent = counter;
    }else if (parseInt(input) < secretNumber){
        document.getElementById('lowHigh').innerHTML ='You guess is too Low 👇'
        counter++;
        score.textContent = counter;
    }
})

resetButton.addEventListener('click', ()=>{
    document.getElementById('input').value = '';
    document.getElementById('guessNumberAre').innerHTML = `Guessed number are: 0`;
    secretNumber = Math.trunc(Math.random() * 15) + 1
    console.log(secretNumber);
    document.getElementById('scores').innerHTML = `0`
    document.getElementById('lowHigh').innerHTML = `Try Guess 🤔`

})