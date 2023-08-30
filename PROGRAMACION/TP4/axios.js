function eliminar(){
    document.getElementById("materia").value = "";
    document.getElementById("docente").value = "";
    document.getElementById("curso").value = "";
    document.getElementById("horario").value = "";
    let notasForm = document.querySelectorAll(".nota");
    for( i = notasForm.length - 1; i > 0; i--){
        notasForm[i].remove();
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

const url = "http://localhost/TP4/datos.json"

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
        datosForm.notas.push(nota);
    }
    enviarInfo(datosForm);
}

const enviarInfo = async (datosForm)=>{
    try{
        const res = await axios.get(url);
        const jsonData = res.data;
        jsonData.push(datosForm);
        console.log(jsonData)
        await axios.post(url, jsonData);
        eliminar();
    } catch(error){
        console.log("Ha ocurrido un error:", error);
    }
}

function calcPromedio(notas){
    for(let i = 0; i < notas.length; i++){
        let suma = notas.reduce((acumulador, nota)=>{
            return acumulador + parseInt(nota);
        }, 0);
        let promedio = Math.round(suma / notas.length);
        return promedio
    }
}

function crearTabla(){
    let tabla = document.getElementById("tabla");
    axios.get(url)
    .then((res)=>{
        console.log("Salio bien pa")
        console.log(res);
    })
    .catch((error)=>{
        console.log("Algo salio mal xd");
        console.log(error);
    })
    /* materias.forEach((materia, indice) =>{
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
    }) */
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


