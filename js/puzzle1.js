var cenario,objeto1,objeto2,objeto3,objeto4,objeto5,objeto6,objeto7,objeto8,objeto9,objeto10,objeto11,objeto12;
var camada01,camada02,camada03,camada04,camada05;
var layer01,layer02,layer03,layer04,layer05;
var item01,item02,item03,item04,item05,item06,item07,item08,item09,item10,item11,item12;
var escala,escala2;
var itens, listaItens;
var caixa,imgCaixa;
var imagemGratulon;
function retornaEscala(resolucao){
	let decremento = resolucao - 14*proporcaoTela;
	return decremento/1920;
}

function checaMovimentacao(item){
	if(mouseIsPressed){
			if(ponteiro.overlap(item)){
				caixa.visible = true;
				if(!item.bloqueado){
					item.segurando = true;
					item.position.x = mouseX;
					item.position.y = mouseY;
					item.depth = 1000;
					for(let i=0; i<itens.length; i++){
						if(!itens[i].segurando){
							itens[i].bloqueado = true;
						}
					}
				}
			}
	}
	else{
		caixa.visible = false;
		for(let i=0; i<itens.length; i++){
			if(itens[i].segurando){
				itens[i].segurando = false;
			}
			else{
				itens[i].bloqueado = false;
			}
			itens[i].depth = 1;
		}

	}
}
function checaColisao(sprite){
	if(sprite.segurando){
			if(caixa.overlap(sprite)){
				sprite.remove();
			}
		}
}
function iniciaPuzzleUm(){
	removeElements();
	escala = retornaEscala(width);
	criaObjetos();
}
function desenhadorPuzzleUm(){
	clear(); //limpa a tela
	image(cenario,proporcaoTela*14,proporcaoTelaH*6,proporcaoTela*83,proporcaoTelaH*81);
	drawSprites(); // desenha os sprites na tela
	for(let i=0; i<itens.length; i++){
		checaMovimentacao(itens[i]);
		checaColisao(itens[i]);
	}
	desenhaPalavras();
	if(itens.length<1){
		clear();
		// textSize(70);
		// text("GRATULOJN!",width/2,height/2);
		background(178,255,154);
		image(imagemGratulon,450,150);
	}
}
function criaObjetos(){
	itens = new Group();
	item01 = createSprite(proporcaoTela*75,proporcaoTelaH*28);
	item01.addImage("padrao",objeto1);
	item01.scale = escala;
	item01.bloqueado = false;
	item01.segurando = false;
	itens.add(item01);
	item02 = createSprite(proporcaoTela*40,proporcaoTelaH*48);
	item02.addImage("padrao",objeto2);
	item02.scale = escala;
	item02.bloqueado = false;
	item02.segurando = false;
	itens.add(item02);
	item03 = createSprite(proporcaoTela*20,proporcaoTelaH*30);
	item03.addImage("padrao",objeto3);
	item03.scale = escala;
	item03.bloqueado = false;
	item03.segurando = false;	
	itens.add(item03);
	item04 = createSprite(proporcaoTela*70,proporcaoTelaH*20);
	item04.addImage("padrao",objeto4);
	item04.scale = escala;
	item04.bloqueado = false;
	item04.segurando = false;
	itens.add(item04);
	item05 = createSprite(proporcaoTela*70,proporcaoTelaH*59);
	item05.addImage("padrao",objeto5);
	item05.scale = escala;
	item05.bloqueado = false;
	item05.segurando = false;
	itens.add(item05);
	item06 = createSprite(proporcaoTela*92,proporcaoTelaH*25);
	item06.addImage("padrao",objeto6);
	item06.scale = escala;
	item06.bloqueado = false;
	item06.segurando = false;
	itens.add(item06);
	item07 = createSprite(proporcaoTela*22,proporcaoTelaH*11);
	item07.addImage("padrao",objeto7);
	item07.scale = escala;
	item07.bloqueado = false;
	item07.segurando = false;
	itens.add(item07);
	item08 = createSprite(proporcaoTela*53,proporcaoTelaH*59);
	item08.addImage("padrao",objeto8);
	item08.scale = escala;
	item08.bloqueado = false;
	item08.segurando = false;
	itens.add(item08);
	item09 = createSprite(proporcaoTela*16,proporcaoTelaH*55);
	item09.addImage("padrao",objeto9);
	item09.scale = escala;
	item09.bloqueado = false;
	item09.segurando = false;
	itens.add(item09);
	item10 = createSprite(proporcaoTela*48,proporcaoTelaH*12);
	item10.addImage("padrao",objeto10);
	item10.scale = escala;
	item10.bloqueado = false;
	item10.segurando = false;
	itens.add(item10);
	item11 = createSprite(proporcaoTela*32,proporcaoTelaH*62);
	item11.addImage("padrao",objeto11);
	item11.scale = escala;
	item11.bloqueado = false;
	item11.segurando = false;
	itens.add(item11);
	item12 = createSprite(proporcaoTela*80,proporcaoTelaH*78);
	item12.addImage("padrao",objeto12);
	item12.scale = escala;
	item12.bloqueado = false;
	item12.segurando = false;
	itens.add(item12);
	caixa = createSprite(proporcaoTela*55,proporcaoTelaH*80);
	caixa.addAnimation("padrao",imgCaixa);
	caixa.scale = escala/2;
	listaItens = createSprite(proporcaoTela*25,proporcaoTelaH*77);
	listaItens.addImage("padrao",imgLista);
	listaItens.scale = escala/2;
}
function desenhaPalavras(){
	textFont(fonteLista);
	textSize(proporcaoTela);
	if(!item01.removed)
		text("- Serpento",proporcaoTela*28,proporcaoTelaH*82);
	else
		text("-  ̶S̶e̶r̶p̶e̶n̶t̶o̶",proporcaoTela*28,proporcaoTelaH*82);

	if(!item02.removed)
		text("- Partio Ĉapelo",proporcaoTela*15,proporcaoTelaH*67);
	else
		text("-  ̶P̶a̶r̶t̶i̶o̶ ̶Ĉ̶a̶p̶e̶l̶o̶",proporcaoTela*15,proporcaoTelaH*67);

	if(!item03.removed)
		text("- Tasoj",proporcaoTela*23,proporcaoTelaH*81);
	else
		text("-  ̶T̶a̶s̶o̶j̶",proporcaoTela*23,proporcaoTelaH*81);

	if(!item04.removed)
		text("- Kuililaro",proporcaoTela*16,proporcaoTelaH*83);
	else
		text("-  ̶K̶u̶i̶l̶i̶l̶a̶r̶o̶",proporcaoTela*16,proporcaoTelaH*83);
	if(!item05.removed)
		text("- Konfeti",proporcaoTela*20,proporcaoTelaH*86);
	else
		text("-  ̶K̶o̶n̶f̶e̶t̶i̶",proporcaoTela*20,proporcaoTelaH*86);
	if(!item06.removed)
		text("- Tuko",proporcaoTela*27,proporcaoTelaH*86);
	else
		text("-   ̶T̶u̶k̶o̶",proporcaoTela*27,proporcaoTelaH*86);
	if(!item07.removed)
		text("- Broso",proporcaoTela*28,proporcaoTelaH*74);
	else
		text("-   ̶B̶r̶o̶s̶o̶",proporcaoTela*28,proporcaoTelaH*74);
	if(!item08.removed)
		text("- Sego",proporcaoTela*16,proporcaoTelaH*78);
	else
		text("-   ̶S̶e̶g̶o̶",proporcaoTela*16,proporcaoTelaH*78);
	if(!item09.removed)
		text("- Teleroj",proporcaoTela*27,proporcaoTelaH*78);
	else
		text("-   ̶T̶e̶l̶e̶r̶o̶j̶",proporcaoTela*27,proporcaoTelaH*78);
	if(!item10.removed)
		text("- Kordo",proporcaoTela*25,proporcaoTelaH*68);
	else
		text("-   ̶K̶o̶r̶d̶o̶",proporcaoTela*25,proporcaoTelaH*68);
	if(!item11.removed)
		text("- Inko",proporcaoTela*22,proporcaoTelaH*73);
	else
		text("-   ̶I̶n̶k̶o̶",proporcaoTela*22,proporcaoTelaH*73);
	if(!item12.removed)
		text("- Bustukoj",proporcaoTela*21,proporcaoTelaH*77);
	else
		text("-   ̶B̶u̶s̶t̶u̶k̶o̶j̶",proporcaoTela*21,proporcaoTelaH*77);
	
}