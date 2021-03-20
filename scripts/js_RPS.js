function rpsGame(yourChoice) {
   console.log(yourChoice);
    var humanChoice, compChoice;
    humanChoice = yourChoice.id;
    compChoice = numberToChoice(randToRpsInt());
    console.log('computer Choice:', compChoice)
    result = decideWinner(humanChoice, compChoice)
    console.log(result)
    message = finalMessage(result);//{'message':'YOU WON' 'color': 'Green'}
    console.log(message)
    rspFrontEnd(yourChoice.id, compChoice, message,)//
}
//the computer choose randomly
 function randToRpsInt() {
     return Math.floor(Math.random() * 3);
 }
//function that select the number
 function numberToChoice(number) {
     return ['rock1', 'paper1', 'scissors1'][number];
 }
 
//decide the winner by using object
 function decideWinner(yourChoice, computerChoice) {
    var rpsDataBase = {
      'rock1': {'scissors1': 1, 'rock1': 0.5, 'paper1': 0},
      'paper1': {'rock1': 1, 'paper1': 0.5, 'scissors1': 0},
      'scissors1': {'paper1': 1, 'scissors1': 0.5, 'rock1': 0}
    };
    var yourScore = rpsDataBase[yourChoice][computerChoice];  
    var computerScore = rpsDataBase[computerChoice][yourChoice];
    return [yourScore, computerScore]; 
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message':'You Lost!', 'color': 'red'};
    }   else if (yourScore === 0.5) {
        return {'message': 'You Tied!', 'color': 'yellow'}
    }   else {
        return {'message': 'You Win', 'color': 'green'}
    }
}
    


//storage of the images
function rspFrontEnd(humanImageChoice, compImageChoice, finalMessage) {
    var imagesDataBase = {
        'rock1': document.getElementById('rock1').src,
        'paper1': document.getElementById('paper1').src,
        'scissors1': document.getElementById('scissors1').src
    }
    //removing the images when the user clicks. 
   document.getElementById('rock1').remove();
   document.getElementById('paper1').remove();
   document.getElementById('scissors1').remove();
   
   var humanDiv = document.createElement('div');
   var compDiv = document.createElement('div');
   var messageDiv = document.createElement('div');
   
   /*after removing the images i want it to bring back only the images that the
   user and computer has choose and also display the outcome*/
   humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px blue'>"
   messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding:30px; '>" + finalMessage['message'] + "</h1>" 
   compDiv.innerHTML = "<img src='" + imagesDataBase[compImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px red'>"
   document.getElementById('flex-box-rps-div').appendChild(humanDiv);
   document.getElementById('flex-box-rps-div').appendChild(compDiv);
   document.getElementById('flex-box-rps-div').appendChild(messageDiv);
}