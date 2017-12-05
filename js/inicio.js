var proporcaoTela,proporcaoTelaH;
var opcaoInicial1, opcaoInicial2, opcaoInicial3, opcaoInicial4;
var opcaoCapitulos1,opcaoCapitulos2,opcaoCapitulos3,opcaoCapitulos4,opcaoCapitulosVoltar;
var opcaoAtividades1,opcaoAtividades2,opcaoAtividades3,opcaoAtividadesVoltar;
var opcaoPuzzle1, opcaoPuzzleVoltar;
var controladorPuzzle=0;
var imagemInicial;
var imagemInstrucoes;
var imagemCapitulos;
var imagemFases1;
var imagemPuzzles,imagemRevisao;
var botaoRevisaoAvancar,botaoRevisaoVoltar,botaoRevisaoFechar,tituloRevisao, conteudoRevisao;
var imagemAtual;
var ponteiro, imgPonteiro1, imgPonteiro2;
function preload(){
	spriteCaixa = loadSpriteSheet("imagens/caixa.png",200,200,1); //load nos sprites com dimensoes e quantidade de frames
	spriteBola = loadSpriteSheet("imagens/bola.png",100,100,1);
	spriteEsquadro = loadSpriteSheet("imagens/esquadro.png",300,225,1);
	imgBalaoA = loadImage("imagens/baloes/balao_azul.png");
	imgBalaoB = loadImage("imagens/baloes/balao_verde.png");
	imgBalaoC = loadImage("imagens/baloes/balao_vermelho.png");
	imgBalaoD = loadImage("imagens/baloes/balao_amarelo.png");
	imgBalaoE = loadImage("imagens/baloes/balao_rosa.png");
	imgBalaoF = loadImage("imagens/baloes/balao_roxo.png");
	imgBalaoG = loadImage("imagens/baloes/balao_preto.png");
	imgflorA = loadImage("imagens/flores/petala1.png");
	imgflorB = loadImage("imagens/flores/petala2.png");
	imgflorC = loadImage("imagens/flores/petala3.png");
	imgflorD = loadImage("imagens/flores/petala4.png");
	imgflorE = loadImage("imagens/flores/petala5.png");
	imgflorF = loadImage("imagens/flores/petala6.png");
	imgflorG = loadImage("imagens/flores/petala7.png");
	imgflorH = loadImage("imagens/flores/petala8.png");
	imgflorI = loadImage("imagens/flores/petala9.png");
	imgflorJ = loadImage("imagens/flores/petala10.png");
	imagemInicial = loadImage("imagens/menu-principal.png");
	imagemInstrucoes = loadImage("imagens/menu-instrucoes.png");
	imagemCapitulos = loadImage("imagens/menu-capitulos.png");
	imagemFases1 = loadImage("imagens/menu-fases1.png");
	imgPonteiro1 = loadImage("imagens/cursor1.png");
	imgPonteiro2 = loadImage("imagens/cursor2.png");
	imagemPuzzles = loadImage("imagens/menu-puzzles.png");
}

function setup(){
	createCanvas(displayWidth,displayHeight);
	proporcaoTela = width/100;
	proporcaoTelaH = height/100;
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
	opcaoInicial1.position(proporcaoTela*68,proporcaoTelaH*30);
	opcaoInicial2.position(proporcaoTela*68,proporcaoTelaH*42);
	opcaoInicial3.position(proporcaoTela*68,proporcaoTelaH*54);
	opcaoInicial4.position(proporcaoTela*68,proporcaoTelaH*66);
	opcaoInicial1.style('width',proporcaoTela*25+'px');
	opcaoInicial1.style('height',proporcaoTelaH*8+'px');
	opcaoInicial2.style('width',proporcaoTela*25+'px');
	opcaoInicial2.style('height',proporcaoTelaH*8+'px');
	opcaoInicial3.style('width',proporcaoTela*25+'px');
	opcaoInicial3.style('height',proporcaoTelaH*8+'px');
	opcaoInicial4.style('width',proporcaoTela*25+'px');
	opcaoInicial4.style('height',proporcaoTelaH*8+'px');
	opcaoInicial1.mousePressed(interfaceCapitulos);
	opcaoInicial2.mousePressed(interfaceInstrucoes);
}

function interfaceInstrucoes(){
	removeElements();
	image(imagemInstrucoes,0,0,width,height);
	opcaoCapitulosVoltar = createButton('Voltar');
	opcaoCapitulosVoltar.addClass('opcoesVoltarInst');
	opcaoCapitulosVoltar.position(proporcaoTela*45,proporcaoTelaH*85);
	opcaoCapitulosVoltar.mousePressed(interfaceInicial);
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
	opcaoCapitulos1.position(proporcaoTela*20,proporcaoTelaH*25);
	opcaoCapitulos2.position(proporcaoTela*20,proporcaoTelaH*40);
	opcaoCapitulos3.position(proporcaoTela*60,proporcaoTelaH*25);
	opcaoCapitulos4.position(proporcaoTela*60,proporcaoTelaH*40);
	opcaoCapitulosVoltar.position(proporcaoTela*0.1,proporcaoTelaH*80);
	opcaoCapitulosVoltar.mousePressed(interfaceInicial);
	opcaoCapitulos1.mousePressed(interfaceCapitulo1);
}

function interfaceCapitulo1(){
	removeElements();
	limpaSprites();
	background(240,240,250);
	image(imagemFases1,0,0,width,height);
	opcaoAtividades1 = createButton('1');
	opcaoAtividades2 = createButton('2');
	opcaoAtividades3 = createButton('3');
	opcaoAtividadesVoltar = createButton('Voltar');
	opcaoAtividades1.addClass('opcaoAtividadesFase');
	opcaoAtividades2.addClass('opcaoAtividadesFase');
	opcaoAtividades3.addClass('opcaoAtividadesFase');
	opcaoAtividadesVoltar.addClass('opcaoAtividadesVoltar');
	opcaoAtividades1.position(proporcaoTela*27,proporcaoTelaH*25);
	opcaoAtividades2.position(proporcaoTela*57,proporcaoTelaH*28);
	opcaoAtividades3.position(proporcaoTela*77,proporcaoTelaH*52);
	opcaoAtividadesVoltar.position(proporcaoTela*7,proporcaoTelaH*59);
	opcaoAtividades1.mousePressed(iniciadorPuzzleUm);
	opcaoAtividades2.mousePressed(iniciadorPuzzleDois);
	opcaoAtividades3.mousePressed(iniciadorPuzzleTres);
	opcaoAtividadesVoltar.mousePressed(interfaceCapitulos);

}
function iniciadorPuzzleUm(){
	iniciaPuzzleUm();
	iniciaInterfacePuzzle();
	iniciaCursor();
	controladorPuzzle = 1;
	
}
function iniciadorPuzzleDois(){
	iniciaPuzzleDois();
	iniciaInterfacePuzzle();
	iniciaCursor();
	controladorPuzzle = 2;
	
}
function iniciadorPuzzleTres(){
	iniciaPuzzleTres();
	iniciaInterfacePuzzle();
	iniciaCursor();
	controladorPuzzle = 3;
}
function quadroPuzzles(puzzle){
	switch(puzzle){
		case 0:
		break;
		case 1:
			desenhadorPuzzleUm();
			desenhaInterfacePuzzle();
			movimentaCursor();
		break;
		case 2:
			desenhadorPuzzleDois();
			desenhaInterfacePuzzle();
			movimentaCursor();
		break;
		case 3:
			desenhadorPuzzleTres();
			desenhaInterfacePuzzle();
			movimentaCursor();
		break;
	}
}
function voltaCapitulo(){
	cursor();
	controladorPuzzle = 0;
	interfaceCapitulo1();
}
function desenhaInterfacePuzzle(){
	image(imagemPuzzles,0,0,width,height);
}
function iniciaInterfacePuzzle(){
	opcaoPuzzle1 = createButton('Revizio');
	opcaoPuzzle1.position(proporcaoTela*0.2,proporcaoTelaH*10);
	opcaoPuzzleVoltar = createButton('Voltar');
	opcaoPuzzleVoltar.position(proporcaoTela*0.2,proporcaoTelaH*80);
	opcaoPuzzle1.addClass('opcaoInterfacePuzzle');
	opcaoPuzzleVoltar.addClass('opcaoInterfacePuzzle');
	opcaoPuzzle1.addClass('opcaoInterfacePuzzle1');
	opcaoPuzzleVoltar.addClass('opcaoInterfacePuzzleVoltar');
	opcaoPuzzleVoltar.mousePressed(voltaCapitulo);
	opcaoPuzzle1.mousePressed(interfaceRevisao);
}
function iniciaCursor(){
	noCursor();
	ponteiro = createSprite(mouseX,mouseY);
	ponteiro.addAnimation("padrao",imgPonteiro1);
	ponteiro.addAnimation("segurando",imgPonteiro2);
	ponteiro.depth = 1000;	
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
	drawSprite(ponteiro);
}
function limpaSprites(){
	for(let i=0; i<allSprites.length; i++){
		allSprites[i].visible = false;
	}
	for(let i=0; i<allSprites.length; i++){
		allSprites[i].remove();
	}
	print(allSprites.length);
}
function interfaceRevisao(){
	let fechar = function (){
		imagemRevisao.remove();
		botaoRevisaoFechar.remove();
		tituloRevisao.remove();
		conteudoRevisao.remove();
	}
	imagemRevisao = createImg("imagens/cartao-informativo.png");
	imagemRevisao.style('width',width+'px');
	imagemRevisao.style('height',height+'px');
	imagemRevisao.position(0,0);
	botaoRevisaoFechar = createButton('X');
	botaoRevisaoFechar.position(proporcaoTela*70,proporcaoTelaH*1);
	botaoRevisaoFechar.addClass('revisaoFechar');
	botaoRevisaoFechar.mousePressed(fechar);
	botaoRevisaoFechar.style('width',proporcaoTela*3+'px');
	botaoRevisaoFechar.style('height',proporcaoTelaH*7+'px');
	tituloRevisao = createSpan('Revizio');
	tituloRevisao.addClass('tituloRevisao');
	tituloRevisao.position(proporcaoTela*45,proporcaoTelaH*3);
	let conteudo;
	switch(controladorPuzzle){
		case 1:
			conteudo = "<p>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit, sed do eiusmod<br/>" +
				"tempor incididunt ut labore <br/>et dolore magna aliqua. Ut enim ad minim veniam,<br/>" +
				"quis nostrud exercitation ullamco laboris<br/> nisi ut aliquip ex ea commodo<br/>" +
				"consequat. Duis aute irure dolor in reprehenderit<br/> in voluptate velit esse<br/>" +
				"cillum dolore eu fugiat nulla pariatur<br/>. Excepteur sint occaecat cupidatat non<br/>" +
				"proident, sunt in culpa qui officia deserunt<br/> mollit anim id est laborum.</p>"
		break;
		case 2:
			conteudo = "<p>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit, sed do eiusmod<br/>" +
				"tempor incididunt ut labore <br/>et dolore magna aliqua. Ut enim ad minim veniam,<br/>" +
				"quis nostrud exercitation ullamco laboris<br/> nisi ut aliquip ex ea commodo<br/>" +
				"consequat. Duis aute irure dolor in reprehenderit<br/> in voluptate velit esse<br/>" +
				"cillum dolore eu fugiat nulla pariatur<br/>. Excepteur sint occaecat cupidatat non<br/>" +
				"proident, sunt in culpa qui officia deserunt<br/> mollit anim id est laborum.</p>"
		break;
		case 3:
			conteudo = "<p>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit, sed do eiusmod<br/>" +
				"tempor incididunt ut labore <br/>et dolore magna aliqua. Ut enim ad minim veniam,<br/>" +
				"quis nostrud exercitation ullamco laboris<br/> nisi ut aliquip ex ea commodo<br/>" +
				"consequat. Duis aute irure dolor in reprehenderit<br/> in voluptate velit esse<br/>" +
				"cillum dolore eu fugiat nulla pariatur<br/>. Excepteur sint occaecat cupidatat non<br/>" +
				"proident, sunt in culpa qui officia deserunt<br/> mollit anim id est laborum.</p>"
		break;
	}
	conteudoRevisao = createSpan(conteudo);
	conteudoRevisao.position(35*proporcaoTela,proporcaoTelaH*10);
	conteudoRevisao.addClass('ConteudoRevisao');
}