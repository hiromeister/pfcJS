const username = document.getElementById('username');
let userChoice = document.getElementById('userChoice');
const acceptedChoices = ["pierre","feuille","ciseaux"];
let isNotInAcceptedChoices = true;
let result = "";
let isStillPlaying = true;
let scoreUser = 0;
let scoreOrdi = 0;

// function jouer(){
// 		//On vérifie que l'utilisateur entre bien le bon choix

// 		while(isNotInAcceptedChoices){
// 		  for (let i = 0 ; i < acceptedChoices.length ; i++) {
// 			if(userChoice.value == acceptedChoices[i]){
// 				document.getElementById('userChoice').style.borderColor = 'green';
// 				isNotInAcceptedChoices = false;}
// 			// else {document.getElementById('userChoice').style.borderColor = 'red';}
// 			// }
// 		}
// 	}
function changeTexte() {
	// L'IA Fait son choix aléatoirement (pas super l'aléatoire mais ça marche...)
	var computerChoice = acceptedChoices[Math.random() * acceptedChoices.length | 0];
		//Je compare qui gagne
	if(computerChoice === userChoice.value){
		result = "Egalité";
		console.log( scoreUser, scoreOrdi);
	}else if (userChoice.value ==="pierre" && computerChoice === "ciseaux"  || userChoice.value === "ciseaux" && computerChoice === "feuille" || userChoice.value === "feuille" && computerChoice === "pierre"){
		result = "Gagné";
		scoreUser++;
		console.log( scoreUser, scoreOrdi);

	}else{
		result = "Perdu";
		scoreOrdi++;
		console.log( scoreUser, scoreOrdi);
	}

	document.getElementById('texte').innerHTML = 'Choix joueur : ' + document.getElementById('userChoice').value + ' Choix ordi : '+ computerChoice;
	document.getElementById('winnerPlace').innerHTML = result;
	document.getElementById('score').innerHTML = 'Score ' + username.value + ' ' + scoreUser + ' VS Computer ' + scoreOrdi;
	 
}

// 	isNotInAcceptedChoices = true;

// // 	//demander si l'utilisateur veut arrêter
// 	// if(confirm("mon choix "+ userChoice + " / Choix de l'ordi  " + computerChoice + " / Resultat : "+result + "\nVoulez-vous arrêter ?")){
// 	// 	isStillPlaying = false;
// 	// }
// var result = "lol";