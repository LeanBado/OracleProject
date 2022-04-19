var botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click", function(evento){
    evento.preventDefault();

    var form = document.querySelector("#form-boton"); // esta variable captura el form entero
    
    var nombre = form.nombre.value; //este grupo de variables capturan los valores que entran en los forms nombre, peso, altura y gordura
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value
    
    var tBody = document.querySelector("#tabla-pacientes"); //esta variable captura la etiqueta tbody con los tr y td que hay dentro

    if(nombre == ""){
        alert("TE FALTA INGRESAR UN DATO");
        return;
    }
    if(peso == ""){
        alert("TE FALTA INGRESAR UN DATO");
        return;
    }
    if(altura == ""){
        alert("TE FALTA INGRESAR UN DATO");
        return;
    }
    if(gordura == ""){
        alert("TE FALTA INGRESAR UN DATO");
        return;
    }
    if(peso < 0|| peso > 400){
        var pesoError = document.querySelector("#peso-error");
        pesoError.textContent = "esta agregando peso incorrecto";
        form.reset();
        pesoError.style.color = "#FF0000";
        return 
    }
    if(altura < 0 || altura > 3.0){
        var alturaError = document.querySelector("#altura-error");
        alturaError.textContent = "esta agregando altura incorrecta";
        form.reset();
        alturaError.style.color = "#FF0000";
        return;
    }

    var pacienteTr = document.createElement("tr"); //este grupo de variables crean las etiquetas tr y td
    pacienteTr.classList.add("paciente");               // en las que se van a agregar los nuevos pacientes que se incorporen
    var nombreTd = document.createElement("td");       
    nombreTd.classList.add("info-nombre");
    var pesoTd = document.createElement("td");
    pesoTd.classList.add("info-peso");
    var alturaTd = document.createElement("td");
    alturaTd.classList.add("info-altura");
    var gorduraTd = document.createElement("td");
    gorduraTd.classList.add("info-gordura");
    var imcTd = document.createElement("td");
    imcTd.classList.add("info-imc");

    nombreTd.textContent = nombre;// a las etiquetas creadas en el grupo de arriba se le agregan los valores ingresados en el form
    pesoTd.textContent = peso;      
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculoImc(peso, altura); // para agregarle un valor a la etiqueta "td" creada para imc se le pasa la funcion calculoImc(peso,altura)

    pacienteTr.appendChild(nombreTd); // en este grupo se le dice a pacienteTr que va a tener como herencia las etiquetas creadas con las variables
    pacienteTr.appendChild(pesoTd);     //puestas dentro del ()
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    tBody.appendChild(pacienteTr); //se le dice a tBody que va a tener como herencia a la etiqueta creada con la variable puesta dentro del ()

    form.reset();
})

var pacientes = document.querySelectorAll(".paciente");
for(var contador = 0; contador < pacientes.length; contador++){
    var paciente = pacientes[contador];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    pesoEsValido = true;
    alturaEsValida = true;

    if(peso < 0|| peso > 500){
        console.log("Peso incorrecto");
        tdIMC.textContent = "Peso incorrecto";
        paciente.style.background = "#00A884";
        pesoEsValido = false;
    }

    if(altura < 0 || altura > 3.0){
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

