// Cette fonction permet de mélanger aléatoirement le contenu d'un tableau
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	
	while (0 !== currentIndex) {
		
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	
	return array;
}


var board; 

function deal_cards(card_number) {
    // Créer un tableau vide nommé card_list
    let card_list = [];
  
    // Ajouter deux fois chaque carte à ce tableau
    for (let card_index = 0; card_index < card_number; card_index++) {
      card_list.push(`img/image${card_index}.png`);
      card_list.push(`img/image${card_index}.png`);
    }
    // Initialisation d'une variable probablement utile pour plus tard :
     // le nombre de cartes cachées restant sur le plateau
     remaining_cards = card_number;
  
    // On mélange les cartes
    shuffle(card_list);
  
    // On crée un tableau à deux dimensions pour le plateau
    board = new Array(2);
  
    // On remplit ce tableau avec les cartes mélangées
    // Parcours des lignes
    for (let row_index = 0; row_index < 2; row_index++) {
      board[row_index] = new Array(card_number);
      // Parcours des colonnes
      for (let col_index = 0; col_index < card_number; col_index++) {
        board[row_index][col_index] = card_list.pop();
        console.log(board[row_index][col_index]);
      }
    }
  }
  

