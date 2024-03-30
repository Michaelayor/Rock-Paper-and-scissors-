"use strict";

// const rpsGame = function (yourChoice) {
//   console.log(yourChoice);
//   let humanChoice, botChoice;
//   humanChoice = yourChoice.id;

//   botChoice = numToChoice(randToRpsInt());
//   console.log("computer choice :", botChoice);

//   let result;
//   result = decideWinner(humanChoice, botChoice);
//   console.log(result);

//   let message;
//   message = finalMessage(result);
//   console.log(message);

//   rpsFrontend(yourChoice.id, botChoice, message);
// };

// const randToRpsInt = function () {
//   return Math.trunc(Math.random() * 3);
// };

// const numToChoice = function (number) {
//   return ["rock", "paper", "scissors"][number];
// };

// const decideWinner = function (yourChoice, computerChoice) {
//   let rpsDatabase = {
//     rock: { scissors: 1, rock: 0.5, paper: 0 },
//     paper: { rock: 1, paper: 0.5, scissors: 0 },
//     scissors: { paper: 1, scissor: 0.5, rock: 0 }
//   };

//   let yourScore = rpsDatabase[yourChoice][computerChoice];
//   let computerScore = rpsDatabase[computerChoice][yourChoice];

//   return [yourScore, computerScore];
// };

// const finalMessage = function ([yourScore, computerScore]) {
//   if (yourScore === 0) {
//     return { message: "You Lost!🚫", color: "red" };
//   } else if (yourScore === 0.5) {
//     return { message: "You Tied!🤞", color: "yellow" };
//   } else {
//     return { message: "You Won👏🎉", color: "green" };
//   }
// };

// const rpsFrontend = function (humanImageChoice, botImageChoice, finalMessage) {
//   let images = {
//     rock: document.querySelector("#rock").src,
//     paper: document.querySelector("#paper").src,
//     scissors: document.querySelector("#scissors").src,
//   };

//   document.querySelector(".rock1").classList.add("hidden");
//   document.querySelector(".paper1").classList.add("hidden");
//   document.querySelector(".scissors1").classList.add("hidden");

//   let humanDiv = document.createElement("div");
//   let botDiv = document.createElement("div");
//   let messageDiv = document.createElement("div");

//   humanDiv.innerHTML =
//     "<img src='" +
//     images[humanImageChoice] +
//     "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
//   messageDiv.innerHTML =
//     "<h1 style='color: " +
//     finalMessage["color"] +
//     "; font-size:2rem padding: 30px font-family:Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif'>" + finalMessage['message'] + "</h1>"
//   botDiv.innerHTML =
//     "<img src='" +
//     images[botImageChoice] +
//     "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";

//   document.querySelector("#flexbox-rps-div").append(humanDiv);
//   document.querySelector("#flexbox-rps-div").append(messageDiv)
//   document.querySelector("#flexbox-rps-div").append(botDiv);
// };

const rpsGame = function (yourChoice) {
  let humanChoice, botChoice;

  humanChoice = yourChoice.id;
  console.log('human ',humanChoice);

  botChoice = numToChoice(rand());
  console.log(botChoice);

  let result;
  result = decideWinner(humanChoice, botChoice);
  console.log(result);
  
  let message;
  message = finalMessage(result);
  console.log(message);

  rpsFrontend(yourChoice.id, botChoice, message);
};


const rand = function(){
  return Math.trunc(Math.random() * 3);
}

const numToChoice = function(number){
  return ['rock', 'paper', 'scissors'][number];
}

const decideWinner = function(humanChoice, computerChoice){
  const rpsDatabase = {
    'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
    'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
    'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
  }

  let humanScore = rpsDatabase[humanChoice][computerChoice];
  let computerScore = rpsDatabase[computerChoice][humanChoice];

  return [humanScore, computerScore]
}

const finalMessage = function([humanScore, computerScore]){
  if(humanScore === 0){
    return {'message': 'You Lost🚫', 'color': 'red'}
  } else if(humanScore === 0.5){
    return {'message': 'You Tied🤞', 'color': 'yellow'}
  }else{
    return {'message': 'You Won🎉', 'color': 'green'}
  }
}

const rpsFrontend = function(humanImageChoice, botImageChoice, finalMessage){
  let images = {
    'rock': document.querySelector('#rock').src,
    'paper': document.querySelector('#paper').src,
    'scissors': document.querySelector('#scissors').src
  }

  document.querySelector('#rock').classList.add('hidden');
  document.querySelector('#paper').classList.add('hidden');
  document.querySelector('#scissors').classList.add('hidden');

  let humanDiv = document.createElement('div');
  let messageDiv = document.createElement('div');
  let botDiv = document.createElement('div');

    humanDiv.innerHTML =
    "<img src='" +
    images[humanImageChoice] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
  messageDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage["color"] +
    "; font-size:2rem padding: 30px font-family:Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif'>" + finalMessage['message'] + "</h1>"
  botDiv.innerHTML =
    "<img src='" +
    images[botImageChoice] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";


    document.querySelector('#flexbox-rps-div').append(humanDiv);
    document.querySelector('#flexbox-rps-div').append(messageDiv);
    document.querySelector('#flexbox-rps-div').append(botDiv);
}