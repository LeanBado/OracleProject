var tablaGral = document.querySelector("#tabla-pacientes");
tablaGral.addEventListener("dblclick", function(eventoEliminar){
    eventoEliminar.target.parentNode.classList.add("borrar");
    setTimeout(function(){
        eventoEliminar.target.parentNode.remove();
    }, 400)
})
