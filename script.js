let description = document.getElementById("readme");
let randomnumber = document.getElementById("number");
let textbox = document.getElementById("boxanswer");
const button = document.getElementById("playbtn");
let playing = true;
let geuss;
const max-guess = 10;
let random;

button.onclick = function(){
  if(playing == true){
    random = Math.floor(Math.random() * 100) + 1;
    boxanswer.style.display = "block";
    playbtn.textContent = "Guess";
    readme.textContent = "Guess a number from 1 to 100";
    playbtn.textContent = "Guess";
    guess = 0;

    playing = false;
  }
  else{
    const answer = Number(textbox.value);
    if(isNan(answer){
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
      randomnummber.textContent = random;
      textbox.style.diplay = "none";
      button.textContent = "Play Again";

      playing = true;
    }
    if(guess === maxguess){
      desciption.textContent = "You've reach the maximum of 10 guesses! The number is";
      randomnumber.textContent = random;
      button.textContent = "Play Again";
      boxanswer.style.display = "none";

      playing = true;
}
