class Player {
    constructor(){
      this.index = null;
      this.distanceX = 0;
      this.distanceY=0;
      this.name = null;
  this.rank=null;
  
    }
  static  dino(){
      var dinoRef =database.ref('playerlive');
      dinoRef.on("value",(data)=>{
    playerlive=data.val();
      })
    }
    updateLive(live){
database.ref('/').update({
playerlive:live

})


    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distanceY:this.distanceY,
        distanceX:this.distanceX
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
      //console.log(allPlayers);
    }

  }
  