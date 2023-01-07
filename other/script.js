/*
1. declare a array variable to hold all the r p or s choices as strings
2. use prompt to prompt user for their input and show a message " choose r p or s"
3. computer chooses a random r p or s
    - use Math.random to generate a random number between 0 and the length of the array
4. we need to determine if the user wins, loses, or ties
    - declare variables for tracking wins, losses, and ties
    - if the user picks r and computer s the user wins
    - if user pick r and computer p then user loses
    - ****
    - use if else statements to evaluate all these conditions
5. update the score variables (wins, losses, and ties)
    - if user wins, then add one the wins var
    - if user loses, add one to losses var
    - is user ties, then add one to ties
6. prompt user to play again (repeat)
*/

//Defining options
let play = ["rock", "paper", "scissors"];
//console.log(play); //1st log

//Outcome counter
let wins = 0;
let losses = 0;
let draws = 0;

let introduction = ("Get ready – five rounds of rock, paper, and scissors are about to start! (User's consent not required.)");
alert(introduction)

// for (let i = 0; i < 5; i++) { switching so that the page doesn't limits to 5 but the loop will break with incorrect answer
let i = 0;
while (i < 5){

//Play Prompt
let hAnswer = prompt("How will it be, eh? You ought to choose!");
hAnswer = hAnswer.toLowerCase();

if (
    (hAnswer !== "rock" && hAnswer !== "paper" && hAnswer !== "scissors")
) {
    alert("Dude play either rock, paper, or scissors. Reload the page to start again.");
    break; 
};

//log the computer's answer
 let cAnswer = play[Math.floor(Math.random() * play.length)];
 //var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

 if (hAnswer == "rock" || hAnswer == "paper" || hAnswer == "scissors") {
    alert("Computer has played " + cAnswer + ".");
 }

if (hAnswer === cAnswer) {
    draws++
    alert(`It's a draw. We're keeping tabs... (${draws})`)
} 

else if (
    (hAnswer == "rock" && cAnswer == "scissors") ||
    (hAnswer == "paper" && cAnswer == "rock") ||
    (hAnswer == "scissors" && cAnswer == "paper")
) { wins++
    alert(`You have won ${wins} times, luck lol.`)
}

else {
    losses++
    alert(`You have lost ${losses} times ahaha!`)
} i++
}
alert(`You have won ${wins} times, draw ${draws} times and lost ${losses} times.`)

