var proporcaoTela,proporcaoTelaH;
var opcaoInicial1, opcaoInicial2, opcaoInicial3, opcaoInicial4;
var opcaoCapitulos1,opcaoCapitulos2,opcaoCapitulos3,opcaoCapitulos4,opcaoCapitulosVoltar;
var opcaoAtividades1,opcaoAtividades2,opcaoAtividades3,opcaoAtividadesVoltar;
var opcaoPuzzle1, opcaoPuzzleVoltar;
var controladorPuzzle=0;
var imagemInicial;
var imagemCapitulos;
var imagemInstrucoes;
var imagemCartao,conteudoCartao;
var imagemFases1;
var imagemPuzzles,imagemRevisao;
var botaoRevisaoAvancar,botaoRevisaoVoltar,botaoRevisaoFechar,tituloRevisao, conteudoRevisao;
var imagemAtual;
var ponteiro, imgPonteiro1, imgPonteiro2;
var vetorDialogo,vetorImagens;
var molduraDialogo,botaoDialogo1,botaoDIalogo2,balaoDialogo1,balaoDialogo2;
var conteudoDialogo;
function preload(){
	imagemInstrucoes = loadImage("imagens/menu-instrucoes.png");
	imgCaixa = loadImage("imagens/caixa.png");
	cenario = loadImage("imagens/imagensPuzzle1/cenario1.png");
	camada01 = loadImage("imagens/imagensPuzzle1/camada01.png");
	camada02 = loadImage("imagens/imagensPuzzle1/camada02.png");
	camada03 = loadImage("imagens/imagensPuzzle1/camada03.png");
	camada04 = loadImage("imagens/imagensPuzzle1/camada04.png");
	camada05 = loadImage("imagens/imagensPuzzle1/camada05.png");
	objeto1 = loadImage("imagens/imagensPuzzle1/item01.png");
	objeto2 = loadImage("imagens/imagensPuzzle1/item02.png");
	objeto3 = loadImage("imagens/imagensPuzzle1/item03.png");
	objeto4 = loadImage("imagens/imagensPuzzle1/item04.png");
	objeto5 = loadImage("imagens/imagensPuzzle1/item05.png");
	objeto6 = loadImage("imagens/imagensPuzzle1/item06.png");
	objeto7 = loadImage("imagens/imagensPuzzle1/item07.png");
	objeto8 = loadImage("imagens/imagensPuzzle1/item08.png");
	objeto9 = loadImage("imagens/imagensPuzzle1/item09.png");
	objeto10 = loadImage("imagens/imagensPuzzle1/item10.png");
	objeto11 = loadImage("imagens/imagensPuzzle1/item11.png");
	objeto12 = loadImage("imagens/imagensPuzzle1/item12.png");
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
	opcaoAtividades1.mousePressed(dialogoAtividade1);
	opcaoAtividades2.mousePressed(dialogoAtividade2);
	opcaoAtividades3.mousePressed(dialogoAtividade3);
	opcaoAtividades1.mouseOver(balaoAtividade1);
	opcaoAtividades2.mouseOver(balaoAtividade2);
	opcaoAtividades3.mouseOver(balaoAtividade3);
	opcaoAtividades1.mouseOut(balaoEncerrador);
	opcaoAtividades2.mouseOut(balaoEncerrador);
	opcaoAtividades3.mouseOut(balaoEncerrador);
	opcaoAtividadesVoltar.mousePressed(interfaceCapitulos);

}
function balaoAtividade1(){
	let conteudo;
	imagemCartao = createImg("imagens/cartao-informativo-fase1.png");
	imagemCartao.style("width",proporcaoTela*30+"px");
	imagemCartao.style("height",proporcaoTelaH*40+"px");
	conteudo = "<p>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit, sed do eiusmod<br/>" +
	"tempor incididunt ut labore <br/>et dolore magna aliqua. Ut enim ad minim veniam,<br/>" +
	"quis nostrud exercitation ullamco laboris<br/> nisi ut aliquip ex ea commodo</p>";
	imagemCartao.position(proporcaoTela*30,proporcaoTelaH*26);
	conteudoCartao = createSpan(conteudo);
	conteudoCartao.position(proporcaoTela*33,proporcaoTelaH*36);
	conteudoCartao.addClass("conteudoBalao");
}
function balaoAtividade2(){
	let conteudo;
	imagemCartao = createImg("imagens/cartao-informativo-fase2.png");
	imagemCartao.style("width",proporcaoTela*30+"px");
	imagemCartao.style("height",proporcaoTelaH*40+"px");
	conteudo = "<p>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit, sed do eiusmod<br/>" +
	"tempor incididunt ut labore <br/>et dolore magna aliqua. Ut enim ad minim veniam,<br/>" +
	"quis nostrud exercitation ullamco laboris<br/> nisi ut aliquip ex ea commodo</p>";
	imagemCartao.position(proporcaoTela*61,proporcaoTelaH*-3);
	conteudoCartao = createSpan(conteudo);
	conteudoCartao.position(proporcaoTela*64,proporcaoTelaH*2);
	conteudoCartao.addClass("conteudoBalao");
}
function balaoAtividade3(){
	let conteudo;
	imagemCartao = createImg("imagens/cartao-informativo-fase3.png");
	imagemCartao.style("width",proporcaoTela*30+"px");
	imagemCartao.style("height",proporcaoTelaH*40+"px");
	conteudo = "<p>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit, sed do eiusmod<br/>" +
	"tempor incididunt ut labore <br/>et dolore magna aliqua. Ut enim ad minim veniam,<br/>" +
	"quis nostrud exercitation ullamco laboris<br/> nisi ut aliquip ex ea commodo</p>";
	imagemCartao.position(proporcaoTela*45,proporcaoTelaH*20);
	conteudoCartao = createSpan(conteudo);
	conteudoCartao.position(proporcaoTela*49,proporcaoTelaH*22);
	conteudoCartao.addClass("conteudoBalao");
}
function balaoEncerrador(){
	imagemCartao.remove();
	conteudoCartao.remove();
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
function dialogoAtividade1(){
	removeElements();
	background(0);
	vetorDialogo=["Do i wanna know", "If this feeling flows both ways", "crawling back to you", "never thought of calling when you had a few", "cause i always do"];
	vetorImagens=["imagens/imagensPuzzle1/camada01.png","imagens/imagensPuzzle1/camada02.png","imagens/imagensPuzzle1/camada03.png","imagens/imagensPuzzle1/camada04.png"];
	let controladorDialogo=0;
	var texto = vetorDialogo[controladorDialogo];
	molduraDialogo = createImg("imagens/dialogos/moldura-novel.png");
	molduraDialogo.style('width',width+'px');
	molduraDialogo.style('height',height+'px');
	molduraDialogo.position(0,0);
	var imagemDialogo = createImg(vetorImagens[controladorDialogo]); 
	imagemDialogo.position(proporcaoTela*14,proporcaoTelaH*12);
	imagemDialogo.style("width",proporcaoTela+"px");
	imagemDialogo.style("height",proporcaoTelaH+"px"); 
	balaoDialogo1 = createImg("imagens/dialogos/balao-novel1.png");
	balaoDialogo1.position(proporcaoTela*25,proporcaoTelaH*52);
	balaoDialogo1.style("width",proporcaoTela*60+"px");
	balaoDialogo1.style("height",proporcaoTelaH*35+"px");
	balaoDialogo2 = createImg("imagens/dialogos/balao-novel2.png");
	balaoDialogo2.hide();
	conteudoDialogo = createSpan(texto);
	conteudoDialogo.position(proporcaoTela*35,proporcaoTelaH*54);
	conteudoDialogo.addClass('conteudoDialogo');
	function incrementaDialogo(){
		controladorDialogo++;
		conteudoDialogo.remove();
		if(controladorDialogo == 2 || controladorDialogo == 3 || controladorDialogo == 5){
			imagemDialogo.remove();
			imagemDialogo = createImg(vetorImagens[controladorDialogo]);
			imagemDialogo.position(proporcaoTela*14,proporcaoTelaH*12);
			imagemDialogo.style("width",proporcaoTela*18+"px");
			imagemDialogo.style("height",proporcaoTelaH*20+"px");  
			balaoDialogo1.remove();
			balaoDialogo2.remove();
			balaoDialogo1 = createImg("imagens/dialogos/balao-novel1.png");
			balaoDialogo1.position(proporcaoTela*25,proporcaoTelaH*52);
			balaoDialogo1.style("width",proporcaoTela*60+"px");
			balaoDialogo1.style("height",proporcaoTelaH*35+"px");
		}
		else if(controladorDialogo==1 || controladorDialogo == 4 || controladorDialogo == 6){
			imagemDialogo.remove();
			imagemDialogo = createImg(vetorImagens[controladorDialogo]);
			imagemDialogo.position(proporcaoTela*14,proporcaoTelaH*12);
			imagemDialogo.style("width",proporcaoTela*18+"px");
			imagemDialogo.style("height",proporcaoTelaH*20+"px"); 
			balaoDialogo2.remove();
			balaoDialogo1.remove();
			balaoDialogo2 = createImg("imagens/dialogos/balao-novel2.png");
			balaoDialogo2.position(proporcaoTela*25,proporcaoTelaH*52);
			balaoDialogo2.style("width",proporcaoTela*60+"px");
			balaoDialogo2.style("height",proporcaoTelaH*35+"px");
		}
		texto = vetorDialogo[controladorDialogo];
		conteudoDialogo = createSpan(texto);
		conteudoDialogo.position(proporcaoTela*35,proporcaoTelaH*54);
		conteudoDialogo.addClass('conteudoDialogo');
		if(controladorDialogo==vetorDialogo.length)
			iniciadorPuzzleUm();
	}
	function decrementaDialogo(){
		if(controladorDialogo>0)
			controladorDialogo--;
		conteudoDialogo.remove();
		if(controladorDialogo == 1 || controladorDialogo == 3 || controladorDialogo == 5){
			imagemDialogo.remove();
			imagemDialogo = createImg(vetorImagens[controladorDialogo]);
			imagemDialogo.position(proporcaoTela*14,proporcaoTelaH*12);
			imagemDialogo.style("width",proporcaoTela*18+"px");
			imagemDialogo.style("height",proporcaoTelaH*20+"px"); 
			balaoDialogo2.remove();
			balaoDialogo1 = createImg("imagens/dialogos/balao-novel1.png");
			balaoDialogo1.position(proporcaoTela*25,proporcaoTelaH*52);
			balaoDialogo1.style("width",proporcaoTela*60+"px");
			balaoDialogo1.style("height",proporcaoTelaH*35+"px");
		}
		else if(controladorDialogo==1 || controladorDialogo == 4 || controladorDialogo == 6){
			imagemDialogo.remove();
			imagemDialogo = createImg(vetorImagens[controladorDialogo]);
			imagemDialogo.position(proporcaoTela*14,proporcaoTelaH*12);
			imagemDialogo.style("width",proporcaoTela*18+"px");
			imagemDialogo.style("height",proporcaoTelaH*20+"px"); 
			balaoDialogo1.remove();
			balaoDialogo2 = createImg("imagens/dialogos/balao-novel1.png");
			balaoDialogo2.position(proporcaoTela*25,proporcaoTelaH*52);
			balaoDialogo2.style("width",proporcaoTela*60+"px");
			balaoDialogo2.style("height",proporcaoTelaH*35+"px");
		}
		texto = vetorDialogo[controladorDialogo];
		conteudoDialogo = createSpan(texto);
		conteudoDialogo.position(proporcaoTela*35,proporcaoTelaH*54);
		conteudoDialogo.addClass('conteudoDialogo');
	}
	botaoDialogo1 = createButton('<img src="imagens/dialogos/botao-novel1.png" width="'+ 2.5*proporcaoTela + 'px" height="' + 3*proporcaoTelaH +'px" >');
	botaoDialogo2 = createButton('<img src="imagens/dialogos/botao-novel2.png" width="'+ 2.5*proporcaoTela + 'px" height="' + 3*proporcaoTelaH +'px" >');
	botaoDialogo1.mousePressed(incrementaDialogo);
	botaoDialogo2.mousePressed(decrementaDialogo);
	botaoDialogo1.position(proporcaoTela*67,proporcaoTelaH*90);
	botaoDialogo2.position(proporcaoTela*58,proporcaoTelaH*90);
	botaoDialogo1.style('width',proporcaoTela*5+'px');
	botaoDialogo1.style('height',proporcaoTelaH*5+'px');
	botaoDialogo2.style('width',proporcaoTela*5+'px');
	botaoDialogo2.style('height',proporcaoTelaH*5+'px');
	botaoDialogo1.addClass('botaoDialogo1');
	botaoDialogo2.addClass('botaoDialogo2');
}
function dialogoAtividade2(){
	removeElements();
	background(0);
	vetorDialogo=["Do i wanna know", "If this feeling flows both ways", "crawling back to you", "never thought of calling when you had a few", "cause i always do"];
	vetorImagens=["imagens/imagensPuzzle1/camada01.png","imagens/imagensPuzzle1/camada02.png","imagens/imagensPuzzle1/camada03.png","imagens/imagensPuzzle1/camada04.png"];
	let controladorDialogo=0;
	var texto = vetorDialogo[controladorDialogo];
	molduraDialogo = createImg("imagens/dialogos/moldura-novel.png");
	molduraDialogo.style('width',width+'px');
	molduraDialogo.style('height',height+'px');
	molduraDialogo.position(0,0);
	var imagemDialogo = createImg(vetorImagens[controladorDialogo]); 
	imagemDialogo.position(proporcaoTela*14,proporcaoTelaH*12);
	imagemDialogo.style("width",proporcaoTela+"px");
	imagemDialogo.style("height",proporcaoTelaH+"px"); 
	balaoDialogo1 = createImg("imagens/dialogos/balao-novel1.png");
	balaoDialogo1.position(proporcaoTela*25,proporcaoTelaH*52);
	balaoDialogo1.style("width",proporcaoTela*60+"px");
	balaoDialogo1.style("height",proporcaoTelaH*35+"px");
	balaoDialogo2 = createImg("imagens/dialogos/balao-novel2.png");
	balaoDialogo2.hide();
	conteudoDialogo = createSpan(texto);
	conteudoDialogo.position(proporcaoTela*35,proporcaoTelaH*54);
	conteudoDialogo.addClass('conteudoDialogo');
	function incrementaDialogo(){
		controladorDialogo++;
		conteudoDialogo.remove();
		if(controladorDialogo == 2 || controladorDialogo == 3 || controladorDialogo == 5){
			imagemDialogo.remove();
			imagemDialogo = createImg(vetorImagens[controladorDialogo]);
			imagemDialogo.position(proporcaoTela*14,proporcaoTelaH*12);
			imagemDialogo.style("width",proporcaoTela*18+"px");
			imagemDialogo.style("height",proporcaoTelaH*20+"px");  
			balaoDialogo1.remove();
			balaoDialogo2.remove();
			balaoDialogo1 = createImg("imagens/dialogos/balao-novel1.png");
			balaoDialogo1.position(proporcaoTela*25,proporcaoTelaH*52);
			balaoDialogo1.style("width",proporcaoTela*60+"px");
			balaoDialogo1.style("height",proporcaoTelaH*35+"px");
		}
		else if(controladorDialogo==1 || controladorDialogo == 4 || controladorDialogo == 6){
			imagemDialogo.remove();
			imagemDialogo = createImg(vetorImagens[controladorDialogo]);
			imagemDialogo.position(proporcaoTela*14,proporcaoTelaH*12);
			imagemDialogo.style("width",proporcaoTela*18+"px");
			imagemDialogo.style("height",proporcaoTelaH*20+"px"); 
			balaoDialogo2.remove();
			balaoDialogo1.remove();
			balaoDialogo2 = createImg("imagens/dialogos/balao-novel2.png");
			balaoDialogo2.position(proporcaoTela*25,proporcaoTelaH*52);
			balaoDialogo2.style("width",proporcaoTela*60+"px");
			balaoDialogo2.style("height",proporcaoTelaH*35+"px");
		}
		texto = vetorDialogo[controladorDialogo];
		conteudoDialogo = createSpan(texto);
		conteudoDialogo.position(proporcaoTela*35,proporcaoTelaH*54);
		conteudoDialogo.addClass('conteudoDialogo');
		if(controladorDialogo==vetorDialogo.length)
			iniciadorPuzzleDois();
	}
	function decrementaDialogo(){
		if(controladorDialogo>0)
			controladorDialogo--;
		conteudoDialogo.remove();
		if(controladorDialogo == 1 || controladorDialogo == 3 || controladorDialogo == 5){
			imagemDialogo.remove();
			imagemDialogo = createImg(vetorImagens[controladorDialogo]);
			imagemDialogo.position(proporcaoTela*14,proporcaoTelaH*12);
			imagemDialogo.style("width",proporcaoTela*18+"px");
			imagemDialogo.style("height",proporcaoTelaH*20+"px"); 
			balaoDialogo2.remove();
			balaoDialogo1 = createImg("imagens/dialogos/balao-novel1.png");
			balaoDialogo1.position(proporcaoTela*25,proporcaoTelaH*52);
			balaoDialogo1.style("width",proporcaoTela*60+"px");
			balaoDialogo1.style("height",proporcaoTelaH*35+"px");
		}
		else if(controladorDialogo==1 || controladorDialogo == 4 || controladorDialogo == 6){
			imagemDialogo.remove();
			imagemDialogo = createImg(vetorImagens[controladorDialogo]);
			imagemDialogo.position(proporcaoTela*14,proporcaoTelaH*12);
			imagemDialogo.style("width",proporcaoTela*18+"px");
			imagemDialogo.style("height",proporcaoTelaH*20+"px"); 
			balaoDialogo1.remove();
			balaoDialogo2 = createImg("imagens/dialogos/balao-novel1.png");
			balaoDialogo2.position(proporcaoTela*25,proporcaoTelaH*52);
			balaoDialogo2.style("width",proporcaoTela*60+"px");
			balaoDialogo2.style("height",proporcaoTelaH*35+"px");
		}
		texto = vetorDialogo[controladorDialogo];
		conteudoDialogo = createSpan(texto);
		conteudoDialogo.position(proporcaoTela*35,proporcaoTelaH*54);
		conteudoDialogo.addClass('conteudoDialogo');
	}
	botaoDialogo1 = createButton('<img src="imagens/dialogos/botao-novel1.png" width="'+ 2.5*proporcaoTela + 'px" height="' + 3*proporcaoTelaH +'px" >');
	botaoDialogo2 = createButton('<img src="imagens/dialogos/botao-novel2.png" width="'+ 2.5*proporcaoTela + 'px" height="' + 3*proporcaoTelaH +'px" >');
	botaoDialogo1.mousePressed(incrementaDialogo);
	botaoDialogo2.mousePressed(decrementaDialogo);
	botaoDialogo1.position(proporcaoTela*67,proporcaoTelaH*90);
	botaoDialogo2.position(proporcaoTela*58,proporcaoTelaH*90);
	botaoDialogo1.style('width',proporcaoTela*5+'px');
	botaoDialogo1.style('height',proporcaoTelaH*5+'px');
	botaoDialogo2.style('width',proporcaoTela*5+'px');
	botaoDialogo2.style('height',proporcaoTelaH*5+'px');
	botaoDialogo1.addClass('botaoDialogo1');
	botaoDialogo2.addClass('botaoDialogo2');
}
function dialogoAtividade3(){
	removeElements();
	background(0);
	vetorDialogo=["Do i wanna know", "If this feeling flows both ways", "crawling back to you", "never thought of calling when you had a few", "cause i always do"];
	vetorImagens=["imagens/imagensPuzzle1/camada01.png","imagens/imagensPuzzle1/camada02.png","imagens/imagensPuzzle1/camada03.png","imagens/imagensPuzzle1/camada04.png"];
	let controladorDialogo=0;
	var texto = vetorDialogo[controladorDialogo];
	molduraDialogo = createImg("imagens/dialogos/moldura-novel.png");
	molduraDialogo.style('width',width+'px');
	molduraDialogo.style('height',height+'px');
	molduraDialogo.position(0,0);
	var imagemDialogo = createImg(vetorImagens[controladorDialogo]); 
	imagemDialogo.position(proporcaoTela*14,proporcaoTelaH*12);
	imagemDialogo.style("width",proporcaoTela+"px");
	imagemDialogo.style("height",proporcaoTelaH+"px"); 
	balaoDialogo1 = createImg("imagens/dialogos/balao-novel1.png");
	balaoDialogo1.position(proporcaoTela*25,proporcaoTelaH*52);
	balaoDialogo1.style("width",proporcaoTela*60+"px");
	balaoDialogo1.style("height",proporcaoTelaH*35+"px");
	balaoDialogo2 = createImg("imagens/dialogos/balao-novel2.png");
	balaoDialogo2.hide();
	conteudoDialogo = createSpan(texto);
	conteudoDialogo.position(proporcaoTela*35,proporcaoTelaH*54);
	conteudoDialogo.addClass('conteudoDialogo');
	function incrementaDialogo(){
		controladorDialogo++;
		conteudoDialogo.remove();
		if(controladorDialogo == 2 || controladorDialogo == 3 || controladorDialogo == 5){
			imagemDialogo.remove();
			imagemDialogo = createImg(vetorImagens[controladorDialogo]);
			imagemDialogo.position(proporcaoTela*14,proporcaoTelaH*12);
			imagemDialogo.style("width",proporcaoTela*18+"px");
			imagemDialogo.style("height",proporcaoTelaH*20+"px");  
			balaoDialogo1.remove();
			balaoDialogo2.remove();
			balaoDialogo1 = createImg("imagens/dialogos/balao-novel1.png");
			balaoDialogo1.position(proporcaoTela*25,proporcaoTelaH*52);
			balaoDialogo1.style("width",proporcaoTela*60+"px");
			balaoDialogo1.style("height",proporcaoTelaH*35+"px");
		}
		else if(controladorDialogo==1 || controladorDialogo == 4 || controladorDialogo == 6){
			imagemDialogo.remove();
			imagemDialogo = createImg(vetorImagens[controladorDialogo]);
			imagemDialogo.position(proporcaoTela*14,proporcaoTelaH*12);
			imagemDialogo.style("width",proporcaoTela*18+"px");
			imagemDialogo.style("height",proporcaoTelaH*20+"px"); 
			balaoDialogo2.remove();
			balaoDialogo1.remove();
			balaoDialogo2 = createImg("imagens/dialogos/balao-novel2.png");
			balaoDialogo2.position(proporcaoTela*25,proporcaoTelaH*52);
			balaoDialogo2.style("width",proporcaoTela*60+"px");
			balaoDialogo2.style("height",proporcaoTelaH*35+"px");
		}
		texto = vetorDialogo[controladorDialogo];
		conteudoDialogo = createSpan(texto);
		conteudoDialogo.position(proporcaoTela*35,proporcaoTelaH*54);
		conteudoDialogo.addClass('conteudoDialogo');
		if(controladorDialogo==vetorDialogo.length)
			iniciadorPuzzleTres();
	}
	function decrementaDialogo(){
		if(controladorDialogo>0)
			controladorDialogo--;
		conteudoDialogo.remove();
		if(controladorDialogo == 1 || controladorDialogo == 3 || controladorDialogo == 5){
			imagemDialogo.remove();
			imagemDialogo = createImg(vetorImagens[controladorDialogo]);
			imagemDialogo.position(proporcaoTela*14,proporcaoTelaH*12);
			imagemDialogo.style("width",proporcaoTela*18+"px");
			imagemDialogo.style("height",proporcaoTelaH*20+"px"); 
			balaoDialogo2.remove();
			balaoDialogo1 = createImg("imagens/dialogos/balao-novel1.png");
			balaoDialogo1.position(proporcaoTela*25,proporcaoTelaH*52);
			balaoDialogo1.style("width",proporcaoTela*60+"px");
			balaoDialogo1.style("height",proporcaoTelaH*35+"px");
		}
		else if(controladorDialogo==1 || controladorDialogo == 4 || controladorDialogo == 6){
			imagemDialogo.remove();
			imagemDialogo = createImg(vetorImagens[controladorDialogo]);
			imagemDialogo.position(proporcaoTela*14,proporcaoTelaH*12);
			imagemDialogo.style("width",proporcaoTela*18+"px");
			imagemDialogo.style("height",proporcaoTelaH*20+"px"); 
			balaoDialogo1.remove();
			balaoDialogo2 = createImg("imagens/dialogos/balao-novel1.png");
			balaoDialogo2.position(proporcaoTela*25,proporcaoTelaH*52);
			balaoDialogo2.style("width",proporcaoTela*60+"px");
			balaoDialogo2.style("height",proporcaoTelaH*35+"px");
		}
		texto = vetorDialogo[controladorDialogo];
		conteudoDialogo = createSpan(texto);
		conteudoDialogo.position(proporcaoTela*35,proporcaoTelaH*54);
		conteudoDialogo.addClass('conteudoDialogo');
	}
	botaoDialogo1 = createButton('<img src="imagens/dialogos/botao-novel1.png" width="'+ 2.5*proporcaoTela + 'px" height="' + 3*proporcaoTelaH +'px" >');
	botaoDialogo2 = createButton('<img src="imagens/dialogos/botao-novel2.png" width="'+ 2.5*proporcaoTela + 'px" height="' + 3*proporcaoTelaH +'px" >');
	botaoDialogo1.mousePressed(incrementaDialogo);
	botaoDialogo2.mousePressed(decrementaDialogo);
	botaoDialogo1.position(proporcaoTela*67,proporcaoTelaH*90);
	botaoDialogo2.position(proporcaoTela*58,proporcaoTelaH*90);
	botaoDialogo1.style('width',proporcaoTela*5+'px');
	botaoDialogo1.style('height',proporcaoTelaH*5+'px');
	botaoDialogo2.style('width',proporcaoTela*5+'px');
	botaoDialogo2.style('height',proporcaoTelaH*5+'px');
	botaoDialogo1.addClass('botaoDialogo1');
	botaoDialogo2.addClass('botaoDialogo2');
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