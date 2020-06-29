class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player(); 
          player.getCount();
       
        form = new Form()
        form.display();
      }
  
      player1 = createSprite(100,200);
      player1.addImage("player1",player1Img);
      player1.scale=0.2;
      player2 = createSprite(300,200);
      player2.addImage("player2",player2Img);
      player2.scale=0.2;
      player3 = createSprite(500,200);
      player3.addImage("player3",player3Img);
      player3.scale=0.2;
      player4 = createSprite(700,200);
      player4.addImage("player4",player4Img);
      player4.scale=0.2;
      players = [player1, player2, player3, player4];
      dino=createSprite(500,500);
      dino.addImage("dino",dinoImg);
      dino.scale=0.2;
      life1=createSprite(400,400);
      life2=createSprite(600,400);
      life3=createSprite(800,400);
    }
  
    
    play(){
      form.hide();
  
      Player.getPlayerInfo();
  Player.dino();    
      if(allPlayers !== undefined){
        background ("white");
        //image (trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
        //var display_position = 100;
        //console.log(-displayWidth);
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 200;
        var y;
  
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
        // if(index===player.index) {//position the cars a little away from each other in x direction
          x = displayWidth - allPlayers[plr].distanceX + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distanceY;
          players[index-1].x = x;
          players[index-1].y = y;
        console.log(allPlayers[plr]);
        console.log(plr);
        console.log(index);
       //  }
          if (index === player.index){
           // console.log(player.index);
  stroke (10);
  fill ("red");
  ellipse(x,y,60,60);

            players[index - 1].shapeColor = "red";
            camera.position.x = players[index-1].x;
            camera.position.y = players[index-1].y;
           
  
          }
          
         
          //textSize(15);
         // text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
        
  
      }
     // console.log(player.index);
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distanceY +=10
        player.update();
      }

      if(keyIsDown(DOWN_ARROW)&& player.index !== null){

        player.distanceY -=10
        player.update();
      }
  if(keyIsDown(RIGHT_ARROW)&& player.index !== null){

    player.distanceX -=10
    player.update();
  }
  if(keyIsDown(LEFT_ARROW)&& player.index !== null){

    player.distanceX +=10
    player.update();
  }
    if(dino.collide(player1)) {
      playerlive=playerlive-1;
      player.updateLive(playerlive);
    } 
  
      drawSprites();
    }
  
    end(){
  console.log("game ended")
  console.log(player.rank);
  game.update(2);
  
    }
  }
  //why we createdd sprite in start function.
  //are they taking in built width and height.
  //what position we give to an image is taken from its centre or corner.
  //what is 0,0 in the canvas.
  //why is it happening like to which car we are pressing up arrow only that distance increse.
  //what about camera.
  //maam we are changing gameState in database and so on what basis we are saying if gameState===1 in sketch.j we have nowhere changed 
  //variable gameState of visual studio
  //index
  //why sprites are not bieng created as they are called in start function;
  //if(keyDown(knw)){
    //var bullet= create
  //
//if(SVGFEGaussianBlurElement.isTouching dino{
  //count=count+1;
  //gameState=3;
//}
//if()
//for next mission 
//If(gameStae 3)
