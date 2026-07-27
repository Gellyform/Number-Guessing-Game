let description = document.getElementById("readme");
let randomnumber = document.getElementById("number");
let textbox = document.getElementById("boxanswer");
const button = document.getElementById("playbtn");
let playing = true;
let guess;
const maxGuess = 10;
let random;

button.onclick = function(){
  if(playing == true){
    random = Math.floor(Math.random() * 100) + 1;
    textbox.style.display = "block";
    button.textContent = "Guess";
    description.textContent = "Guess a number from 1 to 100";
    button.textContent = "Guess";
    guess = 0;

    playing = false;
  }
  else{
    const answer = Number(textbox.value);
    if(isNan(answer)){
      description.textContent = "Please only enter a number";
    }
    else if(answer > 100 || answer < 1){
      description.textContent = "Please enter a number from 1 to 100 only";
    }
    else if(answer < random ){
      guess++;
      description.textContent = "Too Low!";
  }
    else if(answer > random ){
      guess++;
      description.textContent = "Too High!";
  }
    else {
      description.textContent = "🎊Congratulation you guess the correct number!!🎊";
      randomnumber.textContent = random;
      textbox.style.diplay = "none";
      button.textContent = "Play Again";

      playing = true;
    }
    if(guess === maxGuess){
      desciption.textContent = "You've reach the maximum of 10 guesses! The number is";
      randomnumber.textContent = random;
      button.textContent = "Play Again";
      textbox.style.display = "none";

      playing = true;
}
