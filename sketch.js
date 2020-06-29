var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game,x;

var player1, player2, player3, player4, players;
var player1IMg,player2Img,player3Img,player4Img;
var dino,dinoImg;
var playerlive;
var life1,life2,life3;
function preload(){
  player1Img=loadImage("player2.png");
  player2Img=loadImage("player3.png");
  player3Img=loadImage("player4.png");
  player4Img=loadImage("pngwave.png");
  dinoImg=loadImage("dino.png");
  //trackImg=loadImage("images/track.jpg");


}



function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
 
  if(gameState===2){
    game.end();
  }
}
