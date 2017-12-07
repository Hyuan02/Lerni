var imgflorA, imgflorB, imgflorC, imgflorD, imgflorE, imgflorF, imgflorG, imgflorH, imgflorI, imgflorJ;
var imagemGratulon;
var corAtual;
var flores;
var estado=1;
var tempoFlor=0; 
var FloresPegas=0;
var velocidadeX=-2.0;
var fonteTitulos;

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
		case 4:
			return imgflorE;
		break;
		case 5:
			return imgflorF;
		break;
		case 6:
			return imgflorG;
		break;
		case 7:
			return imgflorH;
		break;
		case 8:
			return imgflorI;
		break;
		case 9:
			return imgflorJ;
		break;
	}
}
function entregaPalavraPuzzle3(numero){
	switch(numero){
		case 0:
			return "unu";
		break;
		case 1:
			return "du";
		break;
		case 2:
			return "tri";
		break;
		case 3:
			return "kvar";
		break;
		case 4:
			return "kvin";
		break;
		case 5:
			return "ses";
		break;
		case 6:
			return "sep";
		break;
		case 7:
			return "ok";
		break;
		case 8:
			return "naŭ";
		break;
		case 9:
			return "dek";
		break;
	}
}
function criaFlor(){
	let flor = createSprite(width+100,random(proporcaoTelaH*16,proporcaoTelaH*80));
	flor.tipo = Math.floor(random(10));
	flor.addAnimation("padrao",entregaImagemPuzzleTres(flor.tipo));
	velocidade(FloresPegas);
	flor.velocity.y = random(-0.5,0.5);
	flor.velocity.x = velocidadeX;
	flor.lifespan = 1000;
	flor.depth = -1000;
	flor.onMousePressed = function(){
		if(flor.tipo==corAtual){
			flor.remove();
			corAtual=Math.floor(random(10));
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


function desenhadorPuzzleTres(){
	switch(estado){
		case 1:
			clear();
			incrementaTempoPuzzle3(FloresPegas);
			drawSprites();
			textFont(fonteTitulos);
			text(entregaPalavraPuzzle3(corAtual),proporcaoTela*15,proporcaoTelaH*16);
			textSize(20);
			fill(81,160,40);
			text("Flores pegas 20/ " + FloresPegas,proporcaoTela*15,proporcaoTelaH*20);
		break;
		case 2:
			clear();
			// textSize(70);
			// text("GRATULOJN!",width/2,height/2);
			image(imagemGratulon,450,150);
		break;
	}
	if(FloresPegas==20){
		estado=2;
	}
}
function iniciaPuzzleTres(){
	estado=1;
	tempoFlor=0; 
	FloresPegas=0;
	velocidadeX=-2.0;
	removeElements();
	flores = new Group();
	textSize(30);
	for(let i=0; i<5; i++){
		flores.add(criaFlor());
	}
	corAtual = Math.floor(random(10));
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