var cursor; //variavel pra armazenar o objeto do cursor
var spriteCaixa; //variavel pra armazenar as imagens dos sprites
var spriteEsquadro;
var spriteBola;
var objetoBola; //variavel pra armazenar o objeto pra interagir
var  objetoEsquadro;
var caixa1, caixa2, caixa3; // variavel pra armazenar os objetos das caixasS



/*function setup(){
	//noCursor();
	//createCanvas(1280,720);
	//iniciaPuzzleUm();
}*/


/*function draw(){
	clear(); //limpa a tela
	
	cursor.position.x = mouseX; //atualiza o cursor
	cursor.position.y = mouseY;
	text("Teste",width/2,100);
	//animation(caixa1,150,500);
	text("circulo aqui",100,600);
	//animation(caixa2,650,500);
	text("Quadrado aqui",600,600);
	//animation(caixa3,1100,500);
	text("Triangulo aqui",1075,600);
	checaCursor(); //checa o estado do cursor
	checaMovimentacao(objetoBola); // checa a colisao do cursor com um objeto pegavel
	checaMovimentacao(objetoEsquadro);
	checaColisao(objetoBola,caixa1); // checa a colisao objeto com uma caixa
	checaColisao(objetoEsquadro,caixa3);
	drawSprites(); // desenha os sprites na tela
}*/

function checaMovimentacao(sprite){
	if(mouseIsPressed){
		if(cursor.overlap(sprite)){ // se o sprite do mouse sobrepor o sprite do objeto entao ele pode pegar o objeto
			sprite.position.x = mouseX;
			sprite.position.y = mouseY;
		}
	}
}

function checaColisao(sprite,caixa){
	if(sprite.collide(caixa)){ //se o objeto colidir com a caixa os dois sao apagados
		sprite.remove();
		caixa.remove();
	}
}
function checaCursor(){
	if(mouseIsPressed){
		cursor.changeAnimation("segurando"); //mudanca de sprite do cursor se o mouse e pressionado
	}
	else{
		cursor.changeAnimation("padrao");
		cursor.segurando = false;
	}
}
function iniciaPuzzleUm(){
	removeElements();
	noCursor();
	caixa1 = createSprite(150,500); //criacao dos objetos na tela
	caixa2 = createSprite(650,500);
	caixa3 = createSprite(1100,500);
	objetoBola = createSprite(150,200);
	objetoEsquadro = createSprite(450,200);
	cursor = createSprite(mouseX,mouseY); //criacao do objeto do cursor
	objetoBola.addAnimation("padrao",spriteBola); //adicao das imagens nos objetos
	objetoEsquadro.addAnimation("padrao",spriteEsquadro);
	caixa1.addAnimation("padrao",spriteCaixa);
	caixa2.addAnimation("padrao",spriteCaixa);
	caixa3.addAnimation("padrao",spriteCaixa);
	cursor.addAnimation("padrao","imagens/cursor1.png");
	cursor.addAnimation("segurando","imagens/cursor2.png"); //adicao de outra animacao em um estado diferente
	cursor.segurando = false;
}
function desenhadorPuzzleUm(){

	clear(); //limpa a tela
	cursor.position.x = mouseX; //atualiza o cursor
	cursor.position.y = mouseY;
	text("Teste",width/2,100);
	//animation(caixa1,150,500);
	text("circulo aqui",100,600);
	//animation(caixa2,650,500);
	text("Quadrado aqui",600,600);
	//animation(caixa3,1100,500);
	text("Triangulo aqui",1075,600);
	checaCursor(); //checa o estado do cursor
	checaMovimentacao(objetoBola); // checa a colisao do cursor com um objeto pegavel
	checaMovimentacao(objetoEsquadro);
	checaColisao(objetoBola,caixa1); // checa a colisao objeto com uma caixa
	checaColisao(objetoEsquadro,caixa3);
	drawSprites(); // desenha os sprites na tela
}