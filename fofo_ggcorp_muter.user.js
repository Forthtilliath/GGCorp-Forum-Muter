// ==UserScript==
// @name           GGCorp Forum Muter
// @description    Permet de ne muter des joueurs sur le forum
// @include        http://forums.ggcorp.me/*
// @version        0.2

// ==/UserScript==

/******
 * 
 * Sauvegarde :
 * var mute_users = ['aaaaaa','bbbbbb','ccccccccc'];
 * 
 * 
 * Liste des joueurs à muter. Pour celà il faut modifier 
 * les valeurs aaaaaa par le nom que vous souhaitez
 * muter. 
 * 
 * Son nom (ou adresse email) doit être entre cotes (').
 * 
 * Il est possible de mettre plusieurs noms,
 * ceux ci devront être séparé par des virgule (,).
 * 
 * Par exemple, cela pourrait donner :
 * 
 * var mute_users = ['geckoleo62'];
 * 
 ******/

var mute_users = ['aaaaaa','bbbbbb','cccccc'];

var testElements = document.getElementsByClassName('authi');

var testDivs = Array.prototype.filter.call(testElements, function(testElement){
    return testElement.nodeName === 'DIV';
});

testDivs.forEach(function(y) { 
	
	var contenu_a = y.getElementsByTagName('a')[0].innerHTML;
	
	if( contenu_a != 'Afficher seulement les publications de l\'auteur' )
	{		
		for( var i = 0, c = mute_users.length; i < c; i++ ) {
			if( contenu_a == mute_users[i] ) {
				var node = y.parentNode;
				do{
					node = node.parentNode;
				} while(node.tagName != "TABLE");
				node.parentNode.remove();
			}
		}
	}
}); 
