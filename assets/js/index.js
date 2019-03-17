import {add, sub} from './add';
import './../css/main.scss';

const charButton = document.querySelector('.btn-pos');
const houseButton = document.querySelector('.btn-pos-2');
const charHead = document.querySelector('.character');
let backArrow;
let forward;

var link = 'https://anapioficeandfire.com/api/characters'

const htmlMain = 
	 `<div class="wrapper">
			<h2>A game of ice and fire</h2>
			<button class="btn btn-pos"><span>Characters</span></button>
			<img class ="hero-img" src="https://i.pinimg.com/564x/38/c6/dd/38c6dd280c4823c68113cca32f3ea0f0.jpg" width="360px" height="540px">
			<button class="btn btn-pos-2"><span>Houses</span></button>
		</div>`

function charButtonClick(e){
	// console.log(e);
	document.body.querySelector('.wrapper').innerHTML = "";
	document.body.querySelector('.character').innerHTML= 
	`	<div class="wrapper-2">
				<h3>Character Profile</h3>
				<div class="character-grid">
					<div class="character-image" id="one">
						<a href="#"><img src="https://goo.gl/yZfy2K" width="340px" height="442px" class="char-one"></a>
					</div>
					<div class="character-image" id="two">
						<a href="#"><img src="https://i.imgur.com/oQRjvmr.jpg" width="340px" height="442px" class="char-two"></a>
					</div>
					<div class="character-image" id="three">
						<a href="#"><img src="https://goo.gl/9HE3KE" width="340px" height="440px" class="char-three"></a>
					</div>
				</div>
				<a href="#"><div class="side-arrow"><i class="fas fa-angle-right"></i></div></a>
				<a href="#"><div class=""><i class="fas fa-long-arrow-alt-left return"></i></div></a>
			</div>`

		// backArrow = document.querySelector('.return');
		let charInfo = document.querySelector('.character-image')
}

function houseButtonClick(e){
	// console.log(e);
	document.body.querySelector('.wrapper').innerHTML = "";
	document.body.querySelector('.houses').innerHTML= 
	`		<div class="wrapper-3">
				<h3>The great houses of westeros</h3>
				<div class="character-grid">
					<div class="character-image">
						<a href="#" class="char-one"><img src="https://goo.gl/8p9G1P" width="340px" height="442px"></a>
					</div>
					<div class="character-image">
						<a href="#" class="char-three"><img src="https://goo.gl/cG3BGF" width="340px" height="440px"></a>
					</div>
					<div class="character-image">
						<a href="#" class="char-two"><img src="https://goo.gl/58BjuF" width="340px" height="442px"></a>
					</div>
				</div>
				<a href="#"><div class="side-arrow"><i class="fas fa-angle-right"></i></div></a>
				<a href="#"><div class=""><i class="fas fa-long-arrow-alt-left forward"></i></div></a>
			</div>`

		// forward = document.querySelector('.forward');
}

function goBack(e){
	if (e.target.classList.contains('return')){
	document.body.querySelector('.wrapper-2').innerHTML= "";
	document.body.querySelector('header').innerHTML = htmlMain;
	}
	else if (e.target.classList.contains('forward')){
	document.body.querySelector('.wrapper-3').innerHTML= "";
	document.body.querySelector('header').innerHTML = htmlMain;
	}
}

function charCard3(e){
	if(e.target.classList.contains('char-three')){
		document.body.querySelector('.wrapper-2').innerHTML = "";
		urlGenerator('1303', 'https://goo.gl/WzuoZu')
	}
}

function charCard2(e){
	if(e.target.classList.contains('char-two')){
		document.body.querySelector('.wrapper-2').innerHTML = "";
		urlGenerator('583', 'https://goo.gl/bhYi8j')
	}
}

function charCard1(e){
	if(e.target.classList.contains('char-one')){
		document.body.querySelector('.wrapper-2').innerHTML = "";
		urlGenerator('1052', 'https://goo.gl/r7MTVD')
	}
}

// Model function to display character
const urlGenerator = (charCode, imageURL) => {
	fetch(`https://anapioficeandfire.com/api/characters/${charCode}`).then(res => res.json()).then(data => {
		document.querySelector('.character-card').innerHTML = 
		`<div class="enclose">
			<div class="card-image">
				<img src="${imageURL}">
			</div>
			<div class="card-content">
				<span class="info">Name: ${data.name}</span>
				<span class="info">Gender: ${data.gender}</span>
				<span class="info">Culture: ${data.culture}</span>
				<span class="info">Born: ${data.born}</span>
				<span>Titles: ${data.titles}</span>
				<span>Aliases: ${data.aliases}</span>
				<span>Played By: ${data.playedBy}</span>
			</div>
		</div>`
	})
}

// Event Listeners
window.addEventListener('click', charCard3)
window.addEventListener('click', charCard1); 
window.addEventListener('click', charCard2);
window.addEventListener('click', goBack);
houseButton.addEventListener('click', houseButtonClick);
charButton.addEventListener('click', charButtonClick);