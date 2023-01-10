let perguntasFaceisrandomicas, perguntasDificeisrandomicas,posicao, posicaodificil


var opcao, pontuacaofacil=0,pontuacaodificil=0,melhorpontuacaofacil=0, melhorpontuacaodificil=0
var timer=4, timerdificil =91, timerfacil =120
var imgMenu,imgCred,imgComo,imgDif,imgInfo,imgfacil,imgmedio,imgdificil;
var fonte1;
var telaAtual=0;
var Cxvoltar=36, Cyvoltar=35, raio = 19, d, d1,d2,d3,d4, Cxduvida=462, Cyduvida=461, CxvoltarMenu=210, CyvoltarMenu=312, Cxagain=275, Cyagain=311,Cxpont=37,Cypont=461


function preload() { 
  imgMenu = loadImage('ImagensMenu/Menu.png');
  imgCred = loadImage('ImagensMenu/creditos.png');
  imgComo = loadImage('ImagensMenu/Comojogar.png');
  imgDif= loadImage('ImagensMenu/modosdejogosimples.png');
  imgInfo = loadImage('ImagensMenu/infomarcoes.png');
  imgmouse = loadImage('ImagensMenu/mouse.png');
  imgeu = loadImage('ImagensMenu/eu.jpg');
  imgfacil = loadImage('ImagensJogo/jogofacil.png');
  imgdificil = loadImage('ImagensJogo/jogodificil.png');
  imggameover = loadImage('ImagensJogo/telagameover.png');
  imgvenceu = loadImage('ImagensJogo/telavenceu.png');
  imgperdeu = loadImage('ImagensJogo/telaperdeu.png');
  fonte1 = loadFont('Fontes/ComingSoon-Regular.ttf');
}


function setup() {
  createCanvas(500, 500);
  frameRate(60)
  
  posicao=int(random(1,3))
  posicaodificil=int(random(1,5))
  
  
  
}


function draw() {
  
  d = dist(Cxvoltar, Cyvoltar, mouseX,mouseY);
  d1 = dist(Cxduvida, Cyduvida, mouseX,mouseY);
  d2 = dist(CxvoltarMenu, CyvoltarMenu, mouseX,mouseY);
  d3 = dist(Cxagain, Cyagain, mouseX,mouseY);
  d4 = dist(Cxpont,Cypont, mouseX,mouseY);
  
  
  if(telaAtual===0){
    Menu()
    
  }
  else if(telaAtual===1){
    ScreenDif()
   
  }
  
  else if(telaAtual===2){
    telaCred()
   
  }
  
  else if(telaAtual===3){
    telaComo()
   
  }
  
  else if(telaAtual===4){
    telaInfo()
   
  }
   
  else if(telaAtual==='facil'){
    telaFacil()
    push()
  textAlign(CENTER,CENTER)
  textSize(30)
  textFont(fonte1)
  fill(250)
  text(pontuacaofacil,450,40)
    if(timer>3){
    text('3',250,250)
  }
    if(timer>0 && timer<4){
    text(timer,250,250)
  }
  if(timerfacil>120){
    text('120',38,37)
  }
   if(timerfacil>0 && timerfacil<121){
    text(timerfacil,38,37)
  }
  
  
  if (frameCount % 60 == 0 && timer >=0 ) { 
      timer --;
    }
  if (timer == 0) {
      text('Calcule!',250,250)
    
    }
  if (frameCount % 60 == 0 && timerfacil>=0) { 
      if(timer<0){
        timerfacil--
        
        
      }
    }
  
  if(timerfacil===0){
    telaAtual='gameover'
  }
    
  
  
  pop()
   
  }
  
  else if(telaAtual==='dificil'){
   telaDificil()
    push()
  textAlign(CENTER,CENTER)
  textSize(30)
  textFont(fonte1)
  fill(250)
    text(pontuacaodificil,450,40)
  
    if(timer>3){
    text('3',250,250)
  }
    if(timer>0 && timer<4){
    text(timer,250,250)
  }
  if(timerdificil>90){
    text('90',38,37)
  }
  if(timerdificil>0 && timerdificil<91){
    text(timerdificil,38,37)
  }
  
  
  if (frameCount % 60 == 0 && timer >=0 ) { 
      timer --;
    }
  if (timer == 0) {
      text('Calcule!',250,250)
    
    }
  if (frameCount % 60 == 0 && timerdificil>=0) { 
      if(timer<0){
        timerdificil--
        
      }
    }
  
  if(timerdificil===0){
    telaAtual='gameover'
  }
  
  
  pop()
  
  }
  else if(telaAtual==='gameover'){
    telaGameOver()
    questionfacil=0
    enunciadofacil=0
    questiondificil=0
    enunciadodificil=0
    timer=4
    timerfacil=121
    timerdificil =91
    
    if(melhorpontuacaofacil<=pontuacaofacil){
      melhorpontuacaofacil=pontuacaofacil
    }
    if(melhorpontuacaodificil<=pontuacaodificil){
      melhorpontuacaodificil=pontuacaodificil
    }
    
    pontuacaofacil=0
    pontuacaodificil=0
    
    
  }
  else if(telaAtual==='perdeu'){
    telaPerdeu()
    questionfacil=0
    enunciadofacil=0
    questiondificil=0
    enunciadodificil=0
    a1facil=1
    timer=4
    timerfacil=121
    timerdificil =91
    if(melhorpontuacaofacil<=pontuacaofacil){
      melhorpontuacaofacil=pontuacaofacil
    }
    if(melhorpontuacaodificil<=pontuacaodificil){
      melhorpontuacaodificil=pontuacaodificil
    }
    
    pontuacaofacil=0
    pontuacaodificil=0
    
    
    
  }
  
  else if(telaAtual==='venceu'){
    telaVenceu()
    questionfacil=0
    enunciadofacil=0
    questiondificil=0
    enunciadodificil=0
    a1facil=1
    timer=4
    timerfacil=121
    timerdificil =91
    if(melhorpontuacaofacil<=pontuacaofacil){
      melhorpontuacaofacil=pontuacaofacil
    }
    if(melhorpontuacaodificil<=pontuacaodificil){
      melhorpontuacaodificil=pontuacaodificil
    }
    
    pontuacaofacil=0
    pontuacaodificil=0
    
    
    
  }  
  
}




function opcaoBotaoJogo(x,y,largura,altura){

  if(mouseX>=x &&
    mouseX<=x+largura&&
    mouseY>=y&&
    mouseY<=y+altura){
      stroke(250);
      
  }
  else{
    noStroke();
  }
  strokeWeight(3)
  noFill();
  rect(x,y,largura,altura,5);


}

function opcaoBotaoCircular(x,y,d,r){
  
  if(d<=r){
  
  noFill();
  strokeWeight(3);
  stroke(250);
  circle(x,y,r*2);
 
  }
  
}
