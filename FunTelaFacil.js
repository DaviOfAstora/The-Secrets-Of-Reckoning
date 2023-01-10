var pf1=["Quando dizemos que uma função é continua em um ponto, quer dizer que","f(x) é contínua num ponto 'a' de seu domínio quando o limite de f(x) com x tendendo a P, existir, ou seja: lim de f(x) com X tendendo a P","Quando desenhamos a função,podemos ver trechos 'vazios' em sua imagem ou domínio"], pf2=['O limite de X tende a P, logo:','O limite não depende de f(P) necessariamente, mas sim de valores vizinhos a P',"Que x = P em qualquer situação",], pf3=['O que é limite lateral?','são limites nos quais nos aproximamos ora pela direita (valores maiores) ora pela esquerda (valores menores)',"São limites que se afastam do ponto pela direita ou pela esquerda"], pf4=["Se os os limites laterais tiverem valores distintos, isso siginifica que",'O limite da função nesse ponto não existe','O limite da função nesse ponto existe e é igual ao valor do limite indo pela direita'] ,pf5=['O teorema do confronto é utilizado para:','Sejam g(x), f(x) e h(x) funções em que g(x)≤f(x)≤h(x) e seja a um ponto P, se o lim de g(x) = lim de h(x) = L, entao lim de f(x) = L com X tendendo a P',"Verificar se a confronto/diferença no resultado de limites laterais de um mesmo ponto na função"], pf6=["Qual a relação entre derivada e a reta tangente","A derivada é o coeficiente ângular da reta tangente, ou seja Y-Yo = f'(a).(X-Xo)","A derivada de qualquer função trigonométricas é igual a tg(x)"], pf7=["Se a derivada de uma função f em um ponto 'P' é positiva então","f′(P)>0  : existe uma vizinhança de a em que f é crescente","f′(P)<0  : existe uma vizinhança de a em que f é decrescente"], pf8=["Se a derivada de uma função f em um ponto 'P' é negatva então","f′(P)<0  : existe uma vizinhança de a em que f é decrescente","f′(P)>0  : existe uma vizinhança de a em que f é crescente"],pf9=['Qual a relação entre derivada e taxa de variação'," A derivada é a taxa de variação pontual de uma função","Não existe relação entre derivada e taxa de variação"],pf10=["O que diz o teorema do valor médio ?","Para qualquer função derivável f e um intervalo (a,b), existe um número c entre (a,b) de modo que f'(c) é igual à taxa de variação média da função sobre (a,b)","Para qualquer função derivável f e um intervalo (a,b), existe um c que é a média das derivadas do ponto a e b"],pf11=["O que diz o teorema do Weierstrass (máximos e mínimos)","Afirma que qualquer função contínua de um intervalo (a,b) é limitada e que, além disso, tem um máximo e um mínimo nesse intervalo","Afirma que qualquer função contínua de um intervalo (a,b) é infinita e, por isso não existe máximos e mínimos locais"],pf12=["A regra da soma é","(f+g)’=f’+g’","(f * g)’=f’*g+f*g’"], pf13=["A regra da produto é","(f * g)’=f’*g+f*g’","(f+g)’=f’+g’"],pf14=["A regra do quociente é","(f /g)’=(f’*g-f*g’)/g²","(f * g)’=f’*g+f*g’"],pf15=["A regra da cadeia é","(f(g(x)))'=f'(g(x))*g'(x)","(f /g)’=(f’*g-f*g’)/g²"],pf16=["O que acontece se derivarmos na ordem n+1 um polinmio de ordem n","O resultado é 0","O resultado é o produto do coeficiente com os expontes cada vez que derivamos"]

var perguntasFaceis=[pf1,pf2,pf3,pf4,pf5,pf6,pf7,pf8,pf9,pf10,pf11,pf12,pf13,pf14,pf15,pf16]

let questionfacil=0,enunciadofacil=0,altcertafacil=1, alterradafacil=2



var xcol1jogo=36, xcol2jogo=267, ylinhajogo=167, larjogo=195, altjogo=103


function telaFacil(){
  background(imgfacil)
  push()
  textFont(fonte1)
  textSize(20)
  fill(250)
  textAlign(CENTER)
  if(timer<0){
    text(perguntasFaceisrandomicas[questionfacil][enunciadofacil],100,50,320,80)
    
    if(posicao===1){
      text(perguntasFaceisrandomicas[questionfacil][altcertafacil],40,190,larjogo-5,altjogo+130)
      text(perguntasFaceisrandomicas[questionfacil][alterradafacil],271,190,larjogo-5-5,altjogo+130)
    }
    else{
      text(perguntasFaceisrandomicas[questionfacil][altcertafacil],271,190,larjogo-5,altjogo+130)
      text(perguntasFaceisrandomicas[questionfacil][alterradafacil],40,190,larjogo-5-5-5,altjogo+130)
    }
  }
  
  pop()
  
  if(questionfacil===16){
    telaAtual='venceu'
  }
  
  push()
  
  
  opcaoBotaoJogo(xcol1jogo,ylinhajogo,larjogo,altjogo+130)
  opcaoBotaoJogo(xcol2jogo,ylinhajogo,larjogo,altjogo+130)
  pop()
  

}
