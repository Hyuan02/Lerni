var imgBalaoA, imgBalaoB, imgBalaoC, imgBalaoD, imgBalaoE;
var vetorSpriteBaloes;
var corAtual;
var ponteiro; //variavel pra armazenar o objeto do cursor
var baloes;
var estado=1;
var tempoBalao=0; 
var baloesPegos=0;
var velocidadeY=-2.0;

function entregaImagem(numero){
	switch(numero){
		case 0:
			return imgBalaoA;
		break;
		case 1:
			return imgBalaoB;
		break;
		case 2:
			return imgBalaoC;
		break;
		case 3:
			return imgBalaoD;
		break;
		default:
			return imgBalaoE;
		break;
	}
}
function entregaPalavra(numero){
	switch(numero){
		case 0:
			return "blua";
		break;
		case 1:
			return "verda";
		break;
		case 2:
			return "ruga";
		break;
		case 3:
			return "flava";
		break;
		default:
			return "nigra";
		break;
	}
}
function criaBalao(){
	let balao = createSprite(random(400,1000),800);
	balao.tipo = Math.floor(random(4));
	balao.addAnimation("padrao",entregaImagem(balao.tipo));
	velocidade(baloesPegos);
	balao.velocity.y = velocidadeY;
	balao.velocity.x = random(-0.5,0.5); 
	balao.lifespan = 1000;
	balao.depth = -1000;
	balao.onMousePressed = function(){
		if(balao.tipo==corAtual){
			balao.remove();
			corAtual=Math.floor(random(4));
			baloesPegos++;
		}
	}
	return balao;
}
function incrementaTempo(qtdbaloes){
	if(qtdbaloes>=0 && qtdbaloes<5){
		if(tempoBalao>=45){
			baloes.add(criaBalao());
			tempoBalao=0;
		}
	}
	else if(qtdbaloes>=5 && qtdbaloes<10){
		if(tempoBalao>=40){
			baloes.add(criaBalao());
			tempoBalao=0;
		}
	}
	else if(qtdbaloes>=10 && qtdbaloes<15){
		if(tempoBalao>=35){
			baloes.add(criaBalao());
			tempoBalao=0;
		}
	}
	else if(qtdbaloes>=15){
		if(tempoBalao>=30){
			baloes.add(criaBalao());
			tempoBalao=0;
		}
	}
	tempoBalao++;

}

function movimentaCursor(){
	ponteiro.position.x = mouseX; //atualiza o cursor
	ponteiro.position.y = mouseY;
	if(mouseIsPressed){
		ponteiro.changeAnimation("segurando");
	}
	else{
		ponteiro.changeAnimation("padrao");
	}
}

function desenhadorPuzzleDois(){
	switch(estado){
		case 1:
			clear();
			movimentaCursor();
			incrementaTempo(baloesPegos);
			drawSprites();
			text(entregaPalavra(corAtual),100,100);
			text("Balões Pegos 20/ " + baloesPegos,100,200);
		break;
		case 2:
			clear();
			textSize(70);
			cursor();
			text("GRATULOJN!",width/2,height/2);
		break;
	}
	if(baloesPegos==20){
		estado=2;
	}
}
function iniciaPuzzleDois(){
	removeElements();
	baloes = new Group();
	noCursor();
	textSize(30);
	vetorSpriteBaloes = [];
	for(let i=0; i<5; i++){
		baloes.add(criaBalao());
	}
	corAtual = Math.floor(random(4));
	ponteiro = createSprite(mouseX,mouseY); //criacao do objeto do cursor
	ponteiro.addAnimation("padrao","imagens/cursor1.png");
	ponteiro.addAnimation("segurando","imagens/cursor2.png");
	ponteiro.depth = 1000;
}

function velocidade(baloes) {
	if (baloes>0 && baloes < 5) {
		velocidadeY = random(-2.0,-3.0);
	}
	else if (baloes > 5 && baloes<10) {
		velocidadeY = random(-3.0,-4.0);
	}
	else if (baloes > 10 && baloes<15) {
		velocidadeY = random(-4.0,-5.0);
	}
	else if (baloes > 15) {
		velocidadeY = random(-5.0,-6.0);
	}
}