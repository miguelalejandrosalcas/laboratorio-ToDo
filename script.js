let mostrarMensaje = document.getElementById('error');
let btnAgregar = document.getElementById('btn-agregar');
let contadorSpan = document.getElementById('contador-span');
let opcion = document.getElementById('categorias-lista');
let cuadroCategoria = document.getElementById('cuadro-categoria-nueva');
let nombreCategoria = document.getElementById('nombre-categoria');
let cuadroTexto = document.getElementById('cuadro-texto');
let spanError = document.getElementById('error');
let contenedorCard = document.getElementById('contenedor');
let botonLimpiar = document.querySelector('.btn-limpiar');


let opcionSeleccionada = opcion.value;
let txtOpcion = opcion.options[opcion.selectedIndex];

let contador = 0;
let contadorCardTarea = 1;
let tareas = [];

btnAgregar.addEventListener('click', function () {
    
    let opcion = "";
    if (cuadroTexto.value.trim() === "") {
        spanError.style.display = "block";
        spanError.style.color = "red";
    } 
    else {
        spanError.style.display = "none";
        // 1. Creamos la base de la tarjeta
        const nuevaCard = document.createElement('div');
        nuevaCard.classList.add('card');
        
        // 2. Inyectamos el HTML (incluyendo los nuevos botones)
        nuevaCard.innerHTML = `
        <div class="contenedor-card">
            <h3>Tarjeta #${contadorCardTarea}</h3>
            <h4>Nombre tarea: ${cuadroTexto.value}</h4>
            <h4>Nombre categoria: ${txtOpcion.text}</h4>
            <p>Controla esta tarjeta con los botones de abajo.</p>
            <div class="btn-contenedor">
            <button class="btn-card btn-hecho">Hecho</button> 
            <button class="btn-card btn-urgente">Urgente</button> 
            <button class="btn-card btn-eliminar">Eliminar</button>
            </div>
        </div>
        `;

        // 3. CAPTURAMOS LOS BOTONES INTERNOS ANTES DE INSERTAR LA CARD AL HTML
        // Usamos nuevaCard.querySelector en lugar de document.querySelector para buscar SOLO dentro de esta tarjeta
        const botonHecho = nuevaCard.querySelector('.btn-hecho');
        const botonUrgente = nuevaCard.querySelector('.btn-urgente');
        const botonEliminar = nuevaCard.querySelector('.btn-eliminar');
        const cardContenedor = nuevaCard.querySelector('.contenedor-card');
        //const botonLimpiar = nuevaCard.querySelector('.btn-limpiar');

        // botonLimpiar.addEventListener('click', () => {
        //     if (nuevaCard.style)
        //     nuevaCard.remove();
        // });
        botonLimpiar.style.display = "block";
        botonLimpiar.addEventListener('click', () => {
            if (activo === true){
                nuevaCard.remove();
            }
                
        });
        // Funcionalidad 1: Eliminar esta tarjeta específica
        botonEliminar.addEventListener('click', () => {
            let resultado = confirm("¿Estás seguro de eliminar la tarea?");
            if (resultado === true) {
                nuevaCard.remove();
                contador--;
                contadorSpan.innerText = contador;
            }
        });
        let activo = false;
        // Funcionalidad 2: Modificar el estilo visual de esta tarjeta
        botonHecho.addEventListener('click', () => {
            
            botonHecho.style.border= "2px solid #ff5722";
            botonHecho.style.backgroundColor = "#04f695";
            botonHecho.style.color = "white";
            cardContenedor.style.backgroundColor = "#00701a";
            contador--;
            contadorSpan.innerText = contador;
            botonUrgente.removeAttribute('style');
            activo = true;
            
        });

        botonUrgente.addEventListener('click', () => {
            botonUrgente.style.border= "2px solid #2261ff";
            botonUrgente.style.backgroundColor = "red";
            cardContenedor.style.backgroundColor = "#bd7b00";
            botonUrgente.style.color = "white";
            botonHecho.removeAttribute('style');
        });

        // 5. Finalmente, agregamos la tarjeta con sus funciones listas al contenedor
        contenedor.appendChild(nuevaCard);
        contadorCardTarea++;
        contador++;
        contadorSpan.innerText = contador;
    }
});



opcion.addEventListener('change', function () {
    // const valorSeleccionado = evento.target.value;
    let valorSeleccionado = opcion.options[opcion.selectedIndex];
    
    if (valorSeleccionado.value === "opcion5") {
        nombreCategoria.style.display = "block";
        cuadroCategoria.style.display = "block";
    } else {
        nombreCategoria.style.display = "none";
        cuadroCategoria.style.display = "none";
    }
});