class Game {
  constructor() {}

  //refered the game state from database and selected  value to be displayed.
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  //updating a gamestate to a database.
  update(state){
    database.ref('/').update({
      gameState:state
    });
  }

  //changes from form to game state.
  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1=createSprite(width/2-50,height-100);
    car1.addImage("car1",car1_img);
    car1.scale=0.07;

    car2=createSprite(width/2+100,height-100);
    car2.addImage("car2",car2_img);
    car2.scale=0.07;

    cars=[car1,car2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  //checking whether all players are defined.
  play() {
    this.handleElements();
    Player.getPlayersInfo();
    if(allPlayers!==undefined){
    image(track,0,-height*5,width,height*6);
    drawSprites();
    }
  }
}
