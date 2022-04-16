var botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click", function(evento){
    evento.preventDefault();

    var form = document.querySelector("#form-boton");
    
    var nombre = form.nombre.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value

    var tBody = document.querySelector("#tabla-pacientes");

    var pacienteTr = document.createElement("tr");
    var nombreTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nombreTd.textContent = nombre;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculoImc(peso, altura);

    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    tBody.appendChild(pacienteTr);
})

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
        tdIMC.textContent = calculoImc(peso, altura);
    }
}

function calculoImc(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(1)
}