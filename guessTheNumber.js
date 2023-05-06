// Author --> Adarsh Maurya 
welcomeMsg = "*******Welcome To Guess The Number Game*******"
console.log(welcomeMsg);

// Generate random number; 
let rand = Math.random();
rand *= 100;
rand = Math.floor(rand);

// configuring the prompt for taking user input
const prompt = require("prompt-sync")({sign : true});

// check the condition for game
let i = 0;
do{ 
    
    let input = prompt("Number: ");
    input = Number.parseInt(input);

    if (input === rand ){
        console.log(`You Won! Number : ${rand}`);
        console.log(`Steps : ${i}`);
    }
    else if(input < rand){
        console.log("Greater");
    }
    else if(input > rand){
        console.log("Lesser");
    }
    i++;

}while(i< 100);
