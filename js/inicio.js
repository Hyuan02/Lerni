var opcaoInicial1, opcaoInicial2, opcaoInicial3, opcaoInicial4;
var opcaoCapitulos1,opcaoCapitulos2,opcaoCapitulos3,opcaoCapitulos4,opcaoCapitulosVoltar;
var opcaoAtividades1,opcaoAtividades2,opcaoAtividades3,opcaoAtividadesVoltar;
var controladorPuzzle=0;
var imagemInicial;
var imagemCapitulos;
var imagemFases1;
function preload(){
	spriteCaixa = loadSpriteSheet("imagens/caixa.png",200,200,1); //load nos sprites com dimensoes e quantidade de frames
	spriteBola = loadSpriteSheet("imagens/bola.png",100,100,1);
	spriteEsquadro = loadSpriteSheet("imagens/esquadro.png",300,225,1);
	imgBalaoA = loadImage("imagens/baloes/balao_azul.png");
	imgBalaoB = loadImage("imagens/baloes/balao_verde.png");
	imgBalaoC = loadImage("imagens/baloes/balao_vermelho.png");
	imgBalaoD = loadImage("imagens/baloes/balao_amarelo.png");
	imgBalaoE = loadImage("imagens/baloes/balao_preto.png");
	imgflorA = loadImage("imagens/baloes/balao_azul.png");
	imgflorB = loadImage("imagens/baloes/balao_verde.png");
	imgflorC = loadImage("imagens/baloes/balao_vermelho.png");
	imgflorD = loadImage("imagens/baloes/balao_amarelo.png");
	imgflorE = loadImage("imagens/baloes/balao_preto.png");
	imagemInicial = loadImage("imagens/menu-principal.png");
	imagemCapitulos = loadImage("imagens/menu-capitulos.png");
	imagemFases1 = loadImage("imagens/menu-fases1.png");
}

function setup(){
	createCanvas(1280,720);
	interfaceInicial();
}


function draw(){
	quadroPuzzles(controladorPuzzle);
}

function interfaceInicial(){
	removeElements();
	image(imagemInicial,0,0,width,height);
	opcaoInicial1 = createButton('INÍCIO');
	opcaoInicial2 = createButton('INSTRUÇÕES');
	opcaoInicial3 = createButton('CONFIGURAÇÕES');
	opcaoInicial4 = createButton('CRÉDITOS');
	opcaoInicial1.addClass('opcoesInicial');
	opcaoInicial2.addClass('opcoesInicial');
	opcaoInicial3.addClass('opcoesInicial');
	opcaoInicial4.addClass('opcoesInicial');
	opcaoInicial1.position(900,170);
	opcaoInicial2.position(900,255);
	opcaoInicial3.position(900,340);
	opcaoInicial4.position(900,425);
	opcaoInicial1.mousePressed(interfaceCapitulos);
}

function interfaceCapitulos(){
	removeElements();
	background(255,255,255);
	image(imagemCapitulos,0,0,width,height);
	opcaoCapitulos1 = createButton('Capítulo1');
	opcaoCapitulos2 = createButton('Capítulo2');
	opcaoCapitulos3 = createButton('Capítulo3');
	opcaoCapitulos4 = createButton('Capítulo4');
	opcaoCapitulosVoltar = createButton('Voltar');
	opcaoCapitulos1.addClass('opcaoCapitulos');
	opcaoCapitulos2.addClass('opcaoCapitulos');
	opcaoCapitulos3.addClass('opcaoCapitulos');
	opcaoCapitulos4.addClass('opcaoCapitulos');
	opcaoCapitulos2.attribute('disabled','');
	opcaoCapitulos3.attribute('disabled','');
	opcaoCapitulos4.attribute('disabled','');
	opcaoCapitulosVoltar.addClass('opcaoCapitulos');
	opcaoCapitulos1.position(300,200);
	opcaoCapitulos2.position(300,300);
	opcaoCapitulos3.position(800,200);
	opcaoCapitulos4.position(800,300);
	opcaoCapitulosVoltar.position(1140,100);
	opcaoCapitulosVoltar.mousePressed(interfaceInicial);
	opcaoCapitulos1.mousePressed(interfaceCapitulo1);
}

function interfaceCapitulo1(){
	removeElements();
	background(240,240,250);
	image(imagemFases1,0,0,width,height);
	opcaoAtividades1 = createButton('1');
	opcaoAtividades2 = createButton('2');
	opcaoAtividades3 = createButton('3');
	opcaoAtividadesVoltar = createButton('Voltar');
	opcaoAtividades1.addClass('opcaoAtividades');
	opcaoAtividades2.addClass('opcaoAtividades');
	opcaoAtividades3.addClass('opcaoAtividades');
	opcaoAtividadesVoltar.addClass('opcaoAtividades');
	opcaoAtividades1.position(350,200);
	opcaoAtividades2.position(725,220);
	opcaoAtividades3.position(1000,400);
	opcaoAtividadesVoltar.position(128,450);
	opcaoAtividades1.mousePressed(iniciadorPuzzleUm);
	opcaoAtividades2.mousePressed(iniciadorPuzzleDois);
	opcaoAtividades3.mousePressed(iniciadorPuzzleTres);
	opcaoAtividadesVoltar.mousePressed(interfaceCapitulos);

}
function iniciadorPuzzleUm(){
	iniciaPuzzleUm();
	controladorPuzzle = 1;
}
function iniciadorPuzzleDois(){
	iniciaPuzzleDois();
	controladorPuzzle = 2;
}
function iniciadorPuzzleTres(){
	iniciaPuzzleTres();
	controladorPuzzle = 3;
}
function quadroPuzzles(puzzle){
	switch(puzzle){
		case 0:
		break;
		case 1:
			desenhadorPuzzleUm();
		break;
		case 2:
			desenhadorPuzzleDois();
		break;
		case 3:
			desenhadorPuzzleTres();
		break;
	}
}