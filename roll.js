var Result = document.getElementById("result");
var p1Dice = document.getElementById("p1-dice");
var p2Dice = document.getElementById("p2-dice");

function rollDice() {
  var playerOneDice = Math.floor(Math.random() * 6) + 1;
  var playerTwoDice = Math.floor(Math.random() * 6) + 1;
console.log(playerOneDice)
console.log(playerTwoDice)

  if (playerOneDice==2){
    p1Dice.src = "2.JPG";}
  if (playerOneDice==3){
    p1Dice.src = "3.jpg";}
  if (playerOneDice==4){
    p1Dice.src = "4.jpg";}
  if (playerOneDice==5){
    p1Dice.src = "5.jpg";}
  if (playerOneDice==6){
    p1Dice.src = "6.jpg";}
  if (playerTwoDice==2){
    p2Dice.src = "2.jpg";}
  if (playerTwoDice==3){
    p2Dice.src = "3.jpg";}
  if (playerTwoDice==4){
    p2Dice.src = "4.jpg";}
  if (playerTwoDice==5){
    p2Dice.src = "5.jpg";}
  if (playerTwoDice==6){
    p2Dice.src = "6.jpg";}

  if (playerOneDice > playerTwoDice) {
    Result.innerHTML = "Player One won!";
  } else if (playerTwoDice > playerOneDice) {
    Result.innerHTML = "Player Two won!";
  } else {
    Result.innerHTML = "Draw!";
  }}
  window.onload = function() {
    rollDice();}