'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log( 'In onLoad() function…');
	// Your JavaScript code goes here !
	//defineHeading1();
	//defineHeading2();
	//defineHeading3();
	defineHeading4();
	let p = document.getElementsByTagName("p");
	let p1 = p[0];
	let p2 = p[1];
	swapInnerHtml(p1,p2);
	dateAlter();

	let id = document.getElementById("paragh");
	id.addEventListener("click",function (){
		getNbDays();
	});

	window.setInterval(updateClock1, 1000);
	//updateClock2();

}

function defineHeading1(){
	let h1 = document.getElementById("title");
	return document.title = h1.innerHTML;
}

function defineHeading2(){
	let h2 = document.getElementsByTagName("h2");
	return document.title = h2[0].innerHTML;
}

function defineHeading3() {
	let h2 = document.getElementsByTagName("h2");
	if (h2.length === 0) {
		document.title = "Amlah Mohamed Reda";
	} else {
		document.title = h2[h2.length - 1].innerHTML;
	}
}

function defineHeading4() {
	let elements = document.querySelectorAll('.firstOrLast');
	if (elements.length === 0) {
		document.title = "Amlah Mohamed Reda";
	} else if(elements.length % 2 !== 0) {
		document.title = elements[elements.length - 1].innerHTML;
	}else{
		document.title = elements[0].innerHTML;
	}
}

function swapInnerHtml(p1,p2){
	let p3 = p1.innerHTML;
	p1.innerHTML = p2.innerHTML;
	p2.innerHTML = p3;
}

function dateAlter() {
	let date = new Date();
	let jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
	let mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
	let joursString = jours[date.getDay()];
	let moisString = mois[date.getMonth()];
	let jour = date.getDate();
	let annee = date.getFullYear();

	let nomArray = document.getElementsByTagName("meta");
	let nom = nomArray[1].content;
	document.getElementById("update-date").innerHTML = "Dernière modification : le " + joursString + " " + jour + " " + moisString + " " + annee + " par " + nom ;
}

function getNbDays() {
	let date = new Date();
	let annee = date.getFullYear();
	let mois = 6;
	let jour = 19;
	let dateModif = new Date(annee, mois, jour);
	let actuel = new Date();
	let calculDiff = dateModif - actuel;
	let calculDiffJours = Math.ceil(calculDiff / (1000 * 60 * 60 * 24));
	let remplacement = calculDiffJours > 1 ? "s" : ""; //ternaire
	document.getElementById("paragh").innerHTML = `Il reste ${calculDiffJours} jour${remplacement} avant le 19 juillet ${annee}.`;
}

function updateClock1() {
	const date = new Date();
	document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}


function updateClock2() {
	const date = new Date();
	document.getElementById("clock").innerHTML = date.toLocaleTimeString();
	setTimeout(updateClock2, 1000);
}

function updateGraphicClock(){
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const secondes = date.getSeconds();
	let hour1 = Math.floor(hours / 10);
	let hour2 = hours % 10;
	let minutes1 = Math.floor(minutes / 10);
	let minutes2 = minutes % 10;
	let secondes1 = Math.floor(secondes /10);
	let secondes2 = secondes % 10;

	document.getElementById("img0").src ="assets/images/"+hour1+".gif";
	document.getElementById("img1").src = "assets/images/"+hour2+".gif";
	document.getElementById("img2").src = "assets/images/"+minutes1+".gif";
	document.getElementById("img3").src = "assets/images/"+minutes2+".gif";
	document.getElementById("img4").src = "assets/images/"+secondes1+".gif";
	document.getElementById("img5").src = "assets/images/"+secondes2+".gif";


}
setInterval(updateGraphicClock,1000);





