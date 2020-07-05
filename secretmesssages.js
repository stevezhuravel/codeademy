const message = ['College is good', 'learning javascript' , 'codeacademy is helpfuly', 
'secret message game is fun', "fun in the summer"];

function popLastElement(arr){
    arr.pop()
    // checking to see if you can pop from array more than once
    arr.pop()

}
// pass an array to the method
popLastElement(message);
popLastElement(message);
//  log it to the screen to see that it popped the last element 
console.log(message)

function pushElementLast(arr1){
    arr1.push('this summer is hot');
}


//  pass an array to the method
pushElementLast(message);
//  log it to the screen to see that it push an element to the last position 
console.log(message)

// print how many element their are in the array
console.log(message.length);

// slice start from the position you tell it to and end position is minus one         
console.log(message.slice(1,3));
console.log(message.slice(2,4));

    // removes the first element and print the array
      const moveElement = message.shift();
console.log(message + moveElement);

// unshift you do not have to set it to a variable
// you just call the array name in shift you have to set it to a variale 
// adds it to the last elements
// it shift everything by one
message.unshift('popcorn');
console.log(message);