var textoInfo= 'O objetivo do jogo é testar suas habilidades de cálculo 1, o quiz abrange perguntas sobre formúlas, teoremas, problemas como integrais imediatas e teorias.'
var textoInfo2='Assim nesse quiz, você aprenderá mais sobre essa disciplina e quem sabe errar menos nas provas.'

function telaInfo(){
  background(imgInfo)
  
  push()
  textFont(fonte1)
  textSize(20)
  fill(250)
  text(textoInfo,60,145,390,170)
  text(textoInfo2,60,280,390,170)
  pop()
  
  push()
  opcaoBotaoCircular(Cxvoltar,Cyvoltar,d,raio)
  pop()
}