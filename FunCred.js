var textocred='Davi Santana'
var textocred2='Desenvolvedor do jogo.'
var textocred3='Discente de Engenharia Biomédica da Universidade Federal do Rio Grande do Norte.'

function telaCred(){
  background(imgCred)
 
  image(imgeu,50,150,120,120)
  push()
  noFill()
  stroke(250)
  strokeWeight(4)
  rect(49,149,121,121,5)
  pop()
  
  push()
  textFont(fonte1)
  textSize(17)
  fill(250)
  text(textocred,210,163,390,170)
  text(textocred2,210,183,390,170)
  text(textocred3,210,203,190,170)
  pop()
  
  push()
  opcaoBotaoCircular(Cxvoltar,Cyvoltar,d,raio)
    pop();
  pop()
}