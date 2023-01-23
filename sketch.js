var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  // carregue a imagem do balão verde
  green_balloonImage = loadImage("green_balloon0.png");
  // carregue a imagem do balão rosa
  pink_balloonImage = loadImage("pink_balloon0.png");
  // carregue a imagem do balão azul
  blue_balloonImage = loadImage("blue_balloon0.png")
  
}



function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    
}

function draw() {
 background(0);
  // chão em movimento
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //arco em movimento
  bow.y = World.mouseY
  
   // soltar arco quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //criando inimigos continuamente
  var select_balloon = Math.round(random(1,4));
  if (World.frameCount % 100 == 0) {
   switch(select_balloon){
    case 1: red.addImage(red_balloonImage)
    break;
    case 2: balloon1.addImage(blue_balloonImage)
    break;
    case 3: balloon2.addImage(green_balloonImage)
    break;
    case 4: balloon3.addImage(pink_balloonImage)
    break;
    default:break;
  }}
    
  drawSprites();
}


// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}

function blueBalloon() {
  //crieSprite para o balão
  var balloon1 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  //adicioneImagem para o balão
  balloon1.addImage(blue_balloonImage);
  // adicione velocidade para fazer o balão se mover
  balloon1.velocityX=3;
  // mudar a dimensão do balão
  balloon1.scale= 0.1;
  // atriubua tempo de vida ao balão
  balloon1.lifetime = 150;
}

function greenBalloon() {
  //crieSprite para o balão
  var balloon2 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  //adicioneImagem para o balão
  balloon2.addImage(green_balloonImage);
  // adicione velocidade para fazer o balão se mover
  balloon2.velocityX=3;
  // mudar a dimensão do balão
  balloon2.scale= 0.1;
  // atriubua tempo de vida ao balão
  balloon2.lifetime = 150;
}

function pinkBalloon() {
 //crieSprite para o balão
 var balloon3 = createSprite(0,Math.round(random(20, 370)), 10, 10);
 //adicioneImagem para o balão
 ballon3.addImage(pink_balloonImage);
 // adicione velocidade para fazer o balão se mover
 balloon3.velocityX=3;
 // mudar a dimensão do balão
 balloon3.scale= 0.1;
 // atriubua tempo de vida ao balão
 balloon3.lifetime = 150;
}
