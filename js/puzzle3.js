var imgflorA, imgflorB, imgflorC, imgflorD, imgflorE;
var corAtual;
var ponteiro; //variavel pra armazenar o objeto do cursor
var flores;
var estado=1;
var tempoFlor=0; 
var FloresPegas=0;
var velocidadeX=-2.0;

function entregaImagemPuzzleTres(numero){
	switch(numero){
		case 0:
			return imgflorA;
		break;
		case 1:
			return imgflorB;
		break;
		case 2:
			return imgflorC;
		break;
		case 3:
			return imgflorD;
		break;
		default:
			return imgflorE;
		break;
	}
}
function entregaPalavraPuzzle3(numero){
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
		default:
			return "nigra";
		break;
	}
}
function criaFlor(){
	let flor = createSprite(width+100,random(200,500));
	flor.tipo = Math.floor(random(4));
	flor.addAnimation("padrao",entregaImagemPuzzleTres(flor.tipo));
	velocidade(FloresPegas);
	flor.velocity.y = random(-0.5,0.5);
	flor.velocity.x = velocidadeX;
	flor.lifespan = 1000;
	flor.depth = -1000;
	flor.onMousePressed = function(){
		if(flor.tipo==corAtual){
			flor.remove();
			corAtual=Math.floor(random(4));
			FloresPegas++;
		}
	}
	return flor;
}
function incrementaTempoPuzzle3(qtdflores){
	if(qtdflores>=0 && qtdflores<5){
		if(tempoFlor>=45){
			flores.add(criaFlor());
			tempoFlor=0;
		}
	}
	else if(qtdflores>=5 && qtdflores<10){
		if(tempoFlor>=40){
			flores.add(criaFlor());
			tempoFlor=0;
		}
	}
	else if(qtdflores>=10 && qtdflores<15){
		if(tempoFlor>=35){
			flores.add(criaFlor());
			tempoFlor=0;
		}
	}
	else if(qtdflores>=15){
		if(tempoFlor>=30){
			flores.add(criaFlor());
			tempoFlor=0;
		}
	}
	tempoFlor++;

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

function desenhadorPuzzleTres(){
	switch(estado){
		case 1:
			clear();
			movimentaCursor();
			incrementaTempoPuzzle3(FloresPegas);
			drawSprites();
			text(entregaPalavraPuzzle3(corAtual),100,100);
			text("Flores Pegos 20/ " + FloresPegas,100,200);
		break;
		case 2:
			clear();
			textSize(70);
			cursor();
			text("GRATULOJN!",width/2,height/2);
		break;
	}
	if(FloresPegas==20){
		estado=2;
	}
}
function iniciaPuzzleTres(){
	removeElements();
	flores = new Group();
	noCursor();
	textSize(30);
	for(let i=0; i<5; i++){
		flores.add(criaFlor());
	}
	corAtual = Math.floor(random(4));
	ponteiro = createSprite(mouseX,mouseY); //criacao do objeto do cursor
	ponteiro.addAnimation("padrao","imagens/cursor1.png");
	ponteiro.addAnimation("segurando","imagens/cursor2.png");
	ponteiro.depth = 1000;
}

function velocidade(qtdflores) {
	if (qtdflores>=0 && qtdflores < 5) {
		velocidadeX = random(-2.0,-3.0);
	}
	else if (qtdflores >= 5 && qtdflores<10) {
		velocidadeX = random(-3.0,-4.0);
	}
	else if (qtdflores >= 10 && qtdflores<15) {
		velocidadeX = random(-4.0,-5.0);
	}
	else if (qtdflores >= 15) {
		velocidadeX = random(-5.0,-6.0);
	}
}