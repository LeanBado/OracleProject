// los números secretos son al azar, estan dentro de un array, no se repiten ni sale el cero
function aleatorio(){
    return Math.round(Math.random()*10);
}

function sorteo(cantidad){
    var secreto = [];
    var contador = 1;
    while(contador <= cantidad){
        var numeroAleatorio = aleatorio();
        console.log(numeroAleatorio);
        var encontrado = false;
        if (numeroAleatorio != 0){
            for(var i = 0; i< secreto.length; i++){
                if(numeroAleatorio == secreto[i]){
                    encontrado = true;
                    break;
                } 
            }
            if (encontrado == false){
                secreto.push(numeroAleatorio);
                contador++;
            }
        }
    }return secreto;
}

var secreto = sorteo(4);
console.log(secreto);


var input = document.querySelector("input");
input.focus();

    function verificar(){
        var encontrar= false;
        for(var i = 0; i < secreto.length; i++){
            if (parseInt(input.value) == secreto[i]){
            alert ("usted acertó");
            encontrar = true;
            break;
        } 
    }

    if(encontrar == false){
      alert("usted erró");
}
}         

var button = document.querySelector("button");
button.onclick = verificar;
        
