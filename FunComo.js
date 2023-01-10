var textocomo='Com o uso do touchpad ou o mouse você deverá escolher a alternativa correta dentre as opções apresentadas na pergunta.'
var textocomo2='Caso você acerte, a próxima pergunta aparecerá logo em seguida, caso erre o jogo será encerrado para uma próxima tentativa.'

function telaComo(){
  background(imgComo)
  
  push()
  textFont(fonte1)
  textSize(20)
  fill(250)
  text(textocomo,60,145,390,170)
  text(textocomo2,60,250,390,170)
  pop()
  
  image(imgmouse,170,360,150,110)
  
  
  push()
  opcaoBotaoCircular(Cxvoltar,Cyvoltar,d,raio)
  pop();

  pop()
}