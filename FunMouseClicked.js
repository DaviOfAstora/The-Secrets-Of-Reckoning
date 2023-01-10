

function mouseClicked(){
 
  if(telaAtual===0){
    if(mouseX>=x1col &&
       mouseX<=x1col+larRectMenu &&
       mouseY>=y1linha&&
       mouseY<=y1linha+altRectMenu){
       telaAtual=1
      
        perguntasFaceisrandomicas=shuffle(perguntasFaceis)
      perguntasFaceisrandomicas[16]=0
      perguntasDificeisrandomicas=shuffle(perguntasDificeis)
      perguntasDificeisrandomicas[17]=0

    }
    
    else if(mouseX>=x1col &&
     mouseX<=x1col+larRectMenu &&
     mouseY>=y2linha&&
     mouseY<=y2linha+altRectMenu){
     telaAtual=2
  }

  else if(mouseX>=x2col &&
     mouseX<=x2col+larRectMenu &&
     mouseY>=y1linha&&
     mouseY<=y1linha+altRectMenu){
     telaAtual=3
  }

  else if(mouseX>=x2col &&
     mouseX<=x2col+larRectMenu &&
     mouseY>=y2linha&&
     mouseY<=y2linha+altRectMenu){
     telaAtual=4
  }
    
  } 


  else if(telaAtual===2 || telaAtual===3 || telaAtual===4){
    if(d<=raio){
      telaAtual=0
    }
  
  }
  
 else if(telaAtual===1){
   if(d<=raio){
      telaAtual=0
    }
    
    if(mouseX>=xcol1Dif &&
    mouseX<=xcol1Dif+larRectDif &&
    mouseY>=ylin1Dif&&
    mouseY<=ylin1Dif+altRectDif){
       telaAtual='facil'
      
    }
  
  else if(mouseX>=xcol1Dif &&
    mouseX<=xcol1Dif+larRectDif &&
    mouseY>=ylin2Dif&&
    mouseY<=ylin2Dif+altRectDif){
    telaAtual='dificil'
  }
  
  }
  
  
//jogo
  
  
    else if(telaAtual==='gameover'||telaAtual==='perdeu'|| telaAtual==='venceu'){
      if(d2<=raio){
        telaAtual=0
      }
      if(d3<=raio){
        telaAtual=1
        perguntasFaceisrandomicas=shuffle(perguntasFaceis)
    perguntasFaceisrandomicas[16]=0
    perguntasDificeisrandomicas=shuffle(perguntasDificeis)
    perguntasDificeisrandomicas[16]=0
      }
    
    }

  
  
  //jogofacil
  else if(timer<0){
  
     if(telaAtual==='facil'){
      if(mouseX>=xcol1jogo &&
      mouseX<=xcol1jogo+larjogo&&
      mouseY>=ylinhajogo&&
      mouseY<=ylinhajogo+altjogo+130){
        opcao=1
        if(posicao===opcao){
          questionfacil++
          posicao=int(random(1,3))
          pontuacaofacil+=100
        }
        else{
          telaAtual='perdeu'
        }
      }

      else if(mouseX>=xcol2jogo &&
      mouseX<=xcol2jogo+larjogo&&
      mouseY>=ylinhajogo&&
      mouseY<=ylinhajogo+altjogo+130){
       opcao=2
        if(posicao===opcao){
          questionfacil++
          posicao=int(random(1,3))
          pontuacaofacil+=100
        }
        else{
          telaAtual='perdeu'
        }
      }


    }


    //jogodificil

    else if(telaAtual==='dificil'){
      if(mouseX>=xcol1jogo &&
      mouseX<=xcol1jogo+larjogo&&
      mouseY>=ylinhajogo&&
      mouseY<=ylinhajogo+altjogo){
        opcao=1
        if(posicaodificil===opcao){
          questiondificil++
          posicaodificil=int(random(1,5))
          pontuacaodificil+=100
        }
        else{
          telaAtual='perdeu'
        }

      }

      else if(mouseX>=xcol2jogo &&
      mouseX<=xcol2jogo+larjogo&&
      mouseY>=ylinhajogo&&
      mouseY<=ylinhajogo+altjogo){
        opcao=2
        if(posicaodificil===opcao){
          questiondificil++
          posicaodificil=int(random(1,5))
          pontuacaodificil+=100
        }
        else{
          telaAtual='perdeu'
        }
      }

      else if(mouseX>=xcol1jogo &&
        mouseX<=xcol1jogo+larjogo&&
        mouseY>=ylinha3jogo&&
        mouseY<=ylinha3jogo+altjogo){
        opcao=3
        if(posicaodificil===opcao){
          questiondificil++
          posicaodificil=int(random(1,5))
          pontuacaodificil+=100
        }
        else{
          telaAtual='perdeu'
        }
    }
      else if(mouseX>=xcol2jogo &&
        mouseX<=xcol2jogo+larjogo&&
        mouseY>=ylinha3jogo&&
        mouseY<=ylinha3jogo+altjogo){
        opcao=4
        if(posicaodificil===opcao){
          questiondificil++
          posicaodificil=int(random(1,5))
          pontuacaodificil+=100
        }
        else{
          telaAtual='perdeu'
        }
    }

  }   
    
}  
  
  
  
  
  
  
  
  
  
  
  

}