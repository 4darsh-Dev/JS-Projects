// Snake Water Gun Game;
// Author --> Adarsh Maurya 

// Abbreviations 
// s = 'snake';
// w = 'water';
// g = 'gun';

let playerOpts = ['s', 'w', 'g'];


// configuration for taking user input in Node js
let prompt = require("prompt-sync")({sign : true});


let welcomeMsg = "********Welcome to Snake Water Gun Game*******";
console.log(welcomeMsg);
console.log("Snake = s, Water = w, Gun = g, Quit = q ");

let userScore = 0;
let compScore = 0;

do{
    // Choses random index for respective array elements 
    let rand = Math.random();
    rand = Math.floor(rand * 3);


    let randChoice = playerOpts[rand];

    var userChoice = prompt("Your choice : ");

    if( userChoice == 's' && randChoice == 's'){
        console.log("match drawn! ");
    }
    else if( userChoice == 's' && randChoice == 'w'){
        console.log("You Won! ");
        userScore ++;
    }
    else if( userChoice == 's' && randChoice == 'g'){
        console.log("You Lost! ");
        compScore ++;
    }
    else if( userChoice == 'w' && randChoice == 's'){
        console.log("You Lost! ");
        compScore ++;
    }
    else if( userChoice == 'w' && randChoice == 'w'){
        console.log("Match Drawn! ");
    }
    else if( userChoice == 'w' && randChoice == 'g'){
        console.log("You won! ");
        userScore ++;
    }
    else if( userChoice == 'g' && randChoice == 's'){
        console.log("You Won! ");
        userScore ++;
    }
    else if( userChoice == 'g' && randChoice == 'w'){
        console.log("You Lost! ");
        compScore ++;
    }
    else if( userChoice == 'g' && randChoice == 'g'){
        console.log("Match Drawn ! ");
    }
    
    else{
        console.log("Invalid Input ! Try again.");
    }
    

}while(userChoice != 'q');

console.log("\nGame Over!");
console.log(`Your Score - ${userScore} Comp Score - ${compScore} `);

// Checking the overall winner of the Game
if(userScore < compScore){
    console.log('You Lost');
}
else if(userScore > compScore){
    console.log('You Won ');
}
else{
    console.log('Match Drawn ');
}

