// Date: July 3, 2023
// CodeWars: Get the Middle Character (7 kyu challenge)
// Description: You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


function getMiddle(s){
  //Code goes here!
  
  var length = s.length;
  // The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
  var middleIndex = Math.floor(length / 2);
  
  if(length % 2 === 0){
    // Even length, return middle 2 characters
    return s.substring(middleIndex - 1, middleIndex + 1);
  } else{
    // The charAt() method returns the character at a specified index (position) in a string.
    return s.charAt(middleIndex);
  }
  
}

getMiddle("middle");


// ----- Best Practices ----- //

// function getMiddle(s)
// {
//   let middle = Math.floor(s.length/2);
  
//   return s.length % 2 === 0
//         ? s.slice(middle-1, middle+1)
//         : s.slice(middle, middle+1);
  
// }

// ----- Best Practices ----- //