let imagemCenario;
let imagemPersonagem;
let cenario;
let trilhaJogo;
let personagem;

function preload() {
  imagemCenario = loadImage('asserts/images/cenario/floresta.png');
  imagemPersonagem = loadImage('asserts/images/personagem/correndo.png');
  trilhaJogo = loadSound('asserts/songs/trilha_jogo.mp3');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  frameRate(40);
  trilhaJogo.loop();

}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
}