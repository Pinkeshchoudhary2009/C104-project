// generation of random value
var y=math.floor(math.random() *10+1)
// count of attempts
var x= document.getElementById("guessField").Value;
// until hit
  
// function for the number sent by the user

if(x== y){
    alert("CONGRATULATION!!!"+player1_name+"YOU GUESSED THE RIGHT ANSWER");
}

else if(x>Y){
    guess ++;
alert("OPPS SORRY!! TRY A SMALLER NUMBER");
}
else{
    guess ++;
    alert("OPPS SORRY!! TRY A GREATER NUMBER");
}

function playAgain(){
    y=math.floor(math.random()*10+1);
}