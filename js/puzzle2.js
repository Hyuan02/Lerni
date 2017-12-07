var imgBalaoA, imgBalaoB, imgBalaoC, imgBalaoD, imgBalaoE, imgBalaoF, imgBalaoG;
var imagemGratulon;
var vetorSpriteBaloes;
var corAtual;
var baloes;
var estado=1;
var tempoBalao=0; 
var baloesPegos=0;
var velocidadeY=-2.0;
var fonteTitulos;

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
		case 4:
			return imgBalaoE;
		break;
		case 5:
			return imgBalaoF;
		break;
		default:
			return imgBalaoG;
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
			return "ruĝa";
		break;
		case 3:
			return "flava";
		break;
		case 4:
			return "roza";
		break;
		case 5:
			return "purpura";
		break;
		default:
			return "nigra";
		break;
	}
}
function criaBalao(){
	let balao = createSprite(random(proporcaoTela*20,proporcaoTela*90),proporcaoTelaH*100);
	balao.tipo = Math.floor(random(6));
	balao.addAnimation("padrao",entregaImagem(balao.tipo));
	velocidade(baloesPegos);
	balao.velocity.y = velocidadeY;
	balao.velocity.x = random(-0.5,0.5); 
	balao.lifespan = 1000;
	balao.depth = -1000;
	balao.onMousePressed = function(){
		if(balao.tipo==corAtual){
			balao.remove();
			corAtual=Math.floor(random(6));
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
		if(tempoBalao>=35){
			baloes.add(criaBalao());
			tempoBalao=0;
		}
	}
	else if(qtdbaloes>=10 && qtdbaloes<15){
		if(tempoBalao>=25){
			baloes.add(criaBalao());
			tempoBalao=0;
		}
	}
	else if(qtdbaloes>=15){
		if(tempoBalao>=15){
			baloes.add(criaBalao());
			tempoBalao=0;
		}
	}
	tempoBalao++;

}

function desenhadorPuzzleDois(){
	switch(estado){
		case 1:
			clear();
			background(178,255,154);
			incrementaTempo(baloesPegos);
			drawSprites();
			textFont(fonteTitulos);
			text(entregaPalavra(corAtual),proporcaoTela*15,proporcaoTelaH*16);
			textSize(20);
			fill(81,160,40);
			text("Balões Pegos 20/ " + baloesPegos,proporcaoTela*15,proporcaoTelaH*20);
		break;
		case 2:
			clear();
			// textSize(70);
			cursor();
			// text("GRATULOJN!",width/2,height/2);
			background(178,255,154);
			image(imagemGratulon,450,150);
		break;
	}
	if(baloesPegos==20){
		estado=2;
	}
}
function iniciaPuzzleDois(){
	removeElements();
	baloesPegos = 0;
	tempoBalao = 0;
	estado = 1;
	velocidadeY = -2.0;
	baloes = new Group();
	textSize(30);
	vetorSpriteBaloes = [];
	for(let i=0; i<5; i++){
		baloes.add(criaBalao());
	}
	corAtual = Math.floor(random(4));
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