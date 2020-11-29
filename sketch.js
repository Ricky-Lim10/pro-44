var player, guard1, guard2, guard3
var score;
var emerald;
var shelf1, shelf2;
var level;
var resetButton;
var gameState;

function setup() {
  createCanvas(800,800);
  player = createSprite(100,100);
  
  shelf1 = createSprite(250,400,50,500);
  shelf2 = createSprite(550,400,50,500);

  guard1 = new guard(150,200);
  guard2 = new guard(350,600);
  guard3 = new guard(700,400);

  resetButton = createButton('Restart');

  gameState = 0;

  score = 0;
  level = 1;
}

function draw() {
  background(255,255,255);  

  text("Score:"+ score, 50,50);
  text("Level" + level, 70,50);

  if(keyDown(DownArrow)){
    player.y = player.y+5;
  }
  if(keyDown(UpArrow)){
    player.y = player.y-5;
  }
  if(keyDown(RightArrow)){
    player.x = player.x -5;
  }
  if(keyDown(LeftArrow)){
    player.x = player.x +5;
  }

  if(player.isTouching(guard)){
    player.visible = false;
    shelf1.visible = false;
    shelf2.visible = false;
    guard1.visible = false;
    guard2.visible = false;
    guard3.visible = false;

    gameState = 2;
    text("");
  }

  if(gameState === 0){
    text("Steal as much Items as you can and bring them back to the van! But make sure not to get caught!", 400,200);
    
  }

  if(gameState === 2){
    text("")
    reset();

  }

  if(player.isTouching(obstacle1 || obstacle2)){
    
  }

  

  if(player.isTouching(emerald)){
    level = level +1;
    speed = speed +1;
    player.position.x = 100
    player.position.y =100
  }
  
  drawSprites();
}

function reset(){
  gameState = 0;
  if(player.mousePressed(resetButton)){
    score = 0;
    level = 1;
    speed = 1;

  }
}

function isTouching(){
//create isTouching function
}