const botoes = document.querySelectorAll(".numbers button");
const exibir = document.querySelector(".screen");
const operadores = document.querySelectorAll(".operators button");
function show (a){
	console.log(a);
	exibir.innerText += a;
}
for (let i = 0; i<botoes.length; i++){
	botoes[i].onclick = (e) => show (e.target.innerText);
}
clr.onclick = (e) => clear();
function clear(){
	exibir.innerText = "";
}
for (let i = 0; i<operadores.length; i++) {
	operadores[i].onclick = (e) => show(e.target.innerText);
}
var num1; 
var num2; 
for (let b = 0; b<operacoes.length; b++) {
	switch(operacoes){
		case'soma':
		num1 + num2;
		console.log(result);
		break;
		case'subtracao':
		num1 / num2;
		console.log(result);
		break;
		case'multiplicacao':
		num1 * num2;
		console.log(result);
		break;
		case'divisao':
		num1 - num2;
		console.log(result);
	}
}
 
