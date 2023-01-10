var larRectMenu=188, altRectMenu=64, x1col=45, x2col=275,y1linha=240, y2linha=310;


function Menu(){
  background(imgMenu);
  push()
  textAlign(CENTER, CENTER);
  textFont(fonte1);
  fill(250);
  textSize(20);
  text("Jogar", x1col+(larRectMenu/2), y1linha+(altRectMenu/2));
  text("Créditos", x1col+(larRectMenu/2), y2linha+(altRectMenu/2));
  text("Como jogar", x2col+(larRectMenu/2), y1linha+(altRectMenu/2));
  text("Informações", x2col+(larRectMenu/2), y2linha+(altRectMenu/2));
  
  pop()
  
  push()
  opcaoBotaoJogo(x1col,y1linha,larRectMenu,altRectMenu)
  
  opcaoBotaoJogo(x1col,y2linha,larRectMenu,altRectMenu)
  
  opcaoBotaoJogo(x2col,y1linha,larRectMenu,altRectMenu)
  
  opcaoBotaoJogo(x2col,y2linha,larRectMenu,altRectMenu)
  
  pop()
}

  
  

