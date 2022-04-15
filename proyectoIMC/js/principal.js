var pacientes = document.querySelectorAll(".paciente");

for(var contador = 0; contador <pacientes.length; contador++){
    var paciente = pacientes[contador];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    pesoEsValido = true;
    alturaEsValida = true;

    if((peso < 0)||(peso > 1000)){
        console.log("Peso incorrecto");
        tdIMC.textContent = "Peso incorrecto";
        paciente.style.background = "#00A884";
        pesoEsValido = false;
    }

    if((altura < 0)||(altura > 3.0)){
        console.log("Peso incorrecto");
        tdIMC.textContent = "Altura incorrecta";
        paciente.style.background = "#00A884";
        alturaEsValida = false;
    }

    if(pesoEsValido && alturaEsValida){
        var imc = peso / (altura * altura);
        tdIMC.textContent = imc.toFixed(1);
    }
}
