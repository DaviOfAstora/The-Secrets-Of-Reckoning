//d = dist(Cxvoltar, Cyvoltar, mouseX,mouseY);
//d1 = dist(Cxvoltar, Cyvoltar, mouseX,mouseY);
//d4 = dist(Cxpont,Cypont, mouseX,mouseY);
var textofacil= 'Facil: jogo apresenta somente 2 alternativas para responder o máximo de perguntas em 120 segundos (2 minutos)'
var textodif='Difícil: são 4 alternativas para responder em 90 segundos (1 minuto e 30 segundos)'

var xcol1Dif=174, ylin1Dif=185 ,ylin2Dif=275, altRectDif=50 , larRectDif=150


function ScreenDif(){
  background(imgDif)
  push()
  textFont(fonte1)
  textSize(25)
  fill(250)
  text('Dificuldade',5+larRectDif/2,125)

  textFont(fonte1)
  textSize(25)
  textAlign(CENTER,CENTER)
  fill(250)
  text('Fácil',xcol1Dif+larRectDif/2,ylin1Dif+altRectDif/2) 
  text('Difícil',xcol1Dif+larRectDif/2,ylin2Dif+altRectDif/2)
  pop()
  
  push()
  
  opcaoBotaoJogo(xcol1Dif,ylin1Dif,larRectDif,altRectDif)
  opcaoBotaoJogo(xcol1Dif,ylin2Dif,larRectDif,altRectDif)
  
  opcaoBotaoCircular(Cxvoltar,Cyvoltar,d,raio)
  opcaoBotaoCircular(Cxduvida,Cyduvida,d1,raio)
  opcaoBotaoCircular(Cxpont,Cypont,d4,raio)
    
  
  pop()
  
  push()
  textFont(fonte1)
      textSize(15)
      fill(250)
  if(d1<=raio){
      text(textofacil,230,340,220,150)
      text(textodif,230,415,220,150)
      }
  
  if(d4<=raio){
      text("Melhor pontuação no fácil foi: "+melhorpontuacaofacil,30,340,150,100)
      text("Melhor pontuação no difícil foi: "+melhorpontuacaodificil,30,380,150,100)
      }
  pop()
  

}

