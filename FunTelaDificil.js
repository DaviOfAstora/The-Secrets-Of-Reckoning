var pd1=["f(x)= ln(x),f’(x)=?","1/x","x","1/x²","x²"], pd2=["f(x)= sen(x), f’(x)=?","cos(x)","sec(x)","-sen(x)","tg(x)"],pd3=["f(x)= cos(x), f’(x)=?","-sen(x)","sen(x)","cos(x)","cossec(x)"],pd4=["f(x)= tg(x), f’(x)=?","sec²(x)","sec(x)","cossec²(x)","-sen(x)"],pd5=["f(x)= sec(x), f’(x)=?","sec(x)tg(x)","cossec(x)tg(x)","sen(x)","cos(x)sen(x)"],pd6=["f(x)= cotg(x), f’(x)=?","cossec²(x)","cossec(x)","sec²(x)","tg²(x)"],pd7=["f(x)= cossec(x), f’(x)=?","cossec(x)tg(x)","sec(x)tg(x)","sen(x)tg(x)","tg²(x)"],pd8=["Como é a derivada de um função inversa","f’(x)=1/f’(g(x))","f'(x)*g(x)+f(x)*g'(x)","f’(x)+g’(x)","f’(x)*g(x) - f(x)*g’(x)) / g²(x)"],pd9=["O que achamos quando derivamos e igualamos a 0 ?","Estamos procurando os pontos Críticos da função","Estamos procurando o ponto onde a inclinação da reta tangente será 90°","Estamos procurando  o ponto cujo limite é igual a 1","Estamos procurando  o ponto cujo limite não existe"],pd10=["Quando usamos a regra de L'Hospital ?","Quando ocorre uma indeterminação na qual há uma divisão 0/0 ou ∞/∞","Podemos usar a regra em qualquer situação","Quando ocorre uma indeterminação na qual há uma divisão 0/n ou ∞/n","Quando o calculo do limite é igual a zero"],pd11=["∫dx","x + c","x² + c","1/x+ c","1/x² + c"],pd12=["∫1/x dx","ln(x) + c","x + c","1/x + c","1/x² + c"],pd13=["∫sen(x)dx","-cos(x) + c","tg(x) + c","-sen(x) + c","cos(x) + c"],pd14=["∫cos(x)dx","sen(x) + c","cos(x) + c","sec(x) + c","-sen(x) + c"],pd15=["∫sec(x)tg(x)dx","sec(x) + c","-sen(x) + c","cos(x) + c","cossec(x) + c"],pd16=["∫sec²(x)dx","tg(x) + c","cossec(x)tg(x) + c","sen(x) + c","cos(x)sen(x) + c"]


var perguntasDificeis=[pd1,pd2,pd3,pd4,pd5,pd6,pd7,pd8,pd9,pd10,pd11,pd12,pd13,pd14,pd15,pd16]

let questiondificil=0,enunciadodificil=0,altcertadificil=1, alterrada1dificil=2,alterrada2dificil=3,alterrada3dificil=4


var ylinha3jogo=290


function telaDificil(){
  background(imgdificil)
  
  push()
  opcaoBotaoJogo(xcol1jogo,ylinhajogo,larjogo,altjogo)
  opcaoBotaoJogo(xcol2jogo,ylinhajogo,larjogo,altjogo)
  opcaoBotaoJogo(xcol1jogo,ylinha3jogo,larjogo,altjogo)
  opcaoBotaoJogo(xcol2jogo,ylinha3jogo,larjogo,altjogo)
  pop()
  
  
  push()
  textSize(20)
  fill(250)
  if(timer<0){
    text(perguntasDificeisrandomicas[questiondificil][enunciadodificil],100,50,320,80)
    textAlign(CENTER)
    
    if(posicaodificil===1){
      text(perguntasDificeisrandomicas[questiondificil][altcertadificil],40,173,larjogo-5,altjogo)
      text(perguntasDificeisrandomicas[questiondificil][alterrada1dificil],270,173,larjogo-5,altjogo)
      text(perguntasDificeisrandomicas[questiondificil][alterrada2dificil],40,294,larjogo-5,altjogo)
      text(perguntasDificeisrandomicas[questiondificil][alterrada3dificil],270,294,larjogo-5,altjogo)
    }
    else if(posicaodificil===2){
      text(perguntasDificeisrandomicas[questiondificil][altcertadificil],270,173,larjogo-5,altjogo)
      text(perguntasDificeisrandomicas[questiondificil][alterrada1dificil],40,173,larjogo-5,altjogo)
      text(perguntasDificeisrandomicas[questiondificil][alterrada2dificil],40,294,larjogo-5,altjogo)
      text(perguntasDificeisrandomicas[questiondificil][alterrada3dificil],270,294,larjogo-5,altjogo)
    }
    else if(posicaodificil===3){
      text(perguntasDificeisrandomicas[questiondificil][altcertadificil],40,294,larjogo-5,altjogo)
      text(perguntasDificeisrandomicas[questiondificil][alterrada1dificil],40,173,larjogo-5,altjogo)
      text(perguntasDificeisrandomicas[questiondificil][alterrada2dificil],270,173,larjogo-5,altjogo)
      text(perguntasDificeisrandomicas[questiondificil][alterrada3dificil],270,294,larjogo-5,altjogo)
    }
    else {
      text(perguntasDificeisrandomicas[questiondificil][altcertadificil],270,294,larjogo-5,altjogo)
      text(perguntasDificeisrandomicas[questiondificil][alterrada1dificil],40,173,larjogo-5,altjogo)
      text(perguntasDificeisrandomicas[questiondificil][alterrada2dificil],270,173,larjogo-5,altjogo)
      text(perguntasDificeisrandomicas[questiondificil][alterrada3dificil],40,294,larjogo-5,altjogo)
    }
  }
  
  pop()
  
  if(questiondificil===16){
    telaAtual='venceu'
  }
  
  push()
  
  
  
  
}
