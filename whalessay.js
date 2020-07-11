let whatWalesSay = 'Whales say a lot of things that humans do not understand';

let vowels = ['a', 'e', 'i' , 'o', 'u'];

let emptyArr = [];
// this goes thru the first string
for (let i = 0; i < whatWalesSay.length; i++) {
    // this goes thru the array of vowles
    for(let j = 0; j < vowels.length; j++) {
   
       if(whatWalesSay[i] === vowels[j]) {
         if(whatWalesSay[i] === "e") {
            //  where ever their is a e is will push another 3
            emptyArr.push('ee');
         } else if(whatWalesSay[i] === "u"){
            //  where their is a u it will push another you
            emptyArr.push('uu');
         } else {
            //  will push it onto an empty array of all the vowels
            // from the string what WalesSay
           emptyArr.push(whatWalesSay[i]);
         }
       }
     }
   }
//  it will join them together without any space and make them uppercase
   console.log(emptyArr.join('').toUpperCase());