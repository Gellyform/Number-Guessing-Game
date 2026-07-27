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
  }
}
