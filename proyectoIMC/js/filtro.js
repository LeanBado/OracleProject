var inputFiltro = document.querySelector(".filtro-pacientes");

    inputFiltro.addEventListener("input", function(){
        var pacientes = document.querySelectorAll(".paciente");
            if(this.value.length > 0){

                for(var i = 0; i < pacientes.length; i++){
              
                    var paciente = pacientes[i]
                    var pacienteNombre = paciente.querySelector(".info-nombre");
                    var pacienteContent = pacienteNombre.textContent;
                    var expresion = new RegExp(this.value,"i");

                    if(!expresion.test(pacienteContent)){
                        paciente.classList.add("invisible");
                    }else{
                        paciente.classList.remove("invisible")
                    }
                }
            } else{
                for(var i = 0; i < pacientes.length; i++){
                    var paciente = pacientes[i]
                    paciente.classList.remove("invisible")
            }
        }
    })