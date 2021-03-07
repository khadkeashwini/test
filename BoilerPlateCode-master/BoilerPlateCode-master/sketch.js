function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
  edges=createEdgeSprites();
  player = createSprite ( 200 , 200 , 30 , 30 );
}

function draw() {
  background("black");
  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);  
  if(keyDown("up")){
    player.y=player.y-3;
  }
  if(keyDown("down")){
    player.y=player.y+3;
  }
  drawSprites();
  
}
