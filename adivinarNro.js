
	function saltarLinea() {

		document.write("<br>");	
		document.write("<br>");	
		document.write("<br>");	

	}  

	function imprimir(frase) {

		document.write(frase);
		saltarLinea();

	}



	var intentos = parseInt(prompt("Ingrese la cantidad de intentos que quiera jugar"));
	var contador = 1;

	while (contador <= intentos){
		var numeroLanzado = parseInt(prompt("Ingrese un número entre 0-10"));
		var numeroPensado = Math.round(Math.random()*10);
		contador++;
		if (numeroPensado == numeroLanzado){

			imprimir("usted acertó en el intento: " + contador)
			break
		}

		else {

			imprimir("usted erró, el número pensado era " + numeroPensado)
		
		}
	}