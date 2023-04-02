// SWAPCASE PROGRAM ex Adarsh --> aDARSH
// AUTHOR : ADARSH MAURYA 

// small letter list
let Salpha = [ "a","b","c","d","e", "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" ," y" , "z" ]

// CAPITAL LETTER LIST
let Lalpha = [];

for(letter of Salpha){
    text = letter.toUpperCase();
    Lalpha.push(text);

}

// Sample Input
let prompt = require('prompt-sync')();

let myStr = prompt("Enter your word : ")

// Splits the letters of word and stores them in the list 
let myArr = myStr.split("");

// function that changes the case of letter
const swapy = function (myArr){
    let newArr = [];
    
    for(let letter of myArr){

        // Find the list of letter belong to 
        if(Salpha.includes(letter)){
            let ind = Salpha.indexOf(letter);
            
            let word = Lalpha[ind];
            newArr.push(word);
    
        }
        else if (Lalpha.includes(letter)){
            let ind = Lalpha.indexOf(letter);
            let word = Salpha[ind];
            newArr.push(word);
    
        }
        else{
            console.log("Done! ")
        }
    
    }

    return newArr
    
    
}

// Function Call
let output = swapy(myArr);


// Joins the letters into word 
let answer = output.join("")
console.log(` ANSWER : ${answer}`);
