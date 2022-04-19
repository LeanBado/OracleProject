var botonBuscar = document.querySelector("#paciente-bdd");
    botonBuscar.addEventListener("click",function(){
        var request = new XMLHttpRequest;
        request.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
        request.send();
        request.addEventListener("load",function(){
            var base = request.responseText
            var baseArray = JSON.parse(base);
           baseArray.forEach(function(paciente){
            adicionarBddAlaTabla(paciente)
           })
        })
    })

function adicionarBddAlaTabla(paciente){
    var pacienteTr = creaPacienteTr(paciente);
    var tBody = document.querySelector("#tabla-pacientes");
    tBody.appendChild(pacienteTr);
}

function capturarDatosDeForm(form){
    //captura los datos (valores) que se ponen en los distintos forms y los asigna a la clase nombre, peso, altura y gordura dentro de un objeto: paciente
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculoImc(form.peso.value, form.altura.value)
    }
    return paciente;

}

function creaPacienteTr(paciente){

    //se crean los tds y un solo tr
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    var nombreTd = creaPacienteTd(paciente.nombre, "info-nombre");
    var pesoTd = creaPacienteTd(paciente.peso, "info-peso");
    var alturaTd = creaPacienteTd(paciente.altura, "info-altura");
    var gorduraTd = creaPacienteTd(paciente.gordura, "info-gordura");
    var imcTd = creaPacienteTd(paciente.imc, "info-imc");

 

    // en este grupo se le dice a pacienteTr que va a tener como herencia las etiquetas creadas con las variables puestas dentro del ()
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function creaPacienteTd(dato, clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    console.log(td);
    return td;

}