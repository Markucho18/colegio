let materias = []

function eliminar(){
    document.getElementById("materia").value = "";
    document.getElementById("docente").value = "";
    document.getElementById("curso").value = "";
    document.getElementById("horario").value = "";
    let notasForm = document.getElementsByClassName("nota");
    for( i = notasForm.length - 1; i > 0; i--){
        let nota = notasForm[i];
        nota.remove();
    }
    notasForm[0].value = "";
}

function agregarNota(){
    let divNotas = document.getElementById('divNotas');
    let nuevaNota = document.createElement("input");
    nuevaNota.classList.toggle("nota");
    divNotas.appendChild(nuevaNota);
    let nuevasNotas = document.getElementsByClassName("nota");
    for( i = 0; i < nuevasNotas.length; i++){
        let nuevoPlaceHolder = nuevasNotas[i];
        nuevoPlaceHolder.placeholder = "Nota" + (i + 1);
    }
}

function guardarDatos(){
    let datosForm = {
        materia: document.getElementById("materia").value,
        docente: document.getElementById("docente").value,
        curso: document.getElementById("curso").value,
        horario: document.getElementById("horario").value,
        notas: [],
        promedio: ""
    }
    let notasForm = document.getElementsByClassName("nota");
    for( i = 0; i < notasForm.length; i++){
        let nota = notasForm[i].value;
        datosForm.notas.push(nota)
    }
    materias.push(datosForm);
    calcPromedio();
    console.log(materias);
    crearTabla();
    borrarTabla();
    eliminar();
}

function calcPromedio(){
    materias.forEach((materia) => {
        let suma = materia.notas.reduce((acumulador, nota) =>{
            return acumulador + parseInt(nota);
        }, 0);
        let promedio = suma / materia.notas.length;
        materia.promedio = promedio;
    }, 0);
}

function crearTabla(){
    let tabla = document.getElementById("tabla");
    materias.forEach((materia, indice) =>{
        let nuevaFila = document.createElement("tr");
        let imagenBorrar = document.createElement("img")
        imagenBorrar.src = "./assets/borrar.png"
        imagenBorrar.classList.add("botonBorrarFila")
        for (let i = 0; i < 8; i++) {
            let nuevaCelda = document.createElement("td");
            nuevaFila.appendChild(nuevaCelda);
        }
        nuevaFila.children[0].textContent = indice + 1;
        nuevaFila.children[1].textContent = materia.materia;
        nuevaFila.children[2].textContent = materia.docente;
        nuevaFila.children[3].textContent = materia.curso;
        nuevaFila.children[4].textContent = materia.horario;
        nuevaFila.children[5].textContent = materia.notas;
        nuevaFila.children[6].textContent = materia.promedio;
        nuevaFila.children[7].appendChild(imagenBorrar);
        tabla.appendChild(nuevaFila);

        let botonesBorrarFila = document.querySelectorAll('.botonBorrarFila')
        botonesBorrarFila.forEach(boton =>{
            boton.addEventListener("click", borrarNota)
        })
    })
}

function borrarTabla(){
    let tabla = document.getElementById("tabla");
    let filas = tabla.getElementsByTagName('tr');
    for( let i = filas.length - 1; i > 0; i--){
        tabla.removeChild(filas[i]);
    }
}

function mostrarOcultar(){
    let formularioDiv = document.getElementById('formularioDiv');
    let tablaDiv = document.getElementById('tablaDiv');
    //SI SE MUESTRA EL FORMULARIO
    if (formularioDiv.classList.contains("formulario")){
        formularioDiv.classList.remove("formulario")
        formularioDiv.classList.toggle("displayNone");
        tablaDiv.classList.remove("displayNone");
        tablaDiv.classList.toggle("tablaDiv");
        crearTabla();
    }
    //SI SE MUESTRA LA TABLA
    else if (formularioDiv.classList.contains("displayNone")){
        tablaDiv.classList.remove("tablaDiv")
        tablaDiv.classList.toggle("displayNone");
        formularioDiv.classList.remove("displayNone")
        formularioDiv.classList.toggle("formulario");
        borrarTabla();
    }
}

function borrarNota(evento){
    let botonBorrarFila = evento.target;
    let celda = botonBorrarFila.parentNode;
    let row = celda.parentNode;

    let tabla = document.getElementById("tabla");
    let filas = tabla.getElementsByTagName("tr");
    let filasArray = [];
    for ( i = 1; i < filas.length; i++){
        filasArray.push(filas[i]);
    }
    console.log(filasArray)
    
    let indexOfRow = filasArray.indexOf(row);
    console.log(indexOfRow);

    tabla.removeChild(row);

    materias.splice(indexOfRow, 1);
    console.log(materias);
    borrarTabla();
    crearTabla();
}

function borrarTodasLasNotas(){
    materias = [];
    borrarTabla();
}










