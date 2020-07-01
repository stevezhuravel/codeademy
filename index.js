let userName = ' This is magic 8 ball game';

if(userName == ' This is magic 8 ball game') {
 console.log(' This is magic 8 ball game')    
} else{
    console.log('Hello!');
}
let AskMagic8BallAQuestion = 'Would i go to sleep tonight';
let choiceNumberRandomly = Math.floor(Math.random() * 11);
let magic8Ball = '';

function callMagic8ball(){
switch (choiceNumberRandomly){
  case 0:
    magic8Ball = 'It is certain';
    break;
  case 1:
    magic8Ball = 'Concentrate and ask again.';
    break;
  case 2:
    magic8Ball = ' Most likely';
    break;
  case 3:
    magic8Ball = 'Cannot predict now';
    break;
  case 4:
    magic8Ball = ' As I see it, yes.';
    break;
  case 5:
    magic8Ball = ' Signs point to yes.';
    break;
  case 6:
    magic8Ball = ' You may rely on it.';
    break;
  case 7:
    magic8Ball = ' Without a doubt.';
    break;
    case 8:
    magic8Ball = ' Better not tell you now. ';
    break;
    case 9:
        magic8Ball = 'Without a doubt.';
    break;
        magic8Ball = "Yes";
     break;
     case 11:
        magic8Ball = 'no'; 
        break;

}
}
function answerWith(){
console.log('Ask Magic 8 Ball A Question : ' + AskMagic8BallAQuestion); 
console.log('Magic 8 Ball reply with: ' + choiceNumberRandomly);
}

answerWith(choiceNumberRandomly);