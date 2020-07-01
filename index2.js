let whatDidYouChoice = 'rock';
let computer = Math.floor(Math.random() * 3);
let answer = '';

function choiceOneOfThree(){
switch (computer){
  case 0:
    answer = 'Rock';
    break;
  case 1:
    answer = 'Paper.';
    break;
  case 2:
    answer = ' Scissors';
    break;
}
}
function whatDidYouChoices(){
if(whatDidYouChoice === 'rock') {
    if (computer === 'paper') {
        console.log('The computer won!')
    } else{
     console.log('You Won') 
    }
  }

  if (whatDidYouChoice === 'paper') {
    if (computer === 'scissors') {
      console.log('The computer won!')
    } else {
      console.log('You Won');
    }
  }
  if (whatDidYouChoice === 'scissors') {
    if (computer === 'rock') {
        console.log('The computer won!')
    } else {
        console.log('You Won')
    }
  }
}
function rockerPaperScissorsGame(){
  console.log('whatDidYouChoice: ' + whatDidYouChoice);
  console.log('computer choice:' + computer);
 console.log(whatDidYouChoices(whatDidYouChoice,computer));
}
rockerPaperScissorsGame();