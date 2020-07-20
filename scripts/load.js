function preload() {
  imageScenario1 = loadImage('images/scenario/jungle.png');
    
  imageGameOver = loadImage('images/assets/game-over.png');
  imagePersonage = loadImage('images/personage/running.png');
  imageEnemy = loadImage('images/enemies/gotinha.png');
  imageEnemyBig = loadImage('images/enemies/troll.png');
  imageEnemyFlying = loadImage('images/enemies/gotinha-voadora.png');
  
  imageHomeScreen = loadImage('images/assets/homescreen.png');
  fontHomeScreen = loadFont('images/assets/font.otf');
  
  imageLife = loadImage('images/assets/heart.png');
  
  fita = loadJSON('fita/fita.json');
  
  soundGame = loadSound('sounds/trilha_jogo.mp3');
  soundJump = loadSound('sounds/jump.mp3');
  soundOver = loadSound('sounds/over.mp3');
}