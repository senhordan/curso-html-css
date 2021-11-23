let cont = 1

function popup(conteudo) {
	// console.log(get_element(conteudo))
	elemento = document.querySelector(conteudo)
	if (cont == 1) {
		elemento.style.fontSize = "1em"
		elemento.style.width = "405px"
		elemento.style.background = "gray"
		cont = 0
	} else {
		elemento.style.fontSize = "0em"
		elemento.style.width = "10px"
		elemento.style.background = "transparent"
		cont = 1

	}

	// elemento.style.fontSize = '0em'

	// if (elemento.style.fontSize = "0em") {

	// 	console.log("é 0em")
	// 	elemento.style.fontSize = "1em"

	// } 
	// else if (elemento.style.fontSize = "1em") {

	// 	console.log("é 1em")
	// 	elemento.style.fontSize = "0em"

	// }

}